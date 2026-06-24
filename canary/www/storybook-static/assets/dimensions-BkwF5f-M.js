import{u as n,j as e}from"./index-DtQ0ron4.js";import{M as o,C as h}from"./blocks-RNyo5GWP.js";import{C as d,W as s}from"./dimensions.stories-DM1dCE2R.js";import"./iframe-DI4HGhHh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./index-C0kJRHqc.js";import"./ChartSizeDimensions-C02zPkdf.js";import"./zIndexSlice-DLsQIX9Y.js";import"./immer-CAVNBYxE.js";import"./get-Bfcmt9LS.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BT-NJBPH.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./Page-Cj8EiXz7.js";import"./Line-BIfkn347.js";import"./Layer-2I2RJkTJ.js";import"./Curve-D1vPRm9h.js";import"./types-BM9AiZnq.js";import"./step-D4TxsChD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_Y2HCHw.js";import"./Label-BOdAN_xF.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./ZIndexLayer-CAI-vp6k.js";import"./useAnimationId-B5j5oAoh.js";import"./ActivePoints-Br89aa_G.js";import"./Dot--Dziv_M5.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getRadiusAndStrokeWidthFromDot-DU4jn54H.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./XAxis-Dj4RjVoP.js";import"./CartesianAxis-XgaOnUyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-C1Oi2VZJ.js";import"./Legend-r05uFuGy.js";import"./Symbols-Bn-ZN7NN.js";import"./symbol-Bxz5MfJW.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
