import{u as n,j as e}from"./index-CidbRL2k.js";import{M as o,C as h}from"./blocks-DAn_N_9X.js";import{C as d,W as s}from"./dimensions.stories-1m_h1GY7.js";import"./iframe-nnpNEl0c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./index-DcZvMf-G.js";import"./ChartSizeDimensions-BN2qCQ_v.js";import"./zIndexSlice-BIxplyvp.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./throttle-CIO-2ra4.js";import"./ComposedChart-CNqzZLnk.js";import"./RechartsWrapper-VFnYK8V7.js";import"./axisSelectors-DWnmhIgM.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WiXCw0il.js";import"./index-Db30zo8R.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./Page-Cj8EiXz7.js";import"./Line-BBeoyI6l.js";import"./Layer-CzHD4ald.js";import"./Curve-BBlYovqd.js";import"./types-BmjMrM54.js";import"./step-BJvIh3cb.js";import"./path-DyVhHtw_.js";import"./LabelList-BNO7oHuM.js";import"./Label-tyPo7vJI.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./dataEntryStyles-BmV4LTxI.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./activeStyles-iZJvEVBW.js";import"./useAnimationId-CJPhZ8Cq.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./XAxis-DmxowzrZ.js";import"./CartesianAxis-BqAJOGeS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-EeSB_m0u.js";import"./Legend-DhFd6Kcx.js";import"./useElementOffset-D4m3W9N6.js";import"./uniqBy-BtFmVpwe.js";import"./iteratee-DDsc37Zm.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
