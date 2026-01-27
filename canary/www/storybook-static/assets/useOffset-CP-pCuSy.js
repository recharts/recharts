import{j as e}from"./jsx-runtime-vhnusKH7.js";import{useMDXComponents as o}from"./index-DC12QoLr.js";import{M as r,C as s,a as p}from"./blocks-DaouS2t5.js";import{C as h}from"./useOffset.stories-C3lvlsck.js";import"./iframe-BZbOzzTY.js";import"./preload-helper-Dp1pzeXC.js";import"./index--k4eFqf6.js";import"./OffsetShower-BDJynaSn.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./arrayEqualityCheck-D0qDv0Fd.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./ComposedChart-BgDb9u1m.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./zIndexSlice-J5rUHDmR.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./Line-LxyfomlY.js";import"./Layer-Ca1ZcU8K.js";import"./ReactUtils-BZBgIdmA.js";import"./Label-D9W5dwQ-.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./ZIndexLayer-CLlHxURh.js";import"./ActivePoints-BRi6GRMs.js";import"./Dot-DfVv_DrD.js";import"./types-CCRlLAaX.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./ErrorBarContext-D7kGcYfA.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./useAnimationId-CbTMmgPX.js";import"./getRadiusAndStrokeWidthFromDot-CRFNvcSQ.js";import"./ActiveShapeUtils-dkNue--z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkInrNvF.js";import"./Trapezoid-vZxOp19A.js";import"./Sector-Cp2fRZg0.js";import"./Symbols-BeK0vgrh.js";import"./Curve-LGs6YPsX.js";import"./XAxis-D_0iXdcr.js";import"./CartesianAxis-B2T9DZ1W.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dya7AK5Z.js";import"./Legend-CjRF6FTa.js";import"./useElementOffset-Dh2fW2NM.js";import"./iteratee-L5Ky7jPy.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
