import{u as n,j as e}from"./index-DkVgZsxV.js";import{M as o,C as h}from"./blocks-B4-T0Vgv.js";import{C as d,W as s}from"./dimensions.stories-DZH4-cfa.js";import"./iframe-RcHlpEKf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vzeW1Ty_.js";import"./index-rSShmn2P.js";import"./index-D8H-d46C.js";import"./ChartSizeDimensions-E74pAvQE.js";import"./zIndexSlice-BoP2xr6w.js";import"./throttle-B-NCjC4g.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Sy-hwd8S.js";import"./isWellBehavedNumber-h-vCOYII.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-EFkEwSkN.js";import"./RechartsWrapper-CqdoPGo4.js";import"./axisSelectors-BfZD20OT.js";import"./d3-scale-phcZca4Z.js";import"./index-DfHRgTU5.js";import"./renderedTicksSlice-Dzlqim1n.js";import"./index-BtSxVTMy.js";import"./CartesianChart-DDx2cMpK.js";import"./chartDataContext-vN80Diu9.js";import"./CategoricalChart-CAKS8zF4.js";import"./Page-Cj8EiXz7.js";import"./Line-HYy8FRYx.js";import"./Layer-Bl7Trn9v.js";import"./Curve-CcZscRZ7.js";import"./types-JXLuZB-s.js";import"./step-pIWHJRNG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BD0VccbN.js";import"./Label-BpQvgwWr.js";import"./Text-DfdPFWZL.js";import"./DOMUtils-CQKDG8TV.js";import"./useId-B6srCqhz.js";import"./useBackwardsCompatibleTheme-nHddxgax.js";import"./ZIndexLayer-BNX-NDC0.js";import"./useAnimationId-9jumoZun.js";import"./ActivePoints-Ba2vyqxq.js";import"./Dot-C4knZ77r.js";import"./RegisterGraphicalItemId-CnIEFT0k.js";import"./ErrorBarContext-D1YbY_j0.js";import"./GraphicalItemClipPath-CsLhpBaz.js";import"./SetGraphicalItem-DuO6azf0.js";import"./getRadiusAndStrokeWidthFromDot-hc8l7Jma.js";import"./ActiveShapeUtils-B2oqSRKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BH3R8cCN.js";import"./CartesianAxis-Br9WShXs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C5hXHmze.js";import"./Legend-DuHhsx-p.js";import"./Symbols-DiD6U_fT.js";import"./symbol-D890eeWE.js";import"./useElementOffset-D_VyJzbA.js";import"./uniqBy-C7Ad3lRf.js";import"./iteratee-D_13UF3J.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
