import{u as n,j as e}from"./index-CkylF9AS.js";import{M as o,C as h}from"./blocks-BohXR0Sl.js";import{C as d,W as s}from"./dimensions.stories-CwBejbDu.js";import"./iframe-DQWQDaPi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./index-CXa1CePB.js";import"./ChartSizeDimensions-Bi8bB5az.js";import"./zIndexSlice-DcHJpvAl.js";import"./throttle-BQvRWZqy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BSJdMKGt.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./axisSelectors-CuF4kGlO.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./Page-Cj8EiXz7.js";import"./Line-kGMiuUzH.js";import"./Layer-7j8XoA_H.js";import"./Curve-CR2T-gv2.js";import"./types-D4LIC8ZM.js";import"./step-C6wof28x.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Brr5wTGw.js";import"./Label-DuuyKMi1.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./ZIndexLayer-CfwFYr9r.js";import"./useAnimationId-C7lsUvOa.js";import"./ActivePoints-CRS7YZW5.js";import"./Dot-xJkR_k9t.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./ErrorBarContext-Ch1rJbNM.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getRadiusAndStrokeWidthFromDot-DsN6vJJI.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./XAxis-BBBhOkeu.js";import"./CartesianAxis-DrD9H6GX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C2-Mzga3.js";import"./Legend-n_BkvOmU.js";import"./Symbols-BNIDe_iv.js";import"./symbol-DJaGR-_n.js";import"./useElementOffset-CLIiDdJ8.js";import"./uniqBy-fSK0oXn5.js";import"./iteratee-DdboyrOE.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};
