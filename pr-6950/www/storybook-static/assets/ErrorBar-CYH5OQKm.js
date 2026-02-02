import{j as r}from"./jsx-runtime-ZKX-0IvB.js";import{useMDXComponents as n}from"./index-CQQ-XKiP.js";import{M as s,C as a,a as p}from"./blocks-D-bxKn4u.js";import{C as l,A as i}from"./ErrorBar.stories-ZNJ9A08M.js";import"./iframe-CBadok3R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AunjJ6Z9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-wolT1SrR.js";import"./Layer-CZpxdYtD.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./ErrorBarContext-DNzUHuOB.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./arrayEqualityCheck-D8DZf4E7.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./zIndexSlice-Cb0fYcD4.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./CSSTransitionAnimate-CPjukdjn.js";import"./useAnimationId-DFBNL1tZ.js";import"./ZIndexLayer-gNsJWqo_.js";import"./ScatterChart-nIDNr8Nl.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./CartesianGrid-NQ1HzpRF.js";import"./CartesianAxis-BWCbP_kU.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./Label-B9arnFZu.js";import"./types-D0Nc3U-x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CuDJTYDf.js";import"./YAxis-CkBODHFa.js";import"./Scatter-BQSm2prW.js";import"./ReactUtils-BQuPA_dW.js";import"./Curve-D-ytcwuR.js";import"./tooltipContext-C9jcULYY.js";import"./Symbols-mEW1LXrD.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./RechartsHookInspector-Ccr9vg9I.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
