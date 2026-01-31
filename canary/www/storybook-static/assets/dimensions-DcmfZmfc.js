import{j as e}from"./jsx-runtime-BOOY8Ly4.js";import{useMDXComponents as n}from"./index-f_ONShaf.js";import{M as h,C as o}from"./blocks-D7uoEx9k.js";import{C as d,W as s}from"./dimensions.stories-Drct17JT.js";import"./iframe-Dke1PXsj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CL0r-bPV.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./arrayEqualityCheck-DYUGm-S-.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DKdsAYQN.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./zIndexSlice-CdkZF_KN.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./Line-BUK5Np1E.js";import"./Layer-B0EXSY1R.js";import"./ReactUtils-BSYO7pn7.js";import"./Label-BJpGMmXt.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./ActivePoints-DYWx7XLw.js";import"./Dot-D-awbIR4.js";import"./types-DDM_Xxay.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./ErrorBarContext-Bd_5n0Q0.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./useAnimationId-CaTohdQl.js";import"./getRadiusAndStrokeWidthFromDot-D9qqWM8m.js";import"./ActiveShapeUtils-CVSjVyuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Be-yypRZ.js";import"./Trapezoid-Cffcn2bg.js";import"./Sector-DEw-Ho6t.js";import"./Symbols-BgJQYoix.js";import"./Curve-DAvXUCHx.js";import"./XAxis-A5wiYRJ2.js";import"./CartesianAxis-DELVukVs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C_nfgnx0.js";import"./Legend-ccvslpoy.js";import"./useElementOffset-C3Y4AvB-.js";import"./iteratee-BZW5CYX7.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
