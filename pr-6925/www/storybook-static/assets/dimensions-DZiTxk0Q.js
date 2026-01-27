import{j as e}from"./jsx-runtime-B5mw0i5r.js";import{useMDXComponents as n}from"./index-C_3ww70d.js";import{M as h,C as o}from"./blocks-DmS_dk27.js";import{C as d,W as s}from"./dimensions.stories-BjI2b2tN.js";import"./iframe-Db4zTqbk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bol23Ne6.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./arrayEqualityCheck-3CRW7fvn.js";import"./resolveDefaultProps-C9skBriC.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-b8DT5qpX.js";import"./RechartsWrapper-FQCKz-X1.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./zIndexSlice-CrYwnyyD.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./Line-CQ-0i_va.js";import"./Layer-Cflbp2vf.js";import"./ReactUtils-OGo3X-P4.js";import"./Label-CqrigLpP.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./ZIndexLayer-BUznzSNs.js";import"./ActivePoints-6rHP0Mli.js";import"./Dot-CXLbb6f5.js";import"./types-BTyyhFf_.js";import"./RegisterGraphicalItemId-Dl15i-mE.js";import"./ErrorBarContext-EfIpxhpK.js";import"./GraphicalItemClipPath-BZwY5GCl.js";import"./SetGraphicalItem-DZCf9fqS.js";import"./useAnimationId-CxVKnk1J.js";import"./getRadiusAndStrokeWidthFromDot-BNWRpCju.js";import"./ActiveShapeUtils-DuwLTnau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C_uWIMPJ.js";import"./Trapezoid-m-4m64o7.js";import"./Sector-CU3fNncw.js";import"./Symbols-G_hIZhWd.js";import"./Curve-D50n1SBe.js";import"./XAxis-2YmY08Fs.js";import"./CartesianAxis-CUgWXt_R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C58kpuB1.js";import"./Legend-CfZ6io_H.js";import"./useElementOffset-3-L9Y_Hv.js";import"./iteratee-D6kta_VZ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
