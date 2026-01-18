import{j as r}from"./jsx-runtime-BmH1iT4w.js";import{useMDXComponents as n}from"./index-BzupHtTJ.js";import{M as s,C as a,a as p}from"./blocks-C9fTe78U.js";import{C as l,A as i}from"./ErrorBar.stories-ChPgL6Gt.js";import"./iframe-HE4l6gpY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CuPLL4UF.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cu0iVqo2.js";import"./Layer-BUJF1xKh.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./ErrorBarContext-CKHDFfpn.js";import"./RechartsWrapper-rscDC45n.js";import"./arrayEqualityCheck-zbhzaWLf.js";import"./PolarUtils-DtB8lpuj.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./zIndexSlice-CDFEuO1j.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./CSSTransitionAnimate-j3K1PiqB.js";import"./useAnimationId-CIwDHleW.js";import"./ZIndexLayer-C9xwCaJR.js";import"./ScatterChart-DlyfwcAS.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./CartesianGrid-D8OAbM8Q.js";import"./CartesianAxis-DHNzlHQb.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./Label-D3UA2eyA.js";import"./types-CN_ngcpa.js";import"./XAxis-DdaPXuK0.js";import"./YAxis-WQBuKMWe.js";import"./Scatter-DhAL1mP-.js";import"./ReactUtils-DzgF8jcH.js";import"./Curve-B2qa_Fpt.js";import"./tooltipContext-BsYYO75B.js";import"./Symbols-DoDZ9cAV.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./Trapezoid-DAtsx-SU.js";import"./Sector-CwzJgIqc.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./RechartsHookInspector-JJmqV01h.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
