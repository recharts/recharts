import{u as n,j as e}from"./index-BOIuKwYc.js";import{M as o,C as h}from"./blocks-FM8rHkBU.js";import{C as d,W as s}from"./dimensions.stories-BbizY7Z8.js";import"./iframe-CA6cNkus.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfaPbByM.js";import"./index-DbciZ0iE.js";import"./index-PI3smBoN.js";import"./ChartSizeDimensions-BjJjPqTQ.js";import"./zIndexSlice-O14BPpZi.js";import"./immer-Dmy9GJDo.js";import"./get-CFJz0ojL.js";import"./resolveDefaultProps-C9L5vbOj.js";import"./isWellBehavedNumber-BkzajOOq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D-kg5Bmb.js";import"./RechartsWrapper-BrfCX34J.js";import"./index-DQmIhdua.js";import"./renderedTicksSlice-DwJ0KlHq.js";import"./axisSelectors-BqSveJ2d.js";import"./d3-scale-C6_zgknL.js";import"./CartesianChart-B9pQBHyJ.js";import"./chartDataContext-D73bINqU.js";import"./CategoricalChart-D2WxsK_0.js";import"./Page-Cj8EiXz7.js";import"./Line-o5rstLhB.js";import"./Layer-D-oRDXko.js";import"./Curve-DAXRhNFX.js";import"./types-BSXU9Oqu.js";import"./step-QPa8K90E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B54-TdNS.js";import"./Label-B1-Zgg5t.js";import"./Text-NUcA7Wwc.js";import"./DOMUtils-BVqsAse9.js";import"./ZIndexLayer-L_zBn_oX.js";import"./useAnimationId-b25y8QfL.js";import"./ActivePoints-DaJcax4p.js";import"./Dot-CZ4GTYkF.js";import"./RegisterGraphicalItemId-pJmMrti4.js";import"./ErrorBarContext-arfdjlYp.js";import"./GraphicalItemClipPath-B1gJnBar.js";import"./SetGraphicalItem-BUx_zIn8.js";import"./getRadiusAndStrokeWidthFromDot-BwfCKTiN.js";import"./ActiveShapeUtils-DCmnuM_G.js";import"./XAxis-C-xfE_6F.js";import"./CartesianAxis-Bnc9pIGx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CFfqmSxu.js";import"./Legend-iVQmwDZW.js";import"./Symbols-C3aMVRD3.js";import"./symbol-DsCqIlHH.js";import"./useElementOffset-rnxS_oDH.js";import"./uniqBy-Clt69WpW.js";import"./iteratee-C8N0Znrl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
