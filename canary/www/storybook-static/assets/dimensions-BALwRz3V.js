import{u as n,j as e}from"./index-Dr6gpH-h.js";import{M as o,C as h}from"./blocks-DogemQy5.js";import{C as d,W as s}from"./dimensions.stories-Dvng3eHX.js";import"./iframe-c2lRejlG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPGiATtt.js";import"./index-IRYG05jg.js";import"./index-DiQunSZN.js";import"./ChartSizeDimensions-D5HxWP0p.js";import"./zIndexSlice-CxBOtYNT.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cd-PQ1DC.js";import"./throttle-CLdsKjkB.js";import"./ComposedChart-CI5mc4uI.js";import"./RechartsWrapper-7WfVgUuu.js";import"./axisSelectors-Deq2x5E-.js";import"./polarAxisSelectors-CqGqTVQP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FKe385CS.js";import"./index-flaxi9nt.js";import"./renderedTicksSlice-CI_7c3pA.js";import"./index-DtkFulOp.js";import"./fillDefinitions-BJlWg_X2.js";import"./CartesianChart-B9TZHz33.js";import"./chartDataContext-D2dajo_O.js";import"./CategoricalChart-Da60SI3f.js";import"./Page-Cj8EiXz7.js";import"./Line-Bm9hdzN4.js";import"./getRadiusAndStrokeWidthFromDot-BLb9OMZN.js";import"./Layer-3thD2J8o.js";import"./Curve-C61f5jar.js";import"./types-DUYg5b1u.js";import"./step-k_HQUKGn.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPzad5xB.js";import"./Label-CYzJLkW1.js";import"./Text-DUu108CD.js";import"./ZIndexLayer-wT8ty6aL.js";import"./ActivePoints-DZEdcjq5.js";import"./Dot-DNml-FEM.js";import"./activeStyles-71nScM55.js";import"./useAnimationId-DpyYZ0R1.js";import"./Symbols-ZMuAovUW.js";import"./symbol-BTyzRL6J.js";import"./ErrorBarContext-DkK2QSGk.js";import"./SetGraphicalItem-BqZrsCyw.js";import"./ActiveShapeUtils-CM6VEkzu.js";import"./useEffectiveDataKey-Dakyyayq.js";import"./XAxis-CTi1ijiA.js";import"./CartesianAxis-OWNbVRjL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-A4qX3MrX.js";import"./Legend-pp2Qo9Sn.js";import"./useElementOffset-u32tKDbG.js";import"./uniqBy-Dt7YDWvs.js";import"./iteratee-DhpUlMTO.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
