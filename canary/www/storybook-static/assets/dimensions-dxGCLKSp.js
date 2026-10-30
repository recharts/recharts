import{u as n,j as e}from"./index-Cxz382hg.js";import{M as o,C as h}from"./blocks-nG6WuyKd.js";import{C as d,W as s}from"./dimensions.stories-Rcpltr_w.js";import"./iframe-B89lyy_-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./index-B0mW9FVH.js";import"./ChartSizeDimensions-C6anaUNi.js";import"./zIndexSlice-BefUx2Nd.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CABzBelW.js";import"./throttle-BZuMAyb2.js";import"./ComposedChart-BsssixLG.js";import"./RechartsWrapper-VgXxR9hf.js";import"./axisSelectors-DR4qXUjK.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgC9WZfP.js";import"./index-DE_m11QS.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./Page-Cj8EiXz7.js";import"./Line-_gevD_1B.js";import"./Layer-CVGlZAI2.js";import"./Curve-3TxFGWdO.js";import"./types-DRZvsZyz.js";import"./step-BRjfFT26.js";import"./path-DyVhHtw_.js";import"./LabelList-6ZaFDz_R.js";import"./Label-C15axuMc.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./activeStyles-CQvoijJ0.js";import"./useAnimationId-CrfHw1CS.js";import"./dataEntryStyles-C4pyloN-.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./ErrorBarContext-CHzFixYj.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./themeFill-BkM1x4hA.js";import"./XAxis-CSc3N7hL.js";import"./CartesianAxis-DOEm-eMS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CnBxKCbE.js";import"./Legend-ANhqDYkd.js";import"./fillDefinitions-B-2MwM8M.js";import"./useElementOffset-DD1T0fU1.js";import"./uniqBy-QREi1o1G.js";import"./iteratee-Dd6IP1KA.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};
