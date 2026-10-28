import{u as n,j as e}from"./index-DKCTMn44.js";import{M as o,C as h}from"./blocks-BAuFRvaD.js";import{C as d,W as s}from"./dimensions.stories-BjzbxS0K.js";import"./iframe-DbrRN1n8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./index-xhc0FShP.js";import"./ChartSizeDimensions-CUB90zVQ.js";import"./zIndexSlice-Du0Au1R-.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./throttle-DUdTYHJ7.js";import"./ComposedChart-BwB9uQDU.js";import"./RechartsWrapper-DlyIgJor.js";import"./axisSelectors-DK6uFkxV.js";import"./polarAxisSelectors-D77BuFKC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUENC00q.js";import"./index-M4gkvM-3.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./Page-Cj8EiXz7.js";import"./Line-C6WqqYHN.js";import"./Layer-Do_lw1Xj.js";import"./Curve-CoHdM9Ch.js";import"./types-DkNvVUMM.js";import"./step-I4MYWlIC.js";import"./path-DyVhHtw_.js";import"./LabelList-BgsnBCM1.js";import"./Label-A7WyPB0I.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./activeStyles-BV7TfXze.js";import"./useAnimationId-CvK-4pcw.js";import"./dataEntryStyles-CKR3qDl0.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./XAxis-D4Dr_tjl.js";import"./CartesianAxis-BCK1OBBy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DXpw8vqJ.js";import"./Legend-BV3ignIc.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
