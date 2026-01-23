import{j as r}from"./jsx-runtime-Dt_k-8Jd.js";import{useMDXComponents as n}from"./index-C4KwUtgz.js";import{M as s,C as a,a as p}from"./blocks-BoEDorPv.js";import{C as m,A as i}from"./ErrorBar.stories-B0-JEuHB.js";import"./iframe-CT4QuQ5L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDx2nU6r.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C7w1OKOt.js";import"./Layer-BIxjtyeO.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./arrayEqualityCheck-CUEtHgfA.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./CSSTransitionAnimate-CWTZETqb.js";import"./useAnimationId-ByA7rgvy.js";import"./ZIndexLayer-B4whtcRw.js";import"./ScatterChart-CqLFdMJm.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./CartesianGrid-B5eEZuRf.js";import"./CartesianAxis-ByfjT7H_.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DHcCUjsJ.js";import"./YAxis-BZSCjBeJ.js";import"./Scatter-CDo0puPS.js";import"./ReactUtils-BD8G1aYb.js";import"./Curve-CwfbqPR9.js";import"./tooltipContext-BarcjW0L.js";import"./Symbols-NgG1d1Uj.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./Trapezoid-C3eKH3hP.js";import"./Sector-BFKxB58R.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./RechartsHookInspector-lcTlhUAW.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
