import{u as n,j as e}from"./index-Bk-ztEx7.js";import{M as o,C as h}from"./blocks-Dq5NgkrF.js";import{C as d,W as s}from"./dimensions.stories-BhDl8Iss.js";import"./iframe-CbPFwm7l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./index-khK7m-8Q.js";import"./ChartSizeDimensions-2ZD7NOZ1.js";import"./zIndexSlice-cmGazbpI.js";import"./throttle-CsRm63w_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-sATzgU5r.js";import"./RechartsWrapper-C9c4OR_j.js";import"./axisSelectors-31esebaG.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./Page-Cj8EiXz7.js";import"./Line-B24tAJlu.js";import"./Layer-BHHNaIH9.js";import"./Curve-CJ_YkHWB.js";import"./types-BHufKOgb.js";import"./step-BRl-9aNd.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0PrsAC0.js";import"./Label-Dd7y5kyu.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./ZIndexLayer-DJZ-23nf.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./ActivePoints-ED4u2pJ9.js";import"./Dot-D4Vk0xq6.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getRadiusAndStrokeWidthFromDot-DI6x_PKf.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";import"./XAxis-I1Z8SlwP.js";import"./CartesianAxis-CRYdmYpO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CFuZPq2O.js";import"./Legend-BRTZe1bn.js";import"./Symbols-Bu1nYSB-.js";import"./symbol-BML25sya.js";import"./useElementOffset-CQtr63ND.js";import"./uniqBy-CYNKKwCT.js";import"./iteratee-Cb_SGx_w.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
