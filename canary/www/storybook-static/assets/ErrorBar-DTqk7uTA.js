import{j as r}from"./jsx-runtime-Ut_Y9IJ3.js";import{useMDXComponents as n}from"./index-CnI9qgvb.js";import{M as p,C as s,a}from"./blocks-W7MOo8ME.js";import{C as m,A as i}from"./ErrorBar.stories-CRFbhWyz.js";import"./iframe-BRfjO5eG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKyyuDQs.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CV6WwTWb.js";import"./Layer-Djm95T9f.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./ErrorBarContext-CHAdzrsL.js";import"./RechartsWrapper-C-t74pKe.js";import"./arrayEqualityCheck-D8wbB52K.js";import"./immer-6Mf_l_pR.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Ds6oaLH2.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./CSSTransitionAnimate-B9PbADB0.js";import"./useAnimationId-fkzgSDca.js";import"./ZIndexLayer-x9RJx9gY.js";import"./ScatterChart-CLe-YyMk.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./CartesianGrid-BhWUh4J_.js";import"./CartesianAxis-DDdCZP34.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./Label-C3-kCUB1.js";import"./types-CJwNH7dd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-_RHNkAyf.js";import"./YAxis-SYTBy6_O.js";import"./Scatter-BJCYC7ny.js";import"./ReactUtils-Dg4XVGmm.js";import"./Curve-c7RsuyU-.js";import"./step-ylhKLd0a.js";import"./tooltipContext-lBPR5WjG.js";import"./Symbols-uMYMnubp.js";import"./symbol-DPSABYJO.js";import"./ActiveShapeUtils-J6JOXjSY.js";import"./isPlainObject-BUdyPG4g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx7CcXS4.js";import"./Trapezoid-DNfmxhLW.js";import"./Sector-HbpHqeJ3.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./RechartsHookInspector-DqZpsbqV.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
