import{u as n,j as e}from"./index-B45EwZ4f.js";import{M as o,C as h}from"./blocks-BKv7QvhM.js";import{C as d,W as s}from"./dimensions.stories-CACF3Hys.js";import"./iframe-BKSHRT_S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./index-D9GCJXOs.js";import"./ChartSizeDimensions-D3lpasiy.js";import"./zIndexSlice-BLeuW80U.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./throttle-BkygAiqr.js";import"./ComposedChart-CD-HLwTO.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./Page-Cj8EiXz7.js";import"./Line-_a0Ki2Oq.js";import"./Layer-BzU6Nn69.js";import"./Curve-LNcUa8Cn.js";import"./types-DNwq_ZGY.js";import"./step-OqTpatbN.js";import"./path-DyVhHtw_.js";import"./activeStyles-BKkkdbj0.js";import"./Label-DbF58v67.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./dataEntryStyles-DoThh5sG.js";import"./useAnimationId-Nyn64y9A.js";import"./ActivePoints-2BgjqPQF.js";import"./Dot-BLeFqc4M.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getRadiusAndStrokeWidthFromDot-DfUPMR_R.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./useEffectiveDataKey-B8W36a2Q.js";import"./XAxis-BuoXjJQH.js";import"./CartesianAxis-D2IkBv7G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DQujYqlQ.js";import"./Legend-CGFvr50A.js";import"./Symbols-DA0cR1nt.js";import"./symbol-D6nHcF92.js";import"./useElementOffset-Db2Vff8q.js";import"./uniqBy-BAvd38-h.js";import"./iteratee-Cs7UoLYE.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
