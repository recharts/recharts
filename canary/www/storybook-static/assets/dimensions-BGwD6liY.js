import{u as n,j as e}from"./index-CvZqLdf3.js";import{M as o,C as h}from"./blocks-CDYae5VH.js";import{C as d,W as s}from"./dimensions.stories-DpHQFMZg.js";import"./iframe-DFEJf-6F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./index-BaTm8cby.js";import"./ChartSizeDimensions-CQVtWcjg.js";import"./zIndexSlice-Bh4qmv0V.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./throttle-t_Ovqcxg.js";import"./ComposedChart-D1Kb8R-X.js";import"./RechartsWrapper-CjcGVgxW.js";import"./axisSelectors-mOjibS9Y.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tiUNr7pP.js";import"./index-CuX-9nTc.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./Page-Cj8EiXz7.js";import"./Line-CoLcqSgq.js";import"./getRadiusAndStrokeWidthFromDot-BBakNZKq.js";import"./Layer-BocGZ-Qs.js";import"./Curve-CKBXq4VL.js";import"./types-BDYL0NFs.js";import"./step-BD0nB0zO.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-3agXA2tK.js";import"./Label-DJktLpOl.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./ActivePoints-Bn0_DXo_.js";import"./Dot-3vV8DYVs.js";import"./activeStyles-DE7rNFoN.js";import"./useAnimationId-CO4-0stH.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./ErrorBarContext-BaUlHsru.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./XAxis-DQsdb669.js";import"./CartesianAxis-DcDhI6Zy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Cx2H2wIk.js";import"./Legend-T4wJplzd.js";import"./useElementOffset-BWm_b5s0.js";import"./uniqBy-CV4gXzpe.js";import"./iteratee-WJSBnlLa.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
