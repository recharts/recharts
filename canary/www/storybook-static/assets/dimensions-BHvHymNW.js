import{j as e}from"./jsx-runtime-BGP5MbyD.js";import{useMDXComponents as n}from"./index-CAvrv2rn.js";import{M as o,C as h}from"./blocks-BkIS07d0.js";import{C as d,W as s}from"./dimensions.stories-DLbSXNpu.js";import"./iframe-BO25Fukk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQMezaYM.js";import"./ChartSizeDimensions-fwZ9XifO.js";import"./arrayEqualityCheck-8wdJ7bOW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./immer-3Wb7zWXo.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CF-2nekN.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./hooks-BpctELEd.js";import"./axisSelectors-Dte6k_F-.js";import"./d3-scale-CRavCQeQ.js";import"./zIndexSlice-rXbN18td.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./Line-Bi0Ivg5j.js";import"./Layer-D1wKq7sO.js";import"./ReactUtils-CylM5YpB.js";import"./Label-OvGfCgyV.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./ZIndexLayer-BjFFXD-n.js";import"./ActivePoints-BcnF-Bb_.js";import"./Dot-Dgz_5xVA.js";import"./types-Z8gV0TDw.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./useAnimationId-DPvU_ojd.js";import"./getRadiusAndStrokeWidthFromDot-pfV1rYdW.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./XAxis-DX4QFDJP.js";import"./CartesianAxis-BRmvxIOe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-61kZJ1mt.js";import"./Legend-CDtV7Vp6.js";import"./useElementOffset-DNA5shck.js";import"./uniqBy-BVTfaSFn.js";import"./iteratee-C_6D29Qz.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
