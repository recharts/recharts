import{u as n,j as e}from"./index-DKmahnWL.js";import{M as o,C as h}from"./blocks-4Nl6zaUP.js";import{C as d,W as s}from"./dimensions.stories-BEHlB54j.js";import"./iframe-CO23d3n1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./index-D0uo_LWY.js";import"./ChartSizeDimensions-BT7paYLA.js";import"./zIndexSlice-DMSZKiVC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./throttle-B66_T3U8.js";import"./ComposedChart-D8Yj3pPk.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./axisSelectors-DJQVEMl6.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./Page-Cj8EiXz7.js";import"./Line-9yhlogYr.js";import"./Layer-CYlWB893.js";import"./Curve-4EA_oLfz.js";import"./types-BU4Ojrin.js";import"./step-C-f981dl.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BB1e2MfD.js";import"./Label-2Fni25es.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./ActivePoints-DF4l2wc6.js";import"./Dot-DD8m7FDf.js";import"./activeStyles-Bl6Emzo4.js";import"./useAnimationId-DzTpCf5I.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getRadiusAndStrokeWidthFromDot-p6N7re72.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./XAxis-BoBOjjsH.js";import"./CartesianAxis-Dnx0rUNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DVp-8yRY.js";import"./Legend-Beev8OHM.js";import"./useElementOffset-DdC3N3ay.js";import"./uniqBy-MGV_25lQ.js";import"./iteratee-BTK9QdXN.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
