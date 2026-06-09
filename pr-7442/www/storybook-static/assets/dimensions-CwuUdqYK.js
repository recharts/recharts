import{u as n,j as e}from"./index-BhEP6g0t.js";import{M as o,C as h}from"./blocks-C4TarTP3.js";import{C as d,W as s}from"./dimensions.stories-HLzJ9Dsj.js";import"./iframe-_0vvsXwQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./index-CQeeIj4f.js";import"./ChartSizeDimensions-D465C7og.js";import"./zIndexSlice-UDOegWIl.js";import"./immer-Crw1A_KU.js";import"./get-dROHwlCD.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C9VfnRnH.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./Page-Cj8EiXz7.js";import"./Line-Cj7LWAqT.js";import"./Layer-CbOAMwV5.js";import"./Curve-Be-qJ1Us.js";import"./types-DDFFAOTe.js";import"./step-CiU6-CNX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NUeY2MHF.js";import"./Label-CiJ4G9HU.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./useAnimationId-Bs-cdpiV.js";import"./ActivePoints-Bq9SVATs.js";import"./Dot-COzuztjB.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./ErrorBarContext-CJqzxiYr.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getRadiusAndStrokeWidthFromDot-CWPNX420.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./XAxis-BVL11hxO.js";import"./CartesianAxis-ZzlyT-7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DH6-Go25.js";import"./Legend-BAko8yD_.js";import"./Symbols-X-eMSadG.js";import"./symbol-CBGxeWEx.js";import"./useElementOffset-CShe55V9.js";import"./uniqBy-XCrF3wJ7.js";import"./iteratee-CU05RyCR.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
