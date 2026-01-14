import{j as e}from"./jsx-runtime-CK7FSx1i.js";import{useMDXComponents as n}from"./index-DzR0Mj2f.js";import{M as h,C as o}from"./blocks-DE5DBDiX.js";import{C as d,W as s}from"./dimensions.stories-BADBWmzg.js";import"./iframe-BjYhBrjl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwPjVI_1.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./arrayEqualityCheck-CNWOZzwZ.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./PolarUtils-DQj3EbdT.js";import"./ComposedChart-jXkond5b.js";import"./RechartsWrapper-kzv9It-X.js";import"./hooks-Ddl0ZTMw.js";import"./axisSelectors-DEfYHCC1.js";import"./zIndexSlice-CZl4BXnF.js";import"./CartesianChart-DCPzGlsn.js";import"./chartDataContext-BU8YO9rr.js";import"./CategoricalChart-DF3wtmgo.js";import"./Line-B0hU4ZgF.js";import"./Layer-DXlUs9xn.js";import"./ReactUtils-BfHCN5KQ.js";import"./Label-DVod4zfM.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./ZIndexLayer-DHhRDpk5.js";import"./ActivePoints-B3Cg6Vyy.js";import"./Dot-CTyFlHPc.js";import"./types-Cdxv11pV.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./ErrorBarContext-Bfs-DHyT.js";import"./GraphicalItemClipPath-DwCyfGQq.js";import"./SetGraphicalItem-D87xV8bI.js";import"./useAnimationId-Da3IHhB2.js";import"./getRadiusAndStrokeWidthFromDot-CjQtZ2j8.js";import"./ActiveShapeUtils-C0Pv8fnx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-G9VjTpux.js";import"./Trapezoid-dLSghC9y.js";import"./Sector-DDjBm9K3.js";import"./Symbols-Df7Es6QZ.js";import"./Curve-Dsad01Eu.js";import"./XAxis-CWT2ipPv.js";import"./CartesianAxis-Bk_9WRuu.js";import"./YAxis-BPJqNES7.js";import"./Legend-BWAfmmEj.js";import"./useElementOffset-DMz3ZnQd.js";import"./iteratee-DmKJxQnM.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
