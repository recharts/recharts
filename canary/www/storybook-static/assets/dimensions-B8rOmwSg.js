import{j as e}from"./jsx-runtime-DDO8UGLa.js";import{useMDXComponents as n}from"./index-DH6j-Duw.js";import{M as o,C as h}from"./blocks-Dj1A0zMw.js";import{C as d,W as s}from"./dimensions.stories-DHSJauYa.js";import"./iframe-CYBvhlZy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./arrayEqualityCheck-CK8f-Z2u.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./immer-DZ9JDNpk.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bvvd3hm_.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./Page-Cj8EiXz7.js";import"./Line-BPGwoOoD.js";import"./Layer-DAuVz3MT.js";import"./ReactUtils-BYIbW4_R.js";import"./Label-C0OOgdLf.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./ZIndexLayer-CJwEcLcc.js";import"./ActivePoints-CMoiNPrV.js";import"./Dot-D7HQ1K3c.js";import"./types-BeBHA9WF.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./ErrorBarContext-ggSVFX3T.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./useAnimationId-DVYg6VJa.js";import"./getRadiusAndStrokeWidthFromDot-XsFMXGfI.js";import"./ActiveShapeUtils-CCHDnR4M.js";import"./isPlainObject-CS6IzJzX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL4E1CJr.js";import"./Trapezoid-CMh-DiG6.js";import"./Sector-CjwyDs-v.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";import"./step-CGLzAmAZ.js";import"./Curve-BOm9EQk3.js";import"./XAxis-eHWI-DgF.js";import"./CartesianAxis-DeN7_m83.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Cr0sgLdF.js";import"./Legend-BXbVRa32.js";import"./useElementOffset-Vb2Ffn3s.js";import"./uniqBy-B2hQmckI.js";import"./iteratee-DPMrHAQZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
