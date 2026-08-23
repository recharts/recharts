import{u as n,j as e}from"./index-BkQIl4wO.js";import{M as o,C as h}from"./blocks-C-sRaJoG.js";import{C as d,W as s}from"./dimensions.stories-Do6Wf2XF.js";import"./iframe-C3Hc6ExU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./index-jh_FdFAs.js";import"./ChartSizeDimensions-BTvsgIIl.js";import"./zIndexSlice-DUSt-QRk.js";import"./throttle-DY2EWLMY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DQvc_r-0.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./Page-Cj8EiXz7.js";import"./Line-DP79-Lts.js";import"./Layer-nhPcXxtD.js";import"./Curve-xgDPuw9g.js";import"./types-fNKA8Oi0.js";import"./step-C6OJ_LlT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EryZIVr5.js";import"./Label-CANqho75.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./ZIndexLayer-G0ryhOC-.js";import"./useAnimationId-C5Z2jNIS.js";import"./ActivePoints-MsPbupEa.js";import"./Dot-Dhy6Aaz6.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./ErrorBarContext-C-2s-xSs.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getRadiusAndStrokeWidthFromDot-BZlod__d.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-Dtgw3Co8.js";import"./CartesianAxis-DzoIF-ni.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C-y6lpsY.js";import"./Legend-vTCAFLss.js";import"./Symbols-DPWsfdBp.js";import"./symbol-Gsnozwnh.js";import"./useElementOffset-DuZ6R57W.js";import"./uniqBy-CoWizTQu.js";import"./iteratee-BjcMXY4A.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
