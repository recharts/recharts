import{R as n}from"./iframe-C9f0XnT9.js";import{T as s}from"./Text-BBa2fCF5.js";import{S as o}from"./zIndexSlice-CHa-NfW0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-OglZgdvE.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./throttle-KQYU95ys.js";const l={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the text, for example to keep a label readable on top of a filled shape.\n\n- `true` draws the background with default styles.\n  The fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, a `padding` and a `zIndex`.\n- `false` or `undefined` draws no background.\n\nThe background is sized after the text renders, so it follows the content, font, line breaks and rotation.\nFor `textPath`, the background follows the same path as the text.\nIt is not rendered during server-side rendering.\n\nInside a `Label` or `LabelList` in a chart, the rectangle renders in a zIndex layer below the label,\nso overlapping labels never cover each other's text.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},breakAll:{description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},children:{description:"The text content to render.\nCan be a string or number. Numbers will be converted to strings.\nundefined or null values will result in no text being rendered.\nWhen `textPath` is set, the content is rendered directly inside the SVG `textPath` element.",table:{type:{summary:"ReactNode"},category:"General"}},halo:{description:"Draws an outline around the letters of the text, as a lighter alternative to `background`.\n\n- `true` draws the halo with default styles.\n  The stroke is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts `stroke`, `strokeWidth`, `strokeOpacity` and `strokeLinejoin` to set them explicitly.\n- `false` or `undefined` draws no halo.\n\nUnlike `background`, a halo needs no measurement, so it is drawn during server-side rendering.",table:{type:{summary:"TextHaloProps | false | true"},category:"General"}},lineHeight:{description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
Ignored when \`textPath\` is set because the text is rendered along a single path.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"1em"}},defaultValue:"1em"},maxLines:{description:`Maximum number of lines to display when text wrapping is enabled.
When text exceeds this limit, it will be truncated with an ellipsis (…).

**Important requirements for ellipsis truncation:**
- \`width\` must be defined (no effect when width is undefined)
- \`scaleToFit\` must be false (when scaleToFit is true, maxLines is bypassed)
- Text must actually overflow the specified maxLines or width constraints

**Truncation behavior:**
- Uses binary search to find the optimal truncation point
- Adds ellipsis (…) at the end of the truncated text
- Ensures the truncated text + ellipsis fits within the constraints

**Interaction with other props:**
- When \`scaleToFit\` is true, this property is ignored
- Requires \`width\` to be set for line breaking to occur
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},scaleToFit:{description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},style:{description:"CSS styles to apply to the text element.\nThese styles are used for text measurement calculations when width constraints or scaleToFit are used.\nFont-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.\nWhen `textPath` is set, styles still apply to the rendered text, but only `scaleToFit` uses them for measurement.",table:{type:{summary:"React.CSSProperties"},category:"Style"}},textAnchor:{description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
This prop is also used when \`textPath\` is set.`,control:{type:"select"},options:["end","middle","inherit","start"],table:{type:{summary:'"end" | "inherit" | "middle" | "start"'},category:"General",defaultValue:{summary:"start"}},defaultValue:"start"},textPath:{description:"When set, renders the text along the SVG path described by this `d` attribute.\nIn path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},verticalAnchor:{description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
Ignored when \`textPath\` is set because the path controls the text's positioning.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"end"}},defaultValue:"end"},width:{description:"When width is specified, the text will automatically wrap by calculating the width of text.\nWhen `textPath` is set, this prop does not wrap or constrain the path text; it only affects scaling when `scaleToFit` is enabled.",table:{type:{summary:"number | string"},category:"General"}}},w={argTypes:l,component:s},e={render:t=>n.createElement(o,{width:500,height:300},n.createElement(s,{...t},t.content)),args:{breakAll:!1,lineHeight:"1em",maxLines:3,scaleToFit:!1,textAnchor:"start",verticalAnchor:"start",angle:0,width:200,y:50,x:50,content:"This is really, really, really, really, really, really, really, really, really long text"}},T=["API"];var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <Surface width={500} height={300}>
        <Text {...args}>{args.content}</Text>
      </Surface>;
  },
  args: {
    breakAll: false,
    lineHeight: '1em',
    maxLines: 3,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'start',
    angle: 0,
    width: 200,
    y: 50,
    x: 50,
    content: 'This is really, really, really, really, really, really, really, really, really long text'
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{e as API,T as __namedExportsOrder,w as default};
