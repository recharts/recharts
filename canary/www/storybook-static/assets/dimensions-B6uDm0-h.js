import{u as n,j as e}from"./index-Djk8ADV9.js";import{M as o,C as h}from"./blocks-BLQq276g.js";import{C as d,W as s}from"./dimensions.stories-DtZABauu.js";import"./iframe-Cr4SLAPG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./index-COeoIdkq.js";import"./ChartSizeDimensions-BfM-i9s0.js";import"./zIndexSlice-DyLLhom_.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./throttle-m67LhZgN.js";import"./ComposedChart-fx4m_TFy.js";import"./RechartsWrapper-BMMPlSoi.js";import"./axisSelectors-DrKqMaOQ.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WAvM56kv.js";import"./index-kvmeuQQ0.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./Page-Cj8EiXz7.js";import"./Line-DD5o7CZ0.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Layer-CWQ0f2zH.js";import"./Curve-DJrcdmOM.js";import"./types-B6oZtPsa.js";import"./step-B4BPIBfx.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-IfVv-8UK.js";import"./Label-iIhWQC5W.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./activeStyles-aUydRVRE.js";import"./useAnimationId-kAVaPV6O.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./ErrorBarContext-6e7pSH1e.js";import"./SetGraphicalItem-C9um0bAO.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./XAxis-B99-G5ow.js";import"./CartesianAxis-Ds5qTBHM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CY62iJg-.js";import"./Legend-ClOcTqq5.js";import"./useElementOffset-CHpDveFz.js";import"./uniqBy-BO6YYRyn.js";import"./iteratee-DQY9n11K.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
