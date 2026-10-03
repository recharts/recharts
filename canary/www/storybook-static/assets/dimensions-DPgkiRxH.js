import{u as n,j as e}from"./index-BbYF9QnP.js";import{M as o,C as h}from"./blocks-BaJzU2Au.js";import{C as d,W as s}from"./dimensions.stories-DlW1t3rF.js";import"./iframe-SCBQwNxQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./index-B0bY_C-Z.js";import"./ChartSizeDimensions-D0KJ55_q.js";import"./zIndexSlice-j2Iu_2in.js";import"./throttle-CzCySKF_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./isWellBehavedNumber-DvdKXsqM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DL5-9kqo.js";import"./RechartsWrapper-BlKrxgAY.js";import"./axisSelectors-DLhQ9sAD.js";import"./d3-scale-G26x6J9Q.js";import"./index-B6uIZp6g.js";import"./renderedTicksSlice-DJfakFhE.js";import"./index-CE5ovKc5.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./Page-Cj8EiXz7.js";import"./Line-Ioxo2vHg.js";import"./Layer-Cqwrwd-u.js";import"./Curve-DfnFB90y.js";import"./types-tzKuPEFf.js";import"./step-x-If1Moz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wlp1qaKk.js";import"./Label-5iI9wFuI.js";import"./Text-CXiXfLVx.js";import"./DOMUtils-htjTn9rf.js";import"./useId-GXBIOTNS.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./ZIndexLayer-D6bO2lss.js";import"./useAnimationId-DXE0JH3K.js";import"./ActivePoints-DzK6hILC.js";import"./Dot-BvkLNrn9.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./ErrorBarContext-SniQgvjJ.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./getRadiusAndStrokeWidthFromDot-BJxhJQao.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./XAxis-Cc0l9D0i.js";import"./CartesianAxis-Cxx7AUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CjkWE18a.js";import"./Legend-DWfjcyPd.js";import"./Symbols-B3tjl2Qz.js";import"./symbol-WqTKNL9g.js";import"./useElementOffset-B4lloxY7.js";import"./uniqBy-DusnyNSE.js";import"./iteratee-C3MB5p7e.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
