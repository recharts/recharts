import{u as n,j as e}from"./index-gO-Bqv5l.js";import{M as o,C as h}from"./blocks-D-LFTejB.js";import{C as d,W as s}from"./dimensions.stories-CSWQh9_M.js";import"./iframe-DwT3zBcw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./index-BGcjFl-p.js";import"./ChartSizeDimensions-BXig8d46.js";import"./zIndexSlice-B1c8R-o4.js";import"./throttle-zQvI5ucF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BRJHnsZA.js";import"./RechartsWrapper-B-ytYCFw.js";import"./axisSelectors-C7AasPYQ.js";import"./d3-scale-DKCZEfGq.js";import"./index-C8mRu_Mi.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-Bk7-Tdy1.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./Page-Cj8EiXz7.js";import"./Line-BPX8zZ3-.js";import"./Layer-DTu28EsQ.js";import"./Curve-Bt6WU0fX.js";import"./types-CLejyp8C.js";import"./step-Cf4wfTi4.js";import"./path-DyVhHtw_.js";import"./activeStyles-0kotXHCs.js";import"./Label-BJdAgAze.js";import"./Text-aRPMe4ci.js";import"./pageBackground-DsM-Z0Rr.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./ZIndexLayer-DYMRbOsR.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./useAnimationId-BjdF1-gz.js";import"./ActivePoints-DatcE_ix.js";import"./Dot-B9jMerXC.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./ErrorBarContext-HVEt8c-6.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getRadiusAndStrokeWidthFromDot-DuGu4d4H.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./XAxis-DDMS_4GY.js";import"./CartesianAxis-BOCUxksG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Blmef7Zk.js";import"./Legend-BGqif3Gi.js";import"./Symbols-Cg4hZU-z.js";import"./symbol-DBcDWVfa.js";import"./useElementOffset-BPhfD7za.js";import"./uniqBy-DSw40EQt.js";import"./iteratee-BWpKqSkU.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};
