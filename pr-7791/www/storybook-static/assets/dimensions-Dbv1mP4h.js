import{u as n,j as e}from"./index-TqP7arZV.js";import{M as o,C as h}from"./blocks-DG4qN_n1.js";import{C as d,W as s}from"./dimensions.stories-SbNFdSVb.js";import"./iframe-C3cMgs7N.js";import"./preload-helper-Dp1pzeXC.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./index-CbpSVjN5.js";import"./ChartSizeDimensions-CS78ikIP.js";import"./zIndexSlice-D-L1krEw.js";import"./throttle-CwKbnzuB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B0L49GOK.js";import"./RechartsWrapper-BBL8LSCF.js";import"./axisSelectors-CyFo4akS.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./Page-Cj8EiXz7.js";import"./Line-qJZBDGuF.js";import"./Layer-B4ssOgoe.js";import"./Curve-Cd2PH3uW.js";import"./types-BRZWQnVt.js";import"./step-BchzuBRK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CeXZD4iR.js";import"./Label-p42oyH6O.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./ZIndexLayer-Beq1j20z.js";import"./useAnimationId-Bsfqf9JH.js";import"./ActivePoints-CeVGeC-b.js";import"./Dot-DHWsLk6I.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getRadiusAndStrokeWidthFromDot-Bp5N-w6q.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./useGraphicalItemIdentity-BrYniqkC.js";import"./XAxis-FEXGRCPo.js";import"./CartesianAxis-Cm_mWvUj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CPQEML-M.js";import"./Legend-bmgZmqHj.js";import"./Symbols-DFH8MDwp.js";import"./symbol-Cl7JEJ3q.js";import"./useElementOffset-C6z2yXVE.js";import"./uniqBy-D9evTCTx.js";import"./iteratee-DQXLPY2T.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
