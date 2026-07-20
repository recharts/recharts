import{u as n,j as e}from"./index-DdUd9-q_.js";import{M as o,C as h}from"./blocks-B22ePqhA.js";import{C as d,W as s}from"./dimensions.stories-D8lK2Wwo.js";import"./iframe-C749ZEo3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./index-Cclh13Kt.js";import"./ChartSizeDimensions-Aoc0hs4d.js";import"./zIndexSlice-DkHm22lp.js";import"./throttle-CELIeDih.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-6zK50N0i.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BDBDopuV.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./renderedTicksSlice-B967Fzve.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./Page-Cj8EiXz7.js";import"./Line-UPSPma38.js";import"./Layer-FHePmoXC.js";import"./Curve-D0zH9wUo.js";import"./types-CCzU3Dbp.js";import"./step-BM8N9mx2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D44ZJFQN.js";import"./Label-SA_6xz2S.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./ZIndexLayer-BPz0-wLY.js";import"./useAnimationId-BXnZ6W5r.js";import"./ActivePoints-Crx-wa0M.js";import"./Dot-CRKEafBC.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getRadiusAndStrokeWidthFromDot-YLlbYGyD.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./XAxis-B1Zyj3MJ.js";import"./CartesianAxis-CwN7eQSV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-B2DRI57X.js";import"./Legend-Dgt--ULT.js";import"./Symbols-F0I1p1Fo.js";import"./symbol-Dq2t-h2a.js";import"./useElementOffset-D5wCeLQL.js";import"./uniqBy-gAFj75uR.js";import"./iteratee-BUXNkTTn.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
