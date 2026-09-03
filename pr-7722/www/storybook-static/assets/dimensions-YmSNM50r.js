import{u as n,j as e}from"./index-DZB4e9bz.js";import{M as o,C as h}from"./blocks-Dpc08jAG.js";import{C as d,W as s}from"./dimensions.stories-BpIoCoHq.js";import"./iframe-DwwIEbnV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./index-Dy8lu7uT.js";import"./ChartSizeDimensions-DbF4m7b6.js";import"./zIndexSlice-CQLOtaPs.js";import"./throttle-Blsl_VHV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cmp_uiAi.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./Page-Cj8EiXz7.js";import"./Line-B-nrSDyv.js";import"./Layer-6Fp4VzoQ.js";import"./Curve-DrEaRkOl.js";import"./types-DYVbiWe3.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ds3KeOI2.js";import"./Label-BBU3iKAi.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./ZIndexLayer-B_JcFefp.js";import"./useAnimationId-Cx0Chyvr.js";import"./ActivePoints-DJFnJVEG.js";import"./Dot-DmrEwaiX.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getRadiusAndStrokeWidthFromDot-jdfKPlMV.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-Cz_Rnhgj.js";import"./CartesianAxis-Duh3rzkN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bawx2GP2.js";import"./Legend-Dtvcy6av.js";import"./Symbols-DsOsjkXy.js";import"./symbol-DyMqDs2V.js";import"./useElementOffset-CXNuRQTj.js";import"./uniqBy-BnkYei7v.js";import"./iteratee-CU8R_nxk.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
