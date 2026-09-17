import{u as n,j as e}from"./index-DuBRA0_5.js";import{M as o,C as h}from"./blocks-4unqKvEY.js";import{C as d,W as s}from"./dimensions.stories-Dpj8XXzV.js";import"./iframe-BZ8dVzH9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./index-TQNe-Pfx.js";import"./ChartSizeDimensions-CMzRryko.js";import"./zIndexSlice-alAuneH8.js";import"./throttle-Gvesfo2A.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGRkN7my.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bsbx0YHv.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./axisSelectors-Bf9eJXot.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./Page-Cj8EiXz7.js";import"./Line-BHPleON2.js";import"./Layer-DFGb6VX8.js";import"./Curve-GkKc5FU6.js";import"./types-JZ66y424.js";import"./step-BzQ2FL9y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFtjNgrp.js";import"./Label-D8Xv73in.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./ZIndexLayer-By4t7zGO.js";import"./useAnimationId-CAROHwad.js";import"./ActivePoints-BRuknYci.js";import"./Dot-d3AKepe-.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getRadiusAndStrokeWidthFromDot-BRivEq7U.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./useGraphicalItemIdentity-DrldTHyX.js";import"./XAxis-CnHMXMmb.js";import"./CartesianAxis-ZGFemc86.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-sJ36Ww1v.js";import"./Legend-CyrLGj5T.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./useElementOffset-C2gbVgRM.js";import"./uniqBy-DrWsEjAm.js";import"./iteratee-CHJKpI4A.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
