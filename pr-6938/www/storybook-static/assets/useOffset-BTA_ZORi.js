import{j as e}from"./jsx-runtime-mmukPk0j.js";import{useMDXComponents as o}from"./index-BRsLgt2v.js";import{M as r,C as s,a as p}from"./blocks-DT9CoFJI.js";import{C as h}from"./useOffset.stories-B0Z3-zGf.js";import"./iframe-DsOUfprP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-G8W79pF2.js";import"./OffsetShower-CmgUZqHD.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./arrayEqualityCheck-DjO11PbP.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-wPJ0hpZq.js";import"./axisSelectors-CJQMQFai.js";import"./ComposedChart-bIhTAvLw.js";import"./RechartsWrapper-DwZNGVuW.js";import"./zIndexSlice-Dgi_woyo.js";import"./CartesianChart-BHRGlbKq.js";import"./chartDataContext-Dq9n1Njf.js";import"./CategoricalChart-BNNYxF9g.js";import"./Line-Bsatc-QO.js";import"./Layer-LWw9M75d.js";import"./ReactUtils-CwDP136p.js";import"./Label-CbeoYjYN.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./ZIndexLayer-kg9R7P8d.js";import"./ActivePoints-D2olhcFn.js";import"./Dot-DDC52ur4.js";import"./types-PuShQX9K.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./ErrorBarContext-D6eG4SLo.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./useAnimationId-zJAyy6w7.js";import"./getRadiusAndStrokeWidthFromDot-4V8YrcAz.js";import"./ActiveShapeUtils-CdiCAAYX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqV75pSw.js";import"./Trapezoid-tgNCAV59.js";import"./Sector-ClMrTgKg.js";import"./Symbols-DhTE1eBy.js";import"./Curve-DNHLMjMe.js";import"./XAxis-CfXuJc3U.js";import"./CartesianAxis-Cr7pmBhV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-hF6Y_Nk5.js";import"./Legend-CjMNvEPR.js";import"./useElementOffset-BiZyTWEL.js";import"./iteratee-0AV18N5w.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
