import{u as n,j as e}from"./index-GipImxeX.js";import{M as o,C as h}from"./blocks-BWcLX2S5.js";import{C as d,W as s}from"./dimensions.stories-BPfED8MM.js";import"./iframe-DMp7qWBc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./index-BjkWDWFl.js";import"./ChartSizeDimensions-C-oWRF1t.js";import"./zIndexSlice-DwEqiBQ-.js";import"./immer-Cdu3yC2y.js";import"./get-xm_p6-0H.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-r_H9u5_0.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./renderedTicksSlice-xTgogQQT.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./Page-Cj8EiXz7.js";import"./Line-ChEIx0ob.js";import"./Layer-CuLdBvJ8.js";import"./Curve-ClaSDCwv.js";import"./types-nrPXTQ41.js";import"./step-BmHxAVOq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BdLU55_g.js";import"./Label-CTVwy9Ni.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./useAnimationId-Bo28EVo_.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./XAxis-BEU7rEXV.js";import"./CartesianAxis-BpcewqQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Csr1iP4L.js";import"./Legend-DfI93GLz.js";import"./Symbols-B2QFfdKs.js";import"./symbol-C-pIEiEF.js";import"./useElementOffset-DiViSUwj.js";import"./uniqBy-CQGZokB0.js";import"./iteratee-g85ug9Sr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
