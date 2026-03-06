import{j as e}from"./jsx-runtime-Bw-CPngc.js";import{useMDXComponents as n}from"./index-q8ntbOTj.js";import{M as o,C as h}from"./blocks-CBJGGH2I.js";import{C as d,W as s}from"./dimensions.stories-2OdY0vKt.js";import"./iframe-_5zxKgci.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSd9dO1D.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./arrayEqualityCheck-DLMNeVLZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./immer-BaMlApsY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-UABhjuQ3.js";import"./RechartsWrapper-C0zBti2g.js";import"./index-CQESjCWD.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./d3-scale-CRK2FJTc.js";import"./zIndexSlice-D2iO7-nB.js";import"./renderedTicksSlice-txKnD5_R.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./Line-WKhxL_g2.js";import"./Layer-BeNKD6uh.js";import"./ReactUtils-u6DOyzs3.js";import"./Label-B3FoJLG-.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./ZIndexLayer-DbY9BdOy.js";import"./ActivePoints-CxFHksKT.js";import"./Dot-fP6sFQSZ.js";import"./types-B4BvwS0U.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./ErrorBarContext-CvNdI_Cv.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./useAnimationId-B5UzlvQm.js";import"./getRadiusAndStrokeWidthFromDot-Boo0lFRT.js";import"./ActiveShapeUtils-DyNfLGNz.js";import"./isPlainObject-DMrThXxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLAaMXbr.js";import"./Trapezoid-DHmjrzCK.js";import"./Sector-CZQdSV3s.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";import"./step-CFxJr1fu.js";import"./Curve-DLvP5FI3.js";import"./XAxis-BoiUuQV6.js";import"./CartesianAxis-t0Xlfasl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DbWdO-Gr.js";import"./Legend-BKP78yj0.js";import"./useElementOffset-B6-UpGgV.js";import"./uniqBy-Bp2v7zul.js";import"./iteratee-BHXg1SGO.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
