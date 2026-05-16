import{j as e}from"./jsx-runtime-Bw-TWhwu.js";import{useMDXComponents as n}from"./index-B6iIS0st.js";import{M as o,C as h}from"./blocks-BHGESau_.js";import{C as d,W as s}from"./dimensions.stories-D5TNWrWp.js";import"./iframe-hEzUtsMW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-umLltmbH.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./arrayEqualityCheck-x5atMu4i.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./immer-D2mt-X_3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DIb01qKn.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./hooks-BpIGMeVK.js";import"./axisSelectors-DpQuKI8d.js";import"./d3-scale-D4Rky8AA.js";import"./zIndexSlice-C-CqVCIy.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./Page-DPte-9pC.js";import"./Line-Bw4keAE2.js";import"./Layer-BzjUvoq3.js";import"./ReactUtils-CILnJ9bI.js";import"./Label-DAj1mr9j.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./ZIndexLayer-D2roQss2.js";import"./ActivePoints-BEj7A802.js";import"./Dot-DjJx9Xmg.js";import"./types-CIvV1oOa.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./ErrorBarContext-BKh5vOop.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./useAnimationId-nSTPw_c2.js";import"./getRadiusAndStrokeWidthFromDot-ZgYi_nYk.js";import"./ActiveShapeUtils-CvZRJyk9.js";import"./isPlainObject-XAJ6_CVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrXQ0ZF2.js";import"./Trapezoid-CP7Jy4rV.js";import"./Sector-DZ1bqHIH.js";import"./Symbols-DpJ4BPQH.js";import"./symbol-Bv6t7YtK.js";import"./step-nV8fFjWt.js";import"./Curve-DljUrqTb.js";import"./XAxis-CmasoGgc.js";import"./CartesianAxis-DW2tMO5n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DogN-io6.js";import"./Legend-L0JleGkh.js";import"./useElementOffset-DIirkKhH.js";import"./uniqBy-BMKJIO4n.js";import"./iteratee-HN1CE_6M.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
