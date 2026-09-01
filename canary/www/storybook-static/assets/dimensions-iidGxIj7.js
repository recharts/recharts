import{u as n,j as e}from"./index-BE15kgsq.js";import{M as o,C as h}from"./blocks-CW--4RTa.js";import{C as d,W as s}from"./dimensions.stories-BLntF5UQ.js";import"./iframe-BB3lVLoc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./index-B-cCuGfC.js";import"./ChartSizeDimensions-Da2M6Bjx.js";import"./zIndexSlice-CfHP3A1Y.js";import"./throttle-QtsYQF8O.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CylK8khp.js";import"./RechartsWrapper-S-WqrQUy.js";import"./axisSelectors-CEA0dwEw.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./Page-Cj8EiXz7.js";import"./Line-C9JbolpU.js";import"./Layer-NQ3_WlgF.js";import"./Curve-DzA4hX9V.js";import"./types-KCNzlOcC.js";import"./step-D6h1aeKq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJZqC0i8.js";import"./Label-Cn0Fp29B.js";import"./Text-DEC8wtTL.js";import"./DOMUtils-CldD4RXg.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./ZIndexLayer-DTgItK4v.js";import"./useAnimationId-BDqb5MNR.js";import"./ActivePoints-C2lE0Ysx.js";import"./Dot-bxm0u_di.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getRadiusAndStrokeWidthFromDot-D184pFcr.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BBQp-Idt.js";import"./CartesianAxis-m8s8CMt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DG4767Mj.js";import"./Legend-BZK3nF7M.js";import"./Symbols-D3aKpe7H.js";import"./symbol-BGppE-YZ.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
