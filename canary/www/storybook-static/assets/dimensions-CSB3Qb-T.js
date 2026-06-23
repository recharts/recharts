import{u as n,j as e}from"./index-NlTN2gEe.js";import{M as o,C as h}from"./blocks-CEMBYgjM.js";import{C as d,W as s}from"./dimensions.stories-BtrIIrIi.js";import"./iframe-B4kUD3F_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYqd0Uq6.js";import"./index-BV_azGi8.js";import"./index-C-xuAHoJ.js";import"./ChartSizeDimensions-BGzbo_Od.js";import"./zIndexSlice-DRZxBlWj.js";import"./immer-DI7Qg7MS.js";import"./get-SuicBCAy.js";import"./resolveDefaultProps-DRQB4Pss.js";import"./isWellBehavedNumber-Bmjbb00R.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bn7ITjo8.js";import"./RechartsWrapper-C0Rch8-X.js";import"./index-DCwDzrBS.js";import"./renderedTicksSlice-DO7nzrZX.js";import"./axisSelectors-7DMUz--h.js";import"./d3-scale-CJLHhLGS.js";import"./CartesianChart-DZtIiDJu.js";import"./chartDataContext-hd9fJl9r.js";import"./CategoricalChart-DUPJdAnz.js";import"./Page-Cj8EiXz7.js";import"./Line-BZIfpmth.js";import"./Layer-Dsy9hdjd.js";import"./Curve-CthZ8FHS.js";import"./types-7cnic641.js";import"./step-DrWCufuT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHDZsGIH.js";import"./Label-Ckw8TK4e.js";import"./Text-79gK0PXl.js";import"./DOMUtils-D7Mb2TVV.js";import"./ZIndexLayer-B7kHgW_5.js";import"./useAnimationId-DS8iKUy9.js";import"./ActivePoints-H5S3JmFF.js";import"./Dot-eB8aq2hu.js";import"./RegisterGraphicalItemId-Ci8r16YO.js";import"./ErrorBarContext-CXDz_6c0.js";import"./GraphicalItemClipPath-BXEDANj9.js";import"./SetGraphicalItem-CcBXcnnP.js";import"./getRadiusAndStrokeWidthFromDot-DOq9cCaw.js";import"./ActiveShapeUtils-BYIaqgjd.js";import"./XAxis-BqSSrpGv.js";import"./CartesianAxis-CnkwfMH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DxN0d4h_.js";import"./Legend-CLN0xR-G.js";import"./Symbols-CR3OsKM1.js";import"./symbol-B22FKZ0A.js";import"./useElementOffset-MNUOYE5n.js";import"./uniqBy-B6b2iUeP.js";import"./iteratee-D9R9LmOY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
