import{j as e}from"./jsx-runtime-rJLuh0X-.js";import{useMDXComponents as n}from"./index-N0sMlk9Q.js";import{M as h,C as o}from"./blocks-DHgqYv5D.js";import{C as d,W as s}from"./dimensions.stories-C9Db8idl.js";import"./iframe-Cy8G_j66.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./arrayEqualityCheck-dp8dfL7u.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BxEcgcZi.js";import"./RechartsWrapper-BtX23pZ_.js";import"./hooks-Dh2IuVAR.js";import"./axisSelectors-Dnswsufb.js";import"./zIndexSlice-BDvzw6V8.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./Line-qEl9DN3q.js";import"./Layer-D4d1YeMH.js";import"./ReactUtils-CPeEyyol.js";import"./Label-r4OEA6Zh.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./ZIndexLayer-DYA27QSR.js";import"./ActivePoints-Bd_88S8O.js";import"./Dot-D2TzI8Gx.js";import"./types-BSABi_Hc.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./useAnimationId-YkjhaILr.js";import"./getRadiusAndStrokeWidthFromDot-DZH1LMkE.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./XAxis-sHLPbu1e.js";import"./CartesianAxis-mJhpe0_9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DfWkuEr-.js";import"./Legend-DRCozq1Q.js";import"./useElementOffset-BSLWjzfu.js";import"./iteratee-DDkVWpiV.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
