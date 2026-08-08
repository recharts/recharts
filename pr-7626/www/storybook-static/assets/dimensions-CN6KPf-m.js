import{u as n,j as e}from"./index-2ByzKhaY.js";import{M as o,C as h}from"./blocks-B9eovsSF.js";import{C as d,W as s}from"./dimensions.stories-BMML_GoD.js";import"./iframe-Dl6-w9Rh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./index-F3zVu6rR.js";import"./ChartSizeDimensions-k5z9PHcj.js";import"./zIndexSlice-BRejfQU1.js";import"./throttle-vxYlNOMT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D3InBwIY.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./axisSelectors-BPD60Viv.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./Page-Cj8EiXz7.js";import"./Line-Bg3LAjcn.js";import"./Layer-DIMKS5Ou.js";import"./Curve-DhmTjq3U.js";import"./types-Ddok_SrC.js";import"./step-vOQUBbeE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0kip4Wc.js";import"./Label-aNbwXPlv.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./ZIndexLayer-DkX5oxcl.js";import"./useAnimationId-CYbASTF_.js";import"./ActivePoints-oADU3qVC.js";import"./Dot-uQmPoXZ1.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getRadiusAndStrokeWidthFromDot-IVUblMaM.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DZSPPcQS.js";import"./CartesianAxis-Dak0cZYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Cc6mYSUk.js";import"./Legend-DCguHXy8.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
