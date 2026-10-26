import{u as n,j as e}from"./index-sN0qo_bf.js";import{M as o,C as h}from"./blocks-BlVsbx5E.js";import{C as d,W as s}from"./dimensions.stories-CDJyqdsD.js";import"./iframe-Dop2FCJV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./index-CjK1kGrZ.js";import"./ChartSizeDimensions-CWMSMcX9.js";import"./zIndexSlice-nsfMN2si.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./throttle-D7xfBLch.js";import"./ComposedChart-Om7t0Gx9.js";import"./RechartsWrapper-ziCTvKBS.js";import"./axisSelectors-CeHIB0K5.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./Page-Cj8EiXz7.js";import"./Line-D5imx7T5.js";import"./Layer-B-MIuFUl.js";import"./Curve-0Qnio8ZJ.js";import"./types-BszWz-w9.js";import"./step-CV2mnDR5.js";import"./path-DyVhHtw_.js";import"./LabelList-DYliLjPH.js";import"./Label-BDgfZPfI.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./dataEntryStyles-DYOt2-v1.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./activeStyles-DnOLUEXC.js";import"./useAnimationId-CQv1eLqe.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./XAxis-BotDK1s5.js";import"./CartesianAxis-DU3QwiMj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-B3k634-q.js";import"./Legend-BueZ2WTQ.js";import"./useElementOffset-D9LA4JWt.js";import"./uniqBy-BuyM_tyo.js";import"./iteratee-By-O6bqn.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
