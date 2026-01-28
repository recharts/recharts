import{e as t}from"./iframe-C4IWMahh.js";import{T as l}from"./Text-TpjxoAAm.js";import{S as s}from"./arrayEqualityCheck-0GnG-RUv.js";import{R as o}from"./RechartsHookInspector-CpFOwYB5.js";const c={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},breakAll:{description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},children:{description:`The text content to render.
Can be a string or number. Numbers will be converted to strings.
undefined or null values will result in no text being rendered.`,table:{type:{summary:"ReactNode"},category:"General"}},lineHeight:{description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"1em"}},defaultValue:"1em"},maxLines:{description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},scaleToFit:{description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},style:{description:`CSS styles to apply to the text element.
These styles are used for text measurement calculations when width constraints or scaleToFit are used.
Font-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.`,table:{type:{summary:"React.CSSProperties"},category:"Style"}},textAnchor:{description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.`,control:{type:"select"},options:["end","middle","inherit","start"],table:{type:{summary:'"end" | "inherit" | "middle" | "start"'},category:"General",defaultValue:{summary:"start"}},defaultValue:"start"},verticalAnchor:{description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"end"}},defaultValue:"end"},width:{description:"When width is specified, the text will automatically wrap by calculating the width of text.",table:{type:{summary:"number | string"},category:"General"}}},d={argTypes:c,component:l},e={render:n=>t.createElement(s,{width:500,height:300},t.createElement(l,{...n},n.content),t.createElement(o,null)),args:{breakAll:!1,lineHeight:"1em",maxLines:3,scaleToFit:!1,textAnchor:"start",verticalAnchor:"start",angle:0,width:200,y:50,x:50,content:"This is really, really, really, really, really, really, really, really, really long text"}};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <Surface width={500} height={300}>
        <Text {...args}>{args.content}</Text>
        <RechartsHookInspector />
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const u=["API"],f=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as A,f as C};
