import{u as n,j as e}from"./index-B_oguYLq.js";import{M as o,C as h}from"./blocks-gNDkHxIa.js";import{C as d,W as s}from"./dimensions.stories-_3xZybE_.js";import"./iframe-CSFRbakT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./index-DiZSJisN.js";import"./ChartSizeDimensions-J1f8diPd.js";import"./zIndexSlice-DpZcKFY3.js";import"./throttle-DU_ACcBv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-_ImOSsn2.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./axisSelectors-KHPqbB-J.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./Page-Cj8EiXz7.js";import"./Line-D5ifXaPa.js";import"./Layer-Cas4KfrT.js";import"./Curve-CfossU1f.js";import"./types-63Ql-Qpj.js";import"./step-CyAEPMCA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fBpE1aA1.js";import"./Label-wJcYTwit.js";import"./Text-D8YyLcux.js";import"./DOMUtils-DF5CrQ-h.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./ZIndexLayer-CRsGh2jd.js";import"./useAnimationId-CTzy6jqJ.js";import"./ActivePoints-D10Gw0-N.js";import"./Dot-pcaRJ9oP.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getRadiusAndStrokeWidthFromDot-Dzv_bsMb.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-qtAkwMmZ.js";import"./CartesianAxis-BE0DelqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DYaDbF01.js";import"./Legend-JfPnabH0.js";import"./Symbols-BBe6ZWzU.js";import"./symbol-DtBce2gr.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
