import{j as e}from"./jsx-runtime-q9pb3JVG.js";import{useMDXComponents as n}from"./index-CjdMSl7l.js";import{M as o,C as h}from"./blocks-Dh6V_jp-.js";import{C as d,W as s}from"./dimensions.stories-4Ew6Im6C.js";import"./iframe-BA-zV7_F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./arrayEqualityCheck-BqA822v0.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./immer-CQr9v0v0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DGaIMIIA.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CahP5Bvu.js";import"./renderedTicksSlice-CICucQq1.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./Page-Cj8EiXz7.js";import"./Line-AsvZMwsR.js";import"./Layer-CfzD199M.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./Label-CHedA7kt.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./useAnimationId-DojuRQal.js";import"./ActivePoints-hBuzQYc_.js";import"./Dot---bkTzjD.js";import"./types-mhJjiQ_4.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./ErrorBarContext-CGvFvXH0.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getRadiusAndStrokeWidthFromDot-7IUVpSgw.js";import"./ActiveShapeUtils-fUtPyr_w.js";import"./isPlainObject-C-Ml-lWL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9DVT5n.js";import"./Trapezoid-Bk1aSQBG.js";import"./Sector-DJLTI9DR.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";import"./step-j_6aZTKG.js";import"./Curve-C9qfySG5.js";import"./XAxis-DC7WjUX8.js";import"./CartesianAxis-C3WTNiVK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-32LA6dK9.js";import"./Legend-CsUHl_0_.js";import"./useElementOffset-ChyJXsRo.js";import"./uniqBy-CagLAZRG.js";import"./iteratee-DxFZgfS6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
