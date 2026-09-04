import{u as n,j as e}from"./index-BkFn-QDZ.js";import{M as o,C as h}from"./blocks-x4MPMPBF.js";import{C as d,W as s}from"./dimensions.stories-lPWIcZ36.js";import"./iframe-BKk44VOT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./index-CvfG5lr1.js";import"./ChartSizeDimensions-Cc1mjxG9.js";import"./zIndexSlice-BjWKOBUm.js";import"./throttle-BdnDrpLZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bs9KweDK.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./Page-Cj8EiXz7.js";import"./Line-BvewL5vb.js";import"./Layer-6OjQkfig.js";import"./Curve-Bl3ua7_T.js";import"./types-CjNR6i_K.js";import"./step-Dtmfv3UM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_iMVf6zS.js";import"./Label-BPr6N2Q-.js";import"./Text-BtR9CUIB.js";import"./DOMUtils-Dil5o6Lr.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-2cJ7kaI0.js";import"./CartesianAxis-D8EUtvdL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DPFxody7.js";import"./Legend-C8H3bsT4.js";import"./Symbols-BAM533G2.js";import"./symbol-BvEjq6Qb.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
