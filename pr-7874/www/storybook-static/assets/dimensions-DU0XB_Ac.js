import{u as n,j as e}from"./index-DSMrJBb8.js";import{M as o,C as h}from"./blocks-Dmod6JFu.js";import{C as d,W as s}from"./dimensions.stories-D6GMSQMv.js";import"./iframe-CkExmVLh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./index-Dlo0KE1-.js";import"./ChartSizeDimensions-bzZcaw4x.js";import"./zIndexSlice-a3gNrCTg.js";import"./throttle-BNvjyLg8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BhMk3qvU.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./Page-Cj8EiXz7.js";import"./Line-Cisnr3UH.js";import"./Layer-CGaMavgo.js";import"./Curve-BfUX2fxA.js";import"./types-D0Lh6MHk.js";import"./step-TH_7jXAx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-V2dSiKDR.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./ZIndexLayer-DuxWNsKn.js";import"./useAnimationId-B25s9B77.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./XAxis-JBQw78VL.js";import"./CartesianAxis-BhWf1FlQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BKUGWzYz.js";import"./Legend-n_QnfH8z.js";import"./Symbols-72F0FLZd.js";import"./symbol-C4swW5GK.js";import"./useElementOffset-CXUuqBTx.js";import"./uniqBy-aTBj_DaH.js";import"./iteratee-qu9slWkn.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
