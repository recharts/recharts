import{u as n,j as e}from"./index--ngLRj4u.js";import{M as o,C as h}from"./blocks-PliCEL_q.js";import{C as d,W as s}from"./dimensions.stories-vft7Sjut.js";import"./iframe-J2FnkNkN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./index-B1zoM-7H.js";import"./ChartSizeDimensions-CXdkuCoT.js";import"./zIndexSlice-CIfx3dbz.js";import"./throttle-Dd6uK12C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-jyhVlhQd.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./Page-Cj8EiXz7.js";import"./Line-BrRmSeyv.js";import"./Layer-B9c44e16.js";import"./Curve-CNSL121i.js";import"./types-cmsIqA-S.js";import"./step-B2sXv2yh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaE3ZoZL.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./ZIndexLayer-BcQVAnhI.js";import"./useAnimationId-B8FTTFdD.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-9YTS4CGv.js";import"./CartesianAxis-yBNynPDV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DtzyVJ31.js";import"./Legend-D-Zhozxt.js";import"./Symbols-D6nbCmzg.js";import"./symbol-Cnvzar8t.js";import"./useElementOffset-CcIe0GmH.js";import"./uniqBy-HD7GgsnH.js";import"./iteratee-Bg0tlSUT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
