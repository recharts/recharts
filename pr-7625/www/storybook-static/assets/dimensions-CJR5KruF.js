import{u as n,j as e}from"./index-DQ3XNNjm.js";import{M as o,C as h}from"./blocks-R3rwSVe2.js";import{C as d,W as s}from"./dimensions.stories-olf36WA8.js";import"./iframe-3VVC0EYx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./index-CufvXBKU.js";import"./ChartSizeDimensions-D3X3aRX9.js";import"./zIndexSlice-C9c9QQWy.js";import"./throttle-CNUd1gZq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJCePyCz.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BSwVfM9_.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./axisSelectors-B7dqcVa4.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";import"./Page-Cj8EiXz7.js";import"./Line-CPqvnRUF.js";import"./Layer-BVcdrpr1.js";import"./Curve-BpqmVEGV.js";import"./types-Bwo4GPNk.js";import"./step-JaBbtSkB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDqZZjDt.js";import"./Label-B_1XKNb_.js";import"./Text-DxD-h55l.js";import"./DOMUtils-jlGUgeWT.js";import"./ZIndexLayer-DAQTkU_L.js";import"./useAnimationId-D9vHT7-j.js";import"./ActivePoints-BpwW4_4p.js";import"./Dot-DAIotGMm.js";import"./RegisterGraphicalItemId-CNwWR-CS.js";import"./ErrorBarContext-B62Uz1n4.js";import"./GraphicalItemClipPath-t0-9VWN4.js";import"./SetGraphicalItem-C2V0lGXl.js";import"./getRadiusAndStrokeWidthFromDot-BuIM6rGB.js";import"./ActiveShapeUtils-BH_C9PRa.js";import"./RechartsThemeContext-5aynFYgW.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-b3cnYQsk.js";import"./CartesianAxis-DBlrGcdR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CQsWrDlS.js";import"./Legend-BRqnj-VO.js";import"./Symbols-CJM_xH6p.js";import"./symbol-ByPfoqLM.js";import"./useElementOffset-Cu87sVLj.js";import"./uniqBy-DrTOg_85.js";import"./iteratee-DVGMM3Q6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
