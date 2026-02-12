import{j as e}from"./jsx-runtime-B6HFnVQS.js";import{useMDXComponents as n}from"./index-wZYaA3Ap.js";import{M as h,C as o}from"./blocks-BqSLIsQK.js";import{C as d,W as s}from"./dimensions.stories-DMGRTpWn.js";import"./iframe-Dim5_luC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./arrayEqualityCheck-DY4kDyOd.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DbnqK2Sk.js";import"./RechartsWrapper-BTGjRieY.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./zIndexSlice-DWwDEXe3.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./Line-DivgAv5E.js";import"./Layer-DsncGJyW.js";import"./ReactUtils-B4IuMLLa.js";import"./Label-g1K_6191.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./ZIndexLayer-D1v8rxBH.js";import"./ActivePoints-BWj_K0bx.js";import"./Dot-CrMbwoD0.js";import"./types-BxKSV5b4.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./ErrorBarContext-swBbnM0b.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./useAnimationId-BMRzQV3k.js";import"./getRadiusAndStrokeWidthFromDot-B0s95MF2.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./Symbols-BQHr33CI.js";import"./Curve-C8164FP7.js";import"./XAxis-CajpKvi_.js";import"./CartesianAxis-CuZKHGcg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BX5wgPpW.js";import"./Legend-Br876WZe.js";import"./useElementOffset-DTeN2fqC.js";import"./iteratee-C63kfqEP.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
