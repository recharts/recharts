import{u as n,j as e}from"./index-CaKx1Bv6.js";import{M as o,C as h}from"./blocks-DJ2nlR9R.js";import{C as d,W as s}from"./dimensions.stories-CEqyiiQa.js";import"./iframe-B8oHBE2B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./index-DGZRfgJf.js";import"./ChartSizeDimensions-DYukk05q.js";import"./zIndexSlice-CY69X-_e.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./throttle-CUYrrG0C.js";import"./ComposedChart-D7HXrnrm.js";import"./RechartsWrapper-DFBUYq9O.js";import"./axisSelectors-Ds5h7JK9.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./Page-Cj8EiXz7.js";import"./Line-CAspGmUf.js";import"./Layer-d-LKmDNk.js";import"./Curve-DGAKYDzB.js";import"./types-pqA8tR2L.js";import"./step-BZkNkw_J.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BdZkCN9m.js";import"./Label-Do0pS3hb.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./ActivePoints-Cp4H5Nc6.js";import"./Dot-BJ0YQTw_.js";import"./activeStyles-B9e3PXPC.js";import"./useAnimationId-DstXvFRQ.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./ErrorBarContext-FVg_hFB1.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getRadiusAndStrokeWidthFromDot-CwP227yr.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./useEffectiveDataKey-R28HVoPp.js";import"./XAxis-ZjtmoAYX.js";import"./CartesianAxis-DLXM_Mrp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-xlwnxq94.js";import"./Legend-DfVTvwto.js";import"./useElementOffset-BUgTmqWV.js";import"./uniqBy-CWI3Th2f.js";import"./iteratee-BSURygRC.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
