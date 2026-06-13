import{u as n,j as e}from"./index-dsoHT5Gz.js";import{M as o,C as h}from"./blocks-fmdcC-Dm.js";import{C as d,W as s}from"./dimensions.stories-BMRqRtWy.js";import"./iframe-DCSfzZD_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./index-CZv42qN9.js";import"./ChartSizeDimensions-DroCohGy.js";import"./zIndexSlice-Cya-j5JC.js";import"./immer-ByTaNkbJ.js";import"./get-bIWt5V4Q.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CwsOLjT-.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./Page-Cj8EiXz7.js";import"./Line-mUDtb45l.js";import"./Layer-CYaqqIa6.js";import"./Curve-DBwKGQr7.js";import"./types-pWlDed2R.js";import"./step-B0rCVxys.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DS8CzLL4.js";import"./Label-DyuMertz.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./ZIndexLayer-BUBfOUZp.js";import"./useAnimationId-BTIZp_pi.js";import"./ActivePoints-ClGm_OTK.js";import"./Dot-C_xAmUte.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getRadiusAndStrokeWidthFromDot-C8lTyvL_.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./XAxis-BD_qaxla.js";import"./CartesianAxis-B8kAJjBK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CXksHDR7.js";import"./Legend-X10LVISh.js";import"./Symbols-BKzYxUbZ.js";import"./symbol-CEbhlMi_.js";import"./useElementOffset-B3zKGjmj.js";import"./uniqBy-BKEBWd8i.js";import"./iteratee-DGPg2gSr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};
