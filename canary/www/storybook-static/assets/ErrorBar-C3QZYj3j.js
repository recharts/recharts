import{j as r}from"./jsx-runtime-Bp6vBSyf.js";import{useMDXComponents as n}from"./index-Cpd8cOP1.js";import{M as s,C as a,a as p}from"./blocks-Cytu8D1g.js";import{C as l,A as i}from"./ErrorBar.stories-CfbTVflO.js";import"./iframe-3u-Q1UnB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BW-nQ8nH.js";import"./utils-ePvtT4un.js";import"./ErrorBar-kA89qvGN.js";import"./Layer-BUQITwlU.js";import"./resolveDefaultProps-Cxetozbj.js";import"./ErrorBarContext-CW31PIa7.js";import"./RechartsWrapper-DTxIwYKV.js";import"./arrayEqualityCheck-4YdFFnIZ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./CSSTransitionAnimate-BocfJ5Ez.js";import"./useAnimationId-BDwu_fLm.js";import"./ZIndexLayer-BBlPVpqD.js";import"./ScatterChart-D43CxKS4.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./CartesianGrid-CXrPJC1I.js";import"./CartesianAxis-DNUlfq8v.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./Label-DEySkZO8.js";import"./types-DeBO-UOQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Djkeo-gr.js";import"./YAxis-Dj18iK3G.js";import"./Scatter-BaJJpbqo.js";import"./ReactUtils-BnoVNewt.js";import"./Curve-BQlmvtvx.js";import"./tooltipContext-CwZZ1zPR.js";import"./Symbols-D9T0VuzY.js";import"./ActiveShapeUtils-CBZ4ZZvz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqAeg9eu.js";import"./Trapezoid-Bk16eIfi.js";import"./Sector-Qrf6gufC.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./RechartsHookInspector-CGCoL2RB.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
