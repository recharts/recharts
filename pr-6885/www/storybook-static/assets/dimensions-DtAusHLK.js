import{j as e}from"./jsx-runtime-BfkMEMNV.js";import{useMDXComponents as n}from"./index-BVwME_a2.js";import{M as h,C as o}from"./blocks-Bg2VcY-Q.js";import{C as d,W as s}from"./dimensions.stories-Bhade8Ow.js";import"./iframe-DYFx2r-j.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./arrayEqualityCheck-DCVaqN9G.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./ComposedChart-BDMAP_Xz.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./Line-VsvTPScv.js";import"./Layer-BC3vDM2H.js";import"./ReactUtils-B5hh0nCE.js";import"./Label-DjuisPzU.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./ZIndexLayer-CCFXe3ig.js";import"./ActivePoints-D9sD73LE.js";import"./Dot-Bp4mtK_T.js";import"./types-Cik9NZHM.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./ErrorBarContext-BaEgtdW6.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./useAnimationId-xTCLSGwz.js";import"./getRadiusAndStrokeWidthFromDot-CdsImqpX.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./Symbols-DOMt1Ple.js";import"./Curve-7IBZZol0.js";import"./XAxis-CrWNcebb.js";import"./CartesianAxis-DetyPtZ0.js";import"./YAxis-BQSE3w1-.js";import"./Legend-BtJKmN-Z.js";import"./useElementOffset-DPcBTbkI.js";import"./iteratee-CwwQ69r8.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
