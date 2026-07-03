import{u as n,j as e}from"./index-CeygJw-l.js";import{M as o,C as h}from"./blocks-DIRdkkNg.js";import{C as d,W as s}from"./dimensions.stories-Cr79WMp-.js";import"./iframe-Dlbg_GZB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./index-De4F06zW.js";import"./ChartSizeDimensions-DqhJlUah.js";import"./zIndexSlice-CMn4Cwlm.js";import"./throttle-C3Y4hQMj.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BqgVwKSR.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./Page-Cj8EiXz7.js";import"./Line-BpbqzpNB.js";import"./Layer-DlhGxg7N.js";import"./Curve-Dcq__Vxv.js";import"./types-Ctdv5TaQ.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xmicP7QL.js";import"./Label-d3wc6rF5.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./ZIndexLayer-feAlcx_0.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./XAxis-g3Yqs_q0.js";import"./CartesianAxis-dbSJQeo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-K45jOkJG.js";import"./Legend-D4rjc0mf.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
