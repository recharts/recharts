import{u as n,j as e}from"./index-BR6QtAQP.js";import{M as o,C as h}from"./blocks-CY2fI2Uy.js";import{C as d,W as s}from"./dimensions.stories-CkNdkk_4.js";import"./iframe-CGtTT9aO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./index-oOofm89c.js";import"./ChartSizeDimensions-BAYdfmzG.js";import"./zIndexSlice-DkqERUsC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./throttle-Cpyd11_g.js";import"./ComposedChart-CtOwOAMH.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./axisSelectors-B4GsvVbU.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-HCxTFMcs.js";import"./index-DFHlfpO_.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./Page-Cj8EiXz7.js";import"./Line-B39YTIfI.js";import"./Layer-BOfjEgNF.js";import"./Curve-BOBD875w.js";import"./types-Do3ps9Vj.js";import"./step-BRhFbrj_.js";import"./path-DyVhHtw_.js";import"./LabelList-bhGj16_R.js";import"./Label-CdpdsstW.js";import"./Text-CPcXRBKa.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./ActivePoints-DxEPNf6W.js";import"./Dot-C5v9BtZ0.js";import"./activeStyles-Dtv8ZhnZ.js";import"./useAnimationId-C_28wM0V.js";import"./dataEntryStyles-CQ5H-98B.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./ErrorBarContext-9FDAfVa2.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./getRadiusAndStrokeWidthFromDot-BkHpd6-h.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./XAxis-Cs9YVmSO.js";import"./CartesianAxis-DK3VbMKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CPZ41WbR.js";import"./Legend-BpQuqqTF.js";import"./useElementOffset-BatF9isV.js";import"./uniqBy-CZnu9ysp.js";import"./iteratee-BkG8OlH1.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
