import{j as e}from"./jsx-runtime-DToctIKw.js";import{useMDXComponents as r}from"./index-G1YJ7ZJY.js";import{M as o,C as s,a as p}from"./blocks-CKiTN3mu.js";import{C as h}from"./useOffset.stories-BbCRz8Oa.js";import"./iframe-CJsZiOdQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5U_62lg.js";import"./OffsetShower-qPlPbWlS.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./arrayEqualityCheck-DmoSYxVB.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./ComposedChart-BnSciooP.js";import"./RechartsWrapper-C6hoNl5r.js";import"./zIndexSlice-DOwFRgwN.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./Line-BNl370Ap.js";import"./Layer-saDXbA70.js";import"./ReactUtils-B6les9Ok.js";import"./Label-B5dudWmS.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./ActivePoints-s1VLO5u4.js";import"./Dot-C-IcEIkw.js";import"./types--3K6j7TR.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./ErrorBarContext-BSMEYapQ.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./useAnimationId-992q7OPb.js";import"./getRadiusAndStrokeWidthFromDot-B69isiT9.js";import"./ActiveShapeUtils-DoWMc9rU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DIx0VdbO.js";import"./Trapezoid-C7AD2RUx.js";import"./Sector-CNxjvECL.js";import"./Symbols-DzvLu2sy.js";import"./Curve-5kCuP2Ri.js";import"./XAxis-8z1ahuYp.js";import"./CartesianAxis-Bxrejv1n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CY7M7u2R.js";import"./Legend-D3LeUZBA.js";import"./useElementOffset-ByOgFwSC.js";import"./iteratee-BR97XEbH.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
