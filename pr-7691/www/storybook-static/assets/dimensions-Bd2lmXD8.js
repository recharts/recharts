import{u as n,j as e}from"./index-CGM5t4ag.js";import{M as o,C as h}from"./blocks-CliO_v-d.js";import{C as d,W as s}from"./dimensions.stories-CnNrZBTZ.js";import"./iframe-CIi4aQFr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./index-DQ9ajMSc.js";import"./ChartSizeDimensions-D4AhdDk2.js";import"./zIndexSlice-Dh5k7YSi.js";import"./throttle-DwQobNkr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B_APHvQA.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./axisSelectors-B5t0SRDA.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./Page-Cj8EiXz7.js";import"./Line-miPkldaS.js";import"./Layer--pVrB_zY.js";import"./Curve-CmPgMf6O.js";import"./types-jFK-aXqG.js";import"./step-WUQpfHT0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDFnApNF.js";import"./Label-_CQ4siSe.js";import"./Text-MCLT9Uur.js";import"./DOMUtils-BGqmQoYm.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./ZIndexLayer-1sxgmC4q.js";import"./useAnimationId-DYWYqd07.js";import"./ActivePoints-B-l9jXx9.js";import"./Dot-D1RE6CX3.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./ErrorBarContext-Dx6F5PJo.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getRadiusAndStrokeWidthFromDot-Bp1zRMUA.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CiR2CsZh.js";import"./CartesianAxis-DFqSm48C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-NZvB3wWl.js";import"./Legend-DiuqNEG1.js";import"./Symbols-DmvYGZj0.js";import"./symbol-Bh1A56tJ.js";import"./useElementOffset-BIPd_XJO.js";import"./uniqBy-Dpw5nYtX.js";import"./iteratee-C1zppXlK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
