import{u as n,j as e}from"./index-DBK2p8n8.js";import{M as o,C as h}from"./blocks-ekeHlpH4.js";import{C as d,W as s}from"./dimensions.stories-Bv0PmVbQ.js";import"./iframe-Dz7fOwcI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./index-DeBQrWVz.js";import"./ChartSizeDimensions-Be-OvgSX.js";import"./zIndexSlice-DlvYonxh.js";import"./throttle-P3hcp8f5.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iMaSxvai.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dj2W9R-k.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./renderedTicksSlice-DgHHusta.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./Page-Cj8EiXz7.js";import"./Line-GkfmxRQ_.js";import"./Layer-Cbl9ckF3.js";import"./Curve-DkNdhu-H.js";import"./types-BbykzSU1.js";import"./step-Dr4bnBR_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmM_DoTI.js";import"./Label-DdFPLPtR.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./ZIndexLayer-uLTirNmh.js";import"./useAnimationId-DXftpzbd.js";import"./ActivePoints-DujeTKJ8.js";import"./Dot-DKtI2fI_.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./ErrorBarContext-DsGpPWxc.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getRadiusAndStrokeWidthFromDot-uAG-X1Nw.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./XAxis-DFw5p9mB.js";import"./CartesianAxis-Ccqj4A2W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BBLdCd6N.js";import"./Legend-B34M7RXQ.js";import"./Symbols-vq9ym0W5.js";import"./symbol-IHzi228e.js";import"./useElementOffset-DE8HnghF.js";import"./uniqBy-Bc4mdW14.js";import"./iteratee-DMupSKW3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
