import{j as r}from"./jsx-runtime-DToctIKw.js";import{useMDXComponents as n}from"./index-G1YJ7ZJY.js";import{M as s,C as a,a as p}from"./blocks-CKiTN3mu.js";import{C as l,A as i}from"./ErrorBar.stories-CyidNTaf.js";import"./iframe-CJsZiOdQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5U_62lg.js";import"./utils-ePvtT4un.js";import"./ErrorBar-TPZrQq8L.js";import"./Layer-saDXbA70.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./ErrorBarContext-BSMEYapQ.js";import"./RechartsWrapper-C6hoNl5r.js";import"./arrayEqualityCheck-DmoSYxVB.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./zIndexSlice-DOwFRgwN.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./CSSTransitionAnimate-CHUjlfbb.js";import"./useAnimationId-992q7OPb.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./ScatterChart-Dqsx4RdQ.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./CartesianGrid-DcZcYl5q.js";import"./CartesianAxis-Bxrejv1n.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./Label-B5dudWmS.js";import"./types--3K6j7TR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-8z1ahuYp.js";import"./YAxis-CY7M7u2R.js";import"./Scatter-BQwp6qxF.js";import"./ReactUtils-B6les9Ok.js";import"./Curve-5kCuP2Ri.js";import"./tooltipContext-DplqhePf.js";import"./Symbols-DzvLu2sy.js";import"./ActiveShapeUtils-DoWMc9rU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DIx0VdbO.js";import"./Trapezoid-C7AD2RUx.js";import"./Sector-CNxjvECL.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./RechartsHookInspector-Cp7SH18f.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
