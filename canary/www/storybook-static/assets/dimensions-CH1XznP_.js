import{u as n,j as e}from"./index-DFCQBOLp.js";import{M as o,C as h}from"./blocks-DqOE099D.js";import{C as d,W as s}from"./dimensions.stories-D4X7Ty8-.js";import"./iframe-Dc30QV19.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./index-LKWh_pde.js";import"./ChartSizeDimensions-BvAw0ztD.js";import"./zIndexSlice-CpA2ZBZb.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./throttle-WMkM63z_.js";import"./ComposedChart-DaHY5lvU.js";import"./RechartsWrapper-BRR6oB9d.js";import"./axisSelectors-BahrCffV.js";import"./polarAxisSelectors-DgLFgBab.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BSORqksa.js";import"./index-C7W3-csu.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./Page-Cj8EiXz7.js";import"./Line-Dt1yHtoT.js";import"./getRadiusAndStrokeWidthFromDot-EGGU3KdZ.js";import"./Layer-Ckk2aNrm.js";import"./Curve-C3EkNIPD.js";import"./types-Df_aU1u_.js";import"./step-DiRHFC6W.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-m1FbV_av.js";import"./Label-pzKHNVcm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./ActivePoints-BEziX1h5.js";import"./Dot-DSqKqZYM.js";import"./activeStyles-CSTRknfO.js";import"./useAnimationId-dTayRcrW.js";import"./Symbols-DoXC1ptL.js";import"./symbol-Bi8SUrQz.js";import"./ErrorBarContext-CnjMgqWz.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./XAxis-BcaW8pnZ.js";import"./CartesianAxis-CybNaUvq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-4iRuFsIi.js";import"./Legend-BagAQWPe.js";import"./useElementOffset-zZqt_kY_.js";import"./uniqBy-CFq97YsS.js";import"./iteratee-DUr8YIIJ.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
