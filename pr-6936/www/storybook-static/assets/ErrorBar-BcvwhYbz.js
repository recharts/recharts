import{j as r}from"./jsx-runtime-098SxN5L.js";import{useMDXComponents as n}from"./index-PVTDzra9.js";import{M as s,C as a,a as p}from"./blocks-BQOPPKO6.js";import{C as m,A as i}from"./ErrorBar.stories-BEON02hy.js";import"./iframe-BRGG-JoH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8mL5N4x.js";import"./utils-ePvtT4un.js";import"./ErrorBar-502XnCse.js";import"./Layer-Da-YNOyz.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./ErrorBarContext-v-g5O0yz.js";import"./RechartsWrapper-9pcaaxwh.js";import"./arrayEqualityCheck-mIQ5hzOq.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./CSSTransitionAnimate-ItkpAa9E.js";import"./useAnimationId-CqPKjgNu.js";import"./ZIndexLayer-D0IJam7I.js";import"./ScatterChart-BE-99ygc.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./CartesianGrid-CAZWUUAM.js";import"./CartesianAxis-BoArf1fz.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./Label-cR9E2h9U.js";import"./types-BKK4rjEh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cdr81EpX.js";import"./YAxis-Dr8aURmX.js";import"./Scatter-kuBqxFBB.js";import"./ReactUtils-Dc8DAnTF.js";import"./Curve-D65O9kIu.js";import"./tooltipContext-BgeYg4JW.js";import"./Symbols-Bp7HaOpu.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./RechartsHookInspector-Ctx1w3em.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
