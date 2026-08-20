import{u as n,j as e}from"./index-CPH3vrpi.js";import{M as o,C as h}from"./blocks-DWMdaHY_.js";import{C as d,W as s}from"./dimensions.stories-DFf7a9wS.js";import"./iframe-cFlQwHEa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DglaFOn3.js";import"./index-C-TRi17m.js";import"./index-Dtvx5j6b.js";import"./ChartSizeDimensions-G0KxCx7y.js";import"./zIndexSlice-DDYeRltP.js";import"./throttle-DAdIMx4T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2OiAFwa.js";import"./isWellBehavedNumber-BSAPeCSS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cr_zCTxJ.js";import"./RechartsWrapper-BXBBXfmC.js";import"./index-CSK5_VVc.js";import"./axisSelectors--mu7xJ5Y.js";import"./d3-scale-CkWKTTx7.js";import"./renderedTicksSlice-D983KGZ4.js";import"./CartesianChart-fiOEBM8R.js";import"./chartDataContext-BvjIPTZo.js";import"./CategoricalChart-BBemHSvC.js";import"./Page-Cj8EiXz7.js";import"./Line-DJAGFMBk.js";import"./Layer-BgSWIZl1.js";import"./Curve-CyS7BkRL.js";import"./types-ChcMjuwl.js";import"./step-DcRYwHfR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKR9bXgi.js";import"./Label-JW-KtVqW.js";import"./Text-BuwjYicu.js";import"./DOMUtils-BFAGFFMB.js";import"./useId-B6yN-zUw.js";import"./useBackwardsCompatibleTheme-BqDTENvH.js";import"./ZIndexLayer-p7Pk0-Yp.js";import"./useAnimationId-BEPJjOtf.js";import"./ActivePoints-CjX0WMZa.js";import"./Dot-BayKRhRn.js";import"./RegisterGraphicalItemId-BQvNsPKC.js";import"./ErrorBarContext-BnnhnyAe.js";import"./GraphicalItemClipPath-uMqpd6od.js";import"./SetGraphicalItem-B-flkej3.js";import"./getRadiusAndStrokeWidthFromDot-CPAqKToh.js";import"./ActiveShapeUtils-CR14wFnm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-B2GHVOpr.js";import"./CartesianAxis-BIZkK73U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-kKnqa52f.js";import"./Legend-BJF1jmuM.js";import"./Symbols-Q3AzLqoX.js";import"./symbol-BmR2DuwM.js";import"./useElementOffset-B0E-eh4h.js";import"./uniqBy-CNtWXDS-.js";import"./iteratee-DpEh8_N1.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
