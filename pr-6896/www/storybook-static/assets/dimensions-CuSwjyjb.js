import{j as e}from"./jsx-runtime-CYepl4uI.js";import{useMDXComponents as n}from"./index-BWqwZwMj.js";import{M as h,C as o}from"./blocks-CZjpfLo4.js";import{C as d,W as s}from"./dimensions.stories-6mYydjpx.js";import"./iframe-C7dv0yNH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtbSRCbY.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./arrayEqualityCheck-DyqdVI3P.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./PolarUtils-Cz9TAlOj.js";import"./ComposedChart-FscYfn8A.js";import"./RechartsWrapper-C9EYdUpz.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./zIndexSlice-BInAuLle.js";import"./CartesianChart-DFTdRJBL.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./Line-CglyNln1.js";import"./Layer-BTAEH97T.js";import"./ReactUtils-Jbry0BUC.js";import"./Label-pLuTDL7t.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./ZIndexLayer-DHYRzIS_.js";import"./ActivePoints-DNYEbsDX.js";import"./Dot-CQ29Eu8v.js";import"./types-CjrwKJ5w.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./ErrorBarContext-FWB8EeAg.js";import"./GraphicalItemClipPath-DkWi_iXg.js";import"./SetGraphicalItem-dcgdauaK.js";import"./useAnimationId-y4GFPobY.js";import"./getRadiusAndStrokeWidthFromDot-BPy-vWAZ.js";import"./ActiveShapeUtils-BhYBD1tZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BknPpfrj.js";import"./Trapezoid-B8NGdIRJ.js";import"./Sector-DHOItzHM.js";import"./Symbols-CWjjEhVI.js";import"./Curve-DWNdd9EU.js";import"./XAxis-B2XI662D.js";import"./CartesianAxis-qkbdisew.js";import"./YAxis-BUtL7A2A.js";import"./Legend-BplvOCRR.js";import"./useElementOffset-DtZiECmb.js";import"./iteratee-D7nR1KAQ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
