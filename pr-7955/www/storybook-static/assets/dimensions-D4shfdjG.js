import{u as n,j as e}from"./index-CQbJFdsy.js";import{M as o,C as h}from"./blocks-CxtFcO8Z.js";import{C as d,W as s}from"./dimensions.stories-Cu1tTEMo.js";import"./iframe-CwCc9vh-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./index-BLCS5Ged.js";import"./ChartSizeDimensions-Oe35QFJL.js";import"./zIndexSlice-Cze2qQ6L.js";import"./throttle-_lHGrg8X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CBS_Pqtt.js";import"./RechartsWrapper-BJt_1m2P.js";import"./axisSelectors-CpT7QqC8.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./Page-Cj8EiXz7.js";import"./Line-B99RZhj7.js";import"./Layer-DOFh0lwh.js";import"./Curve-nSJilM-Q.js";import"./types-CQwCfrQn.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./activeStyles-PzRACl7b.js";import"./Label-BR9Px2Ae.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./ZIndexLayer-DyEPtPYc.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./ErrorBarContext-B0-6gfmu.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./XAxis-Ck9YwMSg.js";import"./CartesianAxis-DXF_4xE6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-5QleAohG.js";import"./Legend-BhXl-QpG.js";import"./Symbols-k6TXs3KJ.js";import"./symbol-IMV7K2Oq.js";import"./useElementOffset-Ywty36ho.js";import"./uniqBy-DTquvHLz.js";import"./iteratee-mrtzC2yj.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
