import{u as n,j as e}from"./index-Byqae4ZA.js";import{M as o,C as h}from"./blocks-BjU_EZYB.js";import{C as d,W as s}from"./dimensions.stories-DROcFZgy.js";import"./iframe-C3lSaTFw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./index-BruKCsOi.js";import"./ChartSizeDimensions-CJdy8LeG.js";import"./zIndexSlice-CVjGcfFW.js";import"./throttle-BAVesAqd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ByMiL3yy.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./Page-Cj8EiXz7.js";import"./Line-DICJfQJU.js";import"./Layer-DCoygAxl.js";import"./Curve-D4S8erUE.js";import"./types-BmaDYfeO.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIU8Piw-.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./ZIndexLayer-BIuAiCXb.js";import"./useAnimationId-Dtjg15yn.js";import"./ActivePoints-CS5Q6FEx.js";import"./Dot-zciZMpDM.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getRadiusAndStrokeWidthFromDot-p4PngwyL.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./useGraphicalItemIdentity-B93Md1_E.js";import"./XAxis-MYsgX6vB.js";import"./CartesianAxis-BQ-frZs4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CGdCh3qj.js";import"./Legend-cxhj2kjR.js";import"./Symbols-gLeSQBZx.js";import"./symbol-BKxV6GsZ.js";import"./useElementOffset-Cal3qYIU.js";import"./uniqBy-CNbis68a.js";import"./iteratee-BZbHMMPe.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
