import type { ContentPage, ContentSection } from "../types";
import energy from "./energy-references.json";
type Detail = {
  construction: string[];
  hardware: string[][];
  options: string[][];
  installation: string[];
  questions: [string, string][];
};
const details: Record<string, Detail> = {
  casement: {
    construction: [
      "A casement is supported along one vertical edge, so the hinge side carries the sash while the operator moves it. Glass weight, sash width and the position of the locking points must be considered together. This is why a larger triple-glazed casement can need a different hardware arrangement from a small double-glazed unit.",
      "On the vinyl configurations in our product reference, internal frame chambers, welded corners and reinforcement form the structure around the glass. Reinforcement supports the moving sash; the weather gaskets provide the contact seal. These perform different jobs, and adding locking points cannot correct an opening installed out of square.",
      "A corner-drive arrangement can extend the locking action toward the upper corner of a wider sash. During a showroom demonstration, watch the entire sash return to the frame. It should close in a controlled movement before the lock is engaged, without using the lock to pull a visibly misaligned sash into position.",
    ],
    hardware: [
      [
        "Hinges",
        "Carry the sash and establish its swing path. Hinge capacity must match the glass weight and approved dimensions.",
      ],
      [
        "Crank operator",
        "Reference choices include Truth/Encore and compatible heavy-duty operators. Confirm the exact operator and handing on the order.",
      ],
      [
        "Perimeter locking",
        "Multiple engagement points draw the sash into the gaskets. A corner drive is a configuration choice, not an automatic feature on every size.",
      ],
      [
        "Handle and lock style",
        "Compare folding operator handles and classic, flat or slim lock treatments for reach and clearance. EVO2/Ferco components require system compatibility.",
      ],
      [
        "Interior screen",
        "A removable or spring-loaded screen sits inside because the sash opens outside. Try releasing and reinstalling it before selecting a blind.",
      ],
    ],
    options: [
      [
        "Finish",
        "Coordinate the exterior frame with brickmould and choose the room-side finish around existing casing. Check the approved sample rather than a colour on a phone.",
      ],
      [
        "Glass",
        "Compare double and triple glazing at the same size. A heavier laminated or triple-pane package changes the hardware discussion.",
      ],
      [
        "Privacy",
        "Textured or decorative glass can suit a side-facing opening; compare visibility after dark with indoor lights on.",
      ],
      [
        "Grilles",
        "Check grille alignment where an operating casement sits beside a fixed unit. The visible sash proportions may differ.",
      ],
      [
        "Interior trim",
        "Allow the jamb extension to meet the finished wall and leave the crank clear of the sill and backsplash.",
      ],
      [
        "Blinds",
        "An inside-mounted blind needs clearance from the folded handle and room for the screen to be removed.",
      ],
    ],
    installation: [
      "For a kitchen replacement, photograph the sink, tap, backsplash and interior sill as well as the outside opening. A window can fit the wall yet be awkward to operate if the handle lands behind a deep counter or directly above a tall fixture.",
      "At handover, open the sash, bring it back with the crank, engage each locking action and remove the screen. Ask the installer to demonstrate the permitted cleaning position. Do not assume that every hinge allows the same access to the exterior glass.",
    ],
    questions: [
      [
        "Can a casement open over a walkway?",
        "Its sash projects outside the wall. Measure the full swing against the walkway and any gate or steps; a slider or a different opening location may be more practical where that space must remain clear.",
      ],
      [
        "Does triple glazing fit the same maximum size?",
        "Not necessarily. The glass weight and hardware capacity can reduce the permitted sash dimensions. Apply width, height and area limits together for the selected configuration.",
      ],
      [
        "Which side should the hinges be on?",
        "Consider the easiest handle access, furniture, neighbouring windows and the direction in which the open sash will project. Confirm handing on a labelled drawing viewed from the agreed side.",
      ],
      [
        "Can I use the same blind after replacement?",
        "Possibly, but the new frame depth, jamb finish and operator can change the usable mounting space. Measure for the blind after the window specification and finished reveal are established.",
      ],
    ],
  },
  awning: {
    construction: [
      "An awning sash pivots from its top edge. The lower edge moves away from the wall, producing a sheltered opening that is useful in a wide, shallow space. The opening still exposes the room to wind-driven weather; the sash should be closed when conditions require it.",
      "The operator and supporting arms control the moving lower edge. Wider sashes need the locking pressure to remain balanced across the frame, while the hinges carry the glazing load above. Compare how the corners settle into the weather seals rather than looking only at the central handle.",
      "Pairing an awning below fixed glass can give a room both a large view and a separate ventilation section. The joining arrangement, horizontal sightlines and overall opening must be designed together. Two independently rated units do not establish every detail of a combined assembly.",
    ],
    hardware: [
      [
        "Top hinges and arms",
        "Support the outward-opening sash. Their travel and load capacity determine the usable opening position.",
      ],
      [
        "Operator",
        "Crank and heavy-duty operator options depend on sash width and glass weight. Test reach when the unit sits high above furniture.",
      ],
      [
        "Locking points",
        "Distributed locks help bring a wide lower edge into its gaskets. Check that both corners meet the frame evenly.",
      ],
      [
        "Handle profile",
        "Folding or lower-profile hardware may improve blind clearance; the selected handle still needs a usable hand position.",
      ],
      [
        "Screen",
        "The screen normally sits on the room side. Confirm how it releases when the window is installed above a counter.",
      ],
    ],
    options: [
      [
        "Frame finish",
        "A horizontal accent colour can emphasize a row of awnings; compare it with the frame finish of the fixed glass above.",
      ],
      [
        "Glass package",
        "Evaluate pane count alongside the weight carried by the top hinges and the required maximum width.",
      ],
      [
        "Privacy glass",
        "For a bathroom, review daylight and privacy with the sash both closed and tilted outward.",
      ],
      [
        "Grilles",
        "A busy grille pattern can reduce the visual openness of a short window. View the pattern at the actual proportions.",
      ],
      [
        "Jamb and casing",
        "Coordinate the horizontal trim with adjacent windows so a ventilation band reads as one planned arrangement.",
      ],
      [
        "Screens and blinds",
        "Leave space for screen removal and access to the operator rather than mounting coverings directly against it.",
      ],
    ],
    installation: [
      "An awning over a tub or counter should be assessed from the position where it will actually be operated. A high display in a showroom can be easy to reach while a similar window behind a deep fixture is not.",
      "Check the exterior projection against soffits, planting and paths. At installation, the frame must stay square and supported so the operator closes both lower corners evenly. The final walkthrough should include the lock sequence, screen release and drainage openings.",
    ],
    questions: [
      [
        "Can I leave an awning open in rain?",
        "The sash can shelter part of the opening, but it is not a weatherproof canopy. Wind direction and rainfall matter; close it during adverse weather and when leaving the home.",
      ],
      [
        "Is an awning suitable for a basement?",
        "It can provide ventilation where the opening and exterior clearance suit it. Basement use does not automatically establish that a unit meets emergency-exit requirements.",
      ],
      [
        "Can an awning sit below a picture window?",
        "Yes, as an approved combined layout. Specify the connecting detail, total dimensions, glass choices and trim rather than ordering the two portions independently.",
      ],
      [
        "Why compare operator types?",
        "A wider or heavier sash can require different operating hardware. The handle appearance alone does not tell you the load capacity or permitted sash size.",
      ],
    ],
  },
  "single-hung": {
    construction: [
      "The upper sash is stationary while the lower sash travels vertically. The horizontal meeting rail remains part of the view, and ventilation is concentrated in the lower portion of the opening. This suits a traditional window rhythm without requiring outdoor swing clearance.",
      "The lower sash is supported by a balance system inside the frame. A well-adjusted sash should move without dropping or needing excessive force. The fixed upper section simplifies the moving arrangement, but frame alignment and the quality of the seals still affect everyday comfort.",
      "Compare the visible glass area with a casement at equivalent outside dimensions. A retained-frame installation and a deeper replacement profile can both affect the finished opening; the window-style name alone does not tell you how much daylight remains.",
    ],
    hardware: [
      [
        "Balance system",
        "Supports the moving lower sash. Its specification must match the sash weight, including the selected glass.",
      ],
      [
        "Cam lock",
        "Secures the meeting rails in the closed position. Alignment matters: a lock should not be used to compensate for uneven rails.",
      ],
      [
        "Tilt hardware",
        "A tilt-in lower sash is a model-dependent cleaning feature. Ask for the release and support procedure for the actual unit.",
      ],
      [
        "Screen",
        "Usually serves the ventilating portion of the window. Confirm screen location and how it is removed from inside.",
      ],
      [
        "Tracks and drainage",
        "Guide the sash and manage water at the frame. Keep these paths clear without sealing over factory drainage openings.",
      ],
    ],
    options: [
      [
        "Colour",
        "Choose the inside and outside finishes with the meeting rail visible in both views.",
      ],
      [
        "Glass",
        "The operating lower sash and fixed upper portion should be specified together for appearance and performance.",
      ],
      [
        "Privacy",
        "A privacy treatment can be concentrated where sightlines matter, subject to the approved glazing configuration.",
      ],
      [
        "Grilles",
        "Traditional grille patterns should line up across the meeting rail and neighbouring windows.",
      ],
      [
        "Trim",
        "Confirm how retained framing affects the jamb depth and whether existing casing can actually be reused.",
      ],
      [
        "Window coverings",
        "Allow the lower sash and lock to move without catching a blind or curtain bracket.",
      ],
    ],
    installation: [
      "A single-hung replacement next to a porch can maintain ventilation without a sash projecting into the passage. Check the interior access to the lower latch and the height of the opening above furniture.",
      "The handover should include raising the sash to several positions, checking that it stays supported, locking the meeting rails and demonstrating any approved tilt function. An upper pane that cannot tilt may require another cleaning access plan.",
    ],
    questions: [
      [
        "Does the top part open?",
        "No. A single-hung layout has a fixed upper sash. Choose double hung if independent upper ventilation is an important requirement.",
      ],
      [
        "Do all single-hung windows tilt for cleaning?",
        "No. Confirm whether the selected lower sash tilts, how it is supported and how the exterior face of the fixed upper section will be reached.",
      ],
      [
        "Why does the sash need a balance?",
        "The balance offsets the weight of the moving sash. Incorrect sizing or adjustment can make a sash difficult to move or unable to stay in position.",
      ],
      [
        "Is it the same as a single slider?",
        "Both have one moving section, but a single-hung sash travels vertically and a single slider travels horizontally. Opening proportions and cleaning access differ.",
      ],
    ],
  },
  "double-hung": {
    construction: [
      "Both the upper and lower sashes move vertically. This creates a choice of opening positions within the same frame, with a meeting rail dividing the glass. Opening the upper portion can be useful when you want ventilation above furniture rather than directly at seating height.",
      "Two operating sashes mean two balance arrangements and more moving contact surfaces. Good operation depends on the frame, both sash weights and the meeting rails working together. Test the top sash as carefully as the bottom one when comparing displays.",
      "Tilt-in cleaning can reduce the need to reach exterior glass from outside, but the sash must be released and supported in the sequence specified for that model. Tilt hardware is a cleaning feature, not a reason to leave an unsupported sash hanging into the room.",
    ],
    hardware: [
      [
        "Upper and lower balances",
        "Each balance set supports its own sash. Heavier glazing changes the required hardware specification.",
      ],
      [
        "Meeting-rail locks",
        "Align and secure the two sashes when closed. Check that the top sash is fully seated before locking.",
      ],
      [
        "Tilt latches",
        "Release the sash for an approved cleaning position. Their location and release procedure vary by model.",
      ],
      [
        "Stops and limiters",
        "Any opening-control device needs a defined purpose and operating instruction; it is not interchangeable with an insect screen.",
      ],
      [
        "Screen and tracks",
        "Confirm whether the screen covers part or all of the frame and how it is positioned for the chosen ventilation mode.",
      ],
    ],
    options: [
      [
        "Frame colour",
        "A contrasting finish makes the meeting rail more prominent. Review the elevation drawing with surrounding trim.",
      ],
      [
        "Glazing",
        "Ask for the rating of the complete double-hung model. A single-hung reference is not a substitute for its record.",
      ],
      [
        "Grille layout",
        "Line up the pattern across both movable sashes and adjacent fixed windows.",
      ],
      [
        "Privacy",
        "Review upper and lower sightlines separately where a window faces a neighbour or a street.",
      ],
      [
        "Interior finish",
        "Provide enough room inside to support both sashes during cleaning without hitting deep casing or furniture.",
      ],
      [
        "Screens",
        "Choose the screen arrangement around whether you expect to ventilate from the top, bottom or both.",
      ],
    ],
    installation: [
      "For a bedroom with furniture beneath the window, compare the practical reach to the top sash. Upper ventilation is only useful if the person using the room can operate and secure it comfortably.",
      "Check each sash at several heights after installation. Inspect the meeting rail for alignment, verify the lock without forcing it and have both tilt procedures demonstrated. Uneven movement can indicate a balance or frame issue that deserves attention before finishing the walkthrough.",
    ],
    questions: [
      [
        "Can both sashes be open together?",
        "The layout allows both to move, within the limits of the selected system. Compare the resulting opening and screen coverage rather than assuming the entire frame becomes open.",
      ],
      [
        "Is double hung more practical than single hung?",
        "It adds upper-sash ventilation and potentially easier cleaning access. Those benefits need to justify the additional moving components for the room and the people using it.",
      ],
      [
        "Where are the numeric energy ratings?",
        "The exact double-hung rating record is being matched to the product configuration. We are not substituting a single-hung table for a two-sash product. Request the model-specific record with the quote.",
      ],
      [
        "Can both sashes be removed?",
        "Removal and tilt functions are model-specific. Follow the supplied instructions and ask for a demonstration; a tilt position does not automatically permit complete sash removal.",
      ],
    ],
  },
  sliding: {
    construction: [
      "A horizontal slider keeps its moving sash within the wall plane. In a single-slider layout one portion moves; a double slider allows movement from either side. The sections still overlap, so the walk-through or ventilation width is smaller than the full outside frame width.",
      "A wider frame can be divided into two or more sections. Decide which section should move before judging the symmetry of the exterior view. A central fixed pane with operating sides serves a different ventilation pattern from two overlapping equal sashes.",
      "The track, frame support and seals are especially important because the sash moves across them during use. A level-looking sill is not proof that the whole frame is correctly aligned. Operate the sash through its full intended travel and check the meeting stile where the sections lock.",
    ],
    hardware: [
      [
        "Sliding guides or rollers",
        "The chosen system may use different support components. Confirm the actual arrangement and service procedure.",
      ],
      [
        "Meeting-stile lock",
        "Secures the sash at the overlap. Check the alignment and whether the handle provides a comfortable grip.",
      ],
      [
        "Sash removal hardware",
        "Lift-out and tilt-in cleaning arrangements are not the same. Compare the approved release method.",
      ],
      [
        "Spring-loaded screen",
        "Where offered, spring-loaded retention simplifies removal. Check the screen position for single and double operation.",
      ],
      [
        "Drainage channels",
        "Tracks collect water and debris. Drainage outlets must remain open and accessible after exterior finishing.",
      ],
    ],
    options: [
      [
        "Layout",
        "Compare single slider, double slider and combined fixed/operating sections on a labelled drawing.",
      ],
      [
        "Finish",
        "Dark frames emphasize the overlapping vertical stile; match it with adjoining fixed units deliberately.",
      ],
      [
        "Glass",
        "Compare the full slider rating, not a casement figure with the same pane count.",
      ],
      [
        "Privacy",
        "Place privacy glazing according to the room’s sightlines while considering the view through an open sash.",
      ],
      [
        "Grilles",
        "Check alignment when closed and the visual overlap when a sash is open.",
      ],
      [
        "Trim and blinds",
        "A slider avoids a swing zone, but the lock and removable screen still need room inside the reveal.",
      ],
    ],
    installation: [
      "Sliders can suit a narrow side passage where outward-opening windows would obstruct movement. Measure the actual clear opening and consider which side of the room should receive ventilation.",
      "Before accepting the installation, slide every operating section, check the lock, inspect drainage access and practise screen removal. Ask which cleaning products and maintenance actions are permitted; excessive lubricant can collect debris rather than cure misalignment.",
    ],
    questions: [
      [
        "Does a double slider open the entire width?",
        "No. The moving sections normally overlap within the frame. Compare the clear opening shown on the system drawing.",
      ],
      [
        "How is a sliding window different from a patio slider?",
        "The horizontal motion is similar, but a window and a door have different access, threshold, structural and operating requirements. They are separate products.",
      ],
      [
        "Can I clean both panes from inside?",
        "That depends on the approved tilt or lift-out arrangement. Ask to see the actual removal procedure rather than relying on the word slider.",
      ],
      [
        "Why are there no universal maximum dimensions?",
        "The permitted size changes with the number of panels, glazing and support system. A configuration drawing is needed before assigning a maximum to a particular slider.",
      ],
    ],
  },
  picture: {
    construction: [
      "A picture window has no operating sash. Its purpose is to frame a view with fixed glazing, often with fewer visible divisions than a comparable operating arrangement. The frame and glass supports carry the load without hinges, operators or ventilation hardware.",
      "The edge of the sealed unit, setting blocks and frame connections are important even though nothing opens. Larger glass can require a different thickness or safety treatment, and its handling weight affects delivery access and installation planning.",
      "Compare a picture window with a fixed casement at identical outside dimensions. The picture design may emphasize glass area, while a fixed casement can better reproduce the appearance of adjacent operating casements. A mixed elevation should be considered from inside as well as from the street.",
    ],
    hardware: [
      [
        "Glass support",
        "Setting and retention components support the sealed unit within the approved frame. They are part of the system specification.",
      ],
      [
        "Perimeter frame",
        "Its reinforcement and joining details must suit the size and exposure of the opening.",
      ],
      [
        "Sealed-unit edge",
        "Spacer and edge seals form the boundary of the insulating glass package. Frame installation must not compromise them.",
      ],
      [
        "No operating screen",
        "A fixed pane does not require an insect screen for ventilation because the unit does not open.",
      ],
    ],
    options: [
      [
        "View and divisions",
        "Choose an uninterrupted pane or a divided layout based on proportion, glass limits and handling access.",
      ],
      [
        "Solar exposure",
        "Large glass makes orientation and shading especially relevant. Compare the specified coating and solar-gain figure.",
      ],
      [
        "Safety glazing",
        "The location and glass size can influence the required safety treatment; identify it during the opening assessment.",
      ],
      [
        "Grilles",
        "Between-glass bars and applied divided-lite treatments produce different visual depth and cleaning surfaces.",
      ],
      [
        "Finish",
        "A darker frame can emphasize the landscape; compare the exterior finish with nearby opening units.",
      ],
      [
        "Interior reveal",
        "A deep ledge, flush reveal and retained existing sill create different room-side appearances.",
      ],
    ],
    installation: [
      "For a large living-room view, plan ventilation elsewhere in the room and establish how the exterior glass will be cleaned. An attractive fixed pane cannot replace an opening needed for the room’s intended use.",
      "The access route for a large sealed unit matters: gates, stairs, landscaping and working space can affect the installation method. Include lifting or handling requirements, perimeter flashing and finishing in the scope before comparing totals.",
    ],
    questions: [
      [
        "Can a picture window provide ventilation?",
        "No. Add an approved opening section nearby or choose a combined design that includes operable units.",
      ],
      [
        "Can fixed glass serve as an emergency exit?",
        "A non-opening pane does not provide an operable escape opening. Have the room’s requirements assessed before selecting the layout.",
      ],
      [
        "Why might a large picture window cost more per opening?",
        "Glass size, thickness, safety treatment, support and handling can change the scope significantly. A small fixed-pane price is not a linear guide to a wall-sized unit.",
      ],
      [
        "Should I choose picture or fixed casement?",
        "Compare the viewable glass and frame proportions next to the other windows in the room. A consistent casement appearance and maximum uninterrupted glass are different design priorities.",
      ],
    ],
  },
  "fixed-casement": {
    construction: [
      "A fixed casement reproduces the framed sash appearance of an operating casement while remaining permanently closed. It is useful when a group of windows should have consistent proportions but only some sections need to open.",
      "Matching appearance requires more than selecting two products with casement in the name. Check the series, sash profile, frame dimensions and grille location together. A fixed unit from another profile family can create a visibly different glass edge.",
      "The fixed construction does not need an operator, but its frame, glazing retention and joining details still have structural and weather-management duties. Confirm the approved overall layout where fixed and operating units are connected.",
    ],
    hardware: [
      [
        "Fixed glazing retention",
        "Holds the sealed unit in the specified frame; it does not create a concealed opening function.",
      ],
      [
        "Matching sash profile",
        "Provides the intended visual relationship with nearby operating casements. Confirm the actual series.",
      ],
      [
        "Joining components",
        "Combined layouts need approved connections between fixed and opening sections.",
      ],
      [
        "Perimeter seals",
        "The fixed frame still requires a continuous installation air seal and correctly detailed exterior drainage.",
      ],
    ],
    options: [
      [
        "Series match",
        "Compare fixed and operable sections from the same approved profile family on one elevation drawing.",
      ],
      [
        "Glass appearance",
        "Use a coordinated glass package where matching tint and reflectance are important.",
      ],
      [
        "Grilles",
        "Line up bars across the fixed pane and adjacent casements, including the visible edge offset.",
      ],
      [
        "Colour",
        "Specify both room-side and exterior finish; one shared exterior colour does not identify the interior package.",
      ],
      [
        "Screen appearance",
        "The operating neighbour may have a screen while the fixed pane does not. Compare the resulting view in the showroom.",
      ],
      [
        "Trim",
        "Treat the casing and exterior brickmould as a continuous arrangement when the design calls for it.",
      ],
    ],
    installation: [
      "A living-room group with fixed middle glass and opening sides should be measured and drawn as a complete composition. Check which openings provide ventilation and whether the intended fixed portion can remain fixed for the room’s use.",
      "At completion, compare the alignment of glass edges, grille patterns and trim across the group. On the operating sections, test the controls; on the fixed sections, inspect the glazing and perimeter finish.",
    ],
    questions: [
      [
        "Why choose a fixed casement instead of picture glass?",
        "Its framed appearance can coordinate more closely with operating casements. The trade-off may be a different amount of visible glass at the same outside size.",
      ],
      [
        "Can it be opened later by adding a handle?",
        "No. A fixed product is not an operating casement with the handle omitted. A future change would require an appropriate replacement design.",
      ],
      [
        "Will fixed and opening sections look exactly alike?",
        "They can be coordinated, but screens, hardware and construction can still create differences. Review physical samples and the complete elevation.",
      ],
      [
        "Does the same glass package guarantee the same rating?",
        "No. The full frame and configuration are part of the rating. Use the record for the exact fixed-casement product.",
      ],
    ],
  },
  "tilt-and-turn": {
    construction: [
      "The same sash performs two movements. A controlled handle sequence selects a tilted ventilation position or a fuller inward turn. This puts the mechanism around the sash perimeter at the centre of everyday operation.",
      "The referenced vinyl construction combines chambered profiles with reinforcement and compression seals. Reinforcement supports the heavier sash and its hardware; the seals close the air path. The actual reinforcement and glazing specification belong on the selected system’s drawing.",
      "Because the sash turns into the room, its movement should be planned before interior finishing and window-covering selection. A display can feel effortless in an empty aisle but have limited use behind a desk, a curtain rail or a deep inside-mounted blind.",
    ],
    hardware: [
      [
        "Perimeter locking gear",
        "Coordinates engagement around the sash. Adjustment and handing must match the specified system.",
      ],
      [
        "Tilt/turn selector handle",
        "Selects the operating mode. Ask for a clear demonstration of the approved handle sequence.",
      ],
      [
        "Hinges and reinforcement",
        "Support the inward-turning sash and its glass weight. Do not transfer size limits from an outward casement.",
      ],
      [
        "Mode-control components",
        "Any safeguards against incorrect operation are model-specific. Confirm what is fitted and how it works.",
      ],
      [
        "Screen arrangement",
        "An inward-opening sash typically needs a different screen solution from an outward-opening casement.",
      ],
    ],
    options: [
      [
        "Operating clearance",
        "Draw the inward swing against furniture and coverings before confirming the sash width.",
      ],
      [
        "Glass weight",
        "Triple or laminated glass must be matched to the hinge and locking specification.",
      ],
      [
        "Profile finish",
        "Coordinate the visible interior sash with the room because it moves prominently into the space.",
      ],
      [
        "Screen",
        "Compare exterior or other compatible screen arrangements and their service access.",
      ],
      [
        "Privacy and solar control",
        "Choose the glass for the room’s exposure while keeping the tilting opening’s sightlines in mind.",
      ],
      [
        "Blinds",
        "Check handle projection and the complete turn path; an outside mount may be more suitable than a shallow inside mount.",
      ],
    ],
    installation: [
      "For a workspace with a desk below the window, review both ventilation modes in the furnished layout. It may be practical to tilt for routine air and use the turning position only when the area is clear.",
      "During handover, operate the handle through the correct sequence, close the sash fully between modes and verify that the hardware engages without force. Keep the operating instructions with the order; unfamiliar visitors should not have to guess the sequence.",
    ],
    questions: [
      [
        "Is tilt-and-turn the same as tilt-and-slide?",
        "No. A tilt-and-turn sash swings inward in its full opening mode. A tilt-and-slide system uses a different movement and needs its own drawing and instructions.",
      ],
      [
        "Can I place a blind inside the frame?",
        "Only if the blind, bracket and handle clear both operating positions. Confirm the finished dimensions and sash movement before ordering the covering.",
      ],
      [
        "Can the tilt position replace full opening for every purpose?",
        "No. Ventilation, cleaning access and emergency-opening requirements are separate questions. Check the relevant clear opening for the intended use.",
      ],
      [
        "Why is installation alignment so important?",
        "Several locking and support components work together around one sash. Misalignment can affect both modes, so the complete movement should be checked after installation.",
      ],
    ],
  },
  hopper: {
    construction: [
      "A hopper pivots inward from its lower edge, with the upper edge moving into the room. Its compact form can provide ventilation in a shallow opening without creating an outward-projecting sash.",
      "The friction hinge or other approved support controls how far the sash tilts and holds it in its permitted position. A small frame still needs adequate room inside; shelves, stored items and blinds can obstruct the moving top edge.",
      "Basement planning should include the exterior well or grade level, water-management condition and access for cleaning. The window assembly cannot correct drainage problems outside the opening by itself.",
    ],
    hardware: [
      [
        "Bottom support or friction hinge",
        "Controls the tilt movement. Its permitted travel is part of the chosen window design.",
      ],
      [
        "Upper latch",
        "Holds the sash closed against its seals. Check reach and alignment at the installed height.",
      ],
      [
        "Opening restraint",
        "Any limiting mechanism must remain intact and be used as instructed.",
      ],
      [
        "Screen",
        "Confirm screen location and how it can be cleaned or removed without reaching into an unsafe exterior well.",
      ],
    ],
    options: [
      [
        "Opening size",
        "Use the actual frame, sash and clear-opening dimensions; no universal hopper maximum is supplied here.",
      ],
      [
        "Privacy glazing",
        "A grade-level window can need privacy while retaining daylight. Compare the glass from the exterior viewing height.",
      ],
      [
        "Interior finish",
        "Use trim that leaves the tilted sash and latch accessible in a utility or storage area.",
      ],
      [
        "Glass package",
        "Confirm the allowed weight and thickness for the compact hinge arrangement.",
      ],
      [
        "Exterior detail",
        "Review the transition to a window well, masonry or siding and preserve drainage paths.",
      ],
      [
        "Screen and coverings",
        "Account for the inward tilt before fitting a blind or a fixed shelf near the opening.",
      ],
    ],
    installation: [
      "Photograph the outside of a basement opening from grade level and the inside with nearby storage visible. That helps identify water exposure, restricted working space and the practical reach to the latch.",
      "After installation, check the tilt restraint, latch engagement and accessible drainage details. If the room is intended as a bedroom, have the required opening and escape route assessed independently of the hopper’s compact appearance.",
    ],
    questions: [
      [
        "Is every hopper an egress window?",
        "No. A small tilting opening is not automatically suitable for emergency escape. The actual clear opening and surrounding route must meet the project’s requirements.",
      ],
      [
        "Will a new hopper stop water entering a window well?",
        "A window replacement does not by itself resolve an exterior drainage or well problem. The cause of water accumulation needs to be included in the assessment.",
      ],
      [
        "How much interior space does it need?",
        "Measure the inward travel of the sash at the permitted tilt angle. Include any latch projection and the clearance needed for cleaning.",
      ],
      [
        "Can I remove the restrictor for more air?",
        "Use the window only in the approved operating arrangement. Ask the supplier about an alternative configuration rather than removing a safety or support component.",
      ],
    ],
  },
  bay: {
    construction: [
      "A bay is an assembly that projects beyond the wall, usually with a larger central section and angled side sections. It adds depth inside the room, but the seat, head and side connections make it a construction detail as well as a window selection.",
      "The centre can remain fixed while side units open, or another approved arrangement can be selected. Decide which parts need ventilation before choosing the proportions. An operable side casement must clear the exterior wall and any nearby obstructions.",
      "Projection changes how the assembly is supported and protected from weather. The seat-board construction, insulation, roof or cap and flashing connections should be described separately from the glass and frame selections.",
    ],
    hardware: [
      [
        "Operating side units",
        "Choose the operator and lock for each opening section rather than assuming all three portions move.",
      ],
      [
        "Connections between sections",
        "Joining components maintain the planned angles and must suit the approved assembly.",
      ],
      [
        "Support system",
        "The support arrangement is project-specific and should be identified with the installation scope.",
      ],
      [
        "Head and seat details",
        "These complete the projecting enclosure and need coordinated insulation and weather protection.",
      ],
    ],
    options: [
      [
        "Projection and angle",
        "Choose the depth with the room layout and exterior elevation; do not infer it from a front-view photograph.",
      ],
      [
        "Centre/side proportions",
        "A wider fixed centre emphasizes the view, while wider operable sides change ventilation and frame divisions.",
      ],
      [
        "Glazing consistency",
        "Coordinate tint, coatings and privacy across all sections, with suitable ratings for each selected unit.",
      ],
      [
        "Grilles",
        "Confirm how patterns meet across angled corners and whether they align with other front-elevation windows.",
      ],
      [
        "Seat and trim",
        "Specify the visible seat finish, jambs and casing, including how the new work meets the existing wall.",
      ],
      [
        "Roof or cap",
        "Include the exterior top finish and flashing; it is not automatically included in a basic unit price.",
      ],
    ],
    installation: [
      "Replacing an existing bay in the same opening is different from converting a flat wall opening into a projection. The conversion can introduce support, exterior finish and structural work that a like-for-like price does not cover.",
      "Review a section drawing showing the head, seat, projection and wall connections. At handover, inspect the finish around the assembly and operate each moving section. Ask which parts of the completed scope are covered by the product and installation documents.",
    ],
    questions: [
      [
        "Can any flat window become a bay?",
        "The opening, wall, support and exterior conditions must be assessed first. A projecting assembly may require a different construction scope.",
      ],
      [
        "Do all bay sections open?",
        "No. The fixed and operating arrangement is selected as part of the design. A fixed centre with opening sides is one possible layout.",
      ],
      [
        "Can I use a standard maximum-width table?",
        "The limits depend on the component units, angles, projection and support. Approve the complete assembly drawing rather than adding unrelated component maxima.",
      ],
      [
        "What should the price include?",
        "Clarify the unit, support, head or roof finish, seat-board insulation, flashing, trim, removal and installation. Compare the same complete scope between quotes.",
      ],
    ],
  },
  bow: {
    construction: [
      "A bow forms a softer curve from several repeated window sections. The number and width of those sections establish its appearance, while the combination of fixed and operating units determines how it ventilates.",
      "More panels introduce more frame divisions and joints. Compare the view from the seating position inside the room: a broad outside span does not necessarily mean a broad uninterrupted view through the glass.",
      "The projecting enclosure needs a coordinated head, seat, support and weatherproofing plan. A smooth-looking curve is the result of controlled alignment across all the sections and their connections, not simply a row of independent windows.",
    ],
    hardware: [
      [
        "Selected operating panels",
        "Identify each opening section on the drawing and specify the applicable operators and locks.",
      ],
      [
        "Panel connections",
        "Maintain the curve and coordinate the sightlines between repeated units.",
      ],
      [
        "Structural support",
        "Must suit the complete projection and weight of the glazing assembly.",
      ],
      [
        "Head/seat enclosure",
        "Requires weather protection, insulation and finishing appropriate to the connection with the home.",
      ],
    ],
    options: [
      [
        "Number of sections",
        "Compare the rhythm of fewer wider sections with more narrow sections at the planned overall span.",
      ],
      [
        "Opening pattern",
        "Place operable sections where they can be reached and where ventilation is useful.",
      ],
      [
        "Projection depth",
        "Review the interior ledge and exterior encroachment along with the curved elevation.",
      ],
      [
        "Glass and finish",
        "Use coordinated glass appearance and frame finish across all panels unless a deliberate contrast is intended.",
      ],
      [
        "Grille pattern",
        "Check continuity through the curve; a pattern can appear different on angled outer sections.",
      ],
      [
        "Seat, roof and casing",
        "Specify the visible interior finish and the complete external cap and connection details.",
      ],
    ],
    installation: [
      "A dining-room bow can change where a table, curtains or seating fit. Use both a plan view and a front elevation to understand the projection and the position of the operating handles.",
      "For replacement, compare the existing supporting structure and roof detail with the proposed assembly. During the final inspection, look along the curve for alignment, check the finish at every joint and operate all moving panels.",
    ],
    questions: [
      [
        "How does a bow differ from a bay?",
        "A bow uses several sections to form a gentler curve. A bay is typically more angular with a distinct central section. Compare projection, frame divisions and the complete construction scope.",
      ],
      [
        "Are all panels the same width?",
        "That is a design decision within the approved system. A drawing should identify every section and the resulting curve.",
      ],
      [
        "Can only some sections open?",
        "Yes, when supported by the selected assembly. Identify those sections before comparing cost or assuming how much ventilation the finished bow provides.",
      ],
      [
        "Why does a bow need its own installation scope?",
        "The projection, support, head, seat and multiple connections create work beyond fitting an individual flat window. Those details should be itemized.",
      ],
    ],
  },
};
export function deepenWindows(pages: ContentPage[]) {
  for (const p of pages) {
    const slug = p.path.split("/").filter(Boolean).at(-1)!;
    const d = details[slug];
    if (!d) continue;
    p.sections = p.sections.filter(
      (s) =>
        ![
          "Choose the frame, then the glass",
          "Installation and the complete quote",
        ].includes(s.title),
    );
    const additions: ContentSection[] = [
      {
        title: `Construction of ${p.title.toLowerCase()}`,
        paragraphs: d.construction,
      },
      {
        title: "Hardware, support and everyday operation",
        paragraphs: [
          "The following components explain what to compare in this configuration. The order specification identifies the exact supplied parts; an option listed here is not automatically included in every unit.",
        ],
        table: {
          headers: ["Component", "Its role in your window"],
          rows: d.hardware,
        },
      },
      {
        title: "Colours, glass, grilles and finishing choices",
        table: {
          headers: ["Selection", "What to decide for this style"],
          rows: d.options,
        },
        links: [
          { label: "Classic profile", href: "/windows/series/classic/" },
          { label: "Slim profile", href: "/windows/series/slim-profile/" },
          {
            label: "Double versus triple glazing",
            href: "/compare/double-vs-triple-pane/",
          },
        ],
      },
      {
        title: `Installing ${p.title.toLowerCase()}`,
        paragraphs: d.installation,
        links: [
          {
            label: "Replacement methods and finishing",
            href: "/installation/window-replacement/",
          },
          {
            label: "Compare retrofit and full-frame replacement",
            href: "/compare/retrofit-vs-full-frame/",
          },
        ],
      },
    ];
    const e = (
      energy as Record<string, { rows: string[][]; display: boolean }>
    )[slug];
    if (e?.display)
      additions.push({
        title: "Configuration energy-performance references",
        paragraphs: [
          "These figures are reference ranges for researched glazing configurations, not a rating for every size or option. Select a model-specific record before ordering. U-factor units were not identified in the reference table, so confirm the report units before comparing these figures with another quote. No annual Most Efficient designation is inferred from this table.",
        ],
        table: {
          headers: [
            "Glazing reference",
            "Energy Rating (ER)",
            "U-factor · units to confirm",
            "SHGC",
          ],
          rows: e.rows,
        },
        links: [
          {
            label: "Read window energy ratings",
            href: "/windows/energy-efficiency/",
          },
        ],
      });
    else
      additions.push({
        title: "Performance of the selected assembly",
        paragraphs: [
          slug === "double-hung"
            ? "Request the performance record matching the selected double-hung frame, glass and dimensions. A rating for a single-hung window does not establish the performance of a double-hung assembly."
            : `A universal rating is not assigned to ${p.title.toLowerCase()}. ${slug === "bay" || slug === "bow" ? "The component windows and the projecting enclosure must be reviewed together; a component rating does not describe the support, roof and seat construction." : "The actual glass, frame, dimensions and opening configuration establish which performance record applies."}`,
        ],
        links: [
          {
            label: "Understand configuration ratings",
            href: "/windows/energy-efficiency/",
          },
        ],
      });
    p.sections.splice(2, 0, ...additions);
    p.faq = [...d.questions, ...(p.faq ?? []).slice(1)];
    p.related = [
      ...new Set([
        ...p.related,
        "/windows/series/",
        "/resources/care-guide/",
        "/blinds/",
      ]),
    ];
    p.review =
      "Expanded technical information needs exact Factory Lane configuration/document matching before indexing; own individual operation footage will follow filming.";
  }
}
