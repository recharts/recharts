import{j as e}from"./jsx-runtime-CzsI2sfF.js";import{useMDXComponents as n}from"./index-B4LdrJu-.js";import{M as o,C as h}from"./blocks-CGw1J_Gp.js";import{C as d,W as s}from"./dimensions.stories-Busq8C2d.js";import"./iframe-DDnGsu5h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFiQJbL_.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./arrayEqualityCheck-b4GtS9KF.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fGyvU07W.js";import"./immer-Wl9pIdwq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DnFRUbQ4.js";import"./RechartsWrapper-CV2CC7gc.js";import"./index-d0V4PGet.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./Line-B4wil4Rf.js";import"./Layer-BQ5I3ZR3.js";import"./ReactUtils-LLGJjmJY.js";import"./Label-Cq1Jw9bg.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./ActivePoints-Bm7ShVQX.js";import"./Dot-BvK9-kYF.js";import"./types-VBSg6qfW.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./ErrorBarContext-Bza5L9FQ.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./useAnimationId-CsY2QYNS.js";import"./getRadiusAndStrokeWidthFromDot-BQH46_oi.js";import"./ActiveShapeUtils-Qp0g2m0V.js";import"./isPlainObject-dg6p2L4N.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CItL8Q7z.js";import"./Trapezoid-sOsheLpd.js";import"./Sector-DVi4Mpj4.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";import"./step-NA2d-6xM.js";import"./Curve-CVMF8Bc_.js";import"./XAxis-_OohREfq.js";import"./CartesianAxis-C4D4URoI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BFUe8vT1.js";import"./Legend-BAVLUpfE.js";import"./useElementOffset-BLONHf2Z.js";import"./uniqBy-BHkPP5WV.js";import"./iteratee-BYQsP9wj.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
