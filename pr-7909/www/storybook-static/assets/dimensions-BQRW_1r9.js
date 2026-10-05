import{u as n,j as e}from"./index-DnkK8PFU.js";import{M as o,C as h}from"./blocks-DZTn50RC.js";import{C as d,W as s}from"./dimensions.stories-cefOak0h.js";import"./iframe-Mdt8VJ2w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aQiBtsFK.js";import"./index-CBF1PFXA.js";import"./index-BNwNegUe.js";import"./ChartSizeDimensions-Cwb6b_nv.js";import"./zIndexSlice-BsdMuIdb.js";import"./throttle-VIBdIbYw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpPg4Klh.js";import"./isWellBehavedNumber-t2MA1Hj2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-eoHVURcz.js";import"./RechartsWrapper-BSXOrQ0o.js";import"./axisSelectors-BFf5BOkR.js";import"./d3-scale-DhLC6v_0.js";import"./index-Bh66vNwH.js";import"./renderedTicksSlice-DSt8-RgC.js";import"./index-DXJpIZWy.js";import"./CartesianChart-Cjv56MYV.js";import"./chartDataContext-bPArfWn-.js";import"./CategoricalChart-DQulxF7t.js";import"./Page-Cj8EiXz7.js";import"./Line-CZenb3m6.js";import"./Layer-CcarLXD9.js";import"./Curve-Bg2QEuKe.js";import"./types-6Q4AmTS7.js";import"./step-CRIOY1t7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_SFlbBu.js";import"./Label-CtCuuSl7.js";import"./Text-C4xsU_o9.js";import"./DOMUtils-BUFAvfGk.js";import"./useId-DFFN6HWZ.js";import"./useBackwardsCompatibleTheme-CUPajrH3.js";import"./ZIndexLayer-Di_3Ujup.js";import"./useAnimationId-BjS9VFFE.js";import"./ActivePoints-BlFeeX4-.js";import"./Dot-BWITrl2w.js";import"./RegisterGraphicalItemId-B7ELoHw_.js";import"./ErrorBarContext-_5c9Wah_.js";import"./GraphicalItemClipPath-D5E8uSuA.js";import"./SetGraphicalItem-DcJbL-HK.js";import"./getRadiusAndStrokeWidthFromDot-CbmfEoix.js";import"./ActiveShapeUtils-COWK-Ag5.js";import"./useGraphicalItemIdentity-Dbl0dkEe.js";import"./XAxis-GQVgJzZC.js";import"./CartesianAxis-CC5aUDzH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D9-WHDrj.js";import"./Legend-CU_BQ7Au.js";import"./Symbols-CsPrbuzU.js";import"./symbol-CXLx3OGs.js";import"./useElementOffset-CJ7XjXe1.js";import"./uniqBy-Bre31482.js";import"./iteratee-BzS5DkOb.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
