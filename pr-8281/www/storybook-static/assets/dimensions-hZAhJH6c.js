import{u as n,j as e}from"./index-DcXtMWYX.js";import{M as o,C as h}from"./blocks-3J48PZhm.js";import{C as d,W as s}from"./dimensions.stories-BcilH3KP.js";import"./iframe-DlCdq56B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./index-CPJJsZF5.js";import"./ChartSizeDimensions-BCsXukh9.js";import"./zIndexSlice-AxtVyY3Z.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUW76FaL.js";import"./throttle-DEcvUi6F.js";import"./ComposedChart-D-HLNOcj.js";import"./RechartsWrapper-fp3cwEAp.js";import"./axisSelectors-CSfGPpIK.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3Jo-Yey1.js";import"./index-Dl9VO4In.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./Page-Cj8EiXz7.js";import"./Line-CG_-O_No.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./Layer-DYaOGPQe.js";import"./Curve-lp641HWe.js";import"./types-CGD2CGOX.js";import"./step-DukoPJ0d.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BQcljHLn.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./ZIndexLayer-DoM1zDnE.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./activeStyles-WuCpdruK.js";import"./useAnimationId-DvgYyN8a.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./ErrorBarContext-C53AQX2l.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./XAxis-BSv-cfqy.js";import"./CartesianAxis-gaRy0kAT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CiL6lsrt.js";import"./Legend-C0cyFPQv.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
