import{u as n,j as e}from"./index-XHqos3Ap.js";import{M as o,C as h}from"./blocks-BmdVFWqf.js";import{C as d,W as s}from"./dimensions.stories-Bj0MsO6P.js";import"./iframe-D0WJBe8B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./index-B5HS6UVy.js";import"./ChartSizeDimensions-C-iSYyXu.js";import"./zIndexSlice-BC6IeYNi.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./throttle-TSOlYDju.js";import"./ComposedChart-BlH1ARqS.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./axisSelectors-D5taf4lI.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-50ivSU0v.js";import"./index-DWGmacRx.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Page-Cj8EiXz7.js";import"./Line-DbeSK1IG.js";import"./Layer-aO3gvgqI.js";import"./Curve-D1Sg03qQ.js";import"./types-CgDj6Pcv.js";import"./step-C85hYdLD.js";import"./path-DyVhHtw_.js";import"./LabelList-fY2HN2fJ.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./ActivePoints-B12s-f_1.js";import"./Dot-B5ivztlh.js";import"./activeStyles-DLjK0T5T.js";import"./useAnimationId-C0s3vBtu.js";import"./dataEntryStyles-BPWJkcwq.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getRadiusAndStrokeWidthFromDot-D5udBmOW.js";import"./ActiveShapeUtils-Bceipj14.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./XAxis-BEoxl3pM.js";import"./CartesianAxis-C6mWkihq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Hb99A8N1.js";import"./Legend-DF1CoFP1.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
