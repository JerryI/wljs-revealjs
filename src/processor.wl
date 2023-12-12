BeginPackage["JerryI`WolframJSFrontend`RevialJSSupport`"];

Begin["Private`"];

RJXProcessor[expr_String, signature_String, parent_, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["RJXProcessor!"];
  RJXEvaluator[str, signature, parent, callback];
];

RJXQ[str_]      := If[StringLength[str] > 8, Length[StringCases[StringSplit[str, "\n"] // First, RegularExpression["^\\.(slide)$"]]] > 0, False];

JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(RJXQ      ->  <|"SyntaxChecker"->(True&),               "Epilog"->(#&),             "Prolog"->(#&), "Evaluator"->RJXProcessor       |>), "HighestPriority"];

RJXQ2[str_]      := Length[StringCases[StringSplit[str, "\n"] // First, RegularExpression["^\\.(slides)$"]]] > 0;

RJXProcessor2[expr_String, signature_String, parent_, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["RJXProcessor2 All slides!"];
  (* find all cells with slides *)
  str = {Function[i, StringDrop[i["data"], StringLength[First[StringSplit[i["data"], "\n"]]]] ] /@ Select[JerryI`WolframJSFrontend`Cells`CellList[signature], (RJXQ[#["data"]] && #["type"]==="input") &], str};
  str = StringRiffle[str//Flatten, "\n---\n"];
  Print["Full string is"];
  Print[str];

  RJXEvaluator[str, signature, parent, callback];
];

MTrimmer = Function[str, 
StringReplace[str, {
  RegularExpression["\\A([\\n|\\t|\\r| ]*)([\\w|:|\\$|#|\\-|\\[|\\]|!|\\*|_|\\/|.|\\d]?)"] :> If[StringLength["$2"]===0, "", "$1"<>"$2"],
  RegularExpression["([\\w|\\$|#|*|\\*|\\-|\\[|!|\\]|:|\\/|.|\\d]?)([\\r|\\n| |\\t]*)\\Z"] :> If[StringLength["$1"]===0, "", "$1"<>"$2"]
}]
];

If[KeyExistsQ[JerryI`WolframJSFrontend`Packages`Packages, "wljs-wlx-support"],
  RJXEvaluator[str_, signature_, parent_, callback_] := JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`WLXEvaluator["<dummy>"<>str<>"</dummy>", signature, "slide", parent, "Trimmer"->MTrimmer], callback, "Link"->"WSTP"]
,
  RJXEvaluator[str_, signature_, parent_, callback_] := JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`TemplateEvaluator[str, signature, "slide", parent], callback, "Link"->"WSTP"];
];

JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(RJXQ2      ->  <|"SyntaxChecker"->(True&),               "Epilog"->(#&),             "Prolog"->(#&), "Evaluator"->RJXProcessor2       |>), "HighestPriority"];


End[];

EndPackage[];