import{u as n,j as e}from"./index-CQD1kLiu.js";import{M as o,C as h}from"./blocks-CLLqd0Vz.js";import{C as d,W as s}from"./dimensions.stories-tUkYU_KY.js";import"./iframe-Ce1K7ebi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./index-gt-wl4xF.js";import"./ChartSizeDimensions-BTy7bXaP.js";import"./zIndexSlice-8Zo3fsoU.js";import"./immer-wBCCevMF.js";import"./get-BJIMs5EG.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-COfY451m.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./Page-Cj8EiXz7.js";import"./Line-Beg62wAW.js";import"./Layer-B1_feEXA.js";import"./Curve-BMLS1vNR.js";import"./types-EmN6t4vl.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUKSjkGs.js";import"./Label-CmiiW9da.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./ZIndexLayer-CVK_cW1P.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./XAxis-3C9aClrU.js";import"./CartesianAxis-vXS1PjkI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DnjNgR7C.js";import"./Legend-BQlBEeuR.js";import"./Symbols-BDRy21CR.js";import"./symbol-aMWaQb_D.js";import"./useElementOffset-DXn7gAmc.js";import"./uniqBy-DJfS3mll.js";import"./iteratee-CHawhTEq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
