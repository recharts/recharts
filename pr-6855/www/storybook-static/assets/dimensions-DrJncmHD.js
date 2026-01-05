import{j as e}from"./jsx-runtime-Di49CTLo.js";import{useMDXComponents as n}from"./index-3OFKXj_J.js";import{M as h,C as o}from"./blocks-DIxPh6fY.js";import{C as d,W as s}from"./dimensions.stories-CNcnSHds.js";import"./iframe-Da-M2bw_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CVXS9YKr.js";import"./ChartSizeDimensions-BESje7nE.js";import"./arrayEqualityCheck-Bu1fao9w.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./ComposedChart-BwnVRCzC.js";import"./RechartsWrapper-BUepfen4.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./zIndexSlice-CMfC5ktf.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./Line-gMk0LR0R.js";import"./Layer-DzGabtm5.js";import"./ReactUtils-y3IAuRLl.js";import"./Label-C4t1wGEU.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./ZIndexLayer-C6AjQfxY.js";import"./ActivePoints-C9RhecIz.js";import"./Dot-Ce2UrvYJ.js";import"./types-D0tWu2Rj.js";import"./RegisterGraphicalItemId-Bh4GNlAN.js";import"./ErrorBarContext-CgzPxaLF.js";import"./GraphicalItemClipPath-qobx4hps.js";import"./SetGraphicalItem-BUDso82t.js";import"./useAnimationId-DW2lwLzx.js";import"./getRadiusAndStrokeWidthFromDot-tRJ-ENaO.js";import"./ActiveShapeUtils-Dg-wD9Xs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQYy-QO.js";import"./Trapezoid-Dm562TU6.js";import"./Sector-CemvM92K.js";import"./Symbols-0qrr4MxV.js";import"./Curve-D038hXOJ.js";import"./XAxis-CFyYvsY3.js";import"./CartesianAxis-CVwu7qOc.js";import"./YAxis-u8ljMyRk.js";import"./Legend-BtpSwi4J.js";import"./useElementOffset-CJciGcgD.js";import"./iteratee-BEvwa0tL.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
