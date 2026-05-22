import{j as e}from"./jsx-runtime-BM3AboWj.js";import{useMDXComponents as n}from"./index-BTI23fKo.js";import{M as o,C as h}from"./blocks-heTPF3gR.js";import{C as d,W as s}from"./dimensions.stories-CM-jOen1.js";import"./iframe-BhUxTtiL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./arrayEqualityCheck-DppgWusB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwRhqspK.js";import"./immer-CHCHxlI3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BMn_6oDC.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./Page-DPte-9pC.js";import"./Line-p3VovnKi.js";import"./Curve-BICrVSEu.js";import"./types-Lg-gn8wA.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./Layer-BGQI9FGV.js";import"./ReactUtils-BLhQELGN.js";import"./Label-B-L_WnHM.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./ZIndexLayer-BPpIaF6c.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./XAxis-C73en9jh.js";import"./CartesianAxis-Dg6rum68.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CqkUk7nh.js";import"./Legend-307I_yqh.js";import"./Symbols-DS4uPA9_.js";import"./symbol-CUmDLBsP.js";import"./useElementOffset-JSdm64jE.js";import"./uniqBy-BCcn4akX.js";import"./iteratee-BIvWeTYe.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
