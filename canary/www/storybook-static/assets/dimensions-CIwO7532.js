import{u as n,j as e}from"./index-Ck7nKEEv.js";import{M as o,C as h}from"./blocks-CLBTM7Qe.js";import{C as d,W as s}from"./dimensions.stories-7AKSaWlq.js";import"./iframe-BDPfsqdF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQeH_1mA.js";import"./index-DhEcRTBz.js";import"./index-ex-Pgi_h.js";import"./ChartSizeDimensions-DLbwjoHC.js";import"./zIndexSlice-BfcQE96w.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-UXrhpxMr.js";import"./throttle-DLGVq_fI.js";import"./ComposedChart-D7JGKNin.js";import"./RechartsWrapper-DUmM3uYA.js";import"./axisSelectors-c7iT3Xqf.js";import"./polarAxisSelectors-C7NGCs8b.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8DyPgUy.js";import"./index-Bojq0CZP.js";import"./renderedTicksSlice-GMkNhND_.js";import"./index-BRY97WZu.js";import"./CartesianChart-Do0DiZlo.js";import"./ZIndexPortal-kQXYrtt7.js";import"./CategoricalChart-BnbJl500.js";import"./Page-Cj8EiXz7.js";import"./Line-fKw3Ma_7.js";import"./Layer-irdZ2U7P.js";import"./Curve-wYhnU7Gh.js";import"./types-DRfbQMuT.js";import"./step-BXNgbZXy.js";import"./path-DyVhHtw_.js";import"./LabelList-BClBWVcN.js";import"./Label-CIaOlIjm.js";import"./Text-BNo_l2gi.js";import"./DOMUtils-DaHiW2kn.js";import"./ZIndexLayer-D5wXYtG3.js";import"./ActivePoints-1Kk_6r7U.js";import"./Dot-CDca1BfZ.js";import"./activeStyles-BFWSM9RU.js";import"./useAnimationId-PJ8_CwxA.js";import"./dataEntryStyles-RZhAuyPm.js";import"./Symbols-DWB63jlf.js";import"./symbol-CTG-DGxK.js";import"./ErrorBarContext-KG77bNmA.js";import"./SetGraphicalItem-Bfmt3udz.js";import"./getRadiusAndStrokeWidthFromDot-Jl4t-yCo.js";import"./ActiveShapeUtils-Cyzjr61Z.js";import"./useEffectiveDataKey-DsGW0DuD.js";import"./themeFill-BkM1x4hA.js";import"./XAxis-D4_j-k4X.js";import"./CartesianAxis-BGQBH839.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bl_BBErM.js";import"./Legend-CatJv-2c.js";import"./fillDefinitions-ZurvhtWc.js";import"./useElementOffset-8y_suHrr.js";import"./uniqBy-BVW2sC2D.js";import"./iteratee-C91la3m6.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
