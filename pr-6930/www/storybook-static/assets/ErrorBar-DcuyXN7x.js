import{j as r}from"./jsx-runtime-G3k6UosI.js";import{useMDXComponents as n}from"./index-CzCDcHki.js";import{M as s,C as a,a as p}from"./blocks-DVMJ2hJm.js";import{C as m,A as i}from"./ErrorBar.stories-BqsIWZUI.js";import"./iframe-BUAHB1JE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8QR5MVL.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BeV2kHvK.js";import"./Layer-Cm056lbD.js";import"./resolveDefaultProps-DB3crruI.js";import"./ErrorBarContext-BPyiRwXa.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./arrayEqualityCheck-D5cvBvD0.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./CSSTransitionAnimate-BrIsnmY6.js";import"./useAnimationId-Dqqe1r9b.js";import"./ZIndexLayer-CvBAZeUB.js";import"./ScatterChart-CpGcAThq.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./CartesianGrid-kaY3iQec.js";import"./CartesianAxis-Ne59jWj5.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./Label-DycKUeOS.js";import"./types-ztb1_leN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DeVneqRd.js";import"./YAxis-DerY_BUY.js";import"./Scatter-DoKCD3zg.js";import"./ReactUtils-kUjnR9HA.js";import"./Curve-U_sOEQqK.js";import"./tooltipContext-CiBBulxM.js";import"./Symbols-B668NUUf.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./RechartsHookInspector-DyBVLxQ5.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
