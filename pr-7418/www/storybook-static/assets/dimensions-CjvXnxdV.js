import{u as n,j as e}from"./index-Bl5Q5FnH.js";import{M as o,C as h}from"./blocks-CSkhuNNT.js";import{C as d,W as s}from"./dimensions.stories-B2bvkPDm.js";import"./iframe-B32UfMsX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./index-Q93duC2Q.js";import"./ChartSizeDimensions-DnPS0gIU.js";import"./zIndexSlice-DkyNtvIV.js";import"./immer-BidytqCU.js";import"./get-CT3OO5rn.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-QBL839d_.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./Page-Cj8EiXz7.js";import"./Line-Bf6u9d83.js";import"./Layer-M7lMUPI2.js";import"./Curve-BQ-BZdGC.js";import"./types-BFdTLIuF.js";import"./step-DXYrSD7K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CWOjCZuo.js";import"./Label-Ba3mw93_.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./ZIndexLayer-DIk8UPq9.js";import"./useAnimationId-kKOEl60u.js";import"./ActivePoints-BOP5iqzh.js";import"./Dot-oj-oSIki.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getRadiusAndStrokeWidthFromDot-BZUf4vDk.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./XAxis-DsOSB3OX.js";import"./CartesianAxis-CrAWHyC2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-4E9uo8Up.js";import"./Legend-9mbWf1fU.js";import"./Symbols-C2ESKxkV.js";import"./symbol-CXCFISh0.js";import"./useElementOffset-Dj3OO3b3.js";import"./uniqBy-DT8uU73i.js";import"./iteratee-CxBZkxbt.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
