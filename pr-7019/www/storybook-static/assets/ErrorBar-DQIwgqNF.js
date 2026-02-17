import{j as r}from"./jsx-runtime-C9zETl5S.js";import{useMDXComponents as n}from"./index-KFiXUDsp.js";import{M as s,C as p,a}from"./blocks-BxKs6sAv.js";import{C as l,A as i}from"./ErrorBar.stories-3eXkWDlD.js";import"./iframe-DSWYlzWY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFzpIqAG.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BFFpLQMA.js";import"./Layer-BJ-1LjgN.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./ErrorBarContext-W32xCQ7P.js";import"./RechartsWrapper-DVh3xt6X.js";import"./arrayEqualityCheck-Fy9pCvBq.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./CSSTransitionAnimate-DhZsdm1N.js";import"./useAnimationId-C_vJY8DS.js";import"./ZIndexLayer-DdgNL7UI.js";import"./ScatterChart-pdlAkzn1.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./CartesianGrid-1IEROZor.js";import"./CartesianAxis-BDz1zwgU.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./Label-DAbjiZ3-.js";import"./types-C3ofbdQr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-iMOgY7Au.js";import"./YAxis-Bm_Vu3am.js";import"./Scatter-BUjBj0X0.js";import"./ReactUtils-cJI4Ub_j.js";import"./Curve-kGDkBF5o.js";import"./tooltipContext-CyOsvigW.js";import"./Symbols-DBQdL11F.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./RechartsHookInspector-f6frTyp5.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
