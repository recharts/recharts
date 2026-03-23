import{j as e}from"./jsx-runtime-O5s7j0rh.js";import{useMDXComponents as n}from"./index-DY-OAqSM.js";import{M as o,C as h}from"./blocks-D1TNIzX3.js";import{C as d,W as s}from"./dimensions.stories-DYTPD1xV.js";import"./iframe-Ct0PK1iZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./arrayEqualityCheck-cSrg192z.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./immer-C_0hot5p.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dkf6chnc.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./Line-4WhNdwJc.js";import"./Layer-BFqbkghr.js";import"./ReactUtils-C9XhBs7w.js";import"./Label-kZgIL_LG.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./ZIndexLayer-CPK1fMG2.js";import"./ActivePoints-Bv-BLGDJ.js";import"./Dot-B3FhOR5M.js";import"./types-B_QiL_OE.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./ErrorBarContext-C_IVi_zE.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./useAnimationId-DhoQEmEH.js";import"./getRadiusAndStrokeWidthFromDot-BJC5mRjp.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bk1l59Or.js";import"./Trapezoid-BzWb9o7I.js";import"./Sector-6TbuA5HM.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./step-CfNjb2F4.js";import"./Curve-BtTKqNeq.js";import"./XAxis-ZfaBuFta.js";import"./CartesianAxis-DpFipx6Q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CMvF26TK.js";import"./Legend-DKQdARkQ.js";import"./useElementOffset-Dd86n5z-.js";import"./uniqBy-B6CTRDCo.js";import"./iteratee-qHNQkKgM.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
