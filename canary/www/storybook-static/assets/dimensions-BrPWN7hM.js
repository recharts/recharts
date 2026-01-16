import{j as e}from"./jsx-runtime-VmSVFTzD.js";import{useMDXComponents as n}from"./index-CebmvTFC.js";import{M as h,C as o}from"./blocks-BBqWXsny.js";import{C as d,W as s}from"./dimensions.stories-WW2Up_E6.js";import"./iframe-Daa7gVLq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./arrayEqualityCheck-DHiMbEr4.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./PolarUtils-BgeQKPj6.js";import"./ComposedChart-CYLKALlp.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./Line-B5G8X7n4.js";import"./Layer-CGvX8Aev.js";import"./ReactUtils-DBjM8e5X.js";import"./Label-Czm8SDG7.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./ZIndexLayer-BpC0cLWO.js";import"./ActivePoints-CnyDSr4M.js";import"./Dot-DRRuIu69.js";import"./types-C4ZPTuLr.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./ErrorBarContext-C3qObGNC.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./useAnimationId-ahZSEp8i.js";import"./getRadiusAndStrokeWidthFromDot-DQjBSxKW.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./Trapezoid-BpmoHtq5.js";import"./Sector-BNry3-1y.js";import"./Symbols-Ct_d7yT0.js";import"./Curve-CWMRaKtl.js";import"./XAxis-9jKN-_DJ.js";import"./CartesianAxis-BVtnbRV6.js";import"./YAxis-BnejCEyC.js";import"./Legend-8Lsn4QIr.js";import"./useElementOffset-BEi6rhn-.js";import"./iteratee-C1MLwHnw.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
