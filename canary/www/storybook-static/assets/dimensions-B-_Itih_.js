import{u as n,j as e}from"./index-lUXDQGam.js";import{M as o,C as h}from"./blocks-Fgby9A92.js";import{C as d,W as s}from"./dimensions.stories-CurZ9IgY.js";import"./iframe-DtUqFz4i.js";import"./preload-helper-Dp1pzeXC.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./index-Dz7I98PR.js";import"./ChartSizeDimensions-Dbzhfriw.js";import"./zIndexSlice-D7wiyJvz.js";import"./throttle-Xq_SZc3C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CzQBCEWP.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./Page-Cj8EiXz7.js";import"./Line-C8UhNYz0.js";import"./Layer-DaGE4xdO.js";import"./Curve-dyv5wxAX.js";import"./types-DIyWN1O2.js";import"./step-6HhaZYhK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bqh_lJsV.js";import"./Label-DSBhBvVo.js";import"./Text-Ci0TXZMh.js";import"./DOMUtils-CAVjRHi7.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./useAnimationId-yAmPQwMn.js";import"./ActivePoints-ConO_hsx.js";import"./Dot-CtYAIqQI.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./ErrorBarContext-CnzHFxN7.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getRadiusAndStrokeWidthFromDot-qVB91pCe.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CDer3rOu.js";import"./CartesianAxis-CvUiwg6W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BMscqJB-.js";import"./Legend-nKNwmpxg.js";import"./Symbols-DUAmEX4d.js";import"./symbol-CuIzRMST.js";import"./useElementOffset-zKQGkCXa.js";import"./uniqBy-CF70an62.js";import"./iteratee-BsjABlDl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
