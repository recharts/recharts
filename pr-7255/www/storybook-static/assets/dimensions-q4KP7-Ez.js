import{j as e}from"./jsx-runtime-jsiLSPmI.js";import{useMDXComponents as n}from"./index-OGXqz2Ej.js";import{M as o,C as h}from"./blocks-YO9Zt0nu.js";import{C as d,W as s}from"./dimensions.stories-BgZtX-4K.js";import"./iframe-Bs9ufhmU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./arrayEqualityCheck-bNviqcqR.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./immer-7dvTdnME.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-K0C4_WI2.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./index-Dj-F8bgJ.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./zIndexSlice-B-DHuVWa.js";import"./renderedTicksSlice-D4shqqjC.js";import"./CartesianChart-BB1EgM6J.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./Page-Cj8EiXz7.js";import"./Line-a0e7HScR.js";import"./Layer-BeNhTzXz.js";import"./ReactUtils-DhI6Oe1E.js";import"./Label-DU0nM-QI.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./ZIndexLayer-BNfspdHK.js";import"./ActivePoints-B_kl37lc.js";import"./Dot-Hw3ymEj1.js";import"./types-iG6YPFqe.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./ErrorBarContext-E0MFYBlH.js";import"./GraphicalItemClipPath-cqIDCUaZ.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./useAnimationId-B97gwkv5.js";import"./getRadiusAndStrokeWidthFromDot-BRin4YHv.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./Trapezoid-5VBN_EIn.js";import"./Sector-mpY_PZJM.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./step-Egwu_prR.js";import"./Curve-B9iYmKCN.js";import"./XAxis-vN0EOhjQ.js";import"./CartesianAxis-Dy-A2DW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dy4N7pk9.js";import"./Legend-dSTtkNyz.js";import"./useElementOffset-Bjx5_Ell.js";import"./uniqBy-qpDPjGbK.js";import"./iteratee-lQHxSBe4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
