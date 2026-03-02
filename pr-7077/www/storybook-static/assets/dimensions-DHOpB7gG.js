import{j as e}from"./jsx-runtime-BlbYxmIA.js";import{useMDXComponents as n}from"./index-iY5oJI_0.js";import{M as o,C as h}from"./blocks-CKDJyWHy.js";import{C as d,W as s}from"./dimensions.stories-PsSDasZa.js";import"./iframe-CFR-gaGN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./arrayEqualityCheck-B4mATf9c.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D9gmYwEq.js";import"./RechartsWrapper-DeWitytO.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./Line-ChBLpYB3.js";import"./Layer-BHVJ1AiA.js";import"./ReactUtils-C9SxeRDL.js";import"./Label-DP_LAI-Y.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./ZIndexLayer-C3JqUkkH.js";import"./ActivePoints-DyWoik7C.js";import"./Dot-B3-OWSbc.js";import"./types-DncqRVvk.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./useAnimationId-VCCfkRDK.js";import"./getRadiusAndStrokeWidthFromDot-BDVDZ-9_.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1LUHF-ab.js";import"./Trapezoid-C6_wzf5N.js";import"./Sector-DhcqTi-n.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./step-BuQilum9.js";import"./Curve-xncZGYH6.js";import"./XAxis-DQlERQHB.js";import"./CartesianAxis-ClI6MqAO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bo04wnJz.js";import"./Legend-CJh5rV-_.js";import"./useElementOffset-CL7hYgwQ.js";import"./uniqBy-D3vM5faK.js";import"./iteratee-BQ71FW9H.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
