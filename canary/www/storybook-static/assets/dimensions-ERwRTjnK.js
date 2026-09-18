import{u as n,j as e}from"./index-C3hHoD1g.js";import{M as o,C as h}from"./blocks-CDTkLFQb.js";import{C as d,W as s}from"./dimensions.stories-C2FnmKc0.js";import"./iframe-qT01O9Sv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./index-DrjB0Jj4.js";import"./ChartSizeDimensions-D35sfOPQ.js";import"./zIndexSlice-CQsHAgGp.js";import"./throttle-D76jGjFc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cdt083mL.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./axisSelectors-Ciilyz6p.js";import"./d3-scale-DNrxalK8.js";import"./index-Be2AoQLY.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./index-ej6C5682.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./Page-Cj8EiXz7.js";import"./Line-C5MJ3vW-.js";import"./Layer-CgXLDOPB.js";import"./Curve-C2aosV7t.js";import"./types-B4toHZjd.js";import"./step-C8r8uJ0U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ByVfA06q.js";import"./Label-dJvVWn2Q.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./ZIndexLayer-D8adGQSs.js";import"./useAnimationId-CmZNawFJ.js";import"./ActivePoints-6Ngyl1w3.js";import"./Dot-5BUC2hEg.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./ErrorBarContext-E3DYF7br.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./getRadiusAndStrokeWidthFromDot-avuw4vHy.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";import"./XAxis-DvY9B2Zg.js";import"./CartesianAxis-CbAqj6_Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BCysskQY.js";import"./Legend-BRy-qGlS.js";import"./Symbols-YlT03ITh.js";import"./symbol-CYGUKMjC.js";import"./useElementOffset-Di4iwNJj.js";import"./uniqBy-MLt6bSD7.js";import"./iteratee-B9dZ7gAN.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
