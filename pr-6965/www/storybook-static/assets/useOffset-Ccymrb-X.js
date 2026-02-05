import{j as e}from"./jsx-runtime-Ck6dWWCG.js";import{useMDXComponents as r}from"./index-C1qMLbxk.js";import{M as o,C as s,a as p}from"./blocks-BeFvB4Nq.js";import{C as h}from"./useOffset.stories-DzCehgtl.js";import"./iframe-D44FkRcR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7ezxrhm.js";import"./OffsetShower-BfGtxzWE.js";import"./ChartSizeDimensions-B61qSqob.js";import"./arrayEqualityCheck-CpHRyEoZ.js";import"./resolveDefaultProps-C9MxTna8.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./ComposedChart-BJqa9Xh0.js";import"./RechartsWrapper-CZxiJS72.js";import"./zIndexSlice-By2Q2sEz.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./Line-CGS71pfF.js";import"./Layer-Cw02mn90.js";import"./ReactUtils-Dk5cr1D8.js";import"./Label-BDKklye7.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./ZIndexLayer-6GEHbSGN.js";import"./ActivePoints-ClEt73cA.js";import"./Dot-CxuisgTC.js";import"./types-BaOyAkY9.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./ErrorBarContext-WrFhm3tP.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./useAnimationId-B6KoK7rR.js";import"./getRadiusAndStrokeWidthFromDot-c3x0UpIy.js";import"./ActiveShapeUtils-CvDVndyY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuTYB5sP.js";import"./Trapezoid-B3gZXa3J.js";import"./Sector-CGH7Ttue.js";import"./Symbols-D2aKUPGo.js";import"./Curve-gEApNnTT.js";import"./XAxis-Bc7aqN4V.js";import"./CartesianAxis-CQLQyo5l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B19HmFuc.js";import"./Legend-Cq3fip5T.js";import"./useElementOffset-BhWAtdqB.js";import"./iteratee-CgLyGfPs.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
