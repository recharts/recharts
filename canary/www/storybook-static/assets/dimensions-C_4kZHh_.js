import{u as n,j as e}from"./index-BkeOjDum.js";import{M as o,C as h}from"./blocks-z8hWmwi1.js";import{C as d,W as s}from"./dimensions.stories-nTNDv5Lz.js";import"./iframe-GNxtioUR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./index-BJVo2ffI.js";import"./ChartSizeDimensions-DRTcoz4g.js";import"./zIndexSlice-D4haQxNn.js";import"./throttle-Du4Eduzv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dx410X4q.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./axisSelectors-CsnJkuOW.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./Page-Cj8EiXz7.js";import"./Line-AV39YYrF.js";import"./Layer-DR6S9zl-.js";import"./Curve-DKHt29i6.js";import"./types-omsl4D4O.js";import"./step-b1TCH5-c.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ct2IhasV.js";import"./Label-C7cFT6-M.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./RechartsThemeContext-BZnANilh.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./useAnimationId-B4U03xNw.js";import"./ActivePoints-qyzQPqTK.js";import"./Dot-BaVZ6R7S.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./ErrorBarContext-DSsXqNs7.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getRadiusAndStrokeWidthFromDot-DMvsMn3-.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-5j17aH8X.js";import"./CartesianAxis-NbOP1W-o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CbYUO1fa.js";import"./Legend-DfblxIhj.js";import"./Symbols-C7tvQ4Yw.js";import"./symbol-DxTZmGTB.js";import"./useElementOffset-nHeneq3D.js";import"./uniqBy-zsY9CiPb.js";import"./iteratee-C5pGeNoI.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
