import{u as n,j as e}from"./index-BTAwhFs5.js";import{M as o,C as h}from"./blocks-mpD9YnXf.js";import{C as d,W as s}from"./dimensions.stories-uIB2M-j7.js";import"./iframe-Cs_QEvnb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./index-CyoiD9ix.js";import"./ChartSizeDimensions-Czqtri5g.js";import"./zIndexSlice-DkQ_r41R.js";import"./throttle-Dy_oOifq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DexuDbrM.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B4x9ib8K.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./Page-Cj8EiXz7.js";import"./Line-D7GW9opj.js";import"./Layer-D-shTj0T.js";import"./Curve-CeUIPmBM.js";import"./types-C9b0uGu7.js";import"./step-B6gEEVRS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CbRljsJB.js";import"./Label-AhMBQLf8.js";import"./Text-xCnIxjvW.js";import"./DOMUtils-BYSGKLNe.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./ZIndexLayer-BGjzOXsU.js";import"./useAnimationId-CXhRBgnj.js";import"./ActivePoints-BbHlS5_x.js";import"./Dot-BlS3hK8R.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./ErrorBarContext-Ds3D9aj6.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getRadiusAndStrokeWidthFromDot-CPpHwE7T.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";import"./XAxis-C6JaM3hk.js";import"./CartesianAxis-Btqo2Ljv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BzFBF6j_.js";import"./Legend-CdK3p2Qt.js";import"./Symbols-DC35OQmJ.js";import"./symbol-Dj3ENcoy.js";import"./useElementOffset-BFIrW7Gj.js";import"./uniqBy-D0TPWZAb.js";import"./iteratee-B3WPktIR.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
