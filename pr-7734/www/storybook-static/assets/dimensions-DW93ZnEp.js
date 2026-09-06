import{u as n,j as e}from"./index-BMI2vbgI.js";import{M as o,C as h}from"./blocks-DmOHfVJj.js";import{C as d,W as s}from"./dimensions.stories-CqyMNAsA.js";import"./iframe-CdBlg-At.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./index-COSgbA9u.js";import"./ChartSizeDimensions-CE4kmebP.js";import"./zIndexSlice-Bd2ctzyz.js";import"./throttle-BMwUG5uc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BE0meIIe.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Ba360Gul.js";import"./RechartsWrapper-BtwnjrPH.js";import"./axisSelectors-B8B8qq9w.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./Page-Cj8EiXz7.js";import"./Line-DD9BeI-K.js";import"./Layer-DJ6KlbON.js";import"./Curve-C6WQoFll.js";import"./types-BwgN4eIA.js";import"./step-CSVR4QN1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DF8TZk9M.js";import"./Label-BhvRy9p8.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./ZIndexLayer-BRtQaXip.js";import"./useAnimationId-C5J-XAz0.js";import"./ActivePoints-DeQkjxY4.js";import"./Dot-6-JAF9mR.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./ErrorBarContext-CT7bwl-o.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./getRadiusAndStrokeWidthFromDot-D0f765St.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-2XVZuSLi.js";import"./CartesianAxis-CVVHUAde.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CCdrxwQa.js";import"./Legend-CcznjWgK.js";import"./Symbols-DsDFX5_W.js";import"./symbol-BOju37_N.js";import"./useElementOffset-DhmioEfl.js";import"./uniqBy-CvvZwjKG.js";import"./iteratee-DqsE923K.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
