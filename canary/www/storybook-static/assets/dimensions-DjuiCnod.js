import{u as n,j as e}from"./index-BajG-EuW.js";import{M as o,C as h}from"./blocks-DxORrYHy.js";import{C as d,W as s}from"./dimensions.stories-D_DTJtZe.js";import"./iframe-BYFAmtTx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./index-BnUV9qdG.js";import"./ChartSizeDimensions-Y72VHJ5n.js";import"./zIndexSlice-Cpa1SLkC.js";import"./throttle-BncnDTze.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dn3fezmm.js";import"./RechartsWrapper-gz3ID__y.js";import"./axisSelectors-Fcxl1qih.js";import"./d3-scale-BWLi0PrL.js";import"./index-2r1iX6kD.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./index-bDOV_Sp5.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./Page-Cj8EiXz7.js";import"./Line-BJx91oUE.js";import"./Layer-CpiNCVXM.js";import"./Curve-BqZh414E.js";import"./types-CaHoHJJ-.js";import"./step-B_GvmUZd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVLC3LcC.js";import"./Label-DbWQNQho.js";import"./Text-BflMB0k7.js";import"./DOMUtils-C-XY0CD-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./ZIndexLayer-So4aUaj6.js";import"./useAnimationId-CVJf-EC8.js";import"./ActivePoints-DY3ts7CW.js";import"./Dot-DmxTFD8v.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getRadiusAndStrokeWidthFromDot-cXRduqqB.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./useGraphicalItemIdentity-azVLbNjG.js";import"./XAxis-CrRUVNvL.js";import"./CartesianAxis-Berywq5j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D2uzSmxi.js";import"./Legend-M760yFye.js";import"./Symbols-s1P-C1j4.js";import"./symbol-6_mfp67r.js";import"./useElementOffset-_9jVPkcB.js";import"./uniqBy-Cz6dajQ_.js";import"./iteratee-B1BJ9kBw.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
