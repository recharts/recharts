import{j as e}from"./jsx-runtime-Dmyc_JhQ.js";import{useMDXComponents as n}from"./index-CW5Dorx9.js";import{M as o,C as h}from"./blocks-gXhfbboz.js";import{C as d,W as s}from"./dimensions.stories-CXiar9ss.js";import"./iframe-DDWKRrqv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsIrbSk0.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./arrayEqualityCheck-B69_8zAh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./immer-BOVNGK3k.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-79X4aNc0.js";import"./RechartsWrapper-DzmWRH09.js";import"./index-Bsn1GeuN.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./zIndexSlice-BN5Gbmzf.js";import"./renderedTicksSlice-C67zSA8W.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./Line-CxdYfIxL.js";import"./Layer-h3-3YPyh.js";import"./ReactUtils-cVwoq5mQ.js";import"./Label-NRlvBr1w.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./ZIndexLayer-BwiDnk8J.js";import"./ActivePoints-CQ605IlR.js";import"./Dot-CkKJMsGk.js";import"./types-DOdoKNLX.js";import"./RegisterGraphicalItemId-CcVRSfeO.js";import"./ErrorBarContext-Bbishcw-.js";import"./GraphicalItemClipPath-D--Twx0M.js";import"./SetGraphicalItem-Cmo6HR7d.js";import"./useAnimationId-BITKm10d.js";import"./getRadiusAndStrokeWidthFromDot-B8EpjCyF.js";import"./ActiveShapeUtils-EGVfTGvU.js";import"./isPlainObject-u-9GKdyb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQpz_Kxu.js";import"./Trapezoid-D8tIh_kI.js";import"./Sector-OY9ONPbP.js";import"./Symbols-BqNcdAfC.js";import"./symbol-dPepbRJM.js";import"./step-lfEQ-oxP.js";import"./Curve-DHOaOh81.js";import"./XAxis-D_2M1x8X.js";import"./CartesianAxis-6QkrUt7M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BdM975Hp.js";import"./Legend-BXJJza_O.js";import"./useElementOffset-B8i3o1pJ.js";import"./uniqBy-BmXuc6cE.js";import"./iteratee-CEk-dA8r.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
