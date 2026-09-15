import{u as n,j as e}from"./index-RoCqYSrU.js";import{M as o,C as h}from"./blocks-Cf3tOca5.js";import{C as d,W as s}from"./dimensions.stories-Br7n7ibq.js";import"./iframe-iz9dRDhe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./index-8jy5f1Un.js";import"./ChartSizeDimensions-BJqqEeF-.js";import"./zIndexSlice-BdPqcxx_.js";import"./throttle-DE0tlCdA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DjYayHbw.js";import"./RechartsWrapper-CUdNLZqv.js";import"./axisSelectors-2huN7QkS.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./Page-Cj8EiXz7.js";import"./Line-AbxFIqH7.js";import"./Layer-DYGhC4_B.js";import"./Curve-D2o1LRz2.js";import"./types-LFzxVX1I.js";import"./step-C36qcU_Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dc8Ivobd.js";import"./Label-C1iyqFpa.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./useAnimationId-7yr0q3Dd.js";import"./ActivePoints-DShx2jgH.js";import"./Dot-B7QvGJur.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./ErrorBarContext-CNF3begD.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./getRadiusAndStrokeWidthFromDot-CQjtIaHq.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";import"./XAxis-6Wrkyy5u.js";import"./CartesianAxis-CdElIjx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DtrhiCef.js";import"./Legend-DwOR3Z5p.js";import"./Symbols-BfhqqNlw.js";import"./symbol-CqpTEBVx.js";import"./useElementOffset-jd_Y94ov.js";import"./uniqBy-D6bHLL80.js";import"./iteratee-ch_GTcmf.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
