import{j as r}from"./jsx-runtime-DrgoCsxg.js";import{useMDXComponents as n}from"./index-NVpFX7nQ.js";import{M as s,C as a,a as p}from"./blocks-B0bnM7_p.js";import{C as m,A as i}from"./ErrorBar.stories-BuLtGFXQ.js";import"./iframe-NQnSavsc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtOaP7ae.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bip7xVQe.js";import"./Layer-BUJpEzYu.js";import"./resolveDefaultProps-clR4-9At.js";import"./ErrorBarContext-CSixxnwN.js";import"./RechartsWrapper-BFx6ycKR.js";import"./arrayEqualityCheck-ClUhvVMc.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./zIndexSlice-nS_oTVB0.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./CSSTransitionAnimate-BD-d8R8W.js";import"./useAnimationId-DY2MKiMD.js";import"./ZIndexLayer-D7r7UDo0.js";import"./ScatterChart-DCL0ox7C.js";import"./CartesianChart-DsO03C2-.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./CartesianGrid-uwgsZBij.js";import"./CartesianAxis-BxH1zk3Y.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./Label-CdLQa_Zq.js";import"./types-Ditu6fq2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BVWUh-i7.js";import"./YAxis-B4mT5_6h.js";import"./Scatter-Bm5QPvIa.js";import"./ReactUtils-B56Ms0vK.js";import"./Curve-D3iL2MuF.js";import"./tooltipContext-BSe215jy.js";import"./Symbols-C7hNVpPd.js";import"./ActiveShapeUtils-CdNAARSB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dUbZu5CP.js";import"./Trapezoid-BZ0zgDCf.js";import"./Sector-DKYprxhX.js";import"./GraphicalItemClipPath-DBWQaJ3W.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./RechartsHookInspector-CrS4ifUj.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
