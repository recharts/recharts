import{u as n,j as e}from"./index-Ca0f9zPd.js";import{M as o,C as h}from"./blocks-CsMnTnTC.js";import{C as d,W as s}from"./dimensions.stories-BxrQTbqK.js";import"./iframe-C1V3amVF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./index-DnibiSA_.js";import"./ChartSizeDimensions-erAU99MQ.js";import"./zIndexSlice-CxDitcfM.js";import"./throttle-DLY36_v2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-maTY1UNo.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B9ikdlAe.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./axisSelectors-BX0vcNuG.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./Page-Cj8EiXz7.js";import"./Line-DBox68tq.js";import"./Layer-BYwPbOg9.js";import"./Curve-DehrnztG.js";import"./types-BJLf6sJx.js";import"./step-DAx8CwGE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-aGWDQ20-.js";import"./Label-B5Mwu39-.js";import"./Text-C-wx4MGw.js";import"./DOMUtils-BorqH6Wm.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./useAnimationId-CfyL2S79.js";import"./ActivePoints-DuRb2Tsi.js";import"./Dot-CjGXKiL0.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./getRadiusAndStrokeWidthFromDot-m1wPeMBb.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./XAxis-CUJJeScp.js";import"./CartesianAxis-DtpXHVOF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CCWiCDwe.js";import"./Legend-DYuR-vxK.js";import"./Symbols-DCPONZ93.js";import"./symbol-DsoNMZia.js";import"./useElementOffset-Cvn3bpJq.js";import"./uniqBy-CIEuKI_-.js";import"./iteratee-DBOMspHe.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
