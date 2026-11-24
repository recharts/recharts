import{u as n,j as e}from"./index-C-2W-jVS.js";import{M as o,C as h}from"./blocks-C9N69cST.js";import{C as d,W as s}from"./dimensions.stories-CNtN9IXC.js";import"./iframe-B1Ov3CkI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./index-DoKEjPdp.js";import"./ChartSizeDimensions-CxXkBjAX.js";import"./zIndexSlice-BZ09-fF4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./throttle-CU4m2LyG.js";import"./ComposedChart-Dd5cIYd9.js";import"./RechartsWrapper-CArKZuEM.js";import"./axisSelectors-CwNUFUW3.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./Page-Cj8EiXz7.js";import"./Line-D6fDEx2j.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Layer-DAwsvvog.js";import"./Curve-D-bNq0v5.js";import"./types-ynn-_gFH.js";import"./step-B516R2zU.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-lld3ulFL.js";import"./Label-DD8YxEOL.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./activeStyles-D0wpO0Mw.js";import"./useAnimationId-DhG5SB-S.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./ErrorBarContext-CrvdUc7x.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./XAxis-B8awpm7u.js";import"./CartesianAxis-CqVMCZWw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CKqezMqR.js";import"./Legend-DS16XVv7.js";import"./useElementOffset-D5jbWozH.js";import"./uniqBy-CuCMSFr0.js";import"./iteratee-D4VRlXRY.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
