import{j as e}from"./jsx-runtime-Dd1CdRMJ.js";import{useMDXComponents as n}from"./index-COrTFrHi.js";import{M as o,C as h}from"./blocks-DtxEYzTl.js";import{C as d,W as s}from"./dimensions.stories-yGr9eZEy.js";import"./iframe-DNsUwX5k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbbfyfFF.js";import"./ChartSizeDimensions-DUMsduP3.js";import"./arrayEqualityCheck-XA4mGyWk.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./immer-BPrEK5Rz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cmjf3y7z.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./Page-DPte-9pC.js";import"./Line-B6QUTRYX.js";import"./Layer-DWNEDYKO.js";import"./ReactUtils-CLpPl2yo.js";import"./Label-DrlcblLQ.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./ZIndexLayer-COBAY4xu.js";import"./ActivePoints-BULqV-gI.js";import"./Dot-CqXou1PJ.js";import"./types-DAXoUOiX.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./ErrorBarContext-D803I392.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./useAnimationId-gBW8_6W-.js";import"./getRadiusAndStrokeWidthFromDot-Cq_xctji.js";import"./ActiveShapeUtils-CsZp4u_s.js";import"./isPlainObject-N__ihfse.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-h1QYOt2M.js";import"./Trapezoid-DDnY6d6S.js";import"./Sector-CETfwnvm.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";import"./step--sLhjxi-.js";import"./Curve-BVLF1D_I.js";import"./XAxis-ONim8OVF.js";import"./CartesianAxis-Ctr04CZm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C_-amdVX.js";import"./Legend-AtBpIshp.js";import"./useElementOffset-DEU7ULV0.js";import"./uniqBy-PI0PJHxt.js";import"./iteratee-BuVbuqpH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
