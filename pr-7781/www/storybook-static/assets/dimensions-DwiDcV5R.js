import{u as n,j as e}from"./index-BjkvjAaB.js";import{M as o,C as h}from"./blocks-o98LLjuz.js";import{C as d,W as s}from"./dimensions.stories-BhelDSi0.js";import"./iframe-CS_l3HPs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./index-7kMAhgqw.js";import"./ChartSizeDimensions-U_EK4DW6.js";import"./zIndexSlice-DOZPSD3i.js";import"./throttle-BXJlRBBH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgtyltQG.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DD8VJnt8.js";import"./RechartsWrapper-CLBKD2Mb.js";import"./axisSelectors-wY7xrwqz.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./Page-Cj8EiXz7.js";import"./Line-BrnJb__0.js";import"./Layer-ClmpeZAQ.js";import"./Curve-Bkeet_Vy.js";import"./types-Bij1NlAO.js";import"./step-D4hiIBbL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CucVzI_L.js";import"./Label-CLB3gtSD.js";import"./Text-Cft38Vb6.js";import"./DOMUtils-Ufje3btQ.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./ZIndexLayer-DIN_R5pI.js";import"./useAnimationId-BcraNq1p.js";import"./ActivePoints-BQR6yZd5.js";import"./Dot-uq10K0-V.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./ErrorBarContext-CU42u084.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./getRadiusAndStrokeWidthFromDot-CGFjgpgY.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";import"./XAxis-VVNKgX_Z.js";import"./CartesianAxis-DcHbl7Yp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CfLQ1gwS.js";import"./Legend-qyYT98W7.js";import"./Symbols-BmB__XbX.js";import"./symbol-K873wObj.js";import"./useElementOffset-DFm-Hwrm.js";import"./uniqBy-DAztU44K.js";import"./iteratee-CgfSsQVK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
