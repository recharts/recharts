import{j as e}from"./jsx-runtime-Dyaq-o4B.js";import{useMDXComponents as n}from"./index-DAh7ZI7y.js";import{M as h,C as o}from"./blocks-DNYbCNLU.js";import{C as d,W as s}from"./dimensions.stories-D5v1fGg-.js";import"./iframe-BlTD-rim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./arrayEqualityCheck-rFMbtr9X.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./PolarUtils-uT4ExAHg.js";import"./ComposedChart-rwI72tz9.js";import"./RechartsWrapper-BRiCuj44.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./zIndexSlice-Ir6gglyl.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./Line-9EEW6LJO.js";import"./Layer-COV8jJuI.js";import"./ReactUtils-cgJBm0o5.js";import"./Label-DeeiiEOU.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./ActivePoints-CPWPbj6O.js";import"./Dot-C6jOffNH.js";import"./types-DTlxByIq.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./ErrorBarContext-952cRcfJ.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./useAnimationId-Cp6XJ64u.js";import"./getRadiusAndStrokeWidthFromDot-ByE9rINe.js";import"./ActiveShapeUtils-TxWRIrWJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYtDJsJv.js";import"./Trapezoid-YZMZwo4M.js";import"./Sector-BWZ0U6hI.js";import"./Symbols-CPbquqjE.js";import"./Curve-BUANm7-q.js";import"./XAxis-9FZ95w2s.js";import"./CartesianAxis-bTSyVw2P.js";import"./YAxis-CzxGswUN.js";import"./Legend-DwZMZD9h.js";import"./useElementOffset-DPOkcJvF.js";import"./iteratee-Ca5LyscH.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
