import{u as n,j as e}from"./index-DOnf7tM2.js";import{M as o,C as h}from"./blocks-BNzMM9pa.js";import{C as d,W as s}from"./dimensions.stories-6iojiXse.js";import"./iframe-sVYf0T4K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./index-ByFnZ7XW.js";import"./ChartSizeDimensions-Dum5Y6aK.js";import"./zIndexSlice-DCYn61_Z.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BNjxkguA.js";import"./throttle-B5u3GWWh.js";import"./ComposedChart-79IdZ4r_.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./axisSelectors-DeiSy_-h.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaVFs3zj.js";import"./index-hsh9HVaA.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./Page-Cj8EiXz7.js";import"./Line-ChZJFWD1.js";import"./Layer-BIjeoEg2.js";import"./Curve-DRJ9KjAo.js";import"./types-ZHVwXJa3.js";import"./step-DuwXt4tv.js";import"./path-DyVhHtw_.js";import"./activeStyles-BGq7qwld.js";import"./Label-DWNcL86V.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./dataEntryStyles-4CyLqaB1.js";import"./useAnimationId-D71D5MAL.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./XAxis-DBp8xvXF.js";import"./CartesianAxis-BI1VsAr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CNIo2SjU.js";import"./Legend-C9mntufH.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
