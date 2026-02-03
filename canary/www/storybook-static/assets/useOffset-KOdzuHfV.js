import{j as e}from"./jsx-runtime-82pCUZyu.js";import{useMDXComponents as r}from"./index-DGRoF5ja.js";import{M as o,C as s,a as p}from"./blocks-CTKcX3Us.js";import{C as h}from"./useOffset.stories-CeDkr6vJ.js";import"./iframe-Dw3q2J_C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-cG5s137W.js";import"./OffsetShower-shA12VSX.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./arrayEqualityCheck-CyZN96pQ.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./ComposedChart-qdmZkWDY.js";import"./RechartsWrapper-BxCpSvqF.js";import"./zIndexSlice-CgOi6Kpf.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./Line-c1IAKOzu.js";import"./Layer-kgIv22jT.js";import"./ReactUtils-CRr71kpZ.js";import"./Label-BTeufvbK.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./ZIndexLayer-QOZqstTD.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./types-BJHbMGwM.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./useAnimationId-BJQnqM8-.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./XAxis-BkGhyUaZ.js";import"./CartesianAxis-Dx05xS85.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Rj4UToqR.js";import"./Legend-CAf-rXVr.js";import"./useElementOffset-m4QFPyQu.js";import"./iteratee-CYRk1_iR.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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
