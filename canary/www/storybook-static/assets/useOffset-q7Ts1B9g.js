import{j as e}from"./jsx-runtime-CqVS-Ca-.js";import{useMDXComponents as r}from"./index-BR-mDRw4.js";import{M as o,C as s,a as p}from"./blocks--VjigPqA.js";import{C as h}from"./useOffset.stories-51MinHUU.js";import"./iframe-BucFZ_rI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B0oRtae4.js";import"./OffsetShower-DrBH3Pp2.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./arrayEqualityCheck-Cub9yyg8.js";import"./resolveDefaultProps-B03Au56-.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./ComposedChart-Chwzw_bG.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./zIndexSlice-DdWCw1KG.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./Line-Cd2y3VXM.js";import"./Layer-CF_MVGlz.js";import"./ReactUtils-Bzngk0QG.js";import"./Label-9_EmwvzQ.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./ZIndexLayer-L4xm7ML-.js";import"./ActivePoints-Cj-4yTg7.js";import"./Dot-DIY2dqYP.js";import"./types-ClOjhPxm.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./ErrorBarContext-B9myFNJx.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./useAnimationId-aMKT9xva.js";import"./getRadiusAndStrokeWidthFromDot-Bz3A-CCh.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./Symbols-oEWjslm_.js";import"./Curve-DctSWulj.js";import"./XAxis-ClQb6fgI.js";import"./CartesianAxis-CXwjW_bT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-H-QqP90D.js";import"./Legend-CyYfs9k5.js";import"./useElementOffset-CogdzziS.js";import"./iteratee-DC9p_Pgd.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(s,{of:void 0,layout:"padded"}),`
`,e.jsx(t.h2,{id:"description",children:"Description"}),`
`,e.jsx("p",{children:"Returns the offset of the chart in pixels."}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`Offset defines the blank space between the chart and the plot area. This blank space is occupied by supporting
elements like axes, legends, and brushes.`})}),`
`,e.jsx("p",{children:"The offset includes:"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Margins"}),e.jsx("li",{children:"Width and height of the axes"}),e.jsx("li",{children:"Width and height of the legend"}),e.jsx("li",{children:"Brush height"})]}),`
`,e.jsx("p",{children:"If you are interested in the margin alone, use useMargin instead."}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or
resized.`})}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out, the numbers will not change
as the chart gets visually larger or smaller.`})}),`
`,e.jsx("p",{children:e.jsxs(t.p,{children:["This hook must be used within a chart context (inside a ",e.jsx("code",{children:"<LineChart>"}),", ",e.jsx("code",{children:"<BarChart>"}),`,
etc.). This hook returns `,e.jsx("code",{children:"undefined"})," if used outside a chart context."]})}),`
`,e.jsx("p",{children:"Available since Recharts 3.1"}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{of:void 0})]})}function se(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{se as default};
