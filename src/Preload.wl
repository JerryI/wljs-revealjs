BeginPackage["Notebook`Editor`SlidesTools`", {
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`",
    "JerryI`WLX`",
    "JerryI`WLX`Importer`"
}];

Begin["`Private`"]

MTrimmer = Function[str, 
StringReplace[str, {
  RegularExpression["\\A([\\n|\\t|\\r| ]*)([\\w|:|\\$|#|\\-|\\[|\\]|!|\\*|_|\\/|.|\\d]?)"] :> If[StringLength["$2"]===0, "", "$1"<>"$2"],
  RegularExpression["([\\w|\\$|#|*|\\*|\\-|\\[|!|\\]|:|\\/|.|\\d]?)([\\r|\\n| |\\t]*)\\Z"] :> If[StringLength["$1"]===0, "", "$1"<>"$2"]
}]
];

Notebook`RevealEvaluator = Function[t,
            With[{result = ProcessString[t["Data"], "Localize"->False, "Trimmer"->MTrimmer]  // ReleaseHold},
                With[{string = If[ListQ[result], StringRiffle[Map[ToString, Select[result, (# =!= Null)&]], ""], ToString[result] ]},
                    EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Result", <|"Data" -> string, "Meta" -> Sequence["Display"->"slide"] |> ];
                    EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Finished", True];
                ];
            ];
];


ExpressionReplacements = {
    Graphics[opts__] :> Global`CreateFrontEndObject[Graphics[opts]], 
    Graphics3D[opts__] :> Global`CreateFrontEndObject[Graphics3D[opts]], 
    Image[opts__] :> Global`CreateFrontEndObject[Image[opts]]
};

JerryI`WLX`Private`IdentityTransform[EventObject[assoc_]] := If[KeyExistsQ[assoc, "view"], Global`CreateFrontEndObject[ assoc["view"]], EventObject[assoc] ]
JerryI`WLX`Private`IdentityTransform[x_] := x /. ExpressionReplacements

ListLinePlotly /: JerryI`WLX`Private`IdentityTransform[ListLinePlotly[args__]] := Global`CreateFrontEndObject[ListLinePlotly[args]]
ListPlotly /: JerryI`WLX`Private`IdentityTransform[ListPlotly[args__]] := Global`CreateFrontEndObject[ListPlotly[args]]

End[]

EndPackage[]



