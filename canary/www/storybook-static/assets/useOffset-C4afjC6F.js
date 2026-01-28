import{j as e}from"./jsx-runtime-Bx7Ar4JM.js";import{useMDXComponents as o}from"./index-Cr5VfxjR.js";import{M as r,C as s,a as p}from"./blocks-B05gnAFO.js";import{C as h}from"./useOffset.stories-BNUp16uE.js";import"./iframe-C4IWMahh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aiWA5sXu.js";import"./OffsetShower-CMENuWZ2.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./arrayEqualityCheck-0GnG-RUv.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./ComposedChart-nnzp2Q6q.js";import"./RechartsWrapper-D1ed8gsV.js";import"./zIndexSlice-CIYOR3wZ.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./Line-4z32avHq.js";import"./Layer-CdQ-wzgp.js";import"./ReactUtils-DjwylJ1a.js";import"./Label-C0TeAK2L.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./ZIndexLayer-BJJTWLZI.js";import"./ActivePoints-uikp9xPQ.js";import"./Dot-B6v543Pb.js";import"./types-Dnr4tbcG.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./ErrorBarContext-C2hEeIYE.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./useAnimationId-DNnry8cr.js";import"./getRadiusAndStrokeWidthFromDot-DZBvYZ8u.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-3bF21H.js";import"./Trapezoid-CRuG6j_-.js";import"./Sector-wIi7OYIA.js";import"./Symbols-BZom7IJQ.js";import"./Curve-DlsjNj4d.js";import"./XAxis-BngJLTZF.js";import"./CartesianAxis-DOkMNxmt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Ba9FHWJv.js";import"./Legend-BnPfdZH3.js";import"./useElementOffset-DM7EgaVV.js";import"./iteratee-C11Ig8yy.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
