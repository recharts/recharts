import{j as e}from"./jsx-runtime-C5IhAq8Z.js";import{useMDXComponents as n}from"./index-CjYd1ZDR.js";import{M as o,C as h}from"./blocks-PUx9zk-A.js";import{C as d,W as s}from"./dimensions.stories-CnWfbObO.js";import"./iframe-CbsqwKCk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BHJKnvwH.js";import"./ChartSizeDimensions-D9ExJIau.js";import"./arrayEqualityCheck-B4FTx25I.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHVE9Qfq.js";import"./immer-D83u5OhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CyCs0zfk.js";import"./RechartsWrapper-CaUG62oZ.js";import"./index-Bo04Zijq.js";import"./hooks-F0Z_c1HD.js";import"./axisSelectors-DXxkO63G.js";import"./d3-scale-PAY7D1_G.js";import"./zIndexSlice-CDw3ZEmc.js";import"./renderedTicksSlice-BdDgwbXy.js";import"./CartesianChart-CbTSIjqR.js";import"./chartDataContext-IGsi4pC_.js";import"./CategoricalChart-Xd7p2iPq.js";import"./Page-Cj8EiXz7.js";import"./Line-C2YpBvOE.js";import"./Layer-wLThQp-f.js";import"./ReactUtils-DODSDo-0.js";import"./Label-r3u5Hs--.js";import"./Text-DA8mBm_w.js";import"./DOMUtils-BTAw3duz.js";import"./ZIndexLayer-CIamb34_.js";import"./ActivePoints-lpfaj2C4.js";import"./Dot-CuN0ZmgD.js";import"./types-QtIGWOWS.js";import"./RegisterGraphicalItemId-DHXh_EOv.js";import"./ErrorBarContext-DUhaTo8P.js";import"./GraphicalItemClipPath-Cc_74RAJ.js";import"./SetGraphicalItem-wEHd-RTz.js";import"./useAnimationId-ika4uZpq.js";import"./getRadiusAndStrokeWidthFromDot-DI4cxlJn.js";import"./ActiveShapeUtils-Bhkbjsma.js";import"./isPlainObject-DdM1ysjb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ctrb2AG7.js";import"./Trapezoid-uYQTNnF6.js";import"./Sector-GnbpuK9-.js";import"./Symbols-hUvwFh1j.js";import"./symbol-BCOnJOrD.js";import"./step-uZ9iGWhX.js";import"./Curve-d3v-cFMl.js";import"./XAxis-BIdlq_pt.js";import"./CartesianAxis-wjZQBsHa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DsWBihca.js";import"./Legend-CYN62kHT.js";import"./useElementOffset-DO1SxrOK.js";import"./uniqBy-CP8a4Cfy.js";import"./iteratee-BD6dQnaZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
