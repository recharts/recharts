import{j as r}from"./jsx-runtime-CzsI2sfF.js";import{useMDXComponents as n}from"./index-B4LdrJu-.js";import{M as p,C as s,a}from"./blocks-CGw1J_Gp.js";import{C as m,A as i}from"./ErrorBar.stories-CruQavHo.js";import"./iframe-DDnGsu5h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFiQJbL_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C3myEnQc.js";import"./Layer-BQ5I3ZR3.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fGyvU07W.js";import"./ErrorBarContext-Bza5L9FQ.js";import"./RechartsWrapper-CV2CC7gc.js";import"./arrayEqualityCheck-b4GtS9KF.js";import"./immer-Wl9pIdwq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-d0V4PGet.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./CSSTransitionAnimate-C1Qk3Wtk.js";import"./useAnimationId-CsY2QYNS.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./ScatterChart-4Xv_kPAe.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./CartesianGrid-Cqk_p3-f.js";import"./CartesianAxis-C4D4URoI.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./Label-Cq1Jw9bg.js";import"./types-VBSg6qfW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-_OohREfq.js";import"./YAxis-BFUe8vT1.js";import"./Scatter-DxSMcv11.js";import"./ReactUtils-LLGJjmJY.js";import"./Curve-CVMF8Bc_.js";import"./step-NA2d-6xM.js";import"./tooltipContext-CoCbKAdq.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";import"./ActiveShapeUtils-Qp0g2m0V.js";import"./isPlainObject-dg6p2L4N.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CItL8Q7z.js";import"./Trapezoid-sOsheLpd.js";import"./Sector-DVi4Mpj4.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./RechartsHookInspector-BSABdRIX.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./OffsetShower-C6Pk8qlF.js";import"./PlotAreaShower-Dg7-kQiU.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
