import{u as n,j as e}from"./index-DYClsG39.js";import{M as o,C as h}from"./blocks-BUVVqJ7l.js";import{C as d,W as s}from"./dimensions.stories-BiJ0Gj35.js";import"./iframe-Bo9DV_RF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./index-PvdQicqP.js";import"./ChartSizeDimensions-BZw2szmh.js";import"./zIndexSlice-ChGxP5I9.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./throttle-CaIo9_rk.js";import"./ComposedChart-BSjH4eO6.js";import"./RechartsWrapper-D6SFyLdk.js";import"./axisSelectors-BUIYbOzk.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./index-Dj5W-yVu.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./Page-Cj8EiXz7.js";import"./Line-A1JFBNP7.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Layer-C6lb2zxM.js";import"./Curve-Dm-GvmWp.js";import"./types-DltK9JsS.js";import"./step-5knHZEdX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./Label-BywaPoTf.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./activeStyles-mw-DKPXy.js";import"./useAnimationId-TvJ5tZp1.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./ErrorBarContext-BobbhAG8.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./XAxis-hzMML8e7.js";import"./CartesianAxis-_PdJmc1T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CK1muElb.js";import"./Legend-ujCCnnlq.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
