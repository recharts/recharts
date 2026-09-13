import{u as n,j as e}from"./index-CGn9r27F.js";import{M as o,C as h}from"./blocks-H2uBkA8a.js";import{C as d,W as s}from"./dimensions.stories-BRfJkhZt.js";import"./iframe-jjE6mnhE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./index-CQ_ODmEo.js";import"./ChartSizeDimensions-CD4Djkqq.js";import"./zIndexSlice-BF8b2iUS.js";import"./throttle-DkPV1tJ5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DrW6c44U.js";import"./isWellBehavedNumber-D962mg0S.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CT0KVNUw.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Page-Cj8EiXz7.js";import"./Line-B1oFq1NW.js";import"./Layer-DvjfGsuf.js";import"./Curve-CIYNdT84.js";import"./types-D-bzS3aM.js";import"./step-Bkxoj6hz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKtAdJL6.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./DOMUtils-ClCL_aT_.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./ZIndexLayer-OM7L_4ys.js";import"./useAnimationId-B8D6e613.js";import"./ActivePoints-DAEG3IaC.js";import"./Dot-D5qpHCDc.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getRadiusAndStrokeWidthFromDot-B-GOq11T.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";import"./XAxis-BmSvbO1p.js";import"./CartesianAxis-Ce-_Po8B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-lyfbCDEa.js";import"./Legend-DrM0jSD_.js";import"./Symbols-XFhoAaGU.js";import"./symbol-BHFAoXrD.js";import"./useElementOffset-BncKUbAl.js";import"./uniqBy-BRtWYXzE.js";import"./iteratee-BRoualQB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
