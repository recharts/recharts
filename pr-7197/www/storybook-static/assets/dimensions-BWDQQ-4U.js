import{j as e}from"./jsx-runtime-DHvrgz-v.js";import{useMDXComponents as n}from"./index-CZMeqcZW.js";import{M as o,C as h}from"./blocks-MfUdVJV6.js";import{C as d,W as s}from"./dimensions.stories-UYXAz2pH.js";import"./iframe-Bg9Z345n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./arrayEqualityCheck-CR8W5Kti.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-XHqgTgy-.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./Page-Cj8EiXz7.js";import"./Line-gMUWcZmO.js";import"./Layer-BdGV6vMM.js";import"./ReactUtils-BmxePv9D.js";import"./Label-CELZqSQs.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./ZIndexLayer-DPL5778T.js";import"./ActivePoints-BR-WzUNj.js";import"./Dot-Bp1BlqgP.js";import"./types-B4W4ehrV.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./ErrorBarContext-Cj6LG5IF.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./useAnimationId-DlZyApEc.js";import"./getRadiusAndStrokeWidthFromDot-DAE3CzX3.js";import"./ActiveShapeUtils-te7DRz-E.js";import"./isPlainObject-Bo6U1upe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EnxeHGuf.js";import"./Trapezoid-DbTvkq0k.js";import"./Sector-Cn3PZ_qJ.js";import"./Symbols-tflhkrqf.js";import"./symbol-Bo8u8Uca.js";import"./step-DoGAfiJ-.js";import"./Curve-CW_ra8M9.js";import"./XAxis-DhRZk_Mh.js";import"./CartesianAxis-2wCCgYqS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BhiIVd-U.js";import"./Legend-CSWTPESq.js";import"./useElementOffset-DW5Fjzna.js";import"./uniqBy-vl8O6EJ5.js";import"./iteratee-CDnMDBPk.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
