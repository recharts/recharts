import{u as n,j as e}from"./index-DlL1wtYW.js";import{M as o,C as h}from"./blocks-CEBEjdb8.js";import{C as d,W as s}from"./dimensions.stories-CqtLQoob.js";import"./iframe-TzfrCimv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./index-DNVn7Vry.js";import"./ChartSizeDimensions-CXPmaQit.js";import"./zIndexSlice-Dp5v9G1Y.js";import"./throttle-BM90P8P9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-0zP4qBoW.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./Page-Cj8EiXz7.js";import"./Line-zx4GEwVd.js";import"./Layer-D26e-s_C.js";import"./Curve-DI4o0w5Q.js";import"./types-GCQJUCAo.js";import"./step-D4kT1-OM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-q6ooW_4r.js";import"./Label-ORziBLCU.js";import"./Text-Cq_y2tEB.js";import"./DOMUtils-BXdig0h8.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./ZIndexLayer-LDMTKG6P.js";import"./useAnimationId-4hu6-jhP.js";import"./ActivePoints-Dbb31mNE.js";import"./Dot-Dvt3Xsey.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getRadiusAndStrokeWidthFromDot-Cf3g7qVi.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-5FjHsuX0.js";import"./CartesianAxis-BGRgt604.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-B2Z4R-y-.js";import"./Legend-C7LdFeje.js";import"./Symbols-VpyWRrnw.js";import"./symbol-C_f38eHA.js";import"./useElementOffset-DFpTBv-U.js";import"./uniqBy-C9EHRlA6.js";import"./iteratee-CCNscPsm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
