import{j as e}from"./jsx-runtime-grWbM4yW.js";import{useMDXComponents as o}from"./index-Ybzk1HbC.js";import{M as r,C as s,a as p}from"./blocks-BNskXGyE.js";import{C as h}from"./useOffset.stories-B6lCHFBP.js";import"./iframe-CWA75x6f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-rMQlUXxN.js";import"./OffsetShower-ra48L2at.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./arrayEqualityCheck-BbPHrIiT.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./ComposedChart-CikPPUoS.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./zIndexSlice-BxnMOy2T.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Line-BNgkxC6S.js";import"./Layer-Dyb8NBHJ.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ZIndexLayer-C1tQmmyV.js";import"./ActivePoints-Dmg5s4MQ.js";import"./Dot-Bdf28i8O.js";import"./types-ieTTG77J.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./useAnimationId-CiXad0CX.js";import"./getRadiusAndStrokeWidthFromDot-BEv_HS27.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./Symbols-BfpcWYyT.js";import"./Curve-DzqGeZIr.js";import"./XAxis-DIb7kM4Q.js";import"./CartesianAxis-CEnZCSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis--OX2yYy6.js";import"./Legend-5u77eCaZ.js";import"./useElementOffset-Xph5u3Ao.js";import"./iteratee-YaRpC3LM.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
