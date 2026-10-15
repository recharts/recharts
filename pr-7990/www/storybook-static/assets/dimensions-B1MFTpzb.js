import{u as n,j as e}from"./index-BVxaXPNR.js";import{M as o,C as h}from"./blocks-CM_lPhmt.js";import{C as d,W as s}from"./dimensions.stories-Dxk6E2PO.js";import"./iframe--dVKNbCw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./index-Bm7T0tPh.js";import"./ChartSizeDimensions-CoDhixrB.js";import"./zIndexSlice-CpZXb3K1.js";import"./throttle-Vdk2BIuN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-19MGuD5L.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BWbHkL8w.js";import"./RechartsWrapper-DRzg3fGD.js";import"./axisSelectors-asW4dLtq.js";import"./d3-scale-Daiirif0.js";import"./index-11dfO-im.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-BXnIb1gt.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./Page-Cj8EiXz7.js";import"./Line-C0IgQdK8.js";import"./Layer-DfItUnsr.js";import"./Curve-goXmosWw.js";import"./types-CJbJ0IDT.js";import"./step-Cg-bszWe.js";import"./path-DyVhHtw_.js";import"./activeStyles-Kpuk4WPq.js";import"./Label-BMbpqhNX.js";import"./Text-ah79KUdU.js";import"./pageBackground-BuDL1xc_.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./ZIndexLayer-BW0svFjl.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./ErrorBarContext-C4YeRw8_.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./useEffectiveDataKey-DluS1fAA.js";import"./XAxis-CO1xFj8-.js";import"./CartesianAxis-DUU6iCh1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-dK_EcPxW.js";import"./Legend-BXS76eI6.js";import"./Symbols-C18p8MLn.js";import"./symbol-DAEoc_mM.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
