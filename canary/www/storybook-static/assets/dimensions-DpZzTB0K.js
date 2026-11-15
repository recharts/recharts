import{u as n,j as e}from"./index-BFTv1LcH.js";import{M as o,C as h}from"./blocks-BK4T0k5r.js";import{C as d,W as s}from"./dimensions.stories-YZZ4s1-n.js";import"./iframe-CVlx7bU_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./index-Ddvmj82W.js";import"./ChartSizeDimensions-BD25vRRG.js";import"./zIndexSlice-CQ18OEDz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7sOSs16A.js";import"./throttle-CmXgXLjc.js";import"./ComposedChart-Dp5ziSq3.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./axisSelectors-BJrugk6A.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkwZs2c8.js";import"./index-2xma1Lio.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./Page-Cj8EiXz7.js";import"./Line-coLulIXR.js";import"./Layer-CTBEbigF.js";import"./Curve-ByMphQa4.js";import"./types-BMFpEHKT.js";import"./step-B-eN0hXo.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CMoIO_lw.js";import"./Label-DOtvRCj8.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./activeStyles-5RuXhDxF.js";import"./useAnimationId-JkE7TXZo.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./ErrorBarContext-DzVhOjsh.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./XAxis-DMF0oTJ1.js";import"./CartesianAxis-BdpTb-nX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bw2rcCFX.js";import"./Legend--dqzDeOl.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
