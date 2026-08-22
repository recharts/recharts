import{u as n,j as e}from"./index-buW8r-zr.js";import{M as o,C as h}from"./blocks-I6Mx5n-S.js";import{C as d,W as s}from"./dimensions.stories-BNw6uYnh.js";import"./iframe-ZEpSIPPd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./index-GhGxj3CA.js";import"./ChartSizeDimensions-D7emc-Bz.js";import"./zIndexSlice-BjIiWKqJ.js";import"./throttle-c8LVmlRW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfzNSowR.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DfYyrCdH.js";import"./RechartsWrapper-BN48ENvM.js";import"./index-BaEUmZiD.js";import"./axisSelectors-kRjPN5q_.js";import"./d3-scale-BCV9yzNX.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./CategoricalChart-DKY1LJu7.js";import"./Page-Cj8EiXz7.js";import"./Line-CI-w3eB1.js";import"./Layer-BhDP8tdE.js";import"./Curve-BJ_Zw60j.js";import"./types-PAtN0CzN.js";import"./step-C4QDvCzF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BTDiJp51.js";import"./Label-DozjEBv8.js";import"./Text-BkbZubVW.js";import"./DOMUtils-DDyTL2Su.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./ZIndexLayer-BvS-888Y.js";import"./useAnimationId-DTOSNt54.js";import"./ActivePoints-LnlHxcy0.js";import"./Dot-YOcb-22K.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./getRadiusAndStrokeWidthFromDot-BLf7D-Zv.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-rWesO0MY.js";import"./CartesianAxis-B5C14IH-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DcukXRO0.js";import"./Legend-CrDXkNHG.js";import"./Symbols-DnoOO3kY.js";import"./symbol-MnBIsPmn.js";import"./useElementOffset-DQwuldho.js";import"./uniqBy-CJQjOwF2.js";import"./iteratee-9quGMIsm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
