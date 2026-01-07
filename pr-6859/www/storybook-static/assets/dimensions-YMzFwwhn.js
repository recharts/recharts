import{j as e}from"./jsx-runtime-_Q5RDA0O.js";import{useMDXComponents as n}from"./index-DKpDsngN.js";import{M as h,C as o}from"./blocks-B4yaaMaE.js";import{C as d,W as s}from"./dimensions.stories-pSUCE7fM.js";import"./iframe-DmHHE4lP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./arrayEqualityCheck-t0Foyoao.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./PolarUtils-BW7uHe1I.js";import"./ComposedChart-6GwosE_U.js";import"./RechartsWrapper-C1weQJJR.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./zIndexSlice-hpqEhuIa.js";import"./CartesianChart-C2N9FbeV.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./Line-DOsGA7cb.js";import"./Layer-B8hcK7zD.js";import"./ReactUtils-ChDQdCA9.js";import"./Label-BJNNtMeT.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./ActivePoints-B0pAIqrf.js";import"./Dot-DWsi5cp1.js";import"./types-BHzH6qVj.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./ErrorBarContext-D_EijXm5.js";import"./GraphicalItemClipPath-CceA_Jya.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./useAnimationId-DURIfTWV.js";import"./getRadiusAndStrokeWidthFromDot-aytWJAnv.js";import"./ActiveShapeUtils-DlVOZy2E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DV7CNXNv.js";import"./Trapezoid-Bb17YseS.js";import"./Sector-DhfQ1iXA.js";import"./Symbols-CRlDXm6y.js";import"./Curve-Dz5aWL22.js";import"./XAxis-DgoG7wOz.js";import"./CartesianAxis-BgTM8D2n.js";import"./YAxis-7nE9-RZi.js";import"./Legend-Cde7TLMz.js";import"./useElementOffset-CbKJqfDk.js";import"./iteratee-BlIIsWpB.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
