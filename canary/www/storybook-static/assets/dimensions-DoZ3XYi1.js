import{u as n,j as e}from"./index-CXypW9qs.js";import{M as o,C as h}from"./blocks-BKsf5XLZ.js";import{C as d,W as s}from"./dimensions.stories-Bh_yz1We.js";import"./iframe-CzzdtdLH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./index-C75_nTb2.js";import"./ChartSizeDimensions-Go60rqHd.js";import"./zIndexSlice-Co00U7DY.js";import"./throttle-DKJrGqy3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-QZ0vaLGf.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./axisSelectors-BlRIZcT4.js";import"./d3-scale-pYyMK9Lh.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./Page-Cj8EiXz7.js";import"./Line-BIkkaUAa.js";import"./Layer-BbK8NiGM.js";import"./Curve-Jr9YsAj6.js";import"./types-3QfDILpo.js";import"./step-R9BHjTQW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMiyvThI.js";import"./Label-CL5-PwM4.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./ZIndexLayer-ChHVLqdE.js";import"./useAnimationId-C9cdprRM.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./XAxis-CKEr4FP9.js";import"./CartesianAxis-BbUS-Vpa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-xlB7Mrcu.js";import"./Legend-zFfIrWmw.js";import"./Symbols-BP5bT7AT.js";import"./symbol-SPLfPpdC.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};
