import{u as n,j as e}from"./index-CzaztWi5.js";import{M as o,C as h}from"./blocks-B1pr4evO.js";import{C as d,W as s}from"./dimensions.stories-Bd-KxbMA.js";import"./iframe-DyLoEKVT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./index-PISW76kq.js";import"./ChartSizeDimensions-B5cW-H5y.js";import"./zIndexSlice-BMJvLT6-.js";import"./immer-BagcJtG2.js";import"./get-DowO2FG-.js";import"./resolveDefaultProps-v4--KFNE.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CmFAmP0C.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./renderedTicksSlice-BqkZndXs.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./Page-Cj8EiXz7.js";import"./Line-DRaTauJz.js";import"./Layer-1PJWGF6B.js";import"./Curve-aK0jXQoR.js";import"./types-ChV1_7kb.js";import"./step-BI2jLazT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZ2CDn43.js";import"./Label-Bc99EiAM.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./ZIndexLayer-DHFxHLUr.js";import"./useAnimationId-C3XlQNNz.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./XAxis-9OVyrDRG.js";import"./CartesianAxis-DVRkpibw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-nsTECOPY.js";import"./Legend-nAvx1kVW.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
