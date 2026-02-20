import{j as e}from"./jsx-runtime-Ddrw1Zsw.js";import{useMDXComponents as n}from"./index-aUurmpFS.js";import{M as o,C as h}from"./blocks-B4Shi9V1.js";import{C as d,W as s}from"./dimensions.stories-BPnAIqiK.js";import"./iframe-DVKGYMpC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./arrayEqualityCheck-C3dMZwVz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-m52n9a41.js";import"./immer-mdmEhKTL.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DpZn3J7A.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./Line-DM6-icql.js";import"./Layer-Cbzg46jm.js";import"./ReactUtils-2VJeHFxo.js";import"./Label-CgM8GhgJ.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./ZIndexLayer-D9yE2b_P.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./types-D5_2czw6.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./ErrorBarContext-D0RCHEkz.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./useAnimationId-BLC1f5rw.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./step-BPnB-OiB.js";import"./Curve-DFpbuCXU.js";import"./XAxis-WP1B-t-F.js";import"./CartesianAxis-hM284rmA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-36kfWwzX.js";import"./Legend-DMhQGeFy.js";import"./useElementOffset-DmaGgdgh.js";import"./uniqBy-DKpKL2nk.js";import"./iteratee-D92tm2NM.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
