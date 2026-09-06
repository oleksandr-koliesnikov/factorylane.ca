import type { ContentPage } from "../types";
// Each material/style combination explains a distinct buying decision.
const copy: Record<string, [string, string, string, string]> = {
  "steel-traditional": [
    "For traditional steel, begin with the stamped panel pattern and how its divisions relate to the proposed glass insert. The panel layout should remain balanced at your door’s actual height and width. Review the exact design instead of expecting every traditional steel slab to share the same proportions.",
    "A painted surface can connect the entrance to existing window trim without adding a woodgrain effect. Compare the colour on a sample, then examine the edges of raised or recessed details in side lighting. Those edges influence how strongly the panel pattern reads from the street.",
    "When sidelites are included, coordinate their glazing with the steel leaf’s panel lines. A repeated decorative pattern should be shown in the complete elevation so the central insert does not appear disconnected from the narrow glass beside it.",
    "Bring a photograph that includes the porch, casing and nearby windows. Ask for the selected steel panel, paint, insert and hardware to be recorded together; the style direction alone is not the order specification.",
  ],
  "steel-modern": [
    "A modern steel direction places more emphasis on the uninterrupted painted surface and deliberate glass placement. Compare the exact slab design in realistic light: a narrow vertical insert, horizontal lites and a solid face create very different entrances even when all are described as modern.",
    "Resolve the handle and lock preparation early. A long pull or a minimal-looking handle must still work with the selected locking system and the panel construction. Its position should be coordinated with the glass rather than fitted into whatever space remains after the design is chosen.",
    "The frame and surrounding trim can reinforce the simple surface or make it look more heavily bordered. Compare the complete entrance drawing with the adjacent window frames. The paint sample should be approved independently of any colour shown in an inspiration photograph.",
    "For the showroom discussion, bring the desired glass geometry and a clear image of the exterior wall. Confirm the available steel model, approved hardware preparation and finish before treating the visual concept as an orderable assembly.",
  ],
  "steel-contemporary": [
    "A contemporary steel entrance can use a straightforward painted panel as the background for a more expressive glass choice. Select the feature you want noticed first, then compare the other components at the same scale. An elaborate insert does not require equally prominent handles and trim.",
    "If the existing house combines several exterior materials, view the proposed steel finish beside them. A sample may read differently against masonry than against pale siding. The complete colour relationship matters more than whether the catalogue calls the design contemporary.",
    "Glass privacy deserves its own decision. Check transparent areas at the height where someone approaches the entrance, including sidelites. The decorative appearance of the pattern does not establish how much of the hallway remains visible after dark.",
    "Use the consultation to narrow the panel and insert combination, then identify the compatible lock and frame. Keep the design reference separate from the approved model record so the final supplied components are unambiguous.",
  ],
  "steel-craftsman": [
    "For a Craftsman-inspired steel door, study the relationship between the upper glazing and the lower stamped panels. The upper portion can bring light while retaining a more enclosed lower leaf. Its dimensions should be reviewed on the actual slab drawing, especially for a wider or taller entrance.",
    "A painted finish can emphasize the panel geometry without introducing a timber-like texture. Compare the grille or upper-lite divisions with the existing porch and casing. Additional decorative details should be included only when they are part of the selected steel model.",
    "The hardware should sit comfortably within the lower panel composition and remain practical to use. If a storm door is planned, verify handle clearance and compatibility with the primary steel entrance rather than assuming the outer layer will fit every arrangement.",
    "Bring the full porch photograph and any grille pattern you want to coordinate. Ask which panel, upper glass, paint and optional details are available together in the confirmed steel configuration.",
  ],
  "fiberglass-traditional": [
    "Traditional fiberglass offers a choice between a smoother painted direction and a textured surface where the selected model supports it. Compare the panel moulding and the texture together. A convincing wood-look composition depends on the actual grain and finishing system, not only a brown colour.",
    "For decorative glass, review how its perimeter fits within the moulded panels. A tall insert and a smaller upper insert leave different amounts of visible surface. The surrounding sidelites and transom should complement that balance rather than being selected as unrelated accessories.",
    "Take a textured sample toward natural light and compare the finish on raised and recessed areas. The interior face may need a different visual relationship with the hallway, so confirm which finish combinations are approved for the specific fiberglass model.",
    "Record the surface texture, finish process and glass collection with the door identifier. Ask for the applicable care guidance; a stained textured surface and a smooth painted fiberglass surface do not necessarily use the same maintenance procedure.",
  ],
  "fiberglass-modern": [
    "For modern fiberglass, compare the actual surface first. A smooth face can create a quieter composition, while a restrained textured design can introduce warmth without adding decorative panel detail. The model’s moulded geometry remains visible and should be judged at the proposed size.",
    "Place the glass and hardware on the same drawing. A narrow lite beside a long handle can create a strong vertical line, but its spacing and preparation must work with the selected fiberglass slab. A clean concept still requires an approved hardware and glazing combination.",
    "Review the finish under light from several directions. Reflections on a smooth surface and shadows in a textured one can change how the colour appears. Compare the frame, leaf and nearby windows as separate samples before approving a coordinated entrance.",
    "Bring a reference showing the desired proportions rather than only a preferred colour. Confirm the smooth or textured model, finish, glass layout and locking arrangement that can actually be supplied together.",
  ],
  "fiberglass-contemporary": [
    "A contemporary fiberglass entrance can combine a textured or smooth face with an individual glass and hardware direction. Decide whether the surface itself should be a feature. If the grain or finish is prominent, a simpler glass layout may provide the balance you prefer.",
    "Compare the inside face with the hallway and the outside face with the façade. The two views can lead to different priorities for colour and privacy. Any separate finishing arrangement must be approved for the chosen model rather than assumed from a photograph.",
    "Decorative glazing can change the entrance more than the panel category suggests. Inspect the clear and obscured portions, then compare matching sidelites where offered. Review the glass appearance and the fiberglass finish in the same lighting so the composition feels intentional.",
    "Use the design discussion to select the leading visual element and remove conflicting details. The final record should name the fiberglass surface, finish and compatible insert, along with the complete frame and hardware scope.",
  ],
  "fiberglass-craftsman": [
    "For a Craftsman fiberglass direction, the upper glazing, lower panels and surface texture should be considered as one composition. A textured skin may reinforce a timber-inspired appearance, while a smooth painted option can make the panel geometry more prominent. Compare the actual available models.",
    "Check the grain direction and moulded detail on a sample rather than judging only the catalogue elevation. The finish should suit the supplied surface. Decorative shelves or dentil-style features, where available, are model choices and should appear explicitly on the approved drawing.",
    "An upper glass arrangement can preserve a more private lower leaf, but its usefulness for daylight depends on the actual area and surrounding glazing. Compare the sidelites or transom if the hallway needs more light without changing the central panel proportions.",
    "Bring photographs of the porch structure and surrounding casing. Record the texture, panel, upper glass and optional decorative details as one approved fiberglass design, together with its finish-care instructions.",
  ],
  "fiberglass-shaped": [
    "For shaped fiberglass, first identify which part of the entrance is curved. A shaped operating leaf, a shaped frame and an arched transom over a rectangular leaf are different products. The intended composition needs an exact drawing before model availability can be established.",
    "The shape affects the panel and glass layout as well as the perimeter. Review the proposed proportions through the curved portion and confirm the permitted glazing and hardware arrangement. A rectangular model should not be assumed adaptable simply because the texture and colour are suitable.",
    "A woodgrain or painted finish must be coordinated across the shaped leaf and surrounding frame. At an existing entrance, include the curved casing and exterior transition in the measurement and finishing scope. Those details can make this a substantially different project from a rectangular replacement.",
    "Provide the existing opening photographs and any drawings, then follow the required template or final-measurement process. Approve the exact shape, fiberglass model, glass and frame before ordering custom components.",
  ],
};
export function specifyCatalogue(pages: ContentPage[]) {
  for (const p of pages) {
    const key = p.path.split("/")[2].replace(/-doors$/, "");
    const c = copy[key];
    if (!c) continue;
    for (const s of p.sections) {
      if (s.title === "From style to a specific door")
        s.paragraphs = s.paragraphs?.slice(0, 1);
      if (s.title.startsWith("Refine the")) s.paragraphs = c.slice(0, 2);
      if (
        [
          "Texture, grain and finish",
          "Painted steel and panel definition",
        ].includes(s.title)
      )
        s.paragraphs = [c[2]];
      if (s.title === "See the details in person") s.paragraphs = [c[3]];
    }
  }
}
