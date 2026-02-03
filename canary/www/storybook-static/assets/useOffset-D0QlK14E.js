import{j as e}from"./jsx-runtime-CMFNmbZc.js";import{useMDXComponents as r}from"./index-GIPnfRue.js";import{M as o,C as s,a as p}from"./blocks-Q1u18JO9.js";import{C as h}from"./useOffset.stories-D0yJ6fwO.js";import"./iframe-BP2nTpch.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3FDMrYE.js";import"./OffsetShower-DpRHCxQ6.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./arrayEqualityCheck-uIVE1gVz.js";import"./resolveDefaultProps-pblYALGE.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-C4-fdNyt.js";import"./axisSelectors-D2SDnJRJ.js";import"./ComposedChart-DZabq8it.js";import"./RechartsWrapper-B99qXj5r.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./Line-DWbyZqWl.js";import"./Layer-2wKCZbds.js";import"./ReactUtils-8y56L2KY.js";import"./Label-CpYvd4nZ.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./ZIndexLayer-571M2aB4.js";import"./ActivePoints-wLrf3G7J.js";import"./Dot-UJc7CKGe.js";import"./types-7mx8q_Dg.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./ErrorBarContext-NtZ5hNP2.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./useAnimationId-BKvpnK5Z.js";import"./getRadiusAndStrokeWidthFromDot-CWkvHCAb.js";import"./ActiveShapeUtils-CDlOYSnz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-OJy3hMDx.js";import"./Trapezoid-n9rYv4uE.js";import"./Sector-iFxFptm9.js";import"./Symbols-99I1PudQ.js";import"./Curve-DDVqNpBq.js";import"./XAxis-CXtp3tfD.js";import"./CartesianAxis-Dig3Hc3j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-nqLFZHiU.js";import"./Legend-CZGfaFJW.js";import"./useElementOffset-BA3_qNb-.js";import"./iteratee-oCzkJu6y.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
