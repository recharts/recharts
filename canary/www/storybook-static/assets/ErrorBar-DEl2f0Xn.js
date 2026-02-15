import{j as r}from"./jsx-runtime-DhbKiIlB.js";import{useMDXComponents as n}from"./index-C_-jwTyd.js";import{M as s,C as a,a as p}from"./blocks-BCoUmrZn.js";import{C as l,A as i}from"./ErrorBar.stories-B2sACYNF.js";import"./iframe-CcI14rjx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRUD6mwN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DG6fwcra.js";import"./Layer-8dVuGqJD.js";import"./resolveDefaultProps-po8mUv-4.js";import"./ErrorBarContext-CRPnKTk6.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./arrayEqualityCheck-B8tVyMzV.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./CSSTransitionAnimate-HDMOAzNy.js";import"./useAnimationId-B5oI4zFf.js";import"./ZIndexLayer-DuQEL0lP.js";import"./ScatterChart-B0mFOUAy.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./CartesianGrid-Ck8TjHQ7.js";import"./CartesianAxis-Vu_uTkrX.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./Label-Dpi6i3BM.js";import"./types-Ce3J44ym.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CzdMAN4d.js";import"./YAxis-CbFx-Oik.js";import"./Scatter-Ce-E2zJT.js";import"./ReactUtils-C84uddRP.js";import"./Curve-CHXnr1rt.js";import"./tooltipContext-C9iRPvdc.js";import"./Symbols-CXif55_q.js";import"./ActiveShapeUtils-DL6WZdbr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSZATy_S.js";import"./Trapezoid-D4oUuF48.js";import"./Sector-DCwH9VE3.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./RechartsHookInspector-BirTV-4S.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
