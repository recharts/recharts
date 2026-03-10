import{j as r}from"./jsx-runtime-BocZBHA0.js";import{useMDXComponents as n}from"./index--VXaoOeP.js";import{M as p,C as s,a}from"./blocks-r2QviJxu.js";import{C as m,A as i}from"./ErrorBar.stories-CRWipgHd.js";import"./iframe-DuNEY226.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CE1COEz0.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BIaylR6C.js";import"./Layer-D_n9WiuW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./ErrorBarContext-CbQdG_x_.js";import"./RechartsWrapper-CEqZKjHf.js";import"./arrayEqualityCheck-DDMqu3f1.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./CSSTransitionAnimate-yH9_O7m0.js";import"./useAnimationId-DN_Wn8rj.js";import"./ZIndexLayer-CZdiz2vD.js";import"./ScatterChart-BtiTBXHU.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./CartesianGrid-BNTlTqSI.js";import"./CartesianAxis-BtkWVQbW.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DdwDbuRS.js";import"./YAxis-QXoWtC2j.js";import"./Scatter-CzUQBdWu.js";import"./ReactUtils-DRluxBO3.js";import"./Curve-ipLw690D.js";import"./step-CHzygN7O.js";import"./tooltipContext-BUJfSZPi.js";import"./Symbols-Dk3gQBwn.js";import"./symbol-4CsV8iHb.js";import"./ActiveShapeUtils-BVtqisMr.js";import"./isPlainObject-DB3_XzF8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkXHm1Ql.js";import"./Trapezoid-BXsyVm6P.js";import"./Sector-b9d-huvK.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./RechartsHookInspector-CfHmmsr6.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
