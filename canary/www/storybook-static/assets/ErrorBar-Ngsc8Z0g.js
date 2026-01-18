import{j as r}from"./jsx-runtime-D6LStL39.js";import{useMDXComponents as n}from"./index-D8_IUNja.js";import{M as s,C as a,a as p}from"./blocks-D7ZSvUob.js";import{C as l,A as i}from"./ErrorBar.stories-D-A9mbgN.js";import"./iframe--x23rdHV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DL_1z0BC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DRn_8Ge9.js";import"./Layer-W9JL67lG.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./ErrorBarContext-z3_2koBv.js";import"./RechartsWrapper-CaVQgtIT.js";import"./arrayEqualityCheck-BD1qZPxT.js";import"./PolarUtils-DJ6pmdE6.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./CSSTransitionAnimate-Cmc6t0_O.js";import"./useAnimationId-DUCYZNMW.js";import"./ZIndexLayer-ezCnztm4.js";import"./ScatterChart-D2sXS_9Y.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./CartesianGrid-CWvvQXSx.js";import"./CartesianAxis-kvi8Pcym.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./Label-CHtfbXlI.js";import"./types-DIiwzDHn.js";import"./XAxis-C6zLiMLH.js";import"./YAxis-DrKE9qmp.js";import"./Scatter-BWdqSAig.js";import"./ReactUtils-Bbi28O4z.js";import"./Curve-BsoHhr4Y.js";import"./tooltipContext-DeJUwuti.js";import"./Symbols-DVanmgvf.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./Trapezoid-B1cr3UmX.js";import"./Sector-En_dyy3k.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./RechartsHookInspector-CS_N4Y-F.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
