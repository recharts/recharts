import{u as n,j as e}from"./index-DmS674Oh.js";import{M as o,C as h}from"./blocks-n9_Sa5V8.js";import{C as d,W as s}from"./dimensions.stories-YpQB8Vlw.js";import"./iframe-C0YxDW4G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./index-B97k9itH.js";import"./ChartSizeDimensions-BjQCH8R8.js";import"./zIndexSlice-DZlnymAS.js";import"./throttle-DOQHZSoJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D72s1HZM.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./Page-Cj8EiXz7.js";import"./Line-Cpl-VXWr.js";import"./Layer-tJBN4qpr.js";import"./Curve-ID0kLGRf.js";import"./types-CmslNM9O.js";import"./step-BuTfKpR_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNNl8m9z.js";import"./Label-gEQqlFEh.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./ZIndexLayer-D7SEoPy2.js";import"./useAnimationId-BpnQNYpV.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./XAxis-Cpmqfpq_.js";import"./CartesianAxis-d866ov5z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DweGkw3n.js";import"./Legend-C9ri1cZo.js";import"./Symbols-CbOdKhju.js";import"./symbol-CwLocrbc.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
