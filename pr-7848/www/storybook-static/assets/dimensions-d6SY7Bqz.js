import{u as n,j as e}from"./index-D70ayFyX.js";import{M as o,C as h}from"./blocks-CiXgcztH.js";import{C as d,W as s}from"./dimensions.stories-DMem-J9n.js";import"./iframe-DyNflmpD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./index-D1o802DX.js";import"./ChartSizeDimensions-FZ0wItDi.js";import"./zIndexSlice-DcbzUDl1.js";import"./throttle-JOKyqjkh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DK3vhTkG.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./Page-Cj8EiXz7.js";import"./Line-BGuS8g8Y.js";import"./Layer-BAK3mXOF.js";import"./Curve-tt8V9XJv.js";import"./types-BmhrOP68.js";import"./step-Cw2SmsXu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bg7iXKcU.js";import"./Label-8baFJ3SD.js";import"./Text-DubbQCtu.js";import"./DOMUtils-CnMp_f2C.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./ZIndexLayer-BkImCK5k.js";import"./useAnimationId-B6Hjzqdy.js";import"./ActivePoints-CZJUt6u2.js";import"./Dot-DiXQ237y.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getRadiusAndStrokeWidthFromDot-D8_lJPIV.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./useGraphicalItemIdentity-BUorwys7.js";import"./XAxis-BRq0uwwt.js";import"./CartesianAxis-FmtEoT3c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DRbcnQBN.js";import"./Legend-CoVvwsm0.js";import"./Symbols-CjUN-vzP.js";import"./symbol-tC-AzMw7.js";import"./useElementOffset-yI9njwCE.js";import"./uniqBy-3XMkSlBq.js";import"./iteratee-CgqxdBPn.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
