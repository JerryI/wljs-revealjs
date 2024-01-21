BeginPackage["Notebook`Editor`RevealProcessor`", {
    "JerryI`Notebook`", 
    "JerryI`Notebook`Evaluator`", 
    "JerryI`Notebook`Kernel`", 
    "JerryI`Notebook`Transactions`",
    "JerryI`Misc`Events`"
}]

Begin["`Internal`"]

Q[t_Transaction] := (StringMatchQ[t["Data"], ".slide\n"~~___] )

evaluator  = StandardEvaluator["Name" -> "JS Evaluator", "InitKernel" -> init, "Pattern" -> (_?Q), "Priority"->(6)];

    StandardEvaluator`ReadyQ[evaluator, k_] := (
        If[! TrueQ[k["ReadyQ"] ] || ! TrueQ[k["ContainerReadyQ"] ],
            EventFire[t, "Error", "Kernel is not ready"];
            StandardEvaluator`Print[evaluator, "Kernel is not ready"];
            False
        ,
            True
        ]
    );

StandardEvaluator`Evaluate[evaluator, k_, t_] := Module[{list},
    t["Evaluator"] = Notebook`Editor`RevealEvaluator;
    t["Data"] = StringDrop[t["Data"], 7];

    StandardEvaluator`Print[evaluator, "Kernel`Submit!"];
    Kernel`Submit[k, t];    
];  

init[k_] := Module[{},
    Print["Kernel init..."];
    Kernel`Init[k, 
        Print["Init js Kernel (Local)"];
        Notebook`Editor`RevealEvaluator = Function[t, 
            Print["Got it!"];
            EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Result", <|"Data" -> t["Data"], "Meta" -> Sequence["Display"->"slide"] |> ];
            EventFire[Internal`Kernel`Stdout[ t["Hash"] ], "Finished", True];
        ];
    ]
]


End[]

EndPackage[]