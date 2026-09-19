import{u as n,j as e}from"./index-CpujjuHv.js";import{M as o,C as h}from"./blocks-D6FZgUTI.js";import{C as d,W as s}from"./dimensions.stories-CgH87j9e.js";import"./iframe-DgKiVndY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./index-DmBw5bKk.js";import"./ChartSizeDimensions-DgL9VCMp.js";import"./zIndexSlice-dNuJcHRn.js";import"./throttle-C4KEmVOQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ZptqdVYs.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./Page-Cj8EiXz7.js";import"./Line-BTleYBWw.js";import"./Layer-CitR-d8V.js";import"./Curve-Pc89hUhq.js";import"./types-BGF6RwMG.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-t-O5cYrN.js";import"./Label-Dw6GSad7.js";import"./Text-CbY3j4Ck.js";import"./DOMUtils-DDi-aYdE.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./ZIndexLayer-CiPL_m_c.js";import"./useAnimationId-Df1EENv3.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";import"./XAxis-BLbqPkVx.js";import"./CartesianAxis-O82DChWw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DbeD2sP7.js";import"./Legend-KU81qJ72.js";import"./Symbols-D_JZU4lT.js";import"./symbol-Ccbl1gHX.js";import"./useElementOffset-D6g0REY2.js";import"./uniqBy-hF-kPyhu.js";import"./iteratee-CxgRG3tb.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
