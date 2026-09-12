import{u as n,j as e}from"./index-C3t1R1nC.js";import{M as o,C as h}from"./blocks-BLLPDJhX.js";import{C as d,W as s}from"./dimensions.stories-CmATp3hu.js";import"./iframe-a8fM-7Cj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./index-DRs5RvY7.js";import"./ChartSizeDimensions-2DvXP7IM.js";import"./zIndexSlice-B7KswQd6.js";import"./throttle-CaMuYXI0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BjiltZm-.js";import"./RechartsWrapper-DeMmS_JM.js";import"./axisSelectors-DVs_A9Pl.js";import"./d3-scale-wNdoB6Dl.js";import"./index-Ke9S5-gf.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./index-ZucSeVLn.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./Page-Cj8EiXz7.js";import"./Line-CfiMME7R.js";import"./Layer-XxWBFlRD.js";import"./Curve-BopOTfmu.js";import"./types-DyUzdvoN.js";import"./step-BGrDxD_7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVA7Axrg.js";import"./Label-KdQX6hx3.js";import"./Text-Bo9ttyFU.js";import"./DOMUtils-BvC4n3H8.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./useAnimationId-DPUxtvyW.js";import"./ActivePoints-B8Jb8oVa.js";import"./Dot-DMPbfCPa.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./ErrorBarContext-DMuZxb5G.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getRadiusAndStrokeWidthFromDot-C7Tnz6V8.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";import"./XAxis-CiRF9J92.js";import"./CartesianAxis-CtttCErg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DeFLWHEC.js";import"./Legend-BIclEAHV.js";import"./Symbols-Cun0Q05f.js";import"./symbol-A-VdQ2Cb.js";import"./useElementOffset-BGrjDRT_.js";import"./uniqBy-KCT6LaRN.js";import"./iteratee-DuzqjsWc.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
