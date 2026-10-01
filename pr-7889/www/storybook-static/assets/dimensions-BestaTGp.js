import{u as n,j as e}from"./index-CMpJfgRp.js";import{M as o,C as h}from"./blocks-DtDMRmvr.js";import{C as d,W as s}from"./dimensions.stories-DroGXHFh.js";import"./iframe-B07BHG7b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./index-Ch334nIE.js";import"./ChartSizeDimensions-Dx8uZjvS.js";import"./zIndexSlice-DMtdtU0H.js";import"./throttle-DTIoaHkO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-VKrjcxhK.js";import"./RechartsWrapper-CbwTx7DF.js";import"./axisSelectors-Nr5xjaNb.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./Page-Cj8EiXz7.js";import"./Line-Coltmmom.js";import"./Layer-DGsDthuj.js";import"./Curve-Co_OugcN.js";import"./types-BfpKaUoc.js";import"./step-EbjsK9_B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPQiX0OY.js";import"./Label-DT0SDRud.js";import"./Text-CNYJT0YU.js";import"./DOMUtils-BYXyET0J.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./ZIndexLayer-BWiNey_Z.js";import"./useAnimationId-D8wc_hUQ.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./ActiveShapeUtils-DunyI-30.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./XAxis-CkRNVIdA.js";import"./CartesianAxis-Bwpf-6f1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-9CqKZvPs.js";import"./Legend-Cg8WtWtD.js";import"./Symbols-dpsYkwK3.js";import"./symbol-BrftILDM.js";import"./useElementOffset-DyYSc7X1.js";import"./uniqBy-DWkLQ8w4.js";import"./iteratee-BtatVMfB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
