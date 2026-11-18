import{u as n,j as e}from"./index-DolCPyeW.js";import{M as o,C as h}from"./blocks-CF2eZnQM.js";import{C as d,W as s}from"./dimensions.stories-BrknAC8s.js";import"./iframe-Z3SayaVd.js";import"./preload-helper-Dp1pzeXC.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./index-IODgrwVj.js";import"./ChartSizeDimensions-BD0591FA.js";import"./zIndexSlice-Dh2HMKB6.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./throttle-Dxt6SGJ3.js";import"./ComposedChart-i6W5PytN.js";import"./RechartsWrapper-rHkMTZTL.js";import"./axisSelectors--kuv0hpR.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COX3gckA.js";import"./index-Byv9yEMF.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./Page-Cj8EiXz7.js";import"./Line-n6wgVlI4.js";import"./getRadiusAndStrokeWidthFromDot-CRZbI57R.js";import"./Layer-R9bgEcMl.js";import"./Curve-5n5qGKoW.js";import"./types-C7fTXY90.js";import"./step-BOsnLXQi.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CdjRVARh.js";import"./Label-gVjZnKx0.js";import"./Text-DdcAXxQ7.js";import"./ZIndexLayer-y38pl_-1.js";import"./ActivePoints-mT6mIIhN.js";import"./Dot-CnIUGRfT.js";import"./activeStyles-DoLNHT3-.js";import"./useAnimationId-CJJ1SFId.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./ErrorBarContext-CcYlyxVe.js";import"./SetGraphicalItem-na8KM_FV.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./XAxis-BsEr8UIp.js";import"./CartesianAxis-CDmW-YMV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-PP-Vs1t2.js";import"./Legend-64sg-l9Y.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
