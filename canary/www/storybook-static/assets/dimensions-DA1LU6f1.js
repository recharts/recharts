import{j as e}from"./jsx-runtime-CQuu2XJQ.js";import{useMDXComponents as n}from"./index-DhN8WJrw.js";import{M as h,C as o}from"./blocks-Dl1utgfM.js";import{C as d,W as s}from"./dimensions.stories-Dk9X_tc8.js";import"./iframe-CxI43GLZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./arrayEqualityCheck-BfVdm9jV.js";import"./resolveDefaultProps-UONb-avO.js";import"./PolarUtils-DHQUPcK8.js";import"./ComposedChart-4DvSTtTI.js";import"./RechartsWrapper--eelc2ZG.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./zIndexSlice-DIL5Sqm1.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./Line-C6Ka3jci.js";import"./Layer-CmGdcww6.js";import"./ReactUtils-elXAGoBP.js";import"./Label-B09Q27rq.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./ZIndexLayer-B1TtTzTT.js";import"./ActivePoints-BnPOypie.js";import"./Dot-KNUzVwuJ.js";import"./types-KA7-71SW.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./ErrorBarContext-D61wHuQh.js";import"./GraphicalItemClipPath-D5JGy8J4.js";import"./SetGraphicalItem-CwpQjYla.js";import"./useAnimationId-CTE4KFOU.js";import"./getRadiusAndStrokeWidthFromDot-CXjnDYBP.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bz1Foak7.js";import"./Trapezoid-B_Aa80Lz.js";import"./Sector-BrRXNJ4R.js";import"./Symbols-CSvR9izB.js";import"./Curve-BWaqjCRV.js";import"./XAxis-DH2Q1e34.js";import"./CartesianAxis-CGSh7ZG4.js";import"./YAxis-C-oWd5yq.js";import"./Legend-p5ihkFuo.js";import"./useElementOffset-iAMlLSj3.js";import"./iteratee-BhYORJq7.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
