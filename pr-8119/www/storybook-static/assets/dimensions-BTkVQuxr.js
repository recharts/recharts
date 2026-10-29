import{u as n,j as e}from"./index-CUfwM6QZ.js";import{M as o,C as h}from"./blocks-n5NGmVTA.js";import{C as d,W as s}from"./dimensions.stories-BIyU-A-Q.js";import"./iframe-BVlfuHR1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./index-DZEpaPFi.js";import"./ChartSizeDimensions-BAW49V5V.js";import"./zIndexSlice-DKBlzg_K.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./throttle-B2Qtjc3W.js";import"./ComposedChart-BrTaz3ZS.js";import"./RechartsWrapper-DRZJzitw.js";import"./axisSelectors-Brqs7zw9.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BNlCtWSy.js";import"./index-DNy-3Gid.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./Page-Cj8EiXz7.js";import"./Line-D92Dv_C3.js";import"./Layer-B5eXi8NV.js";import"./Curve-D680kDYc.js";import"./types-DYWAvxYY.js";import"./step-O-KWti3S.js";import"./path-DyVhHtw_.js";import"./LabelList-qAsFJxAr.js";import"./Label-Ckax5Juk.js";import"./Text-BxId80OJ.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./ActivePoints-CI1sJ5FS.js";import"./Dot-Btb-E3dw.js";import"./activeStyles-B82PQSZb.js";import"./useAnimationId-eAQDadKJ.js";import"./dataEntryStyles-DSEQ0COb.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./ErrorBarContext-DAUTVb2k.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getRadiusAndStrokeWidthFromDot-Cneka8AD.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./XAxis-DixivmhH.js";import"./CartesianAxis-CPYLIIET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-4InIcFXf.js";import"./Legend-CiJARbEk.js";import"./fillDefinitions-B4sFAt8T.js";import"./useElementOffset-CrNfCBWI.js";import"./uniqBy-B5YMrEOh.js";import"./iteratee-B_C-TQMi.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
