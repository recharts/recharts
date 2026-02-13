import{j as r}from"./jsx-runtime-BXm9VbNZ.js";import{useMDXComponents as n}from"./index-DYbwGGi9.js";import{M as s,C as a,a as p}from"./blocks-DLgDiBz6.js";import{C as l,A as i}from"./ErrorBar.stories-t_YDBwmW.js";import"./iframe-8rINPBCK.js";import"./preload-helper-Dp1pzeXC.js";import"./index--Y6JWCN_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BTAKTg0b.js";import"./Layer-rS2qKox4.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./ErrorBarContext-CL1XlF2D.js";import"./RechartsWrapper-C_hkcN4D.js";import"./arrayEqualityCheck-C3wBHH11.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./CSSTransitionAnimate-CRjjQXOo.js";import"./useAnimationId-D141hJYN.js";import"./ZIndexLayer-BIlvRP3G.js";import"./ScatterChart-BON3euhA.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./CartesianGrid-jtKOKpn1.js";import"./CartesianAxis-DTB3wekJ.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./Label-CPR5zbup.js";import"./types-BtRlzhwr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-rjkohJgP.js";import"./YAxis-CTYabjHl.js";import"./Scatter-DBT3DaKv.js";import"./ReactUtils-BygGLMXM.js";import"./Curve-D7sQ6QWi.js";import"./tooltipContext-ChV-AZlM.js";import"./Symbols-CLShZ5Ps.js";import"./ActiveShapeUtils-BOQsXSI9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeeZo8YN.js";import"./Trapezoid-CwrzKYaP.js";import"./Sector-C71MUP7Q.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./RechartsHookInspector-DhGNdH08.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
