BeginPackage["Notebook`Editor`Kernel`Slides`", {"JerryI`Misc`Events`", "Notebook`Editor`Kernel`FrontSubmitService`"}]

SlideEventListener::usage = "SlideEventListener[\"Id\"->\"event-uid\"] attach an event generator from slide to event-uid"
Slides::usage = "Slides[] a multipurpose object, which produces SlidesObject. Use it with EventFire[Slides[], ...] to control slides"

SlidesInternalEvent::usage = "Internal function on WLJS site for slides actions"

Begin["`Private`"]

SlideEventListener[OptionsPattern[]] := StringTemplate["RVJSEvent[\"``\",\"``\"]"][OptionValue["Id"], OptionValue["Pattern"] ]

(* get current window and store it *)
Slides[] := Slides[<|"Window"->CurrentWindow[]|>]

Slides /: EventFire[Slides[assoc_Association], type_String, data_] := With[{win = assoc["Window"]},
    FrontSubmit[SlidesInternalEvent[type, data], "Window"->win];
];

Options[SlideEventListener] = {"Id"->"default-slide-event", "Pattern"->"Slide"}

End[]
EndPackage[]
