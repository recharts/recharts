import{u as n,j as e}from"./index-CGZkA4Zw.js";import{M as o,C as h}from"./blocks-BKrVWI40.js";import{C as d,W as s}from"./dimensions.stories-Dw5wGjca.js";import"./iframe-CvMP9Fqo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./index-B6lplofW.js";import"./ChartSizeDimensions-03rP1SM2.js";import"./zIndexSlice-B5trHRCj.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./throttle-MhOaKDgE.js";import"./ComposedChart-BEnlrqE9.js";import"./RechartsWrapper-CzGrl1eT.js";import"./axisSelectors-B3ymYEcm.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-b8kDtzlH.js";import"./index-CDgZ4Loc.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./Page-Cj8EiXz7.js";import"./Line-BbvHMrnh.js";import"./Layer-CKCTZlK6.js";import"./Curve-D_Wyck_t.js";import"./types-CEx7Mrjp.js";import"./step-TJxgmP_3.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D8XHfMQr.js";import"./Label-BXQPTxU_.js";import"./Text-B1VQrHkc.js";import"./ZIndexLayer-CYiENEwf.js";import"./ActivePoints-Dzw5hEuH.js";import"./Dot-RMR8pxKN.js";import"./activeStyles-iNSBQg7J.js";import"./useAnimationId-DS6RlguF.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./ErrorBarContext-BNZINJYG.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getRadiusAndStrokeWidthFromDot-CtOVRdjN.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./XAxis-BVBOoebg.js";import"./CartesianAxis-BofYDveF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-tiTGIdx3.js";import"./Legend-DlTvp0v7.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
