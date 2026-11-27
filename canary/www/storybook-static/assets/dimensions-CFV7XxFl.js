import{u as n,j as e}from"./index-CjyumWik.js";import{M as o,C as h}from"./blocks-yNlW3Uon.js";import{C as d,W as s}from"./dimensions.stories-HAwG_QIP.js";import"./iframe-DNnhIzqd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./index-B4kmWeHl.js";import"./ChartSizeDimensions-D9SjJU0k.js";import"./zIndexSlice-CZnRUfU-.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./throttle-QyoUWs98.js";import"./ComposedChart-Dwrm7GV8.js";import"./RechartsWrapper-CrR43_nu.js";import"./axisSelectors-D3RI42dK.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./Page-Cj8EiXz7.js";import"./Line-Bslt7b3k.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Layer-BC8osa1v.js";import"./Curve-BuuEl7Oa.js";import"./types-BRWBXBDp.js";import"./step-CcvBplbA.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLzS4I_n.js";import"./Label-zRO_Glrc.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./ErrorBarContext-BEOQHAHp.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./XAxis-DyyKFn3c.js";import"./CartesianAxis-DyWgnQe6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DL1XukoQ.js";import"./Legend-rRcOGwD-.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
