import{u as n,j as e}from"./index-X5gsbawY.js";import{M as o,C as h}from"./blocks-DwNkg6pN.js";import{C as d,W as s}from"./dimensions.stories-DmbTSCd7.js";import"./iframe-B8S5mZni.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./index-CiAWbHQN.js";import"./ChartSizeDimensions-Da6vqk4v.js";import"./zIndexSlice-C7WPWBHj.js";import"./throttle-DJQOHpml.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./isWellBehavedNumber-TBIenFex.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BFmInjuY.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./Page-Cj8EiXz7.js";import"./Line-BI9PEbOh.js";import"./Layer-DKzqyPeV.js";import"./Curve-Ba1VZ5w3.js";import"./types-BZDZh7Dp.js";import"./step-D9jBRyHm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPa7Tabb.js";import"./Label-DZ6C1Cc6.js";import"./Text-DDGxlEP5.js";import"./DOMUtils-DwuCUUr8.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./ZIndexLayer-OLi9LTWb.js";import"./useAnimationId-DSiNOIGc.js";import"./ActivePoints-0LdIyAY7.js";import"./Dot-Dq-zru-b.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./ErrorBarContext-XJ_0JE40.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getRadiusAndStrokeWidthFromDot-BV5HZWc_.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";import"./XAxis-Del5mp5I.js";import"./CartesianAxis-D2B7a931.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CXfsjvSU.js";import"./Legend-B9J4DJFB.js";import"./Symbols-AsGz6W8M.js";import"./symbol-dRXx8TTn.js";import"./useElementOffset-DPucxQk4.js";import"./uniqBy-RBk98CTS.js";import"./iteratee-w700QPS8.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
