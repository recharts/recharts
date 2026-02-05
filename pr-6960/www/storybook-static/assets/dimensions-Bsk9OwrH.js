import{j as e}from"./jsx-runtime-hP-D5ck4.js";import{useMDXComponents as n}from"./index-CFC5d23H.js";import{M as h,C as o}from"./blocks-ObZz90BW.js";import{C as d,W as s}from"./dimensions.stories-Wy3_MhpW.js";import"./iframe-CWWhV85a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./arrayEqualityCheck-BrvYjDvj.js";import"./resolveDefaultProps-C1e51uNd.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-UkKK6Wyd.js";import"./RechartsWrapper-B76lvk5b.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./Line-pUdx1ebJ.js";import"./Layer-CEGJXWpg.js";import"./ReactUtils-erR6fuGc.js";import"./Label-sj2OS_tg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./ActivePoints-DYENIXWD.js";import"./Dot-COoG0jLM.js";import"./types-HO0i5iTi.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./ErrorBarContext-BiKvJSsP.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./useAnimationId--U2HKBmo.js";import"./getRadiusAndStrokeWidthFromDot-DAki4Jbv.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgoKSUUy.js";import"./Trapezoid-CadbmzeJ.js";import"./Sector-CjkT0xYm.js";import"./Symbols-D5GFnflg.js";import"./Curve-CEhuq5Wz.js";import"./XAxis-Csdvagzn.js";import"./CartesianAxis-BLwbg9OG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DfgzXKJt.js";import"./Legend-CAfyJPWT.js";import"./useElementOffset-CDAAba6N.js";import"./iteratee-5pGWl1WW.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
