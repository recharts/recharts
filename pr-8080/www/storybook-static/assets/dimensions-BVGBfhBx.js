import{u as n,j as e}from"./index-Bj2w_CMq.js";import{M as o,C as h}from"./blocks-Csy7YoSM.js";import{C as d,W as s}from"./dimensions.stories-Bra-7BQl.js";import"./iframe-BzJSp-Lb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./index-DTL6jccP.js";import"./ChartSizeDimensions-DU9xRYhU.js";import"./zIndexSlice-CpY4G_41.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./throttle-BdS6UYxD.js";import"./ComposedChart-BGxC8J4N.js";import"./RechartsWrapper-LKbuKCMS.js";import"./axisSelectors-Dmo5ac34.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./Page-Cj8EiXz7.js";import"./Line-BVjDL0Y0.js";import"./Layer-Ci5AF7LX.js";import"./Curve-DdA-p64w.js";import"./types-DTueBMDQ.js";import"./step-CKjxAWSD.js";import"./path-DyVhHtw_.js";import"./activeStyles-B_Yk1DNA.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./dataEntryStyles-eQjR1qV2.js";import"./useAnimationId-vzOulJcL.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./ActiveShapeUtils-CPEFsget.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./XAxis-CLk9ccVg.js";import"./CartesianAxis-ImLT1R94.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DH3wuMUO.js";import"./Legend-V6chc68W.js";import"./useElementOffset-DR9OLuHh.js";import"./uniqBy-CSQkScZ5.js";import"./iteratee-xpgxqzFE.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
