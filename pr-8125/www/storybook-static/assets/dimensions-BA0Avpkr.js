import{u as n,j as e}from"./index-BE1h9fRT.js";import{M as o,C as h}from"./blocks-DuYfATE7.js";import{C as d,W as s}from"./dimensions.stories-BdSrSYOh.js";import"./iframe-C9f0XnT9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./index-C_QD7AAh.js";import"./ChartSizeDimensions-DVxxTEeG.js";import"./zIndexSlice-CHa-NfW0.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-OglZgdvE.js";import"./throttle-KQYU95ys.js";import"./ComposedChart-ta3a0B_A.js";import"./RechartsWrapper-DtDu-9p6.js";import"./axisSelectors-DJl001RI.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRci95pZ.js";import"./index-Bf7Rq1hF.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./Page-Cj8EiXz7.js";import"./Line-DpXuZWHU.js";import"./Layer-BGqt9quM.js";import"./Curve-BuH0ARbV.js";import"./types-Cq0tVQAG.js";import"./step-D2_GuXTT.js";import"./path-DyVhHtw_.js";import"./LabelList-CjS5fbS8.js";import"./Label-HDB1mOS9.js";import"./Text-BBa2fCF5.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./ActivePoints-CjTQST-x.js";import"./Dot-Dha_7IA1.js";import"./activeStyles-BitiIAzx.js";import"./useAnimationId-BNUZJ-Q8.js";import"./dataEntryStyles-Bof1DRSv.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./ErrorBarContext-BjUzcwSB.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getRadiusAndStrokeWidthFromDot-B1pkRXwd.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./XAxis-C5bj5GgQ.js";import"./CartesianAxis-C2y0lK-Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-D9OAInhW.js";import"./Legend-BJJ5wo6A.js";import"./useElementOffset-BPNvSWcg.js";import"./uniqBy-DOejL97I.js";import"./iteratee-Bq0h_QlS.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
