import{u as n,j as e}from"./index-D_dMC7fV.js";import{M as o,C as h}from"./blocks-B0Gxw9me.js";import{C as d,W as s}from"./dimensions.stories-DUr62zRq.js";import"./iframe-CtnQdIY7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./index-CsEievrw.js";import"./ChartSizeDimensions--6YHMd2-.js";import"./zIndexSlice-uhZ24fvC.js";import"./throttle-BK98nfBm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CQbfWDL_.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./axisSelectors-RZmSNqcb.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./Page-Cj8EiXz7.js";import"./Line-BhbLTTAA.js";import"./Layer-CrHPq_vq.js";import"./Curve-maCREAuN.js";import"./types-CuvpKj9W.js";import"./step-Dqi6RR6U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-8qrP3C.js";import"./Label-qBa5cEUX.js";import"./Text-B-1OewBP.js";import"./DOMUtils-BvAafYtQ.js";import"./ZIndexLayer-DMqHwKfA.js";import"./useAnimationId-DN6fR6pH.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./ErrorBarContext-ryDidWCv.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-XO5v4-hr.js";import"./CartesianAxis-B2-Emwk9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-18LfpUGe.js";import"./Legend-BiRbjuQ8.js";import"./Symbols-DQM-19oT.js";import"./symbol-CyjWwlnJ.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
