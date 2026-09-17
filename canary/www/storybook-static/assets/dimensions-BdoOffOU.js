import{u as n,j as e}from"./index-8_kN_RmW.js";import{M as o,C as h}from"./blocks-WjITJ6qA.js";import{C as d,W as s}from"./dimensions.stories-NkAknmH4.js";import"./iframe-BWgNvoHd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./index-FyKmNOxh.js";import"./ChartSizeDimensions-DeW2QAqj.js";import"./zIndexSlice-C7P0LeTp.js";import"./throttle-Bg-BpQUC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CDicU1zI.js";import"./RechartsWrapper-CqggqYnG.js";import"./axisSelectors-Dam-iDrH.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./Page-Cj8EiXz7.js";import"./Line-C5JxjXkq.js";import"./Layer-C3eYLIIL.js";import"./Curve-3XxISmtt.js";import"./types-CrSccog6.js";import"./step-ChFfihmJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hZV-WKF8.js";import"./Label-B5Qmh4rZ.js";import"./Text-CY7tJJcL.js";import"./DOMUtils-Dr6Nulpk.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./useAnimationId-Bc7y922J.js";import"./ActivePoints-Cc4fx1EW.js";import"./Dot-B7IGFvAw.js";import"./RegisterGraphicalItemId-DD6KbxKE.js";import"./ErrorBarContext-CCrZclZc.js";import"./GraphicalItemClipPath-MkJi9iI4.js";import"./SetGraphicalItem-BxHdn_2c.js";import"./getRadiusAndStrokeWidthFromDot-D_8ZDval.js";import"./ActiveShapeUtils-BslnG83G.js";import"./useGraphicalItemIdentity-BBFCWIMQ.js";import"./XAxis-NaVI4shj.js";import"./CartesianAxis-ChN3yMr6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Cw1g73tC.js";import"./Legend-CrwpKrLS.js";import"./Symbols-DXOe_3B0.js";import"./symbol-BSkZIEXR.js";import"./useElementOffset-DTfG1d0_.js";import"./uniqBy-b4mUNSGI.js";import"./iteratee-BEUkWsOH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
