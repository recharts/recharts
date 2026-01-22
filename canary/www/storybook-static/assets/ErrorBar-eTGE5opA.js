import{j as r}from"./jsx-runtime-Dg0pAL7i.js";import{useMDXComponents as n}from"./index-lu-_WLVA.js";import{M as s,C as a,a as p}from"./blocks-Cf5CHvFH.js";import{C as m,A as i}from"./ErrorBar.stories-BAWEQHTY.js";import"./iframe-DZKc3wlS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ZKZvtgb5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-cDGuz-hI.js";import"./Layer-DH-WpK_h.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./ErrorBarContext-DvKtKMAK.js";import"./RechartsWrapper-CFmROmVB.js";import"./arrayEqualityCheck-DjWYx_fN.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./zIndexSlice-B0ARFS3L.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./CSSTransitionAnimate-BnAMhBdD.js";import"./useAnimationId-NX8Gitos.js";import"./ZIndexLayer-DokrlvR2.js";import"./ScatterChart-KfKQGyj2.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./CartesianGrid-CHpJW8RT.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-kwyNZCQz.js";import"./YAxis-BIjjeUdJ.js";import"./Scatter-Dl6wE1hf.js";import"./ReactUtils-rr4vsGZe.js";import"./Curve-gwVQ8PMT.js";import"./tooltipContext-Bvo5mwDL.js";import"./Symbols-CqfdXGpW.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./RechartsHookInspector-Co_Fh5Fl.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
