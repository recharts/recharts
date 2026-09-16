import{u as n,j as e}from"./index-CF2_ADgw.js";import{M as o,C as h}from"./blocks-VBN9dpGo.js";import{C as d,W as s}from"./dimensions.stories-GJHMp3r0.js";import"./iframe-CIqnkIPF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9S55HN04.js";import"./index-BLp3voyE.js";import"./index-CmdQhCAH.js";import"./ChartSizeDimensions-DCRja06P.js";import"./zIndexSlice-C4_auGQK.js";import"./throttle-DQoqhRFH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFyfbVPX.js";import"./isWellBehavedNumber-qR6709gc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D4NhPDr5.js";import"./RechartsWrapper-BI930gKz.js";import"./axisSelectors-tSjH_GJH.js";import"./d3-scale-Bhl30Eoo.js";import"./index-Dd4tpery.js";import"./renderedTicksSlice-CvMTSVT4.js";import"./index-DK82_Rv1.js";import"./CartesianChart-CjwJjVuV.js";import"./chartDataContext-StRUZ171.js";import"./CategoricalChart-kSvqIkP0.js";import"./Page-Cj8EiXz7.js";import"./Line-CIVM0eLj.js";import"./Layer-BamNj_61.js";import"./Curve-B3_VtN3j.js";import"./types-t2__B9uA.js";import"./step-CbHMrxnl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DeKxEgFK.js";import"./Label-Drah4wki.js";import"./Text-DQlwJtIP.js";import"./DOMUtils-DNJKvmAc.js";import"./useId-Bxa3d20C.js";import"./useBackwardsCompatibleTheme-tny2gIbf.js";import"./ZIndexLayer-CdFbga_E.js";import"./useAnimationId-Cd4eq7V7.js";import"./ActivePoints-BXMF2o4n.js";import"./Dot-CwC_vt7v.js";import"./RegisterGraphicalItemId-CTUnkLRc.js";import"./ErrorBarContext-Ow8l1Zrp.js";import"./GraphicalItemClipPath-Cq4Ga7ez.js";import"./SetGraphicalItem-A5whYu6T.js";import"./getRadiusAndStrokeWidthFromDot-CfFHUr4w.js";import"./ActiveShapeUtils-BeOi9VVh.js";import"./useGraphicalItemIdentity-BPBVnbd3.js";import"./XAxis-B7yx9F7n.js";import"./CartesianAxis-D54rrpy0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-uqdlbLxE.js";import"./Legend-CeNhuuzW.js";import"./Symbols-BuldplOI.js";import"./symbol-CEHb0TCd.js";import"./useElementOffset-DWWrDqts.js";import"./uniqBy-CrC70t5H.js";import"./iteratee-DAHo7lUT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
