import{j as e}from"./jsx-runtime-Yz_XdECx.js";import{useMDXComponents as n}from"./index-DjtU5Y8s.js";import{M as h,C as o}from"./blocks-BrFByQ0T.js";import{C as d,W as s}from"./dimensions.stories-JBSEAkzU.js";import"./iframe-BdYBH0hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./arrayEqualityCheck-CnZHVnux.js";import"./resolveDefaultProps-BV4LHELv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BGyCZHRq.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./Line-Dl92IfyZ.js";import"./Layer-CC1sQm5k.js";import"./ReactUtils-BSN6r0Fc.js";import"./Label-nQ379wTM.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./ZIndexLayer-D6TqYbdI.js";import"./ActivePoints-B5y_bpJR.js";import"./Dot-B2CiLsKD.js";import"./types-CeaFy_xO.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./ErrorBarContext-CAApCFPz.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./useAnimationId-D1PUvmFT.js";import"./getRadiusAndStrokeWidthFromDot-BackDSVj.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./Symbols-Dfpy34Qh.js";import"./Curve-C1OuXXjt.js";import"./XAxis-C-6SXyUA.js";import"./CartesianAxis-DtTXwL03.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-i93sK3J3.js";import"./Legend-D6O1svQr.js";import"./useElementOffset-JJ_3zRXD.js";import"./iteratee-DAeDwiVA.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};
