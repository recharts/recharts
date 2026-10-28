import{u as n,j as e}from"./index-CRhc_9d3.js";import{M as o,C as h}from"./blocks-BVX5BD-a.js";import{C as d,W as s}from"./dimensions.stories-CwUKXVkV.js";import"./iframe-B5-NOQ5t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./index-CyjoC35Z.js";import"./ChartSizeDimensions-DM3T3GAv.js";import"./zIndexSlice-CRh8M764.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./throttle-BmJCRGcn.js";import"./ComposedChart-Cs-WfBMv.js";import"./RechartsWrapper-DlDVaHKU.js";import"./axisSelectors-CoB8fX7y.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BV3y_nyi.js";import"./index-CwdbuGI9.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./Page-Cj8EiXz7.js";import"./Line-DcgWWTAC.js";import"./Layer-vSXC9HFp.js";import"./Curve-JcmdhaiD.js";import"./types-BMOXg_-b.js";import"./step-CC8FisnC.js";import"./path-DyVhHtw_.js";import"./LabelList-D_E_aw3e.js";import"./Label-Buxp0onk.js";import"./Text-B1H13EKo.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./activeStyles-DCKEH4qZ.js";import"./useAnimationId-CsdMGkaP.js";import"./dataEntryStyles-DTbCoLqH.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./ErrorBarContext-x4ks4uU4.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./XAxis-BFljSmnb.js";import"./CartesianAxis-BQONH3FI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BxGdoYHh.js";import"./Legend-CtVYeCbD.js";import"./useElementOffset-RuET0wQK.js";import"./uniqBy-CQFuYkxP.js";import"./iteratee-Do7GGGp4.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
