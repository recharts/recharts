import{j as r}from"./jsx-runtime-jI-BIKjm.js";import{useMDXComponents as n}from"./index-Cu_oyHyB.js";import{M as s,C as a,a as p}from"./blocks-CwAjfW29.js";import{C as m,A as i}from"./ErrorBar.stories-CsZn3K6J.js";import"./iframe-Bnj2hik-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXTK0ASf.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DiSASaqT.js";import"./Layer-CTa4OydD.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./ErrorBarContext-D6agTjiV.js";import"./RechartsWrapper-B0Rp0hND.js";import"./arrayEqualityCheck-CvUuuvKy.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./zIndexSlice-CXHmHRtI.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./CSSTransitionAnimate-B_qQcxQS.js";import"./useAnimationId-APU2l9w6.js";import"./ZIndexLayer-AOmKG0iq.js";import"./ScatterChart-C3H3xIHL.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./CartesianGrid-ClAraMwg.js";import"./CartesianAxis-5Ck476fs.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./Label-CGAHaC0Q.js";import"./types-BDwtxhLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DOcRfQ-w.js";import"./YAxis-D5VnaMC1.js";import"./Scatter-COvdsX-r.js";import"./ReactUtils-Df0RtsJl.js";import"./Curve-DmusCa7H.js";import"./tooltipContext-C91HkTF6.js";import"./Symbols-DhIIpi5f.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./RechartsHookInspector-C_AeFs2E.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
