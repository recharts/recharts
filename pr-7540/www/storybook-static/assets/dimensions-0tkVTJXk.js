import{u as n,j as e}from"./index-B_Dr9w_k.js";import{M as o,C as h}from"./blocks-C51Um44Q.js";import{C as d,W as s}from"./dimensions.stories-BTden1-3.js";import"./iframe-DGYc5Evr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./index-xTx_eyuL.js";import"./ChartSizeDimensions-Qa1o7GH1.js";import"./zIndexSlice-CjPpABdt.js";import"./throttle-44TCHeAp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DPdiH-nu.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./Page-Cj8EiXz7.js";import"./Line-CXcSqzzS.js";import"./Layer-Cp66mevN.js";import"./Curve-CIxbvgQM.js";import"./types-m9Fzmc4X.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpTt0Un9.js";import"./Label-ByCQCza6.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./ZIndexLayer-BiqJjXGY.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./XAxis-v5Hkx9ES.js";import"./CartesianAxis-XkVfHgZD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-D-S3NpvC.js";import"./Legend-Bm7jm6sf.js";import"./Symbols-BhoLSFjr.js";import"./symbol-BydJeVAg.js";import"./useElementOffset-BXz8BlKI.js";import"./uniqBy-pDvyWWJD.js";import"./iteratee-D1l6G22V.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
