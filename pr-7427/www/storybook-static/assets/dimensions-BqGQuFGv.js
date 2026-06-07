import{u as n,j as e}from"./index-BZVIUXkH.js";import{M as o,C as h}from"./blocks-BtumAUO4.js";import{C as d,W as s}from"./dimensions.stories-Boz3cT2c.js";import"./iframe-gLXjAGh2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./index-DhIjfNMc.js";import"./ChartSizeDimensions-C4lolEMU.js";import"./zIndexSlice-BiRgg5Ku.js";import"./immer-JN2QralJ.js";import"./get-Qcb7JOLO.js";import"./resolveDefaultProps-CF7N32I5.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-JJ7W0sdT.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./renderedTicksSlice-xzybHrTF.js";import"./axisSelectors-CZIlY7LR.js";import"./d3-scale-Ce8TMAGR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./Page-Cj8EiXz7.js";import"./Line-CYHfJ8Mx.js";import"./Layer-BmcxLaEj.js";import"./Curve-D6HNQ0fs.js";import"./types-BTt0M0gg.js";import"./step-DHNiqqKo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BahKKeqN.js";import"./Label-CJgHZQsX.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./useAnimationId-Cl5wMxi-.js";import"./ActivePoints-gwX5g1ZR.js";import"./Dot-B_5lkSZo.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getRadiusAndStrokeWidthFromDot--8r5PZrP.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./XAxis-DwB13nw6.js";import"./CartesianAxis-FCBmPftJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-sdrrSkAr.js";import"./Legend-B6WdNlEd.js";import"./Symbols-CO1Km2T0.js";import"./symbol-Bq_9R8Y2.js";import"./useElementOffset-BY9xe1Fd.js";import"./uniqBy-DwtP5gK0.js";import"./iteratee-Dfb5foZq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
