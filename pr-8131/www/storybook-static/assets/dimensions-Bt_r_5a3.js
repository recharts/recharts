import{u as n,j as e}from"./index-DbN4LMMp.js";import{M as o,C as h}from"./blocks-DUMVW223.js";import{C as d,W as s}from"./dimensions.stories-CSczTqLS.js";import"./iframe-jmhe2Qk6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./index-CSauTcUd.js";import"./ChartSizeDimensions-BhDdQAJa.js";import"./zIndexSlice-C_QNUIlg.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./throttle-DZINazP_.js";import"./ComposedChart-DDgeQ340.js";import"./RechartsWrapper-C_ACRdKM.js";import"./axisSelectors-CTtb55NE.js";import"./polarAxisSelectors-D0zNKA08.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_kmjLSGJ.js";import"./index-1mWypBK7.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./Page-Cj8EiXz7.js";import"./Line-CQCNhVyP.js";import"./Layer-B39D7NeJ.js";import"./Curve-B9PMeVXe.js";import"./types-Cpf9ifaq.js";import"./step-C3gp0-r4.js";import"./path-DyVhHtw_.js";import"./LabelList-Dq0YgplD.js";import"./Label-Db1KZEia.js";import"./Text-CmetEc_4.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./ActivePoints-BpkFEdDf.js";import"./Dot-Oe3PKIgB.js";import"./activeStyles-sH1GlI3K.js";import"./useAnimationId-Zg5v1vJq.js";import"./dataEntryStyles-CsSE3ak0.js";import"./Symbols-BFwKw-3i.js";import"./symbol-sHGxO5Ns.js";import"./ErrorBarContext-C2f99oDG.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getRadiusAndStrokeWidthFromDot-Ds0PjUPZ.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./XAxis-BmABHSTj.js";import"./CartesianAxis-CTjd-a6A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bwmry524.js";import"./Legend-CrPT364J.js";import"./useElementOffset-CX9phfOZ.js";import"./uniqBy-CTEjb69M.js";import"./iteratee-Cf4iavbi.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
