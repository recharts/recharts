import{u as n,j as e}from"./index-DGVZq5ty.js";import{M as o,C as h}from"./blocks-CSG9p5LV.js";import{C as d,W as s}from"./dimensions.stories-DW_hVb0-.js";import"./iframe-BV4BJT-m.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./index-CwDo1ygF.js";import"./ChartSizeDimensions-DXMfpnAU.js";import"./zIndexSlice-B-lthx1D.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./throttle-2G-03cGC.js";import"./ComposedChart-CPNwWKj6.js";import"./RechartsWrapper-BCKkTVf1.js";import"./axisSelectors-DnTNEhev.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9I0ClQu9.js";import"./index-Cwzrr77V.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./Page-Cj8EiXz7.js";import"./Line-CIJrCJ5v.js";import"./Layer-C4zlYTAs.js";import"./Curve-BxOKje4W.js";import"./types-CgGLncla.js";import"./step-CflYfM9D.js";import"./path-DyVhHtw_.js";import"./LabelList-B3uF9y0j.js";import"./Label-xll97smN.js";import"./Text-CO85_-F3.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./ActivePoints-CpdWeHKB.js";import"./Dot-ChrRm5q7.js";import"./activeStyles-DPABJUlt.js";import"./useAnimationId-BaOUwCNw.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./ErrorBarContext-CgppqQDQ.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getRadiusAndStrokeWidthFromDot-nytBruEY.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./XAxis-Dddiy3kS.js";import"./CartesianAxis-D1XYtW-z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DrgVb9Ay.js";import"./Legend-D02jVJyb.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
