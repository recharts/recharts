import{u as n,j as e}from"./index-WvzxceSs.js";import{M as o,C as h}from"./blocks-2zcKH05p.js";import{C as d,W as s}from"./dimensions.stories-Kb1A_hDR.js";import"./iframe-B91k2IcJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./index-DagyI5pu.js";import"./ChartSizeDimensions-Bt3f7G-3.js";import"./zIndexSlice-DPjnHRkm.js";import"./throttle-BM2gK96G.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D3docOoh.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-SUsOIgRZ.js";import"./RechartsWrapper-BMFvDMkV.js";import"./axisSelectors-CcYA9DrF.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./Page-Cj8EiXz7.js";import"./Line-B6diu4jO.js";import"./Layer-mmJAUotg.js";import"./Curve-BM89L-Dm.js";import"./types-DevBWE8M.js";import"./step-BZw5QhTt.js";import"./path-DyVhHtw_.js";import"./activeStyles-U0RfMPfz.js";import"./Label-BsntnuTl.js";import"./Text-CiRRF6pE.js";import"./pageBackground-BjpY-vWv.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./ZIndexLayer-GgF7R--c.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./ActivePoints-BkA-bCTx.js";import"./Dot-D09SInS_.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getRadiusAndStrokeWidthFromDot-leGQ2dWC.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";import"./XAxis-Kxgks0Q-.js";import"./CartesianAxis-D1fr-7So.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-MGmz2Csl.js";import"./Legend-DWZcC7PQ.js";import"./Symbols-BR-UUylu.js";import"./symbol-4FZOpY9N.js";import"./useElementOffset-DCd6qDJl.js";import"./uniqBy-BohUdtb5.js";import"./iteratee-iijREnPj.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
