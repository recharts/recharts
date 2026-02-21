import{j as r}from"./jsx-runtime-Cko-sa4r.js";import{useMDXComponents as n}from"./index-EznypIAP.js";import{M as p,C as s,a}from"./blocks-CeTXroBz.js";import{C as m,A as i}from"./ErrorBar.stories-C0YMWrlK.js";import"./iframe-_bxOXoO9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6dEx3op.js";import"./utils-ePvtT4un.js";import"./ErrorBar-w0Rx4kqp.js";import"./Layer-B4OQX5mX.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./ErrorBarContext-3ohsNMPc.js";import"./RechartsWrapper-CLtRnOh5.js";import"./arrayEqualityCheck-B7kPjOe4.js";import"./immer-4xgaWIU1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BFgxmFq6.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./zIndexSlice-YmRlXVtY.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./CSSTransitionAnimate-BQ_qklwC.js";import"./useAnimationId-CniUVvXd.js";import"./ZIndexLayer-B8XFMXb9.js";import"./ScatterChart-Cgc4ZcM8.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./CartesianGrid-CccUh1NJ.js";import"./CartesianAxis-B0aXIuqq.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./Label-puZUAwbJ.js";import"./types-CaD-AAbb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B25iHqjD.js";import"./YAxis-A1NUb23w.js";import"./Scatter-cmvVT1qN.js";import"./ReactUtils-BFPf_n2z.js";import"./Curve-lVDO4rto.js";import"./step-eq8OAlUh.js";import"./tooltipContext-BS9cuw2S.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaX2mvZh.js";import"./Trapezoid-D0RHyHyZ.js";import"./Sector-Dr45uA-k.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./RechartsHookInspector-CQ4RIQ5B.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
