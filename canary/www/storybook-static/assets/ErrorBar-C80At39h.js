import{j as r}from"./jsx-runtime-BQ34JDLm.js";import{useMDXComponents as n}from"./index-BkUJnvjg.js";import{M as p,C as s,a}from"./blocks-DXToP8FT.js";import{C as m,A as i}from"./ErrorBar.stories-CiTnlKxh.js";import"./iframe-B4ZOa_Yu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8tftqM8.js";import"./utils-ePvtT4un.js";import"./ErrorBar-y_i3GcEo.js";import"./Layer-D8UY7UMK.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DcaNso53.js";import"./ErrorBarContext-CqZUOVMv.js";import"./RechartsWrapper-B66RMWp1.js";import"./arrayEqualityCheck-C7qm6m5x.js";import"./immer-B05rlcy5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DBSwNlxD.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./zIndexSlice-L-52L8l2.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./CSSTransitionAnimate-B7gQQQ0v.js";import"./useAnimationId-BoXeTLIY.js";import"./ZIndexLayer-DJVNNdtG.js";import"./ScatterChart-DS5G9xuY.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./CartesianGrid-D8vgK1HJ.js";import"./CartesianAxis-CCuPeB1h.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./Label-CDxkI7IB.js";import"./types-Cvz57JP2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Ds-wBXG3.js";import"./YAxis-ORG4L0tf.js";import"./Scatter-D-NLkMHZ.js";import"./ReactUtils-upui8jKZ.js";import"./Curve-BSyKD1Ot.js";import"./step-bVfLcMGZ.js";import"./tooltipContext--0OsqvnA.js";import"./Symbols-aoMnmAhk.js";import"./symbol-ClQQoX6e.js";import"./ActiveShapeUtils-t1m8X5yO.js";import"./isPlainObject-CdRNPTy1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-qe02Stpb.js";import"./Trapezoid-C5xqhjGS.js";import"./Sector-DG-V-cIW.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./RechartsHookInspector-D8rerupA.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
