import{u as n,j as e}from"./index-DS5iu2hc.js";import{M as o,C as h}from"./blocks-Dkw0H6TA.js";import{C as d,W as s}from"./dimensions.stories-BFct0Mfi.js";import"./iframe-BrVE5RSW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./index-SZqQo-6K.js";import"./ChartSizeDimensions-B_jvKvoV.js";import"./zIndexSlice-CHsJbjJD.js";import"./throttle-BQaLLzka.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CCPBzUyH.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./Page-Cj8EiXz7.js";import"./Line-t7QkMSUE.js";import"./Layer-BvSPpSNQ.js";import"./Curve-DQe-iWey.js";import"./types-CE2qBNHK.js";import"./step-DvhKjAy0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bzkg4GxV.js";import"./Label-DySzAUNx.js";import"./Text-B4ZIZNbZ.js";import"./DOMUtils-IYFeeRl2.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./ZIndexLayer-BERp6HrO.js";import"./useAnimationId-CaCeoqu2.js";import"./ActivePoints--e6lCWWz.js";import"./Dot-B2RdazQP.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getRadiusAndStrokeWidthFromDot-Cg4paiyF.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./XAxis-B0eJFub6.js";import"./CartesianAxis-Cn4O1F7T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BAuMZklG.js";import"./Legend-DSgchmmp.js";import"./Symbols-Dam4qE3U.js";import"./symbol-DBtAd547.js";import"./useElementOffset-BEglwowY.js";import"./uniqBy-Dh9tSYdQ.js";import"./iteratee-C1RNAWyh.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
