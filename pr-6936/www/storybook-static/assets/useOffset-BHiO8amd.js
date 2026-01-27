import{j as e}from"./jsx-runtime-098SxN5L.js";import{useMDXComponents as o}from"./index-PVTDzra9.js";import{M as r,C as s,a as p}from"./blocks-BQOPPKO6.js";import{C as h}from"./useOffset.stories-CeMQtPO1.js";import"./iframe-BRGG-JoH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8mL5N4x.js";import"./OffsetShower-BMRMJ2Vb.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./arrayEqualityCheck-mIQ5hzOq.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./ComposedChart-EtXkgG2p.js";import"./RechartsWrapper-9pcaaxwh.js";import"./zIndexSlice-DL-y9Kvz.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./Line-CyiRO5Eb.js";import"./Layer-Da-YNOyz.js";import"./ReactUtils-Dc8DAnTF.js";import"./Label-cR9E2h9U.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./ZIndexLayer-D0IJam7I.js";import"./ActivePoints-CjK9ehja.js";import"./Dot-BIp-1u7k.js";import"./types-BKK4rjEh.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./ErrorBarContext-v-g5O0yz.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./useAnimationId-CqPKjgNu.js";import"./getRadiusAndStrokeWidthFromDot-BFDSdXlw.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./Symbols-Bp7HaOpu.js";import"./Curve-D65O9kIu.js";import"./XAxis-Cdr81EpX.js";import"./CartesianAxis-BoArf1fz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dr8aURmX.js";import"./Legend-DF6u81l5.js";import"./useElementOffset-C8V_pdJZ.js";import"./iteratee-Dp3oOjSb.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
