import{j as e}from"./jsx-runtime-C_YvXTfP.js";import{useMDXComponents as n}from"./index-wwGSs3ex.js";import{M as o,C as h}from"./blocks-CNQ4n4ua.js";import{C as d,W as s}from"./dimensions.stories-DRloN-KM.js";import"./iframe-CA2bza4n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./arrayEqualityCheck-DAdSVd1l.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BnLaySgP.js";import"./immer-DasQIOIX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BKM2Jk4b.js";import"./RechartsWrapper-B5q3WxuV.js";import"./index-CsA15_6S.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./zIndexSlice-CSAGQhtB.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./Page-DPte-9pC.js";import"./Line-WMeTlkKP.js";import"./Curve-7nNudVZs.js";import"./types-CZ_BmrzD.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./Layer-2pQ-0vOW.js";import"./ReactUtils-CEO6nkw8.js";import"./Label-BmhtQvJ8.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./ZIndexLayer-_xwh97le.js";import"./ActivePoints-rXvPQbuC.js";import"./Dot-C7a5PgHO.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./ErrorBarContext-CKpFXypA.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./getRadiusAndStrokeWidthFromDot-M3B-XLBm.js";import"./ActiveShapeUtils-k84bNm8s.js";import"./XAxis-CURUMdQ0.js";import"./CartesianAxis-4aGY63Ak.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DFFbe6p-.js";import"./Legend-CdIG9cbK.js";import"./Symbols-DX9XhuTU.js";import"./symbol-BQO-r6kd.js";import"./useElementOffset-DkAsfz-Q.js";import"./uniqBy-BH7dCUiF.js";import"./iteratee-DL8B346b.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
