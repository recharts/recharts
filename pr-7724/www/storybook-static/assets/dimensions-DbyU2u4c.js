import{u as n,j as e}from"./index-Oj3LE95C.js";import{M as o,C as h}from"./blocks-BbvEZoZl.js";import{C as d,W as s}from"./dimensions.stories-BGN-14lA.js";import"./iframe-BMDGt33G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./index-B-bSR3iB.js";import"./ChartSizeDimensions-CtyKVNRp.js";import"./zIndexSlice-DCVNKZSi.js";import"./throttle-DHXzdyrx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./isWellBehavedNumber-D73nv25y.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B_FiSDXS.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./Page-Cj8EiXz7.js";import"./Line-DesYXgxV.js";import"./Layer-CjUZiXYs.js";import"./Curve-CIJakMM0.js";import"./types-BuxhmSle.js";import"./step-B_y4L6H0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DPSFxYpd.js";import"./Label-l14yVQ5q.js";import"./Text-DYkDw-5j.js";import"./DOMUtils-DBrlboks.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./ZIndexLayer-CaEles3w.js";import"./useAnimationId-B5h3AUKS.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BLwPYlxb.js";import"./CartesianAxis-D9IiMPGB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bb9GrcYH.js";import"./Legend-BLAXFxYE.js";import"./Symbols-1hycImks.js";import"./symbol-DkqqIOyx.js";import"./useElementOffset-BAEYehLF.js";import"./uniqBy-BujAWGSb.js";import"./iteratee-Bncw5-E9.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
