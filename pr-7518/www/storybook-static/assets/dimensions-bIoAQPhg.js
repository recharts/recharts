import{u as n,j as e}from"./index-C11rcgx_.js";import{M as o,C as h}from"./blocks-CAyMVL7J.js";import{C as d,W as s}from"./dimensions.stories-nSQR0uhj.js";import"./iframe-BNNSts13.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./index-DZAGR4_4.js";import"./ChartSizeDimensions-jfsM_0wT.js";import"./zIndexSlice-B_0Vu2Ew.js";import"./throttle-CBpSFV7b.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DHvLsOhm.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./Page-Cj8EiXz7.js";import"./Line-DHXYmqa3.js";import"./Layer-BUN3jU8m.js";import"./Curve-ByI9xGCG.js";import"./types-CMjaNGyL.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u006QBg6.js";import"./Label-B9RstaAA.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./useAnimationId-CPqzTwnW.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./XAxis-CQLk361J.js";import"./CartesianAxis-Bo6M1fU4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BE5H5SGl.js";import"./Legend-CeXv6FuD.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
