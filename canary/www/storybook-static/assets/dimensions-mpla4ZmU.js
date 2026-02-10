import{j as e}from"./jsx-runtime-DhHnaIAl.js";import{useMDXComponents as n}from"./index-T5H0eqRR.js";import{M as h,C as o}from"./blocks-cacdclOu.js";import{C as d,W as s}from"./dimensions.stories-DsUMlrAb.js";import"./iframe-DltNrMbJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./arrayEqualityCheck-LkDVdEVg.js";import"./resolveDefaultProps-DUSmftLt.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-8YXYxTJ4.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./zIndexSlice-BY2OfmK4.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./Line-D4wPLLT8.js";import"./Layer-CESBlQPf.js";import"./ReactUtils-q-DWoBEq.js";import"./Label-WGWSnZjZ.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./ZIndexLayer-BSXb5mnX.js";import"./ActivePoints-DLrkoeVF.js";import"./Dot-ClGJHhN-.js";import"./types-ByzPfmmH.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./ErrorBarContext-D_xaXEzA.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./useAnimationId-BKMwNFd7.js";import"./getRadiusAndStrokeWidthFromDot-dG2TYa7y.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEufvsiJ.js";import"./Trapezoid-AkIt7Koc.js";import"./Sector-CucAHJS5.js";import"./Symbols-VYn2rLNF.js";import"./Curve-DQJoehXa.js";import"./XAxis-CERTAhrM.js";import"./CartesianAxis-DfRV_-M5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CJYvma9k.js";import"./Legend-nJk7JtSm.js";import"./useElementOffset-BISJ-SQc.js";import"./iteratee-1VRBEyg4.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};
