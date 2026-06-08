import{u as n,j as e}from"./index-CrUDxyjF.js";import{M as o,C as h}from"./blocks-CghkWyLu.js";import{C as d,W as s}from"./dimensions.stories-CsFf3f7p.js";import"./iframe-DhtJ7XT9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./index-oGt5PMWE.js";import"./ChartSizeDimensions-DGKcuh4P.js";import"./zIndexSlice-Cyl_38qZ.js";import"./immer-C_Dt4QUB.js";import"./get-DhiNYMWj.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CBgz9QgQ.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./Page-Cj8EiXz7.js";import"./Line-E8j5PUVA.js";import"./Layer-nlXR0D_W.js";import"./Curve-Dqu8WPkG.js";import"./types-CLlZJjoC.js";import"./step-CPd-nqqu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0rQfZQx.js";import"./Label-Dca6KvYU.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./useAnimationId-LwDoReja.js";import"./ActivePoints-Dr8Ax-C8.js";import"./Dot-BJDprnUj.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getRadiusAndStrokeWidthFromDot-Bj473EA9.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./XAxis-J3EL6z9G.js";import"./CartesianAxis-D_A7dWIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-B01PX68r.js";import"./Legend-DoC9rE4X.js";import"./Symbols-Cw6loTNS.js";import"./symbol-DQZ6Kdkf.js";import"./useElementOffset-ZY1ZAY4p.js";import"./uniqBy-B0VZpdkS.js";import"./iteratee-DWrV7Ekf.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
