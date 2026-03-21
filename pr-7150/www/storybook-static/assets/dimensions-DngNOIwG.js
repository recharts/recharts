import{j as e}from"./jsx-runtime-CTqYwSQv.js";import{useMDXComponents as n}from"./index-BPesjsek.js";import{M as o,C as h}from"./blocks-Dx95MY_8.js";import{C as d,W as s}from"./dimensions.stories-Cry9rc7-.js";import"./iframe-rLfMAXZA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./arrayEqualityCheck-OjJIGGxq.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./immer-DvqdMPbs.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BjVk6FMS.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./zIndexSlice-CNK81FG0.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./Line-CyeIrLy7.js";import"./Layer-B0Vv-b1h.js";import"./ReactUtils-BClzbOkG.js";import"./Label-BHs-e8Zr.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./ZIndexLayer-CsEI63Vc.js";import"./ActivePoints-l6297kMX.js";import"./Dot-0q9wAizM.js";import"./types-BRd5e3b8.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./getRadiusAndStrokeWidthFromDot-CJ49ydrZ.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./XAxis-B_pkAheb.js";import"./CartesianAxis-C2v11b4L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BkAFZjuO.js";import"./Legend-icLUUA6C.js";import"./useElementOffset-OnGDg19o.js";import"./uniqBy-DZwvWIvi.js";import"./iteratee-BUpKOxlc.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
