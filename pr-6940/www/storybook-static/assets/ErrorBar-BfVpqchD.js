import{j as r}from"./jsx-runtime-Cwxi7i5E.js";import{useMDXComponents as n}from"./index-DfhnmRKe.js";import{M as s,C as a,a as p}from"./blocks-BjxH7MHS.js";import{C as l,A as i}from"./ErrorBar.stories-DoRRpWlF.js";import"./iframe-DKKmvtM4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-COzuImjz.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BK9zqbGq.js";import"./Layer-CRV4337m.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./ErrorBarContext-BUSUJFaK.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./arrayEqualityCheck-BH7M1_Mo.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./zIndexSlice-AjUFaEiP.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./CSSTransitionAnimate-Bny6ktVy.js";import"./useAnimationId-Hx06RWvS.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./ScatterChart-BeG2MiSt.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./CartesianGrid-C2yYFyNz.js";import"./CartesianAxis-BfEn85oF.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./Label-Da19cvil.js";import"./types-Bj4-1oYY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D0l8_bF1.js";import"./YAxis-opqB1HJ5.js";import"./Scatter-BaRHy81b.js";import"./ReactUtils-CYxP7B05.js";import"./Curve-Cf01ES6k.js";import"./tooltipContext-OBwlOkwA.js";import"./Symbols-CMo2qdsV.js";import"./ActiveShapeUtils-czniNIT7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B6ULbvfC.js";import"./Trapezoid-RWF7Vajg.js";import"./Sector-Dn7O6oob.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./RechartsHookInspector-_f5C5MnG.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
