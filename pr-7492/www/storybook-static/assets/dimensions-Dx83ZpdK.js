import{u as n,j as e}from"./index-BTgRwXLF.js";import{M as o,C as h}from"./blocks-DUvyBt1t.js";import{C as d,W as s}from"./dimensions.stories-Cqi459bU.js";import"./iframe-CThZUbdE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./index-B32OlRwA.js";import"./ChartSizeDimensions-BH6EI-xv.js";import"./zIndexSlice-BDry6QRp.js";import"./immer-6NPp0ZGq.js";import"./get-VHoxVJrE.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BYeWN0El.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./Page-Cj8EiXz7.js";import"./Line-PXaX8gsH.js";import"./Layer-C1XMVqEx.js";import"./Curve-CddvI1GC.js";import"./types-BBvrAdrd.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-PV5URjHV.js";import"./Label-CE0t5kQZ.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./ZIndexLayer-LL2CdfOc.js";import"./useAnimationId-DzTn0J9i.js";import"./ActivePoints-NvSpkC2T.js";import"./Dot-n9UR6iqn.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getRadiusAndStrokeWidthFromDot-CteGZ8Gy.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./XAxis-Czxsq92a.js";import"./CartesianAxis-BM-bncSs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-COnF85r4.js";import"./Legend-D5EFqXIt.js";import"./Symbols-DOMkQYi1.js";import"./symbol-DhevQ36Y.js";import"./useElementOffset-I2abokvN.js";import"./uniqBy-CWUL-oIl.js";import"./iteratee-BoWDAhHy.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
