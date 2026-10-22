import{u as n,j as e}from"./index-BxUzGmE8.js";import{M as o,C as h}from"./blocks-D7fnNsfh.js";import{C as d,W as s}from"./dimensions.stories-BikKTd1e.js";import"./iframe-DsTklGd_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./index-DwiZHk90.js";import"./ChartSizeDimensions-CWrHz7SB.js";import"./zIndexSlice-BtbFiuZY.js";import"./throttle-DdQ2CShf.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CSeGHIwL.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./axisSelectors-DYheqAyK.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./Page-Cj8EiXz7.js";import"./Line-BpWz7ZGo.js";import"./Layer-CZKgQj5k.js";import"./Curve-BNsFHGFj.js";import"./types-CPppnSS0.js";import"./step-DT1sNEdD.js";import"./path-DyVhHtw_.js";import"./activeStyles-CRt5O3EE.js";import"./Label-D9BiQh3x.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./ZIndexLayer-DFFwnPWa.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./XAxis-CCdXtDxp.js";import"./CartesianAxis-CPZLjXk4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BOZCya1S.js";import"./Legend-DM9P43pw.js";import"./Symbols-C05NrL44.js";import"./symbol-BCG62I2C.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
