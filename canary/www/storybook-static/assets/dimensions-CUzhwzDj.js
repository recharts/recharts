import{u as n,j as e}from"./index-Be-uTuEG.js";import{M as o,C as h}from"./blocks-a8sODjUC.js";import{C as d,W as s}from"./dimensions.stories-C-wyTQpc.js";import"./iframe-BobpZpVS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./index-CSAFGNBA.js";import"./ChartSizeDimensions-CTlurzCS.js";import"./zIndexSlice-B5VUc3FO.js";import"./throttle-fEV8U6G7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5KovoEsD.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BGA7EeyT.js";import"./RechartsWrapper-DSKVysWi.js";import"./axisSelectors-Bu_v2Lbu.js";import"./d3-scale-VuFeIDMA.js";import"./index-C6hjAe0R.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-RL4br-tv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./Page-Cj8EiXz7.js";import"./Line-BliFn9Dn.js";import"./Layer-Clw1CWo5.js";import"./Curve-CcNLhp3P.js";import"./types-C4bXB_C_.js";import"./step-jQ6ElyLT.js";import"./path-DyVhHtw_.js";import"./activeStyles-DmXgXh0p.js";import"./Label-BmZLFZpv.js";import"./Text-BN-_pQam.js";import"./pageBackground-DetAsOi9.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./useAnimationId-IPDjwgCP.js";import"./dataEntryStyles-JNlk2hjG.js";import"./ActivePoints-C8uj9bPt.js";import"./Dot--zx8-KPd.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getRadiusAndStrokeWidthFromDot-CIGb04Tt.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./useEffectiveDataKey-CwNvQLsF.js";import"./XAxis-BH9jyr1P.js";import"./CartesianAxis-BxngHTzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BrRETyZ5.js";import"./Legend-CGS_rYuE.js";import"./Symbols-CIh84bSt.js";import"./symbol-9WIN_U8L.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
