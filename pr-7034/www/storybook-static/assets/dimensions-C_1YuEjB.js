import{j as e}from"./jsx-runtime-Boq2IzZs.js";import{useMDXComponents as n}from"./index-jPMVD2zS.js";import{M as o,C as h}from"./blocks-Co1bTF3b.js";import{C as d,W as s}from"./dimensions.stories-21v8jGqN.js";import"./iframe-CRTFvrj9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./arrayEqualityCheck-C-72eKdK.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DTMWU6Jk.js";import"./RechartsWrapper-BSniLpj2.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./Line-CiAwxFS9.js";import"./Layer-CS75NGqW.js";import"./ReactUtils-FOFjsaAB.js";import"./Label-B8ukM34Q.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./ZIndexLayer-T_Qg2faX.js";import"./ActivePoints-DqiWJefE.js";import"./Dot-Bs4qVlF8.js";import"./types-DqJmRq78.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./ErrorBarContext-V9kNDrvg.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./useAnimationId-D4atK31V.js";import"./getRadiusAndStrokeWidthFromDot-BycfBkgL.js";import"./ActiveShapeUtils-Dvtjmakf.js";import"./isPlainObject-DWQ5xGNV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzeM3od.js";import"./Trapezoid-BHEoFJyV.js";import"./Sector-CAdVxu4l.js";import"./Symbols-DQD-u_Ga.js";import"./symbol-CqE7w4As.js";import"./step-D-1eA3Al.js";import"./Curve-cG-fhaEi.js";import"./XAxis-BSKb_OYU.js";import"./CartesianAxis-UwfPUOGl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BR4X3yoq.js";import"./Legend-BPcXd8Kx.js";import"./useElementOffset-DO0yKBop.js";import"./uniqBy-bOCgIGO4.js";import"./iteratee-BwIi7ReL.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
