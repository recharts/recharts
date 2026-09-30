import{u as n,j as e}from"./index-BOQ7c2ws.js";import{M as o,C as h}from"./blocks-DLWj86Ag.js";import{C as d,W as s}from"./dimensions.stories-D1AVVdcc.js";import"./iframe-CDSer5wk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./index-SPPJq_2I.js";import"./ChartSizeDimensions-g6lgfL73.js";import"./zIndexSlice-B-lpBScO.js";import"./throttle-fnP7_niv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-b_m8lhmT.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./Page-Cj8EiXz7.js";import"./Line-DsDCihMT.js";import"./Layer-BlrsPtdk.js";import"./Curve-BrORdZJH.js";import"./types-DCfhmQQy.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C7ScRxUV.js";import"./Label-CDfUkOd_.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./ZIndexLayer-BGJbwrqn.js";import"./useAnimationId-DsIt1eY5.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./XAxis-CLZ8_tLg.js";import"./CartesianAxis-DnSeAvbN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DN7TNoMj.js";import"./Legend-D5bRhJ8Z.js";import"./Symbols-DNCMzjd9.js";import"./symbol-HykW2qul.js";import"./useElementOffset-pulofrmD.js";import"./uniqBy-BRQZPpXV.js";import"./iteratee-CIlfEQ2h.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
