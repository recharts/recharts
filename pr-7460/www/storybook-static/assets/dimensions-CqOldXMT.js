import{u as n,j as e}from"./index-CU6rmG71.js";import{M as o,C as h}from"./blocks-CoR3RCSt.js";import{C as d,W as s}from"./dimensions.stories-BMM87Xpy.js";import"./iframe-DmhIhH2M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./index-DTLQy6FQ.js";import"./ChartSizeDimensions-C-meGxDL.js";import"./zIndexSlice-DeBpIagA.js";import"./immer-lqUHKS7P.js";import"./get-BMOKRRSC.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./isWellBehavedNumber-yi49kod_.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ChlzmAy5.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./Page-Cj8EiXz7.js";import"./Line-D1lDVI0J.js";import"./Layer-BQ4TD7AW.js";import"./Curve-CUt78Byo.js";import"./types-ChCyCTKP.js";import"./step-Cfvx5huc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D_A-W6sA.js";import"./Label-C1lSOaos.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./ZIndexLayer-qAObD_uq.js";import"./useAnimationId-CIds5Px0.js";import"./ActivePoints-Bn_C34jU.js";import"./Dot-D4RDD7gw.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getRadiusAndStrokeWidthFromDot-C1-mcmXd.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./XAxis-CY-yJKaB.js";import"./CartesianAxis-C8QhC4vv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Bd-9gvNF.js";import"./Legend-FVCMzRGs.js";import"./Symbols-bmVrm1PP.js";import"./symbol-DzNzzMDl.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
