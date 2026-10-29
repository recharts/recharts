import{u as n,j as e}from"./index-BDWIqBzM.js";import{M as o,C as h}from"./blocks-DpzOJGgv.js";import{C as d,W as s}from"./dimensions.stories-hk8v0FR6.js";import"./iframe-oYyBRks2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./index-DI7MM_Df.js";import"./ChartSizeDimensions-t0KY4TMt.js";import"./zIndexSlice-CbmXT1dz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./throttle-teQP-xJt.js";import"./ComposedChart-B-eq2Fp1.js";import"./RechartsWrapper-BEJButs1.js";import"./axisSelectors-CzrEReB-.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dsmu7PfS.js";import"./index-CorLv6ho.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./Page-Cj8EiXz7.js";import"./Line-BvBumo1d.js";import"./Layer-CyxA7s2s.js";import"./Curve-BV9qBPRD.js";import"./types-C_jjefDJ.js";import"./step-DY5Xaa9y.js";import"./path-DyVhHtw_.js";import"./LabelList-D0at5SMs.js";import"./Label-D2Ghzufd.js";import"./Text-BTTN-58y.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./ActivePoints-N3FvSUzX.js";import"./Dot-hWqukiPc.js";import"./activeStyles-chOek7GE.js";import"./useAnimationId-C-eWMsqK.js";import"./dataEntryStyles-C_5MqVGt.js";import"./Symbols-DyH8vTj1.js";import"./symbol-DfdL_uUz.js";import"./ErrorBarContext-CVpEUN9z.js";import"./SetGraphicalItem-CofyTZmK.js";import"./getRadiusAndStrokeWidthFromDot-DhNYhgAE.js";import"./ActiveShapeUtils-BUKShifC.js";import"./useEffectiveDataKey-BvG_PE5-.js";import"./XAxis-DvAGam0D.js";import"./CartesianAxis-C0SgAXkt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CQwSDKOg.js";import"./Legend-D5cNAlWP.js";import"./fillDefinitions-BuAadA4s.js";import"./useElementOffset-DYKRqk9h.js";import"./uniqBy-DpT0Q-qD.js";import"./iteratee-6fmcBfsh.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
