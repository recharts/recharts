import{j as r}from"./jsx-runtime-VOn040px.js";import{useMDXComponents as n}from"./index-DSoz2U42.js";import{M as p,C as s,a}from"./blocks-C8ZX7NBH.js";import{C as m,A as i}from"./ErrorBar.stories-C8Zzvyjm.js";import"./iframe-CqeTTYgU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3OxvjqV.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bv7cgNhv.js";import"./Layer-BQFYDPNU.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cwp1jNVd.js";import"./ErrorBarContext-CkyHavp9.js";import"./RechartsWrapper-D6Akcaf8.js";import"./arrayEqualityCheck-Coc3X9xQ.js";import"./immer-Bmaq1-Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BO_IR7-E.js";import"./hooks-BVZwqIsr.js";import"./axisSelectors-eZrQ8WsS.js";import"./d3-scale-BUPtB_Da.js";import"./zIndexSlice-B88Xz9xU.js";import"./renderedTicksSlice-8ohVO2kh.js";import"./RegisterGraphicalItemId-BIO7eBqw.js";import"./CSSTransitionAnimate-DLZnpW57.js";import"./useAnimationId-qdD0Hx_g.js";import"./ZIndexLayer-3q_nDWL4.js";import"./ScatterChart-CPCwk-iE.js";import"./CartesianChart-DZdtJPpm.js";import"./chartDataContext-Ldzwvxi_.js";import"./CategoricalChart-BJzA0W2C.js";import"./CartesianGrid-yfJNILtK.js";import"./CartesianAxis-B73_0LJP.js";import"./Text-CnAhi5dg.js";import"./DOMUtils-CyUZ16Kt.js";import"./Label-CPRQ4lU_.js";import"./types-Bq8qb-jz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BD3HY8Ew.js";import"./YAxis-G7ixdQ8E.js";import"./Scatter-CnKN728u.js";import"./ReactUtils-B-FxzwwC.js";import"./Curve-BysHPIUF.js";import"./step-D7PdYBbD.js";import"./tooltipContext-BI-Mou3E.js";import"./Symbols-CZaCanOC.js";import"./symbol-DUDKRTy9.js";import"./ActiveShapeUtils-DuOrrb61.js";import"./isPlainObject-D0uwI2wh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ns2TMUOg.js";import"./Trapezoid-CAvqiTd0.js";import"./Sector-DAbvgQ-I.js";import"./GraphicalItemClipPath-CG5McJvS.js";import"./SetGraphicalItem--tjWfp6d.js";import"./RechartsHookInspector-DuqrKYC7.js";import"./ChartSizeDimensions-VEbBqbyV.js";import"./OffsetShower-DVBsz6mw.js";import"./PlotAreaShower-DAW7_xjH.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
