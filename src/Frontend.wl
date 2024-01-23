BeginPackage["Notebook`Editor`RevealProcessor`", {
    "JerryI`Notebook`", 
    "JerryI`Notebook`Evaluator`", 
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`"
}]

Begin["`Internal`"]

Q[t_Transaction] := (StringMatchQ[t["Data"], ".slide\n"~~___] )

rootFolder = $InputFileName // DirectoryName;


evaluator  = StandardEvaluator["Name" -> "RevealJS Evaluator", "InitKernel" -> init, "Pattern" -> (_?Q), "Priority"->(12)];

    StandardEvaluator`ReadyQ[evaluator, k_] := (
        If[! TrueQ[k["ReadyQ"] ] || ! TrueQ[k["ContainerReadyQ"] ],
            EventFire[t, "Error", "Kernel is not ready"];
            StandardEvaluator`Print[evaluator, "Kernel is not ready"];
            False
        ,

            With[{p = Import[FileNameJoin[{rootFolder, "Preload.wl"}], "String"]},
                Module[{monitor},
                
                    monitor["Start"] := With[{},
                        monitor["Spinner"] = Global`NotificationSpinner["Topic"->"Fetching WLX Packages", "Body"->"Please, wait"];
                        EventFire[k, monitor["Spinner"], Null];
                    ];

                    monitor["End"] := With[{},
                        EventFire[monitor["Spinner"]["Promise"], Resolve, Null];
                    ];

                    With[{cloned = EventClone[k]},
                        EventHandler[cloned, {
                            "Exit" -> Function[Null,
                                EventRemove[cloned];
                                monitor["End"];
                            ]
                        }];
                    ];

                    Kernel`Init[k,   ToExpression[p, InputForm]; , "Once"->True, "TrackingProgress" -> monitor];
                ];
            ];

            True
        ]
    );

StandardEvaluator`Evaluate[evaluator, k_, t_] := Module[{list},
    t["Evaluator"] = Notebook`RevealEvaluator;
    t["Data"] = "<dummy>"<>StringDrop[t["Data"], 7]<>"</dummy>";

    StandardEvaluator`Print[evaluator, "Kernel`Submit!"];
    Kernel`Submit[k, t];    
];  

init[k_] := Module[{},
    Print["Kernel init..."];
]


End[]

EndPackage[]