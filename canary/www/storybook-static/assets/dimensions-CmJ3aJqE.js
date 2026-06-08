import{u as n,j as e}from"./index-dF8x28sQ.js";import{M as o,C as h}from"./blocks-BIHDcxaZ.js";import{C as d,W as s}from"./dimensions.stories-DltRM0-q.js";import"./iframe-GBGc-iKq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./index-DEGNeWRW.js";import"./ChartSizeDimensions-Bu5H8pzv.js";import"./zIndexSlice-DP0tLqWW.js";import"./immer-9IN4E6VX.js";import"./get-DICUyaHN.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BAWAmmMR.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./Page-Cj8EiXz7.js";import"./Line-BLIZlFIO.js";import"./Layer-CDGRbd8f.js";import"./Curve-B9n6ABfY.js";import"./types-BTPiehg7.js";import"./step-CxLlu8x6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C29R-vhg.js";import"./Label-DSpdGeyH.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./useAnimationId-BXgA3n2L.js";import"./ActivePoints-CBmfjAqp.js";import"./Dot-Jn68Tyru.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getRadiusAndStrokeWidthFromDot-nN08QDm9.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./XAxis-BBjH0uDR.js";import"./CartesianAxis-DQP4bonx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-mSAPjc-3.js";import"./Legend-F4vRuJVq.js";import"./Symbols-DCPOqpq2.js";import"./symbol-Dstt6t6v.js";import"./useElementOffset-_LlNMZ1b.js";import"./uniqBy-BPbPdDdp.js";import"./iteratee-DqpINt84.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
