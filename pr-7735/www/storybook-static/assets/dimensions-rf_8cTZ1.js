import{u as n,j as e}from"./index-DPcyQb10.js";import{M as o,C as h}from"./blocks-C5kX-Xfe.js";import{C as d,W as s}from"./dimensions.stories-CC_oLO3w.js";import"./iframe-Bpd2XNWC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./index-3uQaoJQn.js";import"./ChartSizeDimensions-CdlTKv6q.js";import"./zIndexSlice-BTu_B7mV.js";import"./throttle-CxmKEgMS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CzZEMv_V.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./Page-Cj8EiXz7.js";import"./Line-CpDx9GkF.js";import"./Layer-DWU20C-K.js";import"./Curve-m791ZjIC.js";import"./types-B5zWJp34.js";import"./step-PY4SjMEk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dPJnsYL3.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./DOMUtils-CSQS_b5b.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./ZIndexLayer-BFtSzcZm.js";import"./useAnimationId-DbYR-C-O.js";import"./ActivePoints-1vR13631.js";import"./Dot-7gwjjvvE.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getRadiusAndStrokeWidthFromDot-Bgi6ZhX1.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BIqIlQ9-.js";import"./CartesianAxis-qQEQr_OK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CYnJfJw2.js";import"./Legend-ZAI74NDo.js";import"./Symbols-DIrQYRf3.js";import"./symbol-BXNXaRuy.js";import"./useElementOffset-BXSnabaG.js";import"./uniqBy-BNdvCmS_.js";import"./iteratee-__Bf_W0o.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
