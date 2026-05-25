import{j as e}from"./jsx-runtime-GiMQO-xO.js";import{useMDXComponents as n}from"./index-J4df_Aix.js";import{M as o,C as h}from"./blocks-4yKJQN8g.js";import{C as d,W as s}from"./dimensions.stories-CS5y7EuH.js";import"./iframe-C6nv2cAy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DweZMxE9.js";import"./ChartSizeDimensions-BY1_-T9T.js";import"./arrayEqualityCheck-B6TrlJO6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dz2DdWhQ.js";import"./immer-Cni8-JSk.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CelmCkFr.js";import"./RechartsWrapper-BW8puFa7.js";import"./index-B73x1Khd.js";import"./hooks-BtR6DFBi.js";import"./axisSelectors-DvgT42C4.js";import"./d3-scale-BCthX3a6.js";import"./zIndexSlice-J7b4XvEa.js";import"./renderedTicksSlice-CAeDVDJj.js";import"./CartesianChart-DXKuJw3U.js";import"./chartDataContext-CzxDQN7p.js";import"./CategoricalChart-QgKXQZGT.js";import"./Page-DPte-9pC.js";import"./Line-BDr_GhQe.js";import"./Curve-BpVF0X8n.js";import"./types-QOd3xFvZ.js";import"./step-BkDQQW3z.js";import"./path-DyVhHtw_.js";import"./Layer-wqnfjYdM.js";import"./ReactUtils-DhUlF_RS.js";import"./Label-DLbKprA1.js";import"./Text-Ceq4AYN-.js";import"./DOMUtils-5JKzP-3C.js";import"./ZIndexLayer-B79SyOov.js";import"./ActivePoints-CD6NnglB.js";import"./Dot-DL_sWwqm.js";import"./RegisterGraphicalItemId-D4TYIl8u.js";import"./ErrorBarContext-AqRNcVf3.js";import"./GraphicalItemClipPath-DfRR2I58.js";import"./SetGraphicalItem-Cgl-K06p.js";import"./useAnimationId-CQiwipC5.js";import"./getRadiusAndStrokeWidthFromDot-BvPf9mB3.js";import"./ActiveShapeUtils-BD3rh4KE.js";import"./XAxis-VmwM632k.js";import"./CartesianAxis-BFynhpO1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-O_OVv1Cn.js";import"./Legend-DRo4loKD.js";import"./Symbols-vlD5G2OE.js";import"./symbol-yrXamAhh.js";import"./useElementOffset-BQjeDNfi.js";import"./uniqBy-B8uGSroM.js";import"./iteratee-D-F710r8.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
