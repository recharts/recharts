import{u as n,j as e}from"./index-CRHONeWn.js";import{M as o,C as h}from"./blocks-qBvL3VK8.js";import{C as d,W as s}from"./dimensions.stories-9WOkT_Un.js";import"./iframe-B7udcz8q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-S5IzzpjS.js";import"./index-rAymN7LL.js";import"./index-Bml9ugX6.js";import"./ChartSizeDimensions-BFIx9i0R.js";import"./zIndexSlice-CtXztuzC.js";import"./immer-t_2Sayw7.js";import"./get-Tn0kxTo7.js";import"./resolveDefaultProps-B-U9qcdT.js";import"./isWellBehavedNumber-BlYOzctW.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BH1TZk1K.js";import"./RechartsWrapper-RU_ueSyC.js";import"./index-BlkuEMuV.js";import"./renderedTicksSlice-LbTh7uAL.js";import"./axisSelectors-Cj3RkADr.js";import"./d3-scale-NB2wmaCb.js";import"./string-B6fdYHAA.js";import"./CartesianChart-94_kN34Y.js";import"./chartDataContext-BQtkj7i-.js";import"./CategoricalChart-Hmy3E080.js";import"./Page-Cj8EiXz7.js";import"./Line-D-LESVBA.js";import"./Layer-CJbCrDcq.js";import"./Curve-CqYDgXu-.js";import"./types-bSkV0tKv.js";import"./step-BfmxT7JJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KJX7W3it.js";import"./Label-DwDNb6uu.js";import"./Text-DijhQOvE.js";import"./DOMUtils-D_cLkzH2.js";import"./ZIndexLayer-D4FmDVUU.js";import"./useAnimationId-Ceo5Qx4Z.js";import"./ActivePoints-03Jr3wsv.js";import"./Dot-CT7VE7Ou.js";import"./RegisterGraphicalItemId-NzEXLpZt.js";import"./ErrorBarContext-DUPlcwIm.js";import"./GraphicalItemClipPath-dDeN-gZy.js";import"./SetGraphicalItem-CbXxnaP2.js";import"./getRadiusAndStrokeWidthFromDot-C1_PUQIm.js";import"./ActiveShapeUtils-CuaFKTcX.js";import"./XAxis-DiPjyBYO.js";import"./CartesianAxis-Cfla_J1H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-B456uVCj.js";import"./Legend-DKASrtT6.js";import"./Symbols-BAXMKzrp.js";import"./symbol-Zb2Eq_kM.js";import"./useElementOffset-qThfu9mS.js";import"./uniqBy-DJu4ehry.js";import"./iteratee-DoAiHgnQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
