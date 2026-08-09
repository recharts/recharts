import{u as n,j as e}from"./index-CgZZ7H89.js";import{M as o,C as h}from"./blocks-BWPMB-lR.js";import{C as d,W as s}from"./dimensions.stories-BTo69UJ3.js";import"./iframe-D_UL8fjK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./index-Bs4KGwv6.js";import"./ChartSizeDimensions-CrOCn7yQ.js";import"./zIndexSlice-B8f2hTRD.js";import"./throttle-EbH1y2w7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CDUUKafl.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./axisSelectors-BNsSlswM.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./Page-Cj8EiXz7.js";import"./Line-DkjoUMo4.js";import"./Layer-DErQ8LWn.js";import"./Curve-VdPw19wo.js";import"./types-D8jMk9wl.js";import"./step-DBWLHasU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZBM6OyTb.js";import"./Label-efHFABNJ.js";import"./Text-bynAhtfX.js";import"./DOMUtils-y3mUx3tY.js";import"./ZIndexLayer-CzKUyCGh.js";import"./useAnimationId-1dDzdKc5.js";import"./ActivePoints-BrIz1_y9.js";import"./Dot-CPC6zP8q.js";import"./RegisterGraphicalItemId-CO_dSij1.js";import"./ErrorBarContext-MTEcEnWo.js";import"./graphicalItemIdentity-DUedU3Gi.js";import"./SetGraphicalItem-Bv1waFvM.js";import"./getRadiusAndStrokeWidthFromDot-DmFKBFPd.js";import"./ActiveShapeUtils-JCOSF6Qb.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./XAxis-CazN9wRX.js";import"./CartesianAxis-BrHAq2Nx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Dd6vSYjv.js";import"./Legend-BBUmNyqy.js";import"./Symbols-pXC08tLP.js";import"./symbol-B4SUxp2b.js";import"./useElementOffset-He-jtgi_.js";import"./uniqBy-C-e68djf.js";import"./iteratee-CqgkHJdQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
