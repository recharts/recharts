import{j as r}from"./jsx-runtime-DsowtnR4.js";import{useMDXComponents as n}from"./index-DJyUApAR.js";import{M as s,C as a,a as p}from"./blocks-DsY1BtWo.js";import{C as m,A as i}from"./ErrorBar.stories-D6BsJPyJ.js";import"./iframe-DE0S0nct.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9PHO12n.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bz4SDUqw.js";import"./Layer-BleDqXEW.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./ErrorBarContext-CdBsOezF.js";import"./RechartsWrapper-C5KB-qxr.js";import"./arrayEqualityCheck-njkWtJmX.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./zIndexSlice-Blf1dc2N.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./CSSTransitionAnimate-DG9WSzMj.js";import"./useAnimationId-BumXreuS.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./ScatterChart-xRRFlHAr.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./CartesianGrid-xqUvOSJ7.js";import"./CartesianAxis-CwKKuba7.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-HiP-oMgI.js";import"./YAxis-ASXYxn9M.js";import"./Scatter-DabZIqnb.js";import"./ReactUtils-BtFFfC7o.js";import"./Curve-BVDZfIkI.js";import"./tooltipContext-DoH9SX65.js";import"./Symbols-w5RZTm0Y.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./RechartsHookInspector-dBbs_0nU.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
