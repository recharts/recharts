import{u as n,j as e}from"./index-C76XbzUk.js";import{M as o,C as h}from"./blocks-CySQloXB.js";import{C as d,W as s}from"./dimensions.stories-3qzGqK2k.js";import"./iframe-CEnpMkUD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLMKt3XR.js";import"./index-CJbnSVQD.js";import"./index-By9AGPbV.js";import"./ChartSizeDimensions-BAaVwwoo.js";import"./zIndexSlice-05A266o9.js";import"./throttle-Dmrqe0jJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfNWPFnd.js";import"./isWellBehavedNumber-DR4aYfcx.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dl56oWTM.js";import"./RechartsWrapper-0XuY0pKu.js";import"./index-D3euSQxt.js";import"./axisSelectors-DC8u1mMs.js";import"./d3-scale-Dz-RCPbg.js";import"./renderedTicksSlice-CMfBipfM.js";import"./CartesianChart-RDTjk-Mf.js";import"./chartDataContext-fs3yspT4.js";import"./CategoricalChart-BbjRWCL9.js";import"./Page-Cj8EiXz7.js";import"./Line-CUZbT2fY.js";import"./Layer-tgou8wwH.js";import"./Curve-DIlVUqzk.js";import"./types-Y-jxBs1c.js";import"./step-CsA2_CTe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BBWAA05W.js";import"./Label-keTZMkCE.js";import"./Text-BovGSesW.js";import"./DOMUtils-Bq__MZjJ.js";import"./useId-DkQeXuoN.js";import"./useBackwardsCompatibleTheme-Cl8wy0Yl.js";import"./ZIndexLayer--32eJAmt.js";import"./useAnimationId-CAXeIAhh.js";import"./ActivePoints-CXlwIH8j.js";import"./Dot-YV_AL6ol.js";import"./RegisterGraphicalItemId-CbjDoXD2.js";import"./ErrorBarContext-COjMx0cf.js";import"./GraphicalItemClipPath-CisBO3GG.js";import"./SetGraphicalItem-WHlYrVZg.js";import"./getRadiusAndStrokeWidthFromDot-QUOITjlg.js";import"./ActiveShapeUtils-BUkWWRfj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BSzDUhhq.js";import"./CartesianAxis-kR2Dl0Mj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-EWhR1Mjx.js";import"./Legend-NUVilUcD.js";import"./Symbols-DJnUr9Nq.js";import"./symbol-BMRcAJHE.js";import"./useElementOffset-BfY-qvbk.js";import"./uniqBy-aUHDE_38.js";import"./iteratee-D1Sl_wcT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
