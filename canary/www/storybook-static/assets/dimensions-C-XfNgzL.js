import{u as n,j as e}from"./index-C-HK4a_W.js";import{M as o,C as h}from"./blocks-Cf3H2ebZ.js";import{C as d,W as s}from"./dimensions.stories-BVYMeiyG.js";import"./iframe-CiBEWf8Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./index-4YB-Ccb_.js";import"./ChartSizeDimensions-CMujAZxZ.js";import"./zIndexSlice-CF6C51G2.js";import"./throttle-Br6qQatL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cheer07s.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BHUU1HHB.js";import"./RechartsWrapper-DwV4v4eg.js";import"./axisSelectors-B1sNcXcW.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./Page-Cj8EiXz7.js";import"./Line-CSsqXF3e.js";import"./Layer-Cb-HZ0sR.js";import"./Curve-smW2CuEl.js";import"./types-P989fbDX.js";import"./step-CTJEDYn1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvlvVcPM.js";import"./Label-DPc6TFRy.js";import"./Text-CsV3VR-3.js";import"./DOMUtils-9fJMrmCV.js";import"./useId-fAK_bkox.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./useAnimationId-DjyXFux3.js";import"./ActivePoints-C9WTSqpm.js";import"./Dot-CmAzU2u7.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./ErrorBarContext-BpAFB1gw.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./getRadiusAndStrokeWidthFromDot-bLR0mN7s.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CbgzK4MI.js";import"./CartesianAxis-DSFQC2E9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-By5XyMD9.js";import"./Legend-CWcnCzB9.js";import"./Symbols-DnAcSvRt.js";import"./symbol-BUPcR90A.js";import"./useElementOffset-veMYPWYT.js";import"./uniqBy-DZZnv1Z6.js";import"./iteratee-DYSkR0rl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
