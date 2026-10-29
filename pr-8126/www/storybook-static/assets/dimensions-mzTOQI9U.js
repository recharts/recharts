import{u as n,j as e}from"./index-nA1XCKwg.js";import{M as o,C as h}from"./blocks-bf8OJ4OE.js";import{C as d,W as s}from"./dimensions.stories-B4dTtRgo.js";import"./iframe-CpWBjTvp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./index-mAc_XfwU.js";import"./ChartSizeDimensions-CNhBKv5u.js";import"./zIndexSlice-DUDjamRK.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./throttle-D3Uoll6g.js";import"./ComposedChart-BVHJhCwJ.js";import"./RechartsWrapper-DxDmVade.js";import"./axisSelectors-DP-Cq8x3.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9EE4QQRc.js";import"./index-BKdflUfl.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./Page-Cj8EiXz7.js";import"./Line-P1M0af3R.js";import"./Layer-DcRKRX6x.js";import"./Curve-DzwEiiyx.js";import"./types-BKpcX7F2.js";import"./step-D2PoiFak.js";import"./path-DyVhHtw_.js";import"./LabelList-B0vE2GKD.js";import"./Label-BHRweOLu.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./activeStyles-CPrr7d0w.js";import"./useAnimationId-qe3YUtTg.js";import"./dataEntryStyles-BMyxGDVI.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./XAxis-WebSLI5n.js";import"./CartesianAxis-CgwFl8Jq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-3eU4T95U.js";import"./Legend-DfE89ulZ.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
