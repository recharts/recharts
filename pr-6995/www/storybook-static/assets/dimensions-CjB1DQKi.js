import{j as e}from"./jsx-runtime-9PpVi6jk.js";import{useMDXComponents as n}from"./index-Cu6ekKVw.js";import{M as h,C as o}from"./blocks-DYsfH2-j.js";import{C as d,W as s}from"./dimensions.stories-Sd_NuBpC.js";import"./iframe-D8RsH_ZD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./arrayEqualityCheck-DfUQQqNG.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D5T5b3BK.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./Line-B5izd7Q_.js";import"./Layer-BDdUxbHF.js";import"./ReactUtils-6PKXXThp.js";import"./Label-DsxuCRwy.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./ZIndexLayer-DiTXvVi3.js";import"./ActivePoints-Dzb4Pd6Y.js";import"./Dot-k8-aBSGQ.js";import"./types-Dyd5Crad.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./ErrorBarContext-CAtMmrl9.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./useAnimationId-DRWFjGg3.js";import"./getRadiusAndStrokeWidthFromDot-DDuUn9Iv.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./Symbols-CBAU6oWP.js";import"./Curve-CIshv-2z.js";import"./XAxis-9qpGEcGJ.js";import"./CartesianAxis-ewa7ZF2u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C3MuBlcJ.js";import"./Legend-fLu_mWqg.js";import"./useElementOffset-Cd_ueVxk.js";import"./iteratee-CpPZwPCh.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
