import{j as e}from"./jsx-runtime-DAqvNVP3.js";import{useMDXComponents as n}from"./index-BUCxvfZK.js";import{M as o,C as h}from"./blocks-DOpSFrw2.js";import{C as d,W as s}from"./dimensions.stories-C3hVpATD.js";import"./iframe-VPJyTU3C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./arrayEqualityCheck-CXN3l8IH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BcIOapvV.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./Line-YSIAJHaU.js";import"./Layer-7CDZtGSl.js";import"./ReactUtils-DXFU76qs.js";import"./Label-9AdH7Mzz.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./ActivePoints-BG43CjVF.js";import"./Dot-DKFvoc5_.js";import"./types-CXB2nDIk.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./ErrorBarContext-DWym-0i0.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./useAnimationId-83t5rQCc.js";import"./getRadiusAndStrokeWidthFromDot-CLsj08-5.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./Trapezoid-CegYn91N.js";import"./Sector-CrGccqha.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./step-AwB8z33l.js";import"./Curve-C7OUetYn.js";import"./XAxis-3pLP0gWY.js";import"./CartesianAxis-CiyiTEma.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-wNsuba1v.js";import"./Legend-CPdUIOMm.js";import"./useElementOffset-BpCcqtji.js";import"./uniqBy-BL8b2woc.js";import"./iteratee-DStFB318.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
