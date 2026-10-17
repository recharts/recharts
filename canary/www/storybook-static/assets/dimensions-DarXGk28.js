import{u as n,j as e}from"./index-DYauvRQF.js";import{M as o,C as h}from"./blocks-DKw4mxwg.js";import{C as d,W as s}from"./dimensions.stories-BiMa5Gov.js";import"./iframe-BaK-xze-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./index-Dw-ed78r.js";import"./ChartSizeDimensions-D4wHEErR.js";import"./zIndexSlice-DrFw0t7C.js";import"./throttle-CYt85Ar6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DhdbIgqC.js";import"./RechartsWrapper-DZM6L-T3.js";import"./axisSelectors-CnfYSHLW.js";import"./d3-scale-_8yp9yQE.js";import"./index-Dlm-5Ij4.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./index-B4hxfgtn.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./Page-Cj8EiXz7.js";import"./Line-Bw8HAxQR.js";import"./Layer-C6rljEkC.js";import"./Curve-sUBaLFrc.js";import"./types-DSy0pRW3.js";import"./step-BZZY1s9U.js";import"./path-DyVhHtw_.js";import"./activeStyles-CZlzjGsD.js";import"./Label-cKDNSGIr.js";import"./Text-CdbyXNxn.js";import"./pageBackground-CV09xolb.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./ZIndexLayer-Byqn6KnA.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./ActivePoints-Bf2N-qWJ.js";import"./Dot-DhzFrZOP.js";import"./ErrorBarContext-DndDD6DE.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getRadiusAndStrokeWidthFromDot-SwZ9tKTP.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./useEffectiveDataKey-lq0ydW3i.js";import"./XAxis-CTevCFW7.js";import"./CartesianAxis-CSk3G5Bd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CUt8Xelm.js";import"./Legend-B6lWfqzL.js";import"./Symbols-BqROoHzJ.js";import"./symbol-BXhlSx3K.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
