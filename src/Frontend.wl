BeginPackage["Notebook`Editor`RevealProcessor`", {
    "JerryI`Notebook`", 
    "JerryI`Notebook`Evaluator`", 
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`"
}]

Begin["`Internal`"]

Q[t_Transaction] := (StringMatchQ[t["Data"], ".slide\n"~~___] || StringMatchQ[t["Data"], ".slides\n"~~___] )

rootFolder = $InputFileName // DirectoryName;


evaluator  = StandardEvaluator["Name" -> "RevealJS Evaluator", "InitKernel" -> init, "Pattern" -> (_?Q), "Priority"->(3)];

    StandardEvaluator`ReadyQ[evaluator, k_] := (
        If[! TrueQ[k["ReadyQ"] ] || ! TrueQ[k["ContainerReadyQ"] ],
            EventFire[t, "Error", "Kernel is not ready"];
            StandardEvaluator`Print[evaluator, "Kernel is not ready"];
            False
        ,

            With[{p = Import[FileNameJoin[{rootFolder, "Preload.wl"}], "String"]},
                Module[{monitor},
                
                    monitor["Start"] := With[{},
                        monitor["Spinner"] = Notifications`Spinner["Topic"->"Fetching WLX Packages", "Body"->"Please, wait"];
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

    If[StringMatchQ[t["Data"], ".slides\n"~~___],
        StandardEvaluator`Print[evaluator, "Multiples slides will be merged"];

        t["Data"] = "<dummy>"<>StringRiffle[{Map[
            Function[cell,
                StringDrop[cell["Data"], 7]
            ]
        , 
            Select[Notebook`HashMap[ t["EvaluationContext", "Notebook"] ]["Cells"], (StringMatchQ[#["Data"], ".slide\n"~~___] && InputCellQ[#])& ] 
        ], StringDrop[t["Data"], 8]} // Flatten, "\n---\n"]<>"</dummy>";

        StandardEvaluator`Print[evaluator, "Kernel`Submit!"];
        Kernel`Submit[k, t]; 
    ,
        t["Data"] = "<dummy>"<>StringDrop[t["Data"], 7]<>"</dummy>";

        StandardEvaluator`Print[evaluator, "Kernel`Submit!"];
        Kernel`Submit[k, t];     
    ]   
];


init[k_] := Module[{},
    Print["Kernel init..."];
]


End[]

EndPackage[]