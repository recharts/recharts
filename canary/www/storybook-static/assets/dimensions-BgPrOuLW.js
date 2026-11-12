import{u as n,j as e}from"./index-D2dZM7EE.js";import{M as o,C as h}from"./blocks-CuAsKNga.js";import{C as d,W as s}from"./dimensions.stories-6_dm0Y3g.js";import"./iframe-C9QnkkRp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./index-WorF6OpA.js";import"./ChartSizeDimensions-Gb3_BU5R.js";import"./zIndexSlice-BYQlmGuM.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./ComposedChart-Gx1n6SiU.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./Page-Cj8EiXz7.js";import"./Line-wEa7wjvf.js";import"./Layer-CEkcTjee.js";import"./Curve-Dqipz6v0.js";import"./types-DqaK-59q.js";import"./step-DY5nvAcp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BFdezSvK.js";import"./Label-yo2OQSgL.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./activeStyles-CN7lMIFZ.js";import"./useAnimationId-CShc60ZQ.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./ErrorBarContext-BjyFMzrh.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./XAxis-49PSd8B9.js";import"./CartesianAxis-CyUzu-Nz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-cnj8Nk2R.js";import"./Legend-CGXNIB2v.js";import"./useElementOffset-yJR4mmFg.js";import"./uniqBy-B7emlUis.js";import"./iteratee-MiGwBwmm.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
