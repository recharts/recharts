import{j as r}from"./jsx-runtime-Boq2IzZs.js";import{useMDXComponents as n}from"./index-jPMVD2zS.js";import{M as p,C as s,a}from"./blocks-Co1bTF3b.js";import{C as m,A as i}from"./ErrorBar.stories-peGZzZC_.js";import"./iframe-CRTFvrj9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bed0KFZ4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-3ko6qcQb.js";import"./Layer-CS75NGqW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./ErrorBarContext-V9kNDrvg.js";import"./RechartsWrapper-BSniLpj2.js";import"./arrayEqualityCheck-C-72eKdK.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./CSSTransitionAnimate-D7KpsfKJ.js";import"./useAnimationId-D4atK31V.js";import"./ZIndexLayer-T_Qg2faX.js";import"./ScatterChart-D-GJsd3X.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./CartesianGrid-Dlfi_HS_.js";import"./CartesianAxis-UwfPUOGl.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./Label-B8ukM34Q.js";import"./types-DqJmRq78.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BSKb_OYU.js";import"./YAxis-BR4X3yoq.js";import"./Scatter-Bxmg6Oev.js";import"./ReactUtils-FOFjsaAB.js";import"./Curve-cG-fhaEi.js";import"./step-D-1eA3Al.js";import"./tooltipContext-DzcDJNW4.js";import"./Symbols-DQD-u_Ga.js";import"./symbol-CqE7w4As.js";import"./ActiveShapeUtils-Dvtjmakf.js";import"./isPlainObject-DWQ5xGNV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzeM3od.js";import"./Trapezoid-BHEoFJyV.js";import"./Sector-CAdVxu4l.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./RechartsHookInspector-D5fTK36V.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
