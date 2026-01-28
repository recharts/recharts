import{j as e}from"./jsx-runtime-DsowtnR4.js";import{useMDXComponents as o}from"./index-DJyUApAR.js";import{M as r,C as s,a as p}from"./blocks-DsY1BtWo.js";import{C as h}from"./useOffset.stories-CwQ08IFm.js";import"./iframe-DE0S0nct.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9PHO12n.js";import"./OffsetShower-6Tlh9GY1.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./arrayEqualityCheck-njkWtJmX.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./ComposedChart-CEBgx6h9.js";import"./RechartsWrapper-C5KB-qxr.js";import"./zIndexSlice-Blf1dc2N.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./Line-Cb1a5OKW.js";import"./Layer-BleDqXEW.js";import"./ReactUtils-BtFFfC7o.js";import"./Label-DgM-_lJi.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./ActivePoints-CsWDm8lK.js";import"./Dot-D5tclzZ_.js";import"./types-B8SW-iMR.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./useAnimationId-BumXreuS.js";import"./getRadiusAndStrokeWidthFromDot-D6SrTg5b.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./Symbols-w5RZTm0Y.js";import"./Curve-BVDZfIkI.js";import"./XAxis-HiP-oMgI.js";import"./CartesianAxis-CwKKuba7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-ASXYxn9M.js";import"./Legend-CufHvxxK.js";import"./useElementOffset-G6wVWYzT.js";import"./iteratee-DE09Y-Is.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s,{of:void 0,layout:"padded"}),`
`,e.jsx(i.h2,{id:"description",children:"Description"}),`
`,e.jsx("p",{children:"Returns the offset of the chart in pixels."}),`
`,e.jsx("p",{children:`Offset defines the blank space between the chart and the plot area.
This blank space is occupied by supporting elements like axes, legends, and brushes.`}),`
`,e.jsx("p",{children:"The offset includes:"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Margins"}),e.jsx("li",{children:"Width and height of the axes"}),e.jsx("li",{children:"Width and height of the legend"}),e.jsx("li",{children:"Brush height"})]}),`
`,e.jsx("p",{children:"If you are interested in the margin alone, use useMargin instead."}),`
`,e.jsx("p",{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx("p",{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsxs("p",{children:["This hook must be used within a chart context (inside a ",e.jsx("code",{children:"<LineChart>"}),", ",e.jsx("code",{children:"<BarChart>"}),`, etc.).
This hook returns `,e.jsx("code",{children:"undefined"})," if used outside a chart context."]}),`
`,e.jsx("p",{children:"Available since Recharts 3.1"}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{of:void 0})]})}function se(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{se as default};
