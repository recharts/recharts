import{u as n,j as e}from"./index-CBh3KZdN.js";import{M as o,C as h}from"./blocks-C8CNef3B.js";import{C as d,W as s}from"./dimensions.stories--O9O9eY2.js";import"./iframe-BX5cRibr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./index-Dw3bOTki.js";import"./ChartSizeDimensions-tK8c8LXK.js";import"./zIndexSlice-AZuYl_vp.js";import"./throttle-zmqWqRK4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ySsto5-f.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./Page-Cj8EiXz7.js";import"./Line-Ble_dEe_.js";import"./Layer-W_QEwym4.js";import"./Curve-DB2Kv5XX.js";import"./types-DbQE6sDs.js";import"./step-DSSF95ZQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm8c3RW5.js";import"./Label-DaxsWVsm.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./useAnimationId-CcWR-JA_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DwJ67tbd.js";import"./CartesianAxis-C0ASpg_d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-LHNvPj5J.js";import"./Legend-Bh7zufuS.js";import"./Symbols-8Y55TEi-.js";import"./symbol-DJtjK0so.js";import"./useElementOffset-B2muHLId.js";import"./uniqBy-CUPPr5RE.js";import"./iteratee-C-A_FkJM.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
