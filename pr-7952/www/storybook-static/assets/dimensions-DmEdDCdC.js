import{u as n,j as e}from"./index-Dh0M0kL-.js";import{M as o,C as h}from"./blocks-BFp-44N0.js";import{C as d,W as s}from"./dimensions.stories-DSfZLLdx.js";import"./iframe-BR4M1uiR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./index-D8NvIHNM.js";import"./ChartSizeDimensions-DCk5tn14.js";import"./zIndexSlice-HrFSVAcv.js";import"./throttle-G6Y8pgni.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-HjQSkOyf.js";import"./RechartsWrapper-B0bWwFQm.js";import"./axisSelectors-BqweAZHb.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./Page-Cj8EiXz7.js";import"./Line-BPjJBSiN.js";import"./Layer-DlfW1ESK.js";import"./Curve-D8aJ7Tuc.js";import"./types-B-qT5SDC.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./activeStyles-WDF83Cdx.js";import"./Label-XYAyrwIP.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./ZIndexLayer-CLaDw56X.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./XAxis-CcBq3_nh.js";import"./CartesianAxis-CHydPwh7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DWcZ5Lh0.js";import"./Legend-C0xMvRa3.js";import"./Symbols-Cam4rM4m.js";import"./symbol-Rv-yxBgO.js";import"./useElementOffset-BgqvZiar.js";import"./uniqBy-Duhs8M_o.js";import"./iteratee-DjlDP_tJ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
