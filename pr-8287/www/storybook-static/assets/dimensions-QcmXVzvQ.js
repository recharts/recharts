import{u as n,j as e}from"./index-C4ST-OXt.js";import{M as o,C as h}from"./blocks-BTI5grx2.js";import{C as d,W as s}from"./dimensions.stories-CqnivG5p.js";import"./iframe-CBRSMBnf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./index-DGSnNf5w.js";import"./ChartSizeDimensions-CctY9eMZ.js";import"./zIndexSlice-G_MKhK64.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-rMq54uQA.js";import"./throttle-9ZU0NYV2.js";import"./ComposedChart-a--bFFQ0.js";import"./RechartsWrapper-CtIo7IeI.js";import"./axisSelectors-Ca58SJJZ.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YF59ukCY.js";import"./index-1te-Kc2Q.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./Page-Cj8EiXz7.js";import"./Line-BwqfHSpg.js";import"./getRadiusAndStrokeWidthFromDot-ZvZ8EJkG.js";import"./Layer-aUkXnOjv.js";import"./Curve--RPaNs4h.js";import"./types-BEawq_c0.js";import"./step-DBVTJVz7.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CAxQKe3A.js";import"./Label-BfZk-Sdf.js";import"./Text-DWGdTCGH.js";import"./ZIndexLayer-BCt1x8VL.js";import"./ActivePoints-DpAEo5pc.js";import"./Dot-Cui8UCyf.js";import"./activeStyles-DpG6wBQs.js";import"./useAnimationId-cL_ennFP.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./ErrorBarContext-D6qhDPP-.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./XAxis-hFmUjMoe.js";import"./CartesianAxis-BvwIwDWJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DSUkkbnx.js";import"./Legend-qD3Pkinv.js";import"./useElementOffset-DQ69DYSZ.js";import"./uniqBy-D0KCbpsR.js";import"./iteratee-Bc1Rf-mx.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
