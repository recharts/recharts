import{u as n,j as e}from"./index-DuuKkLU7.js";import{M as o,C as h}from"./blocks-Cjb-bo3J.js";import{C as d,W as s}from"./dimensions.stories-xYF7hBgU.js";import"./iframe-DFAuwNet.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./index-CzPHYk5P.js";import"./ChartSizeDimensions-B_yQ7A4w.js";import"./zIndexSlice-BwFDZpKd.js";import"./immer-D4TP_Tl0.js";import"./get-Bfs700CB.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-q9x7DXH3.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./axisSelectors-rO5_sQtu.js";import"./d3-scale-Bflz5-05.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./Page-Cj8EiXz7.js";import"./Line-Ck4HwCGm.js";import"./Layer-pSJwYJA9.js";import"./Curve-qtCfGxfc.js";import"./types-CKCIF696.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BG4KszHn.js";import"./Label-BiYGQ8wu.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./ZIndexLayer-CzNUPV7f.js";import"./useAnimationId-BPtcTRZO.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./XAxis-DCGzkxjE.js";import"./CartesianAxis-DrCLR5OG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-WC2qqL6y.js";import"./Legend-WX_q8tyf.js";import"./Symbols-GnIyknFZ.js";import"./symbol-BgUL2hTi.js";import"./useElementOffset-Cr66zOZa.js";import"./uniqBy-BxbvDsAq.js";import"./iteratee-BYBBNzGi.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
