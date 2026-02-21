import{j as e}from"./jsx-runtime-BfNJRevS.js";import{useMDXComponents as n}from"./index-t9FOZmlA.js";import{M as o,C as h}from"./blocks-DJwMlFW3.js";import{C as d,W as s}from"./dimensions.stories-BS01lxsf.js";import"./iframe-Bu-inuC_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./arrayEqualityCheck-DU89AxsE.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BDfQc7tS.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./Line-QmWmoYT_.js";import"./Layer-Dlph539k.js";import"./ReactUtils-CbatvDS3.js";import"./Label-Bztw_jsS.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./ZIndexLayer-XPmioUZb.js";import"./ActivePoints-4FzqXwK2.js";import"./Dot-C-ngH4D5.js";import"./types-kezhLfGE.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./ErrorBarContext-DApypuO7.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./useAnimationId-BQHAYEwx.js";import"./getRadiusAndStrokeWidthFromDot-ClhAYeel.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ih3X5Nav.js";import"./Trapezoid-DN15z973.js";import"./Sector-K5K0caPh.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./step-CG3E5dJ5.js";import"./Curve-SSe25XRS.js";import"./XAxis-B7Sm-Q2v.js";import"./CartesianAxis-RY4R-JEB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C2_h55z2.js";import"./Legend-DfqT_4h2.js";import"./useElementOffset-CAcMGNUP.js";import"./uniqBy-i9XfwvOX.js";import"./iteratee-DAenRuB5.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
