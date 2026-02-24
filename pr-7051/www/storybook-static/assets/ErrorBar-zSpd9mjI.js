import{j as r}from"./jsx-runtime-Bi5OASsh.js";import{useMDXComponents as n}from"./index-gy52tUYY.js";import{M as p,C as s,a}from"./blocks-BG5DTdIo.js";import{C as m,A as i}from"./ErrorBar.stories-BeIq3JAl.js";import"./iframe-DTgyoVvk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSHSP00B.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DRg_CGVw.js";import"./Layer-CN_vGRpI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6qERWpv.js";import"./ErrorBarContext-DyEpq3qQ.js";import"./RechartsWrapper-Chfcl0hS.js";import"./arrayEqualityCheck-EHbEP26L.js";import"./immer-Cali6Ur_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BZ07V7b0.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./d3-scale-OH59Lrba.js";import"./zIndexSlice-C5hUHulT.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./RegisterGraphicalItemId-B8FdEXiZ.js";import"./CSSTransitionAnimate-CrXQfnKY.js";import"./useAnimationId-fmEgFYYy.js";import"./ZIndexLayer-BR0xXhbH.js";import"./ScatterChart-CcRpBEI1.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./CartesianGrid-BOtFk4fE.js";import"./CartesianAxis-BkWnH6i3.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./Label-Ceoi0MO2.js";import"./types-CFHwNx79.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BkL5cMjG.js";import"./YAxis-CeCrGO4m.js";import"./Scatter-rwiu0gTi.js";import"./ReactUtils-BYwaZR_U.js";import"./Curve-DHT2OdXm.js";import"./step-C7wlxZdo.js";import"./tooltipContext-BkxvYNDl.js";import"./Symbols-DIOiPUYO.js";import"./symbol-DLAst82x.js";import"./ActiveShapeUtils-D1UYsbu-.js";import"./isPlainObject-cO95R4gJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-pA7LeOq9.js";import"./Trapezoid-C0NYHdgo.js";import"./Sector-lyZE52ex.js";import"./GraphicalItemClipPath-fMgbbWOb.js";import"./SetGraphicalItem-DlupFmAY.js";import"./RechartsHookInspector-CEM_bNOG.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
