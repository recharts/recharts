import{u as n,j as e}from"./index-Kqk5CieB.js";import{M as o,C as h}from"./blocks-DlnlW1JP.js";import{C as d,W as s}from"./dimensions.stories-KrAVs7Lm.js";import"./iframe-B9Tl-Ens.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./index-iYKKcn13.js";import"./ChartSizeDimensions-SsODyOSd.js";import"./zIndexSlice-CeB5DPsb.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./throttle-dfeJw9jR.js";import"./ComposedChart-BkpfzGMq.js";import"./RechartsWrapper-DeTgaRib.js";import"./axisSelectors-x8C92zXU.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./Page-Cj8EiXz7.js";import"./Line-DsiP8Uyr.js";import"./getRadiusAndStrokeWidthFromDot-DojBXQgy.js";import"./Layer-Bu8k813y.js";import"./Curve-pkk8Hz5i.js";import"./types-BDfLdEx1.js";import"./step-BuRhJuEF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DvmFQkM4.js";import"./Label-Dez-agGk.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./ActivePoints-D0ERAXFA.js";import"./Dot-DzsU10RZ.js";import"./activeStyles-B1QGMcNg.js";import"./useAnimationId-eoD8CiMN.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./useEffectiveDataKey-BhVu78c2.js";import"./XAxis-DgmkF9Yy.js";import"./CartesianAxis-BYNQxUMc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CjYRlTBq.js";import"./Legend-pOgp7twQ.js";import"./useElementOffset-O98GivjF.js";import"./uniqBy-COJiZ3F4.js";import"./iteratee-6n8bYTkS.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
