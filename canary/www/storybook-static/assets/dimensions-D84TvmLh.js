import{u as n,j as e}from"./index-Ban6chDc.js";import{M as o,C as h}from"./blocks-BJYiOqhA.js";import{C as d,W as s}from"./dimensions.stories-Deie1rE7.js";import"./iframe-cV3SAodv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./index-DTNI7e-E.js";import"./ChartSizeDimensions-D2pi8nqr.js";import"./zIndexSlice-Cjgp2TXV.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./throttle-CMi-pHht.js";import"./ComposedChart-Bqs-Kl5O.js";import"./RechartsWrapper-CyX-rkWs.js";import"./axisSelectors-C9H2pU_G.js";import"./polarAxisSelectors--xQAorkv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-y_crYDj7.js";import"./index-yYdNmmg6.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./Page-Cj8EiXz7.js";import"./Line-DOqIdMIn.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Layer-zGQNaeEg.js";import"./Curve-CeApDEIq.js";import"./types-CxXTSyDH.js";import"./step-miPDfXCq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Cky1CNqk.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./activeStyles-BPuHxpJZ.js";import"./useAnimationId-DD8tFxYJ.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./ErrorBarContext-CopN05Qu.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./XAxis-BuIJ_QWG.js";import"./CartesianAxis-BCSNf2Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DYud1g9H.js";import"./Legend-IZ97z-G8.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
