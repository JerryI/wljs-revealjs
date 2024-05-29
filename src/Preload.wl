BeginPackage["Notebook`Editor`SlidesTools`", {
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`",
    "JerryI`WLX`",
    "JerryI`WLX`Importer`",
    "Notebook`Editor`FrontendObject`"
}];

Begin["`Private`"]

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
                    EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Result", <|"Data" -> string, "Meta" -> Sequence["Display"->"slide", "Hash"->hash] |> ];
                    EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Finished", True];
                ];
            ];
        ];
] ];

System`DatasetWrapper;
System`AudioWrapper;

ExpressionReplacements = {
    g2d_Graphics :> CreateFrontEndObject[g2d ], 
    g3d_Graphics3D :> CreateFrontEndObject[g3d ], 
    i_Image :> CreateFrontEndObject[i ],
    s_Sound :> CreateFrontEndObject[s ],
    s_Audio :> AudioWrapper[s],
    d_Dataset :> DatasetWrapper[d]
} // Quiet;


(*JerryI`WLX`Private`IdentityTransform[EventObject[assoc_]] := If[KeyExistsQ[assoc, "View"], CreateFrontEndObject[ assoc["View"]], EventObject[assoc] ]*)
EventObject /: MakeBoxes[EventObject[assoc_], WLXForm] := If[KeyExistsQ[assoc, "View"],
    With[{o = CreateFrontEndObject[assoc["View"]]},
        MakeBoxes[o, WLXForm]
    ]
,
    EventObject[assoc]
]

JerryI`WLX`Private`IdentityTransform[x_] := ToBoxes[x /. ExpressionReplacements, WLXForm]

End[]

EndPackage[]



