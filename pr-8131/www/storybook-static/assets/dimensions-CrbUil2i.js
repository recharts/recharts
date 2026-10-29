import{u as n,j as e}from"./index-DyvUc7OL.js";import{M as o,C as h}from"./blocks-BwIHlVMY.js";import{C as d,W as s}from"./dimensions.stories-BvhCZbJU.js";import"./iframe-BfuPA7Y7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./index-WmIsGj85.js";import"./ChartSizeDimensions-C18w21V3.js";import"./zIndexSlice-B6sU7Rt1.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./throttle-Dc8hP4d4.js";import"./ComposedChart-CsUG1xb5.js";import"./RechartsWrapper-95Yf8UFb.js";import"./axisSelectors-Br11nK0T.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CjK5ImOh.js";import"./index-DdvOS-Rc.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./Page-Cj8EiXz7.js";import"./Line-Cx7UbFJj.js";import"./Layer-BWWgf-oi.js";import"./Curve-CE_2fXkD.js";import"./types-Di4mZIQP.js";import"./step-Cd-JWo6G.js";import"./path-DyVhHtw_.js";import"./LabelList-DuFHEtzk.js";import"./Label-B5k-U_Yi.js";import"./Text-WUFue0UU.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./ActivePoints-35kBP04l.js";import"./Dot-Clx--Joj.js";import"./activeStyles-fOeMVdxf.js";import"./useAnimationId-4ywEr4SP.js";import"./dataEntryStyles-DawwN3gr.js";import"./Symbols-pnM7tnEZ.js";import"./symbol-DyOhgHTf.js";import"./ErrorBarContext-DQS0aRku.js";import"./SetGraphicalItem-B3dBsQBy.js";import"./getRadiusAndStrokeWidthFromDot-DI9dnlZ8.js";import"./ActiveShapeUtils-CJYZSdch.js";import"./useEffectiveDataKey-Chd7xyV4.js";import"./XAxis-18ahIu4N.js";import"./CartesianAxis-BUa2DE6b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BrNvBbuM.js";import"./Legend-BzsVMsZC.js";import"./useElementOffset-CXmUTCN6.js";import"./uniqBy-7WBcglc1.js";import"./iteratee-BCwjEBWk.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
