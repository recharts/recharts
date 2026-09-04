import{u as n,j as e}from"./index-BxW2MhHz.js";import{M as o,C as h}from"./blocks-nwWNsPS8.js";import{C as d,W as s}from"./dimensions.stories-Cd2VJSTj.js";import"./iframe-DccHD9cJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./index-C-5pzGe4.js";import"./ChartSizeDimensions-DWa0DwP0.js";import"./zIndexSlice-DTUZOs4Q.js";import"./throttle-DVrp2GLO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-IZbmlTb-.js";import"./RechartsWrapper-Df3mrbj3.js";import"./axisSelectors-F-OrX_Xw.js";import"./d3-scale-Bc5gFn0f.js";import"./index-6ZXP3-Xk.js";import"./renderedTicksSlice-D4ngpquf.js";import"./index-CWyYWxmD.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./Page-Cj8EiXz7.js";import"./Line-ChUnqlEz.js";import"./Layer-DWnnL9ma.js";import"./Curve-v6KG-oLe.js";import"./types-CsFJg5Ml.js";import"./step-BNCkH4O7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAcltxFf.js";import"./Label-DVskdjtu.js";import"./Text-jeWIJF52.js";import"./DOMUtils-D6lsaUk9.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./useAnimationId-pGJexV-0.js";import"./ActivePoints-BC5zZJgg.js";import"./Dot-zbPRTYvb.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getRadiusAndStrokeWidthFromDot-Dnr5euKK.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-Btq-uLxc.js";import"./CartesianAxis-D0w9DA3M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DhvCla2D.js";import"./Legend-ldQF-Jpy.js";import"./Symbols-BM6J5XeJ.js";import"./symbol-CuC4WuRV.js";import"./useElementOffset-DqOwHG6I.js";import"./uniqBy-DzyHfYT5.js";import"./iteratee-BxX9M0vU.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
