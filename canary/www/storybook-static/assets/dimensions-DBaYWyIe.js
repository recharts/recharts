import{u as n,j as e}from"./index-BFUQ3c4v.js";import{M as o,C as h}from"./blocks-BRi1VSkg.js";import{C as d,W as s}from"./dimensions.stories-CherSPQE.js";import"./iframe-BCNgueVp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./index-D7hqs4ef.js";import"./ChartSizeDimensions-ByZCZs0C.js";import"./zIndexSlice-CCtmziB1.js";import"./throttle-NhPjNryy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BZSfKAao.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./Page-Cj8EiXz7.js";import"./Line-HqO7F7wl.js";import"./Layer-DVqtOL17.js";import"./Curve-NDvVIG-e.js";import"./types-Dv8LLmcq.js";import"./step-CsaqBRl_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DV3N7EYj.js";import"./Label-B2ReDrEH.js";import"./Text-DAXsYFxH.js";import"./DOMUtils-C7-Ag6_9.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./useAnimationId-CBbWVRap.js";import"./ActivePoints-CUqn1Bgc.js";import"./Dot-D59YTPJi.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./ErrorBarContext-Bgs6nhLR.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./getRadiusAndStrokeWidthFromDot-Cb21_3vS.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";import"./XAxis-LOCckWX5.js";import"./CartesianAxis-cRNPmBWR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-FgW2NdaC.js";import"./Legend-BO_tQWdx.js";import"./Symbols-B09GcAtX.js";import"./symbol-95E8py6i.js";import"./useElementOffset-Dddhvd44.js";import"./uniqBy-DZMfENsr.js";import"./iteratee-B15ojktg.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
