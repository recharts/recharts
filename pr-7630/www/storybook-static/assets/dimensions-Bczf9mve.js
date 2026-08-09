import{u as n,j as e}from"./index-Br4VFEJ5.js";import{M as o,C as h}from"./blocks-sYmKYjCU.js";import{C as d,W as s}from"./dimensions.stories-D0VdPF-C.js";import"./iframe-osdC7w3x.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./index-BnccS2yU.js";import"./ChartSizeDimensions-Ccpq8-Wu.js";import"./zIndexSlice-deUrzjsz.js";import"./throttle-yBEImYyh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-NByrG7TX.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./Page-Cj8EiXz7.js";import"./Line-ChMsZBXA.js";import"./Layer-CRq3eSZM.js";import"./Curve-CnankNoj.js";import"./types-PJaZpOTb.js";import"./step-BWmIUyya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHXks09V.js";import"./Label-CRRMP5SS.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./ZIndexLayer-C_4Zumz8.js";import"./useAnimationId-T5o_BkmZ.js";import"./ActivePoints-XOhn4AON.js";import"./Dot-CXtOSde0.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getRadiusAndStrokeWidthFromDot-aTO7lmXX.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-B__lQt6h.js";import"./CartesianAxis-D1s41LT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DYUQr3XS.js";import"./Legend-pDiA-ZTx.js";import"./Symbols-Coi-Izm_.js";import"./symbol-BY8GUPiW.js";import"./useElementOffset-Ci-G34ee.js";import"./uniqBy-BwdA_Akb.js";import"./iteratee-Bc7fw8nQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
