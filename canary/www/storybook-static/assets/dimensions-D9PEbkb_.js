import{u as n,j as e}from"./index-53rx7RDV.js";import{M as o,C as h}from"./blocks-DVWlGTHc.js";import{C as d,W as s}from"./dimensions.stories-DP8zlbdb.js";import"./iframe-BC-aHfbH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-RSdHgQ.js";import"./index-Dvj4AXX_.js";import"./index-C7cb-ZYS.js";import"./ChartSizeDimensions-DVsK8Ly8.js";import"./zIndexSlice-ALhwVSt9.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4x113t0l.js";import"./throttle-a7-GQed4.js";import"./ComposedChart-DeGO-OTb.js";import"./RechartsWrapper-B9wYdCxx.js";import"./axisSelectors-D-qF4r4u.js";import"./polarAxisSelectors-DEKrNeLt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BzoWDajH.js";import"./index-ByUj-B7C.js";import"./renderedTicksSlice-C3P53zmh.js";import"./index-BCHOiCIM.js";import"./CartesianChart-CLm_Ee8q.js";import"./ZIndexPortal-BGbnB8Y2.js";import"./CategoricalChart--pFm79aa.js";import"./Page-Cj8EiXz7.js";import"./Line-DxnNynrS.js";import"./Layer-C9TfFY4n.js";import"./Curve-C_X7-rik.js";import"./types-CqRAzbay.js";import"./step-C9BhyMMw.js";import"./path-DyVhHtw_.js";import"./LabelList-BVv1SXpb.js";import"./Label-Dza1R5dY.js";import"./Text-DARS5OxC.js";import"./pageBackground-Dg-zxncN.js";import"./ZIndexLayer-PUdKiesE.js";import"./dataEntryStyles-xanZasRf.js";import"./ActivePoints-CYbwYUVg.js";import"./Dot-DCOyOMOq.js";import"./activeStyles-1D-OxyIQ.js";import"./useAnimationId-Dd0TyqHP.js";import"./Symbols-BzxAfvdI.js";import"./symbol-DmUuFZcN.js";import"./RegisterGraphicalItemId-BsiO5PX-.js";import"./ErrorBarContext-C6fbu3f2.js";import"./SetGraphicalItem-B0IeAy6L.js";import"./getRadiusAndStrokeWidthFromDot-B9BWJY7Y.js";import"./ActiveShapeUtils-DJ-tBBEV.js";import"./useEffectiveDataKey-CqM8v6g-.js";import"./XAxis-q4A2d4Zb.js";import"./CartesianAxis-CunRUAHg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-7iDdsVaV.js";import"./Legend-DcT4Ux8D.js";import"./useElementOffset-CkUyr6Xi.js";import"./uniqBy-BX-k5AJw.js";import"./iteratee-BGB8LHfi.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
