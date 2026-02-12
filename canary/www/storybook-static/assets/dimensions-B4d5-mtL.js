import{j as e}from"./jsx-runtime-Bp6vBSyf.js";import{useMDXComponents as n}from"./index-Cpd8cOP1.js";import{M as h,C as o}from"./blocks-Cytu8D1g.js";import{C as d,W as s}from"./dimensions.stories-0NHj1EqP.js";import"./iframe-3u-Q1UnB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./arrayEqualityCheck-4YdFFnIZ.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B88mQwK1.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./Line-2FYNQdup.js";import"./Layer-BUQITwlU.js";import"./ReactUtils-BnoVNewt.js";import"./Label-DEySkZO8.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./ZIndexLayer-BBlPVpqD.js";import"./ActivePoints-Cqa4c3Nf.js";import"./Dot-B1g7vVO3.js";import"./types-DeBO-UOQ.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./ErrorBarContext-CW31PIa7.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./useAnimationId-BDwu_fLm.js";import"./getRadiusAndStrokeWidthFromDot-Bk3bWelV.js";import"./ActiveShapeUtils-CBZ4ZZvz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqAeg9eu.js";import"./Trapezoid-Bk16eIfi.js";import"./Sector-Qrf6gufC.js";import"./Symbols-D9T0VuzY.js";import"./Curve-BQlmvtvx.js";import"./XAxis-Djkeo-gr.js";import"./CartesianAxis-DNUlfq8v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dj18iK3G.js";import"./Legend-Bg3WO3ot.js";import"./useElementOffset-R3iGwyTp.js";import"./iteratee-OnjyTwVZ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
