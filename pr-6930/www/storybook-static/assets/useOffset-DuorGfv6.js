import{j as e}from"./jsx-runtime-G3k6UosI.js";import{useMDXComponents as o}from"./index-CzCDcHki.js";import{M as r,C as s,a as p}from"./blocks-DVMJ2hJm.js";import{C as h}from"./useOffset.stories-lLFlnp76.js";import"./iframe-BUAHB1JE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8QR5MVL.js";import"./OffsetShower-CLEQK-Rx.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./arrayEqualityCheck-D5cvBvD0.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./ComposedChart-nJQCUmgK.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./zIndexSlice-DtimrYBU.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./Line-BMwtlPHX.js";import"./Layer-Cm056lbD.js";import"./ReactUtils-kUjnR9HA.js";import"./Label-DycKUeOS.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./ZIndexLayer-CvBAZeUB.js";import"./ActivePoints-pyP3ozvA.js";import"./Dot-BGsAxFXQ.js";import"./types-ztb1_leN.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./useAnimationId-Dqqe1r9b.js";import"./getRadiusAndStrokeWidthFromDot-Dv5iWKAB.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Symbols-B668NUUf.js";import"./Curve-U_sOEQqK.js";import"./XAxis-DeVneqRd.js";import"./CartesianAxis-Ne59jWj5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DerY_BUY.js";import"./Legend-BtH_8EdQ.js";import"./useElementOffset-DeXK_2aY.js";import"./iteratee-ca00GqX-.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
