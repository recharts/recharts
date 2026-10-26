import{u as n,j as e}from"./index--hmF-HSm.js";import{M as o,C as h}from"./blocks-CHbBsw4U.js";import{C as d,W as s}from"./dimensions.stories-CNijYeDz.js";import"./iframe-ZGmrrukO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./index-DjxPPcPR.js";import"./ChartSizeDimensions-BtBzWzkk.js";import"./zIndexSlice-C5KgYPQq.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./throttle-DEV8M7d-.js";import"./ComposedChart-DbQJYIh8.js";import"./RechartsWrapper-D3dierpX.js";import"./axisSelectors-BkEVbAOi.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./Page-Cj8EiXz7.js";import"./Line-CagAPKlZ.js";import"./Layer-B42ScyDi.js";import"./Curve-CjgpP6VN.js";import"./types-CCAgRS29.js";import"./step-BOD7ejsf.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bhs50nun.js";import"./Label-CraUapZw.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./useAnimationId-16kGh6Cm.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./XAxis-BAXN4a1X.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-C3JJ8ArK.js";import"./Legend-DG95uxRK.js";import"./useElementOffset-CJAbl6Xw.js";import"./uniqBy-B8i0l-yZ.js";import"./iteratee-DMbjXWAk.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
