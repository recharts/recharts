import{u as n,j as e}from"./index-BT9tRc3W.js";import{M as o,C as h}from"./blocks-CpztVhx7.js";import{C as d,W as s}from"./dimensions.stories-BS76ODi3.js";import"./iframe-BS2EKBCb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./index-CzKnnb1A.js";import"./ChartSizeDimensions-081GBnke.js";import"./zIndexSlice-DgCHBsPF.js";import"./throttle-N5ne0m8p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TcviW97c.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B5I1ESDC.js";import"./RechartsWrapper-BMyz7hVE.js";import"./axisSelectors-CyWNF9Af.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./Page-Cj8EiXz7.js";import"./Line-Cy9qkYsp.js";import"./Layer-GWt7eqqf.js";import"./Curve-B-5JJSds.js";import"./types-BQYuG1d5.js";import"./step-C_EYK6G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CyRMeM58.js";import"./Label-DXa6-y8E.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./ZIndexLayer-B7lLwLGi.js";import"./useAnimationId-DT-PTug0.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./XAxis-BjDgsza5.js";import"./CartesianAxis-CKj7lC_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BOuW76NE.js";import"./Legend-CrwIU00e.js";import"./Symbols-VAmn91XB.js";import"./symbol-CEiHj79c.js";import"./useElementOffset-4jPhR6y6.js";import"./uniqBy-Cq54zJ4p.js";import"./iteratee-BrmxT3n3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
