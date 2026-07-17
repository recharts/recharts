import{u as n,j as e}from"./index-DiO_cosr.js";import{M as o,C as h}from"./blocks-DiA4atch.js";import{C as d,W as s}from"./dimensions.stories-pThXd8hg.js";import"./iframe-556vb-qw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./index-BtPxInWz.js";import"./ChartSizeDimensions-CRwQnicY.js";import"./zIndexSlice-Dx_8tKSl.js";import"./throttle-Bki2cXyV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C3GwbD-o.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./d3-scale-D2li86P1.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./Page-Cj8EiXz7.js";import"./Line-CNegRi9e.js";import"./Layer-BTltl-Cn.js";import"./Curve-CQITscbT.js";import"./types-CA3u3vRt.js";import"./step-CFU3znK3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CxcoqNDa.js";import"./Label-BaM1U3dt.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./ZIndexLayer-BOwqliX9.js";import"./useAnimationId-ClUEd6We.js";import"./ActivePoints-CLr-JLZj.js";import"./Dot-J7G-brXT.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";import"./getRadiusAndStrokeWidthFromDot-C_DGpSn1.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./XAxis-C8oxlX6U.js";import"./CartesianAxis-C3UFcQ97.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CUYZIBQF.js";import"./Legend-CayQOQpd.js";import"./Symbols-DArUB4Tu.js";import"./symbol-BAz4A_vL.js";import"./useElementOffset-BH4PUdVa.js";import"./uniqBy-C7RA8kcG.js";import"./iteratee-DBVLQRkV.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
