BeginPackage["Notebook`Editor`Kernel`Slides`"]

SlideEvent::usage = "SlideEvent[\"Id\"->\"event-uid\"] attach an event generator from slide to event-uid"

Begin["`Private`"]

SlideEvent[OptionsPattern[]] := StringTemplate["RVJSEvent[\"``\"]"][OptionValue["Id"]]

Options[SlideEvent] = {"Id"->"default-slide-event"}

End[]
EndPackage[]
