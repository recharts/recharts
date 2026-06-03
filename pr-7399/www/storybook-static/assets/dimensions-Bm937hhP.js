import{u as n,j as e}from"./index-ChSg4deL.js";import{e as o,C as h}from"./blocks-CD0goTMQ.js";import{C as d,W as s}from"./dimensions.stories-DbaNMsWX.js";import"./iframe-CSdIsBuA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./index-Bec9HE3p.js";import"./ChartSizeDimensions-jZpIOh0K.js";import"./zIndexSlice-Cwyv9NeI.js";import"./immer-DsufihQm.js";import"./get-Duntrb6V.js";import"./resolveDefaultProps-DILKQm8l.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Ckj1xbao.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./Page-DPte-9pC.js";import"./Line-B5eG26iw.js";import"./Curve-CKKHwC-M.js";import"./types-Ct8C6hXI.js";import"./step-w2kxUIwB.js";import"./path-DyVhHtw_.js";import"./Layer-B_G2sVc2.js";import"./ReactUtils-BhhiwOUg.js";import"./Label-BjSFKFzq.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./ZIndexLayer-D0Yli8nf.js";import"./ActivePoints-DxvB2SaA.js";import"./Dot-DEg4e3iy.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./ErrorBarContext-BgoP0PAw.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./useAnimationId-B6008U_B.js";import"./getRadiusAndStrokeWidthFromDot-DJfd0kAV.js";import"./ActiveShapeUtils-9x_mtGFa.js";import"./XAxis-4daNYmE3.js";import"./CartesianAxis-DbuOwL9w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-ONZy-yVZ.js";import"./Legend-DFucR75K.js";import"./Symbols-DWBKfXb_.js";import"./symbol-Dm9Ttk9X.js";import"./useElementOffset-CamefvjE.js";import"./uniqBy-c8DwMnql.js";import"./iteratee-iXPsg142.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
