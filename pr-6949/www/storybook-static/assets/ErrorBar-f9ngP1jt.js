import{j as r}from"./jsx-runtime-B5BTotoZ.js";import{useMDXComponents as n}from"./index-BGRiz9Dx.js";import{M as s,C as a,a as p}from"./blocks-DF2y2d75.js";import{C as l,A as i}from"./ErrorBar.stories-DWibQnAO.js";import"./iframe-CehQ8xFj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-jUFHLVIb.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CWFa6ZM1.js";import"./Layer-6nj2T2Rl.js";import"./resolveDefaultProps-C1y00WFc.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./arrayEqualityCheck-CJf3kznu.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./CSSTransitionAnimate-C1mWT1DG.js";import"./useAnimationId-D1z7wJlQ.js";import"./ZIndexLayer-DeWQbK55.js";import"./ScatterChart-D9pe2Eym.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./CartesianGrid-BqtWDT0T.js";import"./CartesianAxis-CZCa0md7.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dibf-8ej.js";import"./YAxis-D-v27uKG.js";import"./Scatter-CXezdOMl.js";import"./ReactUtils-tMfbrahw.js";import"./Curve-D1ENGCAK.js";import"./tooltipContext-le9Sh_OC.js";import"./Symbols-D-9teC2q.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5fxMoAB.js";import"./Trapezoid-Cym11nDl.js";import"./Sector-mF7w8-S5.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./RechartsHookInspector-C9Dv8rR_.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
