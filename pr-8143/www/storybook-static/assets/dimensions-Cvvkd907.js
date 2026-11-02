import{u as n,j as e}from"./index-BwgOkyCq.js";import{M as o,C as h}from"./blocks-BXdg95QW.js";import{C as d,W as s}from"./dimensions.stories-DcN2aS0l.js";import"./iframe-DSNXEUn4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./index-C8EE5WMp.js";import"./ChartSizeDimensions-CVgH6Vcp.js";import"./zIndexSlice-Dz2masNo.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJdscjTc.js";import"./throttle-Cql2XGyq.js";import"./ComposedChart-CzQ5p_-Z.js";import"./RechartsWrapper-tZbMCMkz.js";import"./axisSelectors-BVWqqaIl.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./Page-Cj8EiXz7.js";import"./Line-5dkC5hpH.js";import"./Layer-0vZKA5Ep.js";import"./Curve-DnME_alY.js";import"./types-CuvQqVdH.js";import"./step-DRkdD1F5.js";import"./path-DyVhHtw_.js";import"./LabelList-CdZv6dYa.js";import"./Label-CjMpSSpc.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./ActivePoints-MPkH3V4_.js";import"./Dot-BLQG3Xnr.js";import"./activeStyles-BwY0V3hq.js";import"./useAnimationId-De32QbAN.js";import"./dataEntryStyles-CrqYJwRR.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./ErrorBarContext-BvGzHJmi.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getRadiusAndStrokeWidthFromDot-Bio62kDH.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./XAxis-BIkQK5N1.js";import"./CartesianAxis-2YdOU3ps.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis--soXrgEQ.js";import"./Legend-DjfLBMPY.js";import"./useElementOffset-D1SkD3Zy.js";import"./uniqBy-CXWSUzZM.js";import"./iteratee-BQECtUia.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
