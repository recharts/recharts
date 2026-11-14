import{u as n,j as e}from"./index-CBG6bdJJ.js";import{M as o,C as h}from"./blocks-B3rPJCzx.js";import{C as d,W as s}from"./dimensions.stories-DjojxbAb.js";import"./iframe-DtzldFfh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./index-6_OYP7D7.js";import"./ChartSizeDimensions-iFGHlyZF.js";import"./zIndexSlice-PhkkSvay.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-u2nTClVy.js";import"./throttle-Drk_UoQx.js";import"./ComposedChart-C0Pw1zvu.js";import"./RechartsWrapper-RpB-MHrg.js";import"./axisSelectors-C2izPxUf.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmMEJmfI.js";import"./index-xLc8fata.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./Page-Cj8EiXz7.js";import"./Line-BvNBRL71.js";import"./Layer-BcJtH6wk.js";import"./Curve-xzGpqU4W.js";import"./types-aakKZZv0.js";import"./step-Dbgt0c4J.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-kT4_La43.js";import"./Label-DAuHelmL.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./activeStyles-BesdgLFE.js";import"./useAnimationId-Dzlg4g7S.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./ErrorBarContext-CFgTAQbG.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./XAxis-BY5CXCjh.js";import"./CartesianAxis-DxmrFkoo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CQZ6A0GW.js";import"./Legend-CCpYiMhz.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
