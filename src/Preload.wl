BeginPackage["Notebook`Editor`SlidesTools`", {
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`",
    "JerryI`Misc`Events`Promise`",
    "JerryI`WLX`",
    "JerryI`WLX`Importer`",
    "Notebook`Editor`FrontendObject`",
    "Notebook`Editor`Kernel`FrontSubmitService`"
}];

Begin["`Private`"]

Internal`EXJSEvaluator; (* JS function *)


postProcess[string_String] := Module[{drawings = {}}, With[{p = Promise[], win = CurrentWindow[]},
    (* extract Excalidraw drawings *)
    drawings =  StringCases[string, RegularExpression["!!\\[.*\\]"] ];

    If[Length[drawings] > 0,
        Then[FrontFetchAsync[Internal`EXJSEvaluator[ StringDrop[#, 2] &/@ drawings ], "Window"->win], Function[transformed,
            EventFire[p, Resolve, StringReplace[string, (Rule @@ #)&/@Transpose[{drawings, StringJoin["\n<div class=\"text-center w-full\">", #, "</div>\n"] &/@ {transformed} // Flatten}] ] ];
        ] ];
    ,
        EventFire[p, Resolve, string];
    ];

    p
] ]

MTrimmer = Function[str, 
StringReplace[str, {
  RegularExpression["\\A([\\n|\\t|\\r| ]*)([\\w|:|\\$|#|\\-|\\[|\\]|!|\\*|_|\\/|.|\\d]?)"] :> If[StringLength["$2"]===0, "", "$1"<>"$2"],
  RegularExpression["([\\w|\\$|#|*|\\*|\\-|\\[|!|\\]|:|\\/|.|\\d]?)([\\r|\\n| |\\t]*)\\Z"] :> If[StringLength["$1"]===0, "", "$1"<>"$2"]
}]
];

Notebook`RevealEvaluator = Function[t, With[{hash = CreateUUID[]},
        Block[{Global`$EvaluationContext = Join[t["EvaluationContext"], <|"ResultCellHash" -> hash|>]},
            With[{result = ProcessString[t["Data"], "Localize"->False, "Trimmer"->MTrimmer]  // ReleaseHold},
                With[{string = If[ListQ[result], StringRiffle[Map[ToString, Select[result, (# =!= Null)&]], ""], ToString[result] ]},


                    Then[postProcess[string], Function[processed,
                        EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Result", <|"Data" -> processed, "Meta" -> Sequence["Display"->"slide", "Hash"->hash] |> ];
                        EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Finished", True];                  
                    ],
                    Function[processed,
                        EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Result", <|"Data" -> processed, "Meta" -> Sequence["Display"->"slide", "Hash"->hash] |> ];
                        EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Finished", True];                     
                    ] ];


                ];
            ];
        ];
] ];

System`DatasetWrapper;

ExpressionReplacements = {
    d_Dataset :> DatasetWrapper[d]
} // Quiet;



(*JerryI`WLX`Private`IdentityTransform[EventObject[assoc_]] := If[KeyExistsQ[assoc, "View"], CreateFrontEndObject[ assoc["View"]], EventObject[assoc] ]*)
EventObject /: MakeBoxes[EventObject[assoc_], WLXForm] := If[KeyExistsQ[assoc, "View"],
    With[{o = CreateFrontEndObject[assoc["View"] ]},
        MakeBoxes[o, WLXForm]
    ]
,
    EventObject[assoc]
]

JerryI`WLX`Private`IdentityTransform[x_] := ToBoxes[x /. ExpressionReplacements, WLXForm]

End[]

EndPackage[]



