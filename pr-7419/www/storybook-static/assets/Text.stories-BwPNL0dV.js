import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r,i}from"./isWellBehavedNumber-DnlveFza.js";import{n as a,t as o}from"./Text-BQ-KQmk_.js";var s;function c(){return(c=t((()=>{s={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},breakAll:{description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},children:{description:"The text content to render.\nCan be a string or number. Numbers will be converted to strings.\nundefined or null values will result in no text being rendered.\nWhen `textPath` is set, the content is rendered directly inside the SVG `textPath` element.",table:{type:{summary:`ReactNode`},category:`General`}},lineHeight:{description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
Ignored when \`textPath\` is set because the text is rendered along a single path.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`1em`}},defaultValue:`1em`},maxLines:{description:`Maximum number of lines to display when text wrapping is enabled.
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
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},scaleToFit:{description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},style:{description:"CSS styles to apply to the text element.\nThese styles are used for text measurement calculations when width constraints or scaleToFit are used.\nFont-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.\nWhen `textPath` is set, styles still apply to the rendered text, but only `scaleToFit` uses them for measurement.",table:{type:{summary:`React.CSSProperties`},category:`Style`}},textAnchor:{description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
This prop is also used when \`textPath\` is set.`,control:{type:`select`},options:[`end`,`middle`,`inherit`,`start`],table:{type:{summary:`"end" | "inherit" | "middle" | "start"`},category:`General`,defaultValue:{summary:`start`}},defaultValue:`start`},textPath:{description:"When set, renders the text along the SVG path described by this `d` attribute.\nIn path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.",control:{type:`text`},table:{type:{summary:`string`},category:`General`}},verticalAnchor:{description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
Ignored when \`textPath\` is set because the path controls the text's positioning.`,control:{type:`select`},options:[`end`,`middle`,`start`],table:{type:{summary:`"end" | "middle" | "start"`},category:`General`,defaultValue:{summary:`end`}},defaultValue:`end`},width:{description:"When width is specified, the text will automatically wrap by calculating the width of text.\nWhen `textPath` is set, this prop does not wrap or constrain the path text; it only affects scaling when `scaleToFit` is enabled.",table:{type:{summary:`number | string`},category:`General`}}}})))()}var l,u,d,f;function p(){return(p=t((()=>{l=e(n()),r(),a(),c(),u={argTypes:s,component:o},d={render:e=>l.createElement(i,{width:500,height:300},l.createElement(o,e,e.content)),args:{breakAll:!1,lineHeight:`1em`,maxLines:3,scaleToFit:!1,textAnchor:`start`,verticalAnchor:`start`,angle:0,width:200,y:50,x:50,content:`This is really, really, really, really, really, really, really, really, really long text`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`API`]})))()}p();export{d as API,f as __namedExportsOrder,u as default};