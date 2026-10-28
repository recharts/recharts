import{u as n,j as e}from"./index-B-EF49IK.js";import{M as o,C as h}from"./blocks-ZLyDHD5N.js";import{C as d,W as s}from"./dimensions.stories-84N7_nFh.js";import"./iframe-DEalUshl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./index-C7wIczSG.js";import"./ChartSizeDimensions-D8RuJPDN.js";import"./zIndexSlice-CAksOI_1.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./throttle-DufRm-wd.js";import"./ComposedChart-CdALL1sF.js";import"./RechartsWrapper-BK5G7zbx.js";import"./axisSelectors-DjgJ2Mrx.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./Page-Cj8EiXz7.js";import"./Line-KtdY_z4O.js";import"./Layer-Bw1dSYwu.js";import"./Curve-BXiJvEeV.js";import"./types-CObAiW_q.js";import"./step-BwbLlF7G.js";import"./path-DyVhHtw_.js";import"./LabelList-hToPfPST.js";import"./Label-CBgDJ6T5.js";import"./Text-DnHyAqDr.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./ActivePoints-CRXr9H7D.js";import"./Dot-DCVDv1q-.js";import"./activeStyles-DOcC-AXu.js";import"./useAnimationId-_MrDTWeG.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./ErrorBarContext-CNmRRpz3.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getRadiusAndStrokeWidthFromDot-DBGr2m_l.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./XAxis-BITqqVCe.js";import"./CartesianAxis-kcZBykzp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DlX9l8Ve.js";import"./Legend-DiL1Iu_V.js";import"./useElementOffset-DRy_rfXg.js";import"./uniqBy-D0fLoUi4.js";import"./iteratee-aVpqpOpW.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
