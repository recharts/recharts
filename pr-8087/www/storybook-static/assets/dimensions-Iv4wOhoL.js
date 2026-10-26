import{u as n,j as e}from"./index-D2kO2o1Y.js";import{M as o,C as h}from"./blocks-DtlNyqks.js";import{C as d,W as s}from"./dimensions.stories-vJMOq1sC.js";import"./iframe-DqyoK0ud.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./index-BwS7ULIY.js";import"./ChartSizeDimensions-D9MVQ9Qp.js";import"./zIndexSlice-BLzMP0pQ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./throttle-Dn4JCjly.js";import"./ComposedChart-BYOmpYyX.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./axisSelectors-CFa3shM-.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./Page-Cj8EiXz7.js";import"./Line-DO5n4YO0.js";import"./Layer-svnx0Bdz.js";import"./Curve-B4FKLROM.js";import"./types-DD3eyhWj.js";import"./step-DDV9RjiH.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0nGCC2C.js";import"./Label-C_IP7EJJ.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./dataEntryStyles-sIqJlf-4.js";import"./useAnimationId-b5BOeEdT.js";import"./ActivePoints-B12yNU4r.js";import"./Dot-BOVBX4q2.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getRadiusAndStrokeWidthFromDot-DMbsIH9n.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./XAxis-BatUM5pq.js";import"./CartesianAxis-MuFUII6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-_lbVlQrz.js";import"./Legend-gHqRthhy.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
