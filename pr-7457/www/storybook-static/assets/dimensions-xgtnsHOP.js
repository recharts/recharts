import{u as n,j as e}from"./index-A7O4yRXt.js";import{M as o,C as h}from"./blocks-DoNp-MNd.js";import{C as d,W as s}from"./dimensions.stories-e7znEIuK.js";import"./iframe-DDa7m_LV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./index-Dqdzi7xh.js";import"./ChartSizeDimensions-B5BOsXvA.js";import"./zIndexSlice-BGDMq11w.js";import"./immer-CDcbaTsx.js";import"./get-BkRD0rv1.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DbnPvwSg.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./renderedTicksSlice-BldZtaeN.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./Page-Cj8EiXz7.js";import"./Line-CgnFp_Ki.js";import"./Layer-DzM6lalT.js";import"./Curve-1MKNX4lJ.js";import"./types-BQpkl3V-.js";import"./step-xwmEGnAg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B4Or3-X4.js";import"./Label-CwmoSFs2.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./ZIndexLayer-DErURTRW.js";import"./useAnimationId-DndzYlXq.js";import"./ActivePoints-2d86kPF5.js";import"./Dot-CTvLKOFz.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getRadiusAndStrokeWidthFromDot-CcrjGEgC.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./XAxis-C_90q5ur.js";import"./CartesianAxis-BYwyVqNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BVn2_RdR.js";import"./Legend-CxQgI-pc.js";import"./Symbols-Cgr_wvH7.js";import"./symbol-C7zFXdlA.js";import"./useElementOffset-Bqhv7_31.js";import"./uniqBy-CByu8z8H.js";import"./iteratee-nz0FM5kv.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
