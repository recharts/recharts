import{u as n,j as e}from"./index-BhMC98WM.js";import{M as o,C as h}from"./blocks-C_8c5bUA.js";import{C as d,W as s}from"./dimensions.stories-Bp9scpAO.js";import"./iframe-DTgRciqJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./index-nyRg1-_W.js";import"./ChartSizeDimensions-Cl-E4ABB.js";import"./zIndexSlice-DVbLmSgB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./throttle-DuudF_mE.js";import"./ComposedChart-BUWqBVBV.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./axisSelectors-CM_jcbgZ.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./Page-Cj8EiXz7.js";import"./Line-B2ntj69e.js";import"./Layer-uwDyCJ97.js";import"./Curve-CjloRNAl.js";import"./types-D-ekNx8o.js";import"./step-0aJ3gZqs.js";import"./path-DyVhHtw_.js";import"./LabelList-DQdMNFQg.js";import"./Label-ClRWPO-B.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./ActivePoints-q_blbmo6.js";import"./Dot-BnzqQ9RW.js";import"./activeStyles-bjUNghBK.js";import"./useAnimationId-D4a67WLs.js";import"./dataEntryStyles-B-5OPbn7.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./ErrorBarContext-CqakUp6M.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getRadiusAndStrokeWidthFromDot-DXeqlmgf.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./themeFill-BkM1x4hA.js";import"./XAxis-GGlBaKPK.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bbi7V5fP.js";import"./Legend-DuFVdlS3.js";import"./fillDefinitions-DVVBuQo8.js";import"./useElementOffset-C_KB9sAl.js";import"./uniqBy-CROCk4kq.js";import"./iteratee-CNnsb6wb.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};
