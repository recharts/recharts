import{j as e}from"./jsx-runtime-DKpH9hG6.js";import{useMDXComponents as n}from"./index-CbKiBjrk.js";import{M as h,C as o}from"./blocks-Z7VcWwKv.js";import{C as d,W as s}from"./dimensions.stories-BQULgpMT.js";import"./iframe-d3qCsCxk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./arrayEqualityCheck-BSeezrw4.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D8dIpZCb.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./Line-CpGJ1HTg.js";import"./Layer-CUjYvDWI.js";import"./ReactUtils-DxKtCUtQ.js";import"./Label-oam-p3Cf.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./ZIndexLayer-D3LUzJCs.js";import"./ActivePoints-2SOqbbwT.js";import"./Dot-BxRgbJKp.js";import"./types-B3TZRrDh.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./ErrorBarContext-BMBoMP-k.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./useAnimationId-OmpdHa5n.js";import"./getRadiusAndStrokeWidthFromDot-BjqSPYty.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./Symbols-XJ3mO982.js";import"./Curve-D8rLd4C3.js";import"./XAxis-BmRFblia.js";import"./CartesianAxis-CyPlzw3T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BYMuo7gN.js";import"./Legend-Bx9chdmL.js";import"./useElementOffset-DxduRCjN.js";import"./iteratee-BsAJ3adM.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function oe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{oe as default};
