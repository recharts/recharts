import{u as n,j as e}from"./index-VllwmQaA.js";import{M as o,C as h}from"./blocks-BCKnQnFy.js";import{C as d,W as s}from"./dimensions.stories-DxcV4EqM.js";import"./iframe-C0h7cDRB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./index-BxvBa7qS.js";import"./ChartSizeDimensions-BVKdVo2m.js";import"./zIndexSlice-qYbn1M2d.js";import"./throttle-BTNdvVGL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BkghodIs.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bxc6CdJK.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./axisSelectors-ao6VSC3T.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./Page-Cj8EiXz7.js";import"./Line-BPh87F_P.js";import"./Layer-CDasTplA.js";import"./Curve-S0jwBuSa.js";import"./types-BFdAlI3B.js";import"./step-imJiFMDF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_8lABYqi.js";import"./Label-ChRnigpx.js";import"./Text-0LVKVKzy.js";import"./DOMUtils-CJDZt9Se.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./ZIndexLayer-CQRtxHWp.js";import"./useAnimationId-CdJJ5aJU.js";import"./ActivePoints-BbEboQPa.js";import"./Dot-bF0pyqQk.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getRadiusAndStrokeWidthFromDot-BL01NReM.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BA_RiYmX.js";import"./CartesianAxis-CojQTbDy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C8YuU25K.js";import"./Legend-B9myfM-R.js";import"./Symbols-CkEijzRx.js";import"./symbol-DZ3WUR_I.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
