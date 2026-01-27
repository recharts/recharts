import{j as r}from"./jsx-runtime-CXC5Ic1E.js";import{useMDXComponents as n}from"./index-yPWOFaH1.js";import{M as s,C as a,a as p}from"./blocks-B1INJgKo.js";import{C as m,A as i}from"./ErrorBar.stories-AXiHZ9qm.js";import"./iframe-D1Hwi0RI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkDkQzlc.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CS4886wb.js";import"./Layer-Di0VROrF.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./ErrorBarContext-DWrqh2-_.js";import"./RechartsWrapper-CXtEZB_H.js";import"./arrayEqualityCheck-DQEOD_zw.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./zIndexSlice-D8jnnygc.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./CSSTransitionAnimate-Cc44mmVU.js";import"./useAnimationId-CwGlJXjy.js";import"./ZIndexLayer-By5F7TF9.js";import"./ScatterChart-BOnMb17i.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./CartesianGrid-BxNgwSyo.js";import"./CartesianAxis-CyxUGwT-.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./Label-Bb86ILB8.js";import"./types-C-uSS9Dl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BuTZpXCP.js";import"./YAxis-Bdw8XaXe.js";import"./Scatter-Cqlaz5VM.js";import"./ReactUtils-hNtx3_VI.js";import"./Curve-CF532csu.js";import"./tooltipContext-CV_QCaH8.js";import"./Symbols-0go88kKd.js";import"./ActiveShapeUtils-CoHlE8BH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-YjLZgqxG.js";import"./Trapezoid-CD3SuCZk.js";import"./Sector-Dr9-p71P.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./RechartsHookInspector-DsUGDtNJ.js";import"./ChartSizeDimensions-CUepdASc.js";import"./OffsetShower-7LYmniyx.js";import"./PlotAreaShower-BWomwUUC.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
