import{j as e}from"./jsx-runtime-BDw9hUHj.js";import{useMDXComponents as n}from"./index-DBXwZbrg.js";import{M as h,C as o}from"./blocks-6VOxaGcC.js";import{C as d,W as s}from"./dimensions.stories-CCHNiwms.js";import"./iframe-Dh_IuGPW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsFYMPMW.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./arrayEqualityCheck-7YZsQ9Yt.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./PolarUtils-ByAhdJKw.js";import"./ComposedChart-BT1Cqczr.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./zIndexSlice-Bln6WQdm.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./Line-BSUfhiQO.js";import"./Layer-0hKCd9Go.js";import"./ReactUtils-CN6AvFkh.js";import"./Label-CwPC6lqR.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./ZIndexLayer-DgCIyG2A.js";import"./ActivePoints-BukcLVSu.js";import"./Dot-C1cga5mV.js";import"./types-C1SnlukV.js";import"./RegisterGraphicalItemId-C5qI6NMo.js";import"./ErrorBarContext-8rW3rtTK.js";import"./GraphicalItemClipPath-DVZrGS-c.js";import"./SetGraphicalItem-l88fIsgf.js";import"./useAnimationId-DFnSrzQe.js";import"./getRadiusAndStrokeWidthFromDot-CHYbPHm1.js";import"./ActiveShapeUtils-DNzZoZ6X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAYNTDZ7.js";import"./Trapezoid-Dv67nGF9.js";import"./Sector-D9tond7R.js";import"./Symbols-JLtyUHl6.js";import"./Curve-et2ZIOkM.js";import"./XAxis-BVn7zGv-.js";import"./CartesianAxis-LyuwKeVQ.js";import"./YAxis-FBaKUNO9.js";import"./Legend-sGrsloJr.js";import"./useElementOffset-BKWIuYmf.js";import"./iteratee-WBVmOS_2.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
