import{j as e}from"./jsx-runtime-098SxN5L.js";import{useMDXComponents as n}from"./index-PVTDzra9.js";import{M as h,C as o}from"./blocks-BQOPPKO6.js";import{C as d,W as s}from"./dimensions.stories-BBQBx2Cu.js";import"./iframe-BRGG-JoH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./arrayEqualityCheck-mIQ5hzOq.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-EtXkgG2p.js";import"./RechartsWrapper-9pcaaxwh.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./Line-CyiRO5Eb.js";import"./Layer-Da-YNOyz.js";import"./ReactUtils-Dc8DAnTF.js";import"./Label-cR9E2h9U.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./ZIndexLayer-D0IJam7I.js";import"./ActivePoints-CjK9ehja.js";import"./Dot-BIp-1u7k.js";import"./types-BKK4rjEh.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./ErrorBarContext-v-g5O0yz.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./useAnimationId-CqPKjgNu.js";import"./getRadiusAndStrokeWidthFromDot-BFDSdXlw.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./Symbols-Bp7HaOpu.js";import"./Curve-D65O9kIu.js";import"./XAxis-Cdr81EpX.js";import"./CartesianAxis-BoArf1fz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dr8aURmX.js";import"./Legend-DF6u81l5.js";import"./useElementOffset-C8V_pdJZ.js";import"./iteratee-Dp3oOjSb.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
