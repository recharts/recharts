import{u as n,j as e}from"./index-qFi9puwz.js";import{M as o,C as h}from"./blocks-BONbmpzz.js";import{C as d,W as s}from"./dimensions.stories-CBjooVhE.js";import"./iframe-BU3iqhog.js";import"./preload-helper-Dp1pzeXC.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./index-BAJoWACv.js";import"./ChartSizeDimensions-BdM6OAZq.js";import"./zIndexSlice-Cpd3Oi8q.js";import"./throttle-Dtv6RWTH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CnlQVWiV.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./Page-Cj8EiXz7.js";import"./Line-D5gRKdrp.js";import"./Layer-BUBmv9mO.js";import"./Curve-BSmazxDN.js";import"./types-Cp0AAwbW.js";import"./step-uA4Kffey.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CSVnwEYt.js";import"./Label-BEIJZAIQ.js";import"./Text-BrjMZ7T0.js";import"./DOMUtils-CiCEa87M.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./useAnimationId-BUaPZS0B.js";import"./ActivePoints-Bkhj7n47.js";import"./Dot-C8c1IDgg.js";import"./RegisterGraphicalItemId-DfUeUgid.js";import"./ErrorBarContext-qidGP01Z.js";import"./GraphicalItemClipPath-DoWFsAsl.js";import"./SetGraphicalItem-Da1y71gX.js";import"./getRadiusAndStrokeWidthFromDot-Dhw2197g.js";import"./ActiveShapeUtils-DFQKKGa8.js";import"./useGraphicalItemIdentity-CTbnTQeV.js";import"./XAxis-DVT5C2oc.js";import"./CartesianAxis-DRURazzH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C4ehmAHw.js";import"./Legend-D1_75WAs.js";import"./Symbols-CaZgBRan.js";import"./symbol-DHqgtrrn.js";import"./useElementOffset-BuaCyz1B.js";import"./uniqBy-B0FmK-vV.js";import"./iteratee-Dq0J-PP4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
