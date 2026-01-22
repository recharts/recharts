import{j as e}from"./jsx-runtime-CWU7iAQ9.js";import{useMDXComponents as n}from"./index-JAgchrzo.js";import{M as h,C as o}from"./blocks-G9y1T6eh.js";import{C as d,W as s}from"./dimensions.stories-t6buzc9m.js";import"./iframe-D2DyXbcn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./arrayEqualityCheck-WjtHcJHc.js";import"./resolveDefaultProps-DA54HTPm.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-CLh2SeRt.js";import"./RechartsWrapper-BOCCBYR7.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./zIndexSlice-BQ_BDZqW.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./Line-D8rfWtVU.js";import"./Layer-BwzoyCOr.js";import"./ReactUtils-D1zizFIc.js";import"./Label-CjanQvYq.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./ZIndexLayer-NA5ERVnG.js";import"./ActivePoints-BMPW0nm-.js";import"./Dot-BkDSgj5P.js";import"./types-uxMSZ2Tc.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./useAnimationId-D72jT57q.js";import"./getRadiusAndStrokeWidthFromDot-BJgqpW3E.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./Symbols-f5SXrcZl.js";import"./Curve-O5r-1d1a.js";import"./XAxis-B_Rkajbb.js";import"./CartesianAxis-YVPJ9daY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-9nabWNdp.js";import"./Legend-EKyNRW-_.js";import"./useElementOffset-1lDb_Lm2.js";import"./iteratee-CPGn8MN2.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
