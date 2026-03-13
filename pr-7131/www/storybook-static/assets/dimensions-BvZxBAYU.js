import{j as e}from"./jsx-runtime-BRse81rZ.js";import{useMDXComponents as n}from"./index-wc9P_Vl4.js";import{M as o,C as h}from"./blocks-jFQ1iL11.js";import{C as d,W as s}from"./dimensions.stories-Iqq_Aqyp.js";import"./iframe-BDTlfdm2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./arrayEqualityCheck--4uVIqe7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Czz55H-I.js";import"./immer-D4Dnjbsg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D8FjVx7b.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./Line-B9H8yD7C.js";import"./Layer-CqYlT3eS.js";import"./ReactUtils-ma75EdaK.js";import"./Label-VxKVkBMg.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./ZIndexLayer-DC39aMOh.js";import"./ActivePoints-o7K4rMbo.js";import"./Dot-245mRXx6.js";import"./types-D6KN9kQt.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./ErrorBarContext-DViBWZq0.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./useAnimationId-CupwM_tg.js";import"./getRadiusAndStrokeWidthFromDot-CH2mR7qj.js";import"./ActiveShapeUtils-ZL_pxKoe.js";import"./isPlainObject-Cnip5whK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWWR6MHC.js";import"./Trapezoid-yGMiXHgj.js";import"./Sector-ketJTAKQ.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";import"./step-C4gkOhOo.js";import"./Curve-g-MTQgVG.js";import"./XAxis-CGiSi9HN.js";import"./CartesianAxis-CZM1jQf4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-ClHUtMv7.js";import"./Legend-7N67OVKM.js";import"./useElementOffset-nfaXeky9.js";import"./uniqBy-CASHllcH.js";import"./iteratee-DZTEQt1h.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
