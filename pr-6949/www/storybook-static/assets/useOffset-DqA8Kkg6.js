import{j as e}from"./jsx-runtime-B5BTotoZ.js";import{useMDXComponents as r}from"./index-BGRiz9Dx.js";import{M as o,C as s,a as p}from"./blocks-DF2y2d75.js";import{C as h}from"./useOffset.stories-aDt7bKeY.js";import"./iframe-CehQ8xFj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-jUFHLVIb.js";import"./OffsetShower-BbVpqDQS.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./arrayEqualityCheck-CJf3kznu.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./ComposedChart-Db5HmFmR.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./zIndexSlice-39s27tLx.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./Line-7p-G_wDt.js";import"./Layer-6nj2T2Rl.js";import"./ReactUtils-tMfbrahw.js";import"./Label-Dw6m4C0Z.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./ZIndexLayer-DeWQbK55.js";import"./ActivePoints-BwDt8lt_.js";import"./Dot-BD7d-X5L.js";import"./types-CYKcJHFL.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./useAnimationId-D1z7wJlQ.js";import"./getRadiusAndStrokeWidthFromDot-BvetFLdH.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5fxMoAB.js";import"./Trapezoid-Cym11nDl.js";import"./Sector-mF7w8-S5.js";import"./Symbols-D-9teC2q.js";import"./Curve-D1ENGCAK.js";import"./XAxis-Dibf-8ej.js";import"./CartesianAxis-CZCa0md7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D-v27uKG.js";import"./Legend-Bj4cUftl.js";import"./useElementOffset-tZncUcCf.js";import"./iteratee-5PeM9vti.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
