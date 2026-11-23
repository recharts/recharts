import{u as n,j as e}from"./index-DSj_70Pa.js";import{M as o,C as h}from"./blocks-DOwGB99O.js";import{C as d,W as s}from"./dimensions.stories-CMNuZpi1.js";import"./iframe-BzxAUdBV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./index-D3M5mM9_.js";import"./ChartSizeDimensions-ClfPHu7f.js";import"./zIndexSlice-CpYrgVZX.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./ComposedChart-hvP_dJoC.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./Page-Cj8EiXz7.js";import"./Line-C-rr1QKq.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Layer-Df_NEF0m.js";import"./Curve-DIyQM0l3.js";import"./types-djSleOln.js";import"./step-CAG0Ynz6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./ErrorBarContext-iCVMvaG7.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./XAxis-CtYxvtbo.js";import"./CartesianAxis-C9p6cgyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DCmm8K7b.js";import"./Legend-B6MIKlcq.js";import"./useElementOffset-DEzR6i3W.js";import"./uniqBy-BHLVblv7.js";import"./iteratee-BJNLYDOc.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
