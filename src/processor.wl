BeginPackage["JerryI`WolframJSFrontend`RevialJSSupport`"];

Begin["Private`"];

RJXProcessor[expr_String, signature_String, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["RJXProcessor!"];
  RJXEvaluator[str, signature, callback];
];

RJXQ[str_]      := Length[StringCases[StringSplit[str, "\n"] // First, RegularExpression["^\\.(slide)$"]]] > 0;

JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(RJXQ      ->  <|"SyntaxChecker"->(True&),               "Epilog"->(#&),             "Prolog"->(#&), "Evaluator"->RJXProcessor       |>), "HighestPriority"];

RJXQ2[str_]      := Length[StringCases[StringSplit[str, "\n"] // First, RegularExpression["^\\.(slides)$"]]] > 0;

RJXProcessor2[expr_String, signature_String, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["RJXProcessor2 All slides!"];
  (* find all cells with slides *)
  str = {str, Function[i, StringDrop[i["data"], StringLength[First[StringSplit[i["data"], "\n"]]]] ] /@ Select[JerryI`WolframJSFrontend`Cells`CellList[signature], (RJXQ[#["data"]] && #["type"]==="input") &]};
  str = StringRiffle[str//Flatten, "\n---\n"];
  Print["Full string is"];
  Print[str];

  RJXEvaluator[str, signature, callback];
];

If[KeyExistsQ[JerryI`WolframJSFrontend`Packages`Packages, "wljs-wlx-support"],
  RJXEvaluator[str_, signature_, callback_] := JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`WLXEvaluator["<dummy>"<>str<>"</dummy>", signature, "slide", "Trimmer"->Identity], callback, "Link"->"WSTP"]
,
  RJXEvaluator[str_, signature_, callback_] := JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`TemplateEvaluator[str, signature, "slide"], callback, "Link"->"WSTP"];
];

JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(RJXQ2      ->  <|"SyntaxChecker"->(True&),               "Epilog"->(#&),             "Prolog"->(#&), "Evaluator"->RJXProcessor2       |>), "HighestPriority"];


End[];

EndPackage[];