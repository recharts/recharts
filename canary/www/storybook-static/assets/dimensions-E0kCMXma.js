import{u as n,j as e}from"./index-7AmOX_tV.js";import{M as o,C as h}from"./blocks-DNtAIgz4.js";import{C as d,W as s}from"./dimensions.stories-DaqFM0Nz.js";import"./iframe-Cuw567ao.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./index-1-Kpwwt_.js";import"./ChartSizeDimensions-D-S7zcRf.js";import"./zIndexSlice-BuAoIKSs.js";import"./throttle-Bjmeh804.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Qred9gjF.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./Page-Cj8EiXz7.js";import"./Line-DlwGtjpP.js";import"./Layer-T72FoYEi.js";import"./Curve-DpAcFiD4.js";import"./types-BooOBCdC.js";import"./step-oaTKbJ5-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1juRf7B.js";import"./Label-BJjrjkoL.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./ZIndexLayer-b9cpcpRU.js";import"./useAnimationId-7XVM7nxW.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./XAxis-CFLpq8b6.js";import"./CartesianAxis-D-JaI_zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CbSfE1QD.js";import"./Legend-DTP5ocpZ.js";import"./Symbols-DVfNN2xc.js";import"./symbol-DKb90v9t.js";import"./useElementOffset-DmR9p-uX.js";import"./uniqBy-CsdKAqlX.js";import"./iteratee-B0sRemCe.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
