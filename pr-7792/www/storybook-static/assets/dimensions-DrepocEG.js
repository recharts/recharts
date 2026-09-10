import{u as n,j as e}from"./index-GG70LhoR.js";import{M as o,C as h}from"./blocks-C9z4IyYI.js";import{C as d,W as s}from"./dimensions.stories-clse3cGi.js";import"./iframe-CZvBVoM1.js";import"./preload-helper-Dp1pzeXC.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./index-B9F-HAZ2.js";import"./ChartSizeDimensions-DkhR9Bgp.js";import"./zIndexSlice-BFsaUhqg.js";import"./throttle-DKdITuKH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CMms7XdW.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./d3-scale-CYHPrWE0.js";import"./index-B6TkzWSy.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./index-WmPIOj3u.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./Page-Cj8EiXz7.js";import"./Line-DiOtpcO9.js";import"./Layer-BOzNA3ZR.js";import"./Curve-CMGEeLJ1.js";import"./types-SdWXGAN0.js";import"./step-BaGdmwmz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-a9Nj57gp.js";import"./Label-CXH4SBDp.js";import"./Text-N_3Dav1R.js";import"./DOMUtils-GcGnpUs3.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./ZIndexLayer-D9FERMeL.js";import"./useAnimationId-CmzTxAaG.js";import"./ActivePoints-BlDBLjzI.js";import"./Dot-WxQzlPyE.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./ErrorBarContext-B64_fw23.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getRadiusAndStrokeWidthFromDot-Cq0DuT0s.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./useGraphicalItemIdentity-ftydmPqi.js";import"./XAxis-BwD_71l-.js";import"./CartesianAxis-BSKOevSQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Dm6GJj_u.js";import"./Legend-Dzg6CwdX.js";import"./Symbols-BHE_jV-8.js";import"./symbol-CTZT0hZK.js";import"./useElementOffset-CrJNpn31.js";import"./uniqBy-DE6IhfWE.js";import"./iteratee-qUhlXCDP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
