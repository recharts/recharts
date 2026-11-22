import{u as n,j as e}from"./index-C7TtJeyw.js";import{M as o,C as h}from"./blocks-Cjz2GmxV.js";import{C as d,W as s}from"./dimensions.stories-BaiOiqP1.js";import"./iframe-Ctz7IHW3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./index-DTCcovWx.js";import"./ChartSizeDimensions-w940rMFP.js";import"./zIndexSlice-BOhKAINV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--WcksQI-.js";import"./throttle-BK8aOUUW.js";import"./ComposedChart-B4J-boeJ.js";import"./RechartsWrapper-B5-BQ43L.js";import"./axisSelectors-CmsQwY11.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./Page-Cj8EiXz7.js";import"./Line-DAx-7uu_.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Layer-DwO5QDCB.js";import"./Curve-BmO4aPRH.js";import"./types-o_vm3YHF.js";import"./step-CWzaq-TC.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DhE1x9oW.js";import"./Label-Cx25Byjk.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./activeStyles-DYt1MbCF.js";import"./useAnimationId-CDmHN2F8.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./ErrorBarContext-CWAd3_q9.js";import"./SetGraphicalItem-ZbovNH06.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./XAxis-C7TfuOxC.js";import"./CartesianAxis-D2YA5lRA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-B3lARwfm.js";import"./Legend-BzVily9F.js";import"./useElementOffset-ByunqyrY.js";import"./uniqBy-bNtr2rug.js";import"./iteratee-DTnJTgMl.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
