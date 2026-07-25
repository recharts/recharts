import{u as n,j as e}from"./index-liaZOwN3.js";import{M as o,C as h}from"./blocks-BZBdnXYr.js";import{C as d,W as s}from"./dimensions.stories-BuGWfxGE.js";import"./iframe-DNItCT7m.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./index-C_m6BLaT.js";import"./ChartSizeDimensions-DGFyKqjg.js";import"./zIndexSlice-BIc7DaAW.js";import"./throttle-C6rBLGvR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C5LgD4az.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./Page-Cj8EiXz7.js";import"./Line-DvlQWCkT.js";import"./Layer-Db2cjn9q.js";import"./Curve-DUQP-DVq.js";import"./types-BUhan55B.js";import"./step-CV_HIcdR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CA_PH1lw.js";import"./Label-Dd-8-k84.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./useAnimationId-0YgIZ0Y8.js";import"./ActivePoints-DrmmrcJw.js";import"./Dot-CBZvltEJ.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./ErrorBarContext-BlEkCG4n.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getRadiusAndStrokeWidthFromDot-DPqVYI7W.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./XAxis-Daqmz5Xv.js";import"./CartesianAxis-Bnx97baV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-BTzQl_Zr.js";import"./Legend-S1INlTBC.js";import"./Symbols-Blhs67Ix.js";import"./symbol-BPmt5VBA.js";import"./useElementOffset-C4tOubk4.js";import"./uniqBy-DV28RGwR.js";import"./iteratee-D8sPzuRh.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
