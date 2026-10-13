import{u as n,j as e}from"./index-DuIUBTs5.js";import{M as o,C as h}from"./blocks-Dk--oXg-.js";import{C as d,W as s}from"./dimensions.stories-C9-pU4Be.js";import"./iframe-NhQV4prz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./index-DaOiqL7H.js";import"./ChartSizeDimensions-Da5I9sAs.js";import"./zIndexSlice-CfLnBr12.js";import"./throttle-DIKmaWkS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BygaGWnl.js";import"./RechartsWrapper-BxN86ujp.js";import"./axisSelectors-CI2m5dZK.js";import"./d3-scale-DKOiWQKf.js";import"./index-Cmohh-L0.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Dc9b_9OD.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./Page-Cj8EiXz7.js";import"./Line-CK7ZFz0J.js";import"./Layer-BBUzG4Ds.js";import"./Curve-DQunGac-.js";import"./types-CquoFe81.js";import"./step-DAEVm6QR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DbZl5mD5.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./pageBackground-CDOOBPh1.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./ZIndexLayer-L-3od7Tk.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./ActivePoints-BaOlHly8.js";import"./Dot-Bbsv88JT.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getRadiusAndStrokeWidthFromDot-V6X0dMwc.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./useEffectiveDataKey-CCR_17cw.js";import"./XAxis-Fp7U60n2.js";import"./CartesianAxis-Brd3Au8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BZzMEbei.js";import"./Legend-DhXEWDJ9.js";import"./Symbols-CvvF-3qc.js";import"./symbol-BdliE8yI.js";import"./useElementOffset-DkX5d6Uc.js";import"./uniqBy-eEafSCgx.js";import"./iteratee-1x0B9Dhz.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
