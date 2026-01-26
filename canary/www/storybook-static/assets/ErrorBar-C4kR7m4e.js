import{j as r}from"./jsx-runtime-CR3WjPNz.js";import{useMDXComponents as n}from"./index-B5i0VgL8.js";import{M as s,C as a,a as p}from"./blocks-oTMu1gdQ.js";import{C as m,A as i}from"./ErrorBar.stories-CcuwIojr.js";import"./iframe-PyjOQzGK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-uJDoNHNu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-I0T4DNGl.js";import"./Layer-CHnOmiRY.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./RechartsWrapper-C_qiBOfF.js";import"./arrayEqualityCheck-_dHyT-RZ.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./CSSTransitionAnimate-BI-Soe98.js";import"./useAnimationId-DVpAz_Js.js";import"./ZIndexLayer-DUzVAEAH.js";import"./ScatterChart-B4P1IF09.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./CartesianGrid-CLO--QcK.js";import"./CartesianAxis-DYXf8O7N.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./Label-CvwrqBXQ.js";import"./types-UMLEboQ_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-P49Iul1Y.js";import"./YAxis-B6zPQ9mM.js";import"./Scatter-CqoNTBY2.js";import"./ReactUtils-ChAGskY_.js";import"./Curve-BookXfP4.js";import"./tooltipContext-D-hTrTbJ.js";import"./Symbols-Jat4kELE.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./RechartsHookInspector-D26E9kzM.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
