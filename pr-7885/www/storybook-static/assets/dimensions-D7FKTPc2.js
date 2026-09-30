import{u as n,j as e}from"./index-CHorjW7p.js";import{M as o,C as h}from"./blocks-B6fTyJpu.js";import{C as d,W as s}from"./dimensions.stories-DWHu7I1a.js";import"./iframe-CgcESoS_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./index-C9UQ_w7z.js";import"./ChartSizeDimensions-CW6oHPmT.js";import"./zIndexSlice-C9Cb6Bbs.js";import"./throttle-CQ8B3fUq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-veeYoS0W.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-WZ7M5LR1.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./axisSelectors-C7-DsMGo.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./Page-Cj8EiXz7.js";import"./Line-BSyeHdkf.js";import"./Layer-Dw6zZzpv.js";import"./Curve-I_wsWTHV.js";import"./types-8FiI2U_s.js";import"./step-VHdIkk64.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tEo2zXLi.js";import"./Label-_q8lYILX.js";import"./Text-BcEh6RFZ.js";import"./DOMUtils-Cw9s48Kn.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./ZIndexLayer-DED1yjXT.js";import"./useAnimationId-C9QrN9Yt.js";import"./ActivePoints-D3Y1-NiW.js";import"./Dot-Jzlb3m1I.js";import"./RegisterGraphicalItemId-BEYzOUyb.js";import"./ErrorBarContext-ZU3bae9x.js";import"./GraphicalItemClipPath-C3tOgX87.js";import"./SetGraphicalItem-D2ZPo27B.js";import"./getRadiusAndStrokeWidthFromDot-ChHrtsAw.js";import"./ActiveShapeUtils-Cy154cWG.js";import"./useGraphicalItemIdentity-ry1LG-EM.js";import"./XAxis-DGXMp8Is.js";import"./CartesianAxis-CyNZQ6so.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bq6E-73C.js";import"./Legend-BV0Dl49X.js";import"./Symbols-Ckj8mUZ8.js";import"./symbol-CqfI7rOQ.js";import"./useElementOffset-B_ajIM7J.js";import"./uniqBy--75j5a0F.js";import"./iteratee-CDEjiyt4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
