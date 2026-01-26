import{j as e}from"./jsx-runtime-BjdjlxWg.js";import{useMDXComponents as o}from"./index-BI393XWI.js";import{M as r,C as s,a as p}from"./blocks-BAaWxpqy.js";import{C as h}from"./useOffset.stories-DdNHpdUH.js";import"./iframe-DZUAPGWU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-R3RI3I7Q.js";import"./OffsetShower-B5l6vGiv.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./arrayEqualityCheck-B_Kj_5n3.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CmVGlUZA.js";import"./axisSelectors-DL2NuUaJ.js";import"./ComposedChart-D0Cabu4N.js";import"./RechartsWrapper-CZEU1xAf.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./CartesianChart-DFIFFZ02.js";import"./chartDataContext-uOI58bDP.js";import"./CategoricalChart-DjpQG7hJ.js";import"./Line-LYCvK7Jw.js";import"./Layer-CUM7VYJb.js";import"./ReactUtils-BwhtQEJo.js";import"./Label-BpGSAoxQ.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./ZIndexLayer-48hS6z3u.js";import"./ActivePoints-DBfahspR.js";import"./Dot-Cev7F8Ms.js";import"./types-gnnl7DTW.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./ErrorBarContext-qHTOOodp.js";import"./GraphicalItemClipPath-BFVsLge8.js";import"./SetGraphicalItem-BexwVPUx.js";import"./useAnimationId-eGODZItY.js";import"./getRadiusAndStrokeWidthFromDot-CUXV8xqK.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./Trapezoid-B65I0G_8.js";import"./Sector-Bi4APoRd.js";import"./Symbols-CJWWl_NZ.js";import"./Curve-OnMyuRM1.js";import"./XAxis-B_pa2cFU.js";import"./CartesianAxis-Cxo8uXUJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DpSUJ6BG.js";import"./Legend-Bo6_JZD5.js";import"./useElementOffset-BC7wqAzr.js";import"./iteratee-Ct_qYfh9.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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
