import{u as n,j as e}from"./index-BHhZn8gP.js";import{M as o,C as h}from"./blocks-ZMmkA27X.js";import{C as d,W as s}from"./dimensions.stories-Dl6Qi8uw.js";import"./iframe-Badwul9q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./index-BjECjR4R.js";import"./ChartSizeDimensions-BqlD2lV_.js";import"./zIndexSlice-CEPqA6uv.js";import"./throttle-BG2Qy65h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cw6WxKp9.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./axisSelectors-CTwDlHnv.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./CategoricalChart-1ZyUfD1N.js";import"./Page-Cj8EiXz7.js";import"./Line-Bq5Pip6f.js";import"./Layer-D6-JDPxR.js";import"./Curve-BaVpsYCr.js";import"./types-DAsbYWRO.js";import"./step-B8WIZZ5_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7VnlwSp.js";import"./Label-UqWUh_Dj.js";import"./Text-h9Iu7ZeD.js";import"./DOMUtils-BA3evV1C.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./ZIndexLayer-DzsdJFep.js";import"./useAnimationId-jiUA16Df.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DwaxFHEN.js";import"./CartesianAxis-C8y8cQTk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-B14z5K_h.js";import"./Legend-Dhz4Bzfc.js";import"./Symbols-Dtyl81qq.js";import"./symbol-DUMetRhr.js";import"./useElementOffset-BfmRpqsp.js";import"./uniqBy-BfG2k_aA.js";import"./iteratee-CpkIGYwK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
