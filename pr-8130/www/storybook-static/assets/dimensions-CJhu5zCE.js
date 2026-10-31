import{u as n,j as e}from"./index-Roq9BAjl.js";import{M as o,C as h}from"./blocks-MRXaxUnp.js";import{C as d,W as s}from"./dimensions.stories-4zTQl42O.js";import"./iframe-DP_a1dmY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./index-BKlw8SLM.js";import"./ChartSizeDimensions-DfzxTrTE.js";import"./zIndexSlice-rjLYhejy.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUA_ea65.js";import"./throttle-BChPb-_m.js";import"./ComposedChart-CSr8xtVa.js";import"./RechartsWrapper-B4nQvyyr.js";import"./axisSelectors-DEw1mS80.js";import"./polarAxisSelectors-C8froBOH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CQwtQXkW.js";import"./index-B7p3ZvHO.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./Page-Cj8EiXz7.js";import"./Line-B0f2Q_SE.js";import"./Layer-CZaWfsGO.js";import"./Curve-BWt9Gc4p.js";import"./types-CDz_n5r5.js";import"./step-D5N_P6yo.js";import"./path-DyVhHtw_.js";import"./LabelList-DL3Ydiqu.js";import"./Label-ja-Sj5Q7.js";import"./Text-Dp_r5yDX.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./activeStyles-BV6CK3cL.js";import"./useAnimationId-CFEdeYhu.js";import"./dataEntryStyles-4JNZcrwL.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./ErrorBarContext-tkKb7Nex.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./useEffectiveDataKey-D45Rikd2.js";import"./XAxis-1vjsoN9j.js";import"./CartesianAxis-C1uxWw-Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DqctmLMG.js";import"./Legend-BZrfV6wX.js";import"./useElementOffset-CYP9m4TG.js";import"./uniqBy-Bwcnbh18.js";import"./iteratee-Doq5RcdM.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
