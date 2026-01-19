import{j as e}from"./jsx-runtime-C1ot20lR.js";import{useMDXComponents as n}from"./index-DILf96Dt.js";import{M as h,C as o}from"./blocks-BYl3ixDh.js";import{C as d,W as s}from"./dimensions.stories-Ceo5pj5i.js";import"./iframe-D10KqzUD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CvJ6Av4F.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./arrayEqualityCheck-BiFmrFlI.js";import"./resolveDefaultProps-9OrE3puy.js";import"./PolarUtils--rK1_r3m.js";import"./ComposedChart-IceyRJ92.js";import"./RechartsWrapper-DmZaXDX9.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./zIndexSlice-C09Fe5zh.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./Line-DoQ21THX.js";import"./Layer-ht9SJGho.js";import"./ReactUtils-Bjqgxmj3.js";import"./Label-NWVYeZEG.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./ZIndexLayer-CJv48mZa.js";import"./ActivePoints-Cl0N8-Qa.js";import"./Dot-WZLVysVK.js";import"./types-DH2QYYrT.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./ErrorBarContext-D0gYYf11.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./useAnimationId-CbuLj6s5.js";import"./getRadiusAndStrokeWidthFromDot-B2lKpKPj.js";import"./ActiveShapeUtils-DYlzmj4y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpWw-GEi.js";import"./Trapezoid-DuyF-aaV.js";import"./Sector-C5ufK4tl.js";import"./Symbols-DUUGs6sP.js";import"./Curve-BHXU1eAM.js";import"./XAxis-BQt1-o4i.js";import"./CartesianAxis-UUDtKWGi.js";import"./YAxis-DR2gGzMh.js";import"./Legend-CUAitUpE.js";import"./useElementOffset-BpotpCoB.js";import"./iteratee-B19FyeeB.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
