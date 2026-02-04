import{j as e}from"./jsx-runtime-T4XNx38_.js";import{useMDXComponents as r}from"./index-B71C0mAK.js";import{M as o,C as s,a as p}from"./blocks-BTAj7rkt.js";import{C as h}from"./useOffset.stories-BAXExWAb.js";import"./iframe-2vdihYaA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIOAgVA6.js";import"./OffsetShower-ePUr3CkU.js";import"./ChartSizeDimensions-C8811dw0.js";import"./arrayEqualityCheck-Cz6bem1a.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DRq4Dknc.js";import"./axisSelectors-B6I2jDAj.js";import"./ComposedChart-owjmqR1m.js";import"./RechartsWrapper-BKqPTBXa.js";import"./zIndexSlice-_CZsqZq4.js";import"./CartesianChart-CgDezk2P.js";import"./chartDataContext-DF08vkso.js";import"./CategoricalChart-CTkRrNay.js";import"./Line-C2YKaF46.js";import"./Layer-BY-fsyoM.js";import"./ReactUtils-YY1V_Sy8.js";import"./Label-DyVMIxDt.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./ZIndexLayer-BhK_pYZk.js";import"./ActivePoints-BSNIUG_f.js";import"./Dot-CgptiLQj.js";import"./types-BVLdKdSl.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./ErrorBarContext-CWPUp6By.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./useAnimationId-C00yQmDC.js";import"./getRadiusAndStrokeWidthFromDot-Ryy3WNXf.js";import"./ActiveShapeUtils-BzwzNQ6E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-LulPmG5i.js";import"./Trapezoid-Csj6mQp9.js";import"./Sector-BfatqE6A.js";import"./Symbols-DySEQhPv.js";import"./Curve-CO1p58ib.js";import"./XAxis-Dj-4Nnot.js";import"./CartesianAxis-BzbcZQiG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DeIibkX2.js";import"./Legend-CFipEMHM.js";import"./useElementOffset-CC3Rdwqu.js";import"./iteratee-BCiuY1w8.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
