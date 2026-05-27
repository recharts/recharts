import{j as e}from"./jsx-runtime-DAWYeJkm.js";import{useMDXComponents as n}from"./index-DPjuzkFk.js";import{M as o,C as h}from"./blocks-BSI5tTVY.js";import{C as d,W as s}from"./dimensions.stories-CbjJt-Zo.js";import"./iframe-FqQriuOU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./arrayEqualityCheck-D81yCQ_E.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CH-QvTob.js";import"./immer-majn-qZf.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C8Wy7GrP.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./Page-DPte-9pC.js";import"./Line-4-mxtk0F.js";import"./Layer-dRSSbr5y.js";import"./Curve-bxiY4w-f.js";import"./types-CfmOzYIG.js";import"./step-DRejhJRi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOrN0e6v.js";import"./Label-CKdOaAhH.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./ZIndexLayer-C869JS3k.js";import"./useAnimationId-CwJGQlGj.js";import"./ActivePoints-p2Wn9c62.js";import"./Dot-CoDBEdb8.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getRadiusAndStrokeWidthFromDot-Bl0IsbtV.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./XAxis-rE-0ziVR.js";import"./CartesianAxis-BeuIWSvD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bx3kycjW.js";import"./Legend-BZ5lxXMe.js";import"./Symbols-DAX_okS0.js";import"./symbol-B9MBbnrG.js";import"./useElementOffset-B8C7PBsW.js";import"./uniqBy-B2F8-yBK.js";import"./iteratee-ZukpjJzA.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
