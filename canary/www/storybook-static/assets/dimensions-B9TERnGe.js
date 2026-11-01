import{u as n,j as e}from"./index-DLBZq9EF.js";import{M as o,C as h}from"./blocks-mc1Ndv2y.js";import{C as d,W as s}from"./dimensions.stories-1KkIie-s.js";import"./iframe-BoZGnJw3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./index-D9DvxSgb.js";import"./ChartSizeDimensions-CQLCzu_j.js";import"./zIndexSlice-a6rFVYjz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./throttle-DtDTnxHB.js";import"./ComposedChart-BoAZL9SR.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./axisSelectors-D380Rkbk.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./Page-Cj8EiXz7.js";import"./Line-LdQMhgoS.js";import"./Layer-DWrdDLVq.js";import"./Curve-Cwz00roS.js";import"./types-VJa2wa64.js";import"./step-DM17TeVN.js";import"./path-DyVhHtw_.js";import"./LabelList-DN0FQ104.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./ActivePoints-DFbmabNT.js";import"./Dot-DvyXLuZB.js";import"./activeStyles-B-PjepTA.js";import"./useAnimationId-DhSaM75t.js";import"./dataEntryStyles-BZaOAKnN.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./ErrorBarContext-BWsLX-Zn.js";import"./SetGraphicalItem-8abau_IG.js";import"./getRadiusAndStrokeWidthFromDot-CXVA2gr-.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./useEffectiveDataKey-D7W7vL8E.js";import"./XAxis-DaJlL1eX.js";import"./CartesianAxis-LiXL0IDn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DWoSckNu.js";import"./Legend-BXUyYQeC.js";import"./useElementOffset-hC9xa8NL.js";import"./uniqBy-bj0x6NYX.js";import"./iteratee-CAiBVgkS.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
