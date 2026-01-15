import{j as e}from"./jsx-runtime-CWQSBxhC.js";import{useMDXComponents as n}from"./index-BgenzOY8.js";import{M as h,C as o}from"./blocks-D4tvKvQC.js";import{C as d,W as s}from"./dimensions.stories-D2Ym-z_1.js";import"./iframe-DZL_Ah-h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DN9IEtGR.js";import"./ChartSizeDimensions-DKkQ1adP.js";import"./arrayEqualityCheck-D-Ts3cDI.js";import"./resolveDefaultProps-DcfSkoMJ.js";import"./PolarUtils-DfkNCrwZ.js";import"./ComposedChart-3nHTlBYt.js";import"./RechartsWrapper-Ck-Abs8b.js";import"./hooks-Dodf-ron.js";import"./axisSelectors-Df1JfYHl.js";import"./zIndexSlice-DxoPuFz2.js";import"./CartesianChart-Ci6fm2Tl.js";import"./chartDataContext-9vV2ynlS.js";import"./CategoricalChart-BD-QnqEO.js";import"./Line-CJ3rOz3J.js";import"./Layer-Cvyl7OZW.js";import"./ReactUtils-BhJ_85C1.js";import"./Label-DNHrzZbV.js";import"./Text-8PeDrNfr.js";import"./DOMUtils-D_0MfqW3.js";import"./ZIndexLayer-B8J5qb9c.js";import"./ActivePoints-DLM-C9_Y.js";import"./Dot-BoSXTYOc.js";import"./types-Dy3M-0QX.js";import"./RegisterGraphicalItemId--gKDrMRm.js";import"./ErrorBarContext-DiSHSCH2.js";import"./GraphicalItemClipPath-BTtL5NTg.js";import"./SetGraphicalItem-BZkyoZO7.js";import"./useAnimationId-B-fQiutN.js";import"./getRadiusAndStrokeWidthFromDot-DyoH3QJX.js";import"./ActiveShapeUtils-Bh1zAbKh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DBmW1QC4.js";import"./Trapezoid-IG7QOLLM.js";import"./Sector-CFzlz6F5.js";import"./Symbols-DeYh9DPD.js";import"./Curve-DKq7X7FQ.js";import"./XAxis-CfBz4GHV.js";import"./CartesianAxis-hqZlkA4G.js";import"./YAxis-B4LI4Fwk.js";import"./Legend-DupYJZmR.js";import"./useElementOffset-Bd6zDnOW.js";import"./iteratee-CSplJfXS.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
