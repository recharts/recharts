import{u as n,j as e}from"./index-CVOSqF9_.js";import{M as o,C as h}from"./blocks-CHjPgyoA.js";import{C as d,W as s}from"./dimensions.stories-lxKuuBAL.js";import"./iframe-B0sakJiE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./index-B_LLgB3d.js";import"./ChartSizeDimensions-BphyBtmb.js";import"./zIndexSlice-C2JoSOuc.js";import"./throttle-C7TX7owl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CtXhtoOd.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./Page-Cj8EiXz7.js";import"./Line-84fb3iOh.js";import"./Layer-CcOy9dqf.js";import"./Curve-B_1SwL8s.js";import"./types-BxUBO_Vd.js";import"./step-step2nKl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhCfcvtd.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./ZIndexLayer-C7T7VX-U.js";import"./useAnimationId-fISgZVPU.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./useGraphicalItemIdentity-CN480731.js";import"./XAxis-BMxSzB1I.js";import"./CartesianAxis-6gx2DY-1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CZvdB1-4.js";import"./Legend-C-A0bCgE.js";import"./Symbols-VzAfvAVY.js";import"./symbol-BbQhUQUQ.js";import"./useElementOffset-4fRB1JA3.js";import"./uniqBy-CUMmWf25.js";import"./iteratee-XhZZr9kx.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
