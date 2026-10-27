import{u as n,j as e}from"./index-sTqsKqSp.js";import{M as o,C as h}from"./blocks-DZ5Me9rK.js";import{C as d,W as s}from"./dimensions.stories-Bji5Y_9z.js";import"./iframe-0XL0sthS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./index-B0PFYJY5.js";import"./ChartSizeDimensions-IXshbamY.js";import"./zIndexSlice-C9Fui9SZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./throttle-Dos2q2R1.js";import"./ComposedChart-Deu_CMYg.js";import"./RechartsWrapper-B-mX6d9D.js";import"./axisSelectors-CET1BM1x.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8BAYDAt.js";import"./index-CNFugj9o.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Page-Cj8EiXz7.js";import"./Line-BgTy5bbd.js";import"./Layer-3mPd111u.js";import"./Curve-B4Yxq0yJ.js";import"./types-B6SF8UCq.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./LabelList-Bxms0g1E.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./dataEntryStyles-jYd5_Tui.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./XAxis-8dcEWD9_.js";import"./CartesianAxis-P0zAs4bB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BB_fEBXq.js";import"./Legend-C5lZ5guZ.js";import"./useElementOffset-BydIrxuW.js";import"./uniqBy-DSUFf6NQ.js";import"./iteratee-C_ZjvgJo.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
