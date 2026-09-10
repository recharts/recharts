import{u as n,j as e}from"./index-CXfZipIC.js";import{M as o,C as h}from"./blocks-B2zlkX9l.js";import{C as d,W as s}from"./dimensions.stories-DOx3FTwe.js";import"./iframe-BkEvAth1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./index-BRKc8NTQ.js";import"./ChartSizeDimensions-BU6uzQr8.js";import"./zIndexSlice-nf1W2Gc-.js";import"./throttle-D101QSOu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DoYpCRnR.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./Page-Cj8EiXz7.js";import"./Line-BktN_626.js";import"./Layer-B86MwzYN.js";import"./Curve-oC0QJw4U.js";import"./types-CCpLRaHh.js";import"./step-2sMLUC-_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAE7yXHk.js";import"./Label-C6aq5sgc.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./useAnimationId-BXkgTCLA.js";import"./ActivePoints-BpS_UUeT.js";import"./Dot-DqgMg3tu.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getRadiusAndStrokeWidthFromDot-DpGWIpus.js";import"./ActiveShapeUtils-l5lysgay.js";import"./useGraphicalItemIdentity-C648VAOs.js";import"./XAxis-RdR0TVxW.js";import"./CartesianAxis-BTQZoIY0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DLVoYarI.js";import"./Legend-BXo1MJNw.js";import"./Symbols-Cfz0iFpH.js";import"./symbol-Cndg8C7R.js";import"./useElementOffset-CNOTyxbq.js";import"./uniqBy-vII-2Sju.js";import"./iteratee-V58mN6Z0.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
