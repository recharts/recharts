import{j as e}from"./jsx-runtime-BPRO0oCx.js";import{useMDXComponents as n}from"./index-CmYRjRic.js";import{M as h,C as o}from"./blocks-Dxvo9Xbe.js";import{C as d,W as s}from"./dimensions.stories-JkFIb60i.js";import"./iframe-BnXWjslm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDMR2Hui.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./arrayEqualityCheck-DUiNH6C9.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DYkYyYwm.js";import"./RechartsWrapper-BfUKOtD7.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./Line-BPeNZJ5S.js";import"./Layer-A6Fuc82i.js";import"./ReactUtils-R08Tgf5F.js";import"./Label-Znit4TkG.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./ZIndexLayer-BvBrZyR1.js";import"./ActivePoints-C3JJMy4k.js";import"./Dot-D3x_k9xg.js";import"./types-TTX5RUO9.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./ErrorBarContext-CDqLcMo6.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./useAnimationId-cDAtDGt9.js";import"./getRadiusAndStrokeWidthFromDot-QVWsL0nH.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DiN3KyDm.js";import"./Trapezoid-DoyDZqd_.js";import"./Sector-CE4yIiKS.js";import"./Symbols-yqo_ZORc.js";import"./Curve-Bkc50DRF.js";import"./XAxis-CmdVCSMA.js";import"./CartesianAxis-RUdXwPBb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B7_xgRPt.js";import"./Legend-DQuskGTn.js";import"./useElementOffset-Da6MIgAg.js";import"./iteratee-xPJqHmHf.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};
