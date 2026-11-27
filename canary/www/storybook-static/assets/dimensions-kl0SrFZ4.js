import{u as n,j as e}from"./index-izvmfFUi.js";import{M as o,C as h}from"./blocks-rAtH-70R.js";import{C as d,W as s}from"./dimensions.stories-BVGYtvzq.js";import"./iframe-C6tckEdC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./index-DvK4dXF2.js";import"./ChartSizeDimensions-CQoGIVTz.js";import"./zIndexSlice-BRbRDCdD.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./throttle-CU3FfpOW.js";import"./ComposedChart-5VVWJpva.js";import"./RechartsWrapper-0oVlPs_v.js";import"./axisSelectors-BaS600qd.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-cNizIXDy.js";import"./index-DKLWww0Z.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./Page-Cj8EiXz7.js";import"./Line-DkURyhs0.js";import"./getRadiusAndStrokeWidthFromDot-vxIF-amO.js";import"./Layer-CZ4BpJHW.js";import"./Curve-hlfhz3O_.js";import"./types-DkdMor4N.js";import"./step-BdRt_Kf3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DEosnEmo.js";import"./Label-DaLGTh2V.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./ActivePoints-BDUd4tjN.js";import"./Dot-Byjprri8.js";import"./activeStyles-Cw05xMjp.js";import"./useAnimationId-Cexbjbj0.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./ErrorBarContext-CFH2x5Ed.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./useEffectiveDataKey-C_xG5lbB.js";import"./XAxis-DzYRQrky.js";import"./CartesianAxis-HAEOo14B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-rcBaqYZ7.js";import"./Legend-CcuFitOG.js";import"./useElementOffset-ox168otc.js";import"./uniqBy-BwUTEk2q.js";import"./iteratee-Chh9ZJty.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
