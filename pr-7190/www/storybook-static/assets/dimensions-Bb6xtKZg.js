import{j as e}from"./jsx-runtime-CW9L82Dx.js";import{useMDXComponents as n}from"./index-DX-E1kRY.js";import{M as o,C as h}from"./blocks-DVvv2w_1.js";import{C as d,W as s}from"./dimensions.stories-C-ZTzWKt.js";import"./iframe-_tOEOrTB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./arrayEqualityCheck-B2ATAN_K.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QC90EbHK.js";import"./immer-Ctu7T9Ma.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BOz3Cc1U.js";import"./RechartsWrapper-B4fVc8pz.js";import"./index-C8IxNL1D.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./Page-Cj8EiXz7.js";import"./Line-CSH30hMe.js";import"./Layer-DKn_t_OY.js";import"./ReactUtils-D3WhBtDM.js";import"./Label-DY2hHCUB.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./ZIndexLayer-CgC8xk-g.js";import"./ActivePoints-UW1fO4V4.js";import"./Dot-MLQan19h.js";import"./types-0739cztl.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./useAnimationId-x2-6Yyy0.js";import"./getRadiusAndStrokeWidthFromDot-DShwyyA4.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./step-rG5mhkUn.js";import"./Curve-BgKgFd6U.js";import"./XAxis-B99ydacs.js";import"./CartesianAxis-DXWYS4eF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-MKkirg66.js";import"./Legend-DA3DQmc3.js";import"./useElementOffset-BPo9O-tw.js";import"./uniqBy-P3VkkSyy.js";import"./iteratee-B2hoZeMP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
