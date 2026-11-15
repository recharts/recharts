import{u as n,j as e}from"./index-Cos-iqgH.js";import{M as o,C as h}from"./blocks-rkGscfiM.js";import{C as d,W as s}from"./dimensions.stories-BM_diZNL.js";import"./iframe-C_daZv7l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./index-DBxUtF6C.js";import"./ChartSizeDimensions-Du_tiVS2.js";import"./zIndexSlice-Dlp28lA6.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./throttle-BHZ2wlOs.js";import"./ComposedChart-bOkTSI7z.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./axisSelectors-BlfT440m.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dz0Pmj0c.js";import"./index-CJJC3II6.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./Page-Cj8EiXz7.js";import"./Line-IPpA0euf.js";import"./Layer-WPlXRukA.js";import"./Curve-DDXeNIWC.js";import"./types-BRKFz9xC.js";import"./step-CfMQYX2G.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BrtwCCRb.js";import"./Label-DbTfJXbl.js";import"./Text-DFRkhFZm.js";import"./ZIndexLayer-CwM562V-.js";import"./ActivePoints-Hq6VNZIp.js";import"./Dot-BjcrnH2C.js";import"./activeStyles-DqPxAQkX.js";import"./useAnimationId-BeVDdEFy.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getRadiusAndStrokeWidthFromDot-DS_16ujn.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./useEffectiveDataKey-CLct0de8.js";import"./XAxis-zsBA2PQk.js";import"./CartesianAxis-CWZlckQG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DVc3O9Qy.js";import"./Legend-fewrjBRw.js";import"./useElementOffset-Dy4wSkY8.js";import"./uniqBy-DXIPSdGO.js";import"./iteratee-Bz-Pka1B.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
