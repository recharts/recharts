import{u as n,j as e}from"./index-CGzyUoj6.js";import{M as o,C as h}from"./blocks-DfCJQR_y.js";import{C as d,W as s}from"./dimensions.stories-fUiEFxHk.js";import"./iframe-BT2fAbbB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./index-DkhzDGLz.js";import"./ChartSizeDimensions-C5m5psSq.js";import"./zIndexSlice-0bHXttbZ.js";import"./immer-Cs_HwjFQ.js";import"./get-C017lSC3.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DdVrflO2.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./Page-Cj8EiXz7.js";import"./Line-D6orMjMD.js";import"./Layer-CwmO2g8o.js";import"./Curve-5RTqUT5x.js";import"./types-UgUXQeZV.js";import"./step-CJvEyRUy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9eraKkz.js";import"./Label-BKr83VYg.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./ZIndexLayer-vZErJXnS.js";import"./useAnimationId-B9b4cNZQ.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./XAxis-BoVnFGs6.js";import"./CartesianAxis-BeeS8R2V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-ChrnpRQE.js";import"./Legend-DwJmbAop.js";import"./Symbols-CBCiu4_t.js";import"./symbol-B-UyWOPJ.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
