import{u as n,j as e}from"./index-D8WDkeXk.js";import{M as o,C as h}from"./blocks-wrqrK4Gw.js";import{C as d,W as s}from"./dimensions.stories-Csz7FFxE.js";import"./iframe-zxb33ZNc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NFdtXm63.js";import"./index-Dy7fskO8.js";import"./index-qRk_YJlx.js";import"./ChartSizeDimensions-xq9T-I_z.js";import"./zIndexSlice-D-761Vg8.js";import"./throttle-CFGr8cJA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B762IN2m.js";import"./isWellBehavedNumber-C-R_UlW0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D9F-_u2o.js";import"./RechartsWrapper-DnDLnjyJ.js";import"./index-C-3okO3A.js";import"./axisSelectors-Dv7CZoVg.js";import"./d3-scale-BDbFjNBn.js";import"./renderedTicksSlice-DRIJDHkm.js";import"./CartesianChart-DKaHYTMw.js";import"./chartDataContext-c74vlS-l.js";import"./CategoricalChart-ZwmRaYFc.js";import"./Page-Cj8EiXz7.js";import"./Line-DVclB8_O.js";import"./Layer-C3L05uBE.js";import"./Curve-BFfco-WU.js";import"./types-Dolw0ENN.js";import"./step-Bi5jdybT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMGgkPL-.js";import"./Label-DU6Rr4ia.js";import"./Text-KHBAPEp1.js";import"./DOMUtils-Dz-vbmjU.js";import"./ZIndexLayer-DbePcZGA.js";import"./useAnimationId-SEMOU1a_.js";import"./ActivePoints-rNpF2i82.js";import"./Dot-aKbZPoCq.js";import"./RegisterGraphicalItemId-BHi56vMH.js";import"./ErrorBarContext-Cv-hFLv9.js";import"./GraphicalItemClipPath-dZEprd-F.js";import"./SetGraphicalItem-DyIKS88p.js";import"./getRadiusAndStrokeWidthFromDot-BBU-nePS.js";import"./ActiveShapeUtils-B0CCDTVh.js";import"./RechartsThemeContext-DJQOtdEl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DyyrbnA7.js";import"./CartesianAxis-DX_ZohL1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-1uMHWvAC.js";import"./Legend-2paWe6ay.js";import"./Symbols-CyjUC6xP.js";import"./symbol-DmYa02Qn.js";import"./useElementOffset-Dv5E6_pT.js";import"./uniqBy-yJmr0v8a.js";import"./iteratee-DrBLX_LB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
