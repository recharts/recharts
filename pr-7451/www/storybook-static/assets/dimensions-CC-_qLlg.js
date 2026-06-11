import{u as n,j as e}from"./index-Da_tSoBz.js";import{M as o,C as h}from"./blocks-kVHzOxw7.js";import{C as d,W as s}from"./dimensions.stories-BZNjYVXo.js";import"./iframe-DVB9NpZr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./index-DwUGYNg_.js";import"./ChartSizeDimensions-BVcEouNU.js";import"./zIndexSlice-inUr0xCU.js";import"./immer-cUFuezMs.js";import"./get-DFBBhs2u.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-oQ-te1DN.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./renderedTicksSlice-BJczlu3R.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./Page-Cj8EiXz7.js";import"./Line-DLH78_Xg.js";import"./Layer-CznYhS6e.js";import"./Curve-Ct2rphZk.js";import"./types-CmHpCyOi.js";import"./step-CVw2yAQM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DN0vzfw4.js";import"./Label-C-9e4xzc.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./ZIndexLayer-YpWmKYVa.js";import"./useAnimationId-D_d0Diy_.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./ErrorBarContext-C6AudozV.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./XAxis-CjffC60d.js";import"./CartesianAxis-BFFWpUHq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CIOeYwaY.js";import"./Legend-TiAv2XOH.js";import"./Symbols-DrVUv3XW.js";import"./symbol-vftm-K-Y.js";import"./useElementOffset-BXbw_jYn.js";import"./uniqBy-DDqwjX8c.js";import"./iteratee-DxauXe4m.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
