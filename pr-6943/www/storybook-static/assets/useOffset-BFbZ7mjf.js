import{j as e}from"./jsx-runtime-CuzRmg2A.js";import{useMDXComponents as r}from"./index-DNjMHtu3.js";import{M as o,C as s,a as p}from"./blocks-vKZvUMzd.js";import{C as h}from"./useOffset.stories-BGpPPSjI.js";import"./iframe-CdO7Aj1B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2k25Twf.js";import"./OffsetShower-zZ47YVPO.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./arrayEqualityCheck-DSjGda-c.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./ComposedChart-D7sGpZBQ.js";import"./RechartsWrapper-CFINL4TS.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./Line-hwrXWpiM.js";import"./Layer-oFeUaaGY.js";import"./ReactUtils-D5Zl77ai.js";import"./Label-BR3nHz9_.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./ZIndexLayer-Dre2jW6R.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./types-DFIEYgnV.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./ErrorBarContext-DHKDzrNN.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./ActiveShapeUtils-BhQSb30R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ct8C5CYW.js";import"./Trapezoid-UgLOqUt_.js";import"./Sector-D64_Ht99.js";import"./Symbols-DohrOtO1.js";import"./Curve-BvwXZ_2X.js";import"./XAxis-B3LqZDEz.js";import"./CartesianAxis-C5xy13MG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BL8TYUdf.js";import"./Legend-CZ4UZb8S.js";import"./useElementOffset-C9w_HigE.js";import"./iteratee-Cj9gdGcD.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
