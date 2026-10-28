import{u as n,j as e}from"./index-pQRnIDc3.js";import{M as o,C as h}from"./blocks-B7iOTSp2.js";import{C as d,W as s}from"./dimensions.stories-wMHrTYKq.js";import"./iframe-BGCZ_YYu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./index-DsAYZFOJ.js";import"./ChartSizeDimensions-5GNa5c3j.js";import"./zIndexSlice-cBJ2sUns.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./throttle-Dnn9iNkE.js";import"./ComposedChart-BaMrMimU.js";import"./RechartsWrapper-DzjZykj4.js";import"./axisSelectors-BgHWKfZW.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./Page-Cj8EiXz7.js";import"./Line-CYsPPfA1.js";import"./Layer-FBjFYiDN.js";import"./Curve-BoHAwgnl.js";import"./types-BvE9AUsn.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./LabelList-D60Hhpwl.js";import"./Label-CG8eDc0p.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./ActivePoints-GRJI6yy-.js";import"./Dot-CzpZnZIc.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getRadiusAndStrokeWidthFromDot-CNsKyJ5a.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./XAxis-CnHX8rYU.js";import"./CartesianAxis-D7nh9FWg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-QzbIIYXn.js";import"./Legend-BBY33JEH.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
