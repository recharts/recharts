import{j as e}from"./jsx-runtime-CR3WjPNz.js";import{useMDXComponents as n}from"./index-B5i0VgL8.js";import{M as h,C as o}from"./blocks-oTMu1gdQ.js";import{C as d,W as s}from"./dimensions.stories-CTrw6sj8.js";import"./iframe-PyjOQzGK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./arrayEqualityCheck-_dHyT-RZ.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-BVUASlqQ.js";import"./RechartsWrapper-C_qiBOfF.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./Line-DIlKf69S.js";import"./Layer-CHnOmiRY.js";import"./ReactUtils-ChAGskY_.js";import"./Label-CvwrqBXQ.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./ZIndexLayer-DUzVAEAH.js";import"./ActivePoints-D6OmLLQF.js";import"./Dot-tggScJ5V.js";import"./types-UMLEboQ_.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./useAnimationId-DVpAz_Js.js";import"./getRadiusAndStrokeWidthFromDot-BrIH8QFd.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./Symbols-Jat4kELE.js";import"./Curve-BookXfP4.js";import"./XAxis-P49Iul1Y.js";import"./CartesianAxis-DYXf8O7N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B6zPQ9mM.js";import"./Legend-DmAWj6Mm.js";import"./useElementOffset-CYUbJaFG.js";import"./iteratee-ClTcsDgX.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
