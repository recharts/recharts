import{j as r}from"./jsx-runtime-BK1Los4q.js";import{useMDXComponents as n}from"./index-C4AZPYcV.js";import{M as s,C as p,a}from"./blocks-QRPbEAjp.js";import{C as l,A as i}from"./ErrorBar.stories-eHNjQrBL.js";import"./iframe-uc6dFw_p.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4cmB5lh.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DouhtFWO.js";import"./Layer-DswXiCbz.js";import"./resolveDefaultProps-kGpremEA.js";import"./ErrorBarContext-DROw9Wv2.js";import"./RechartsWrapper-DhOLU858.js";import"./arrayEqualityCheck-CQn2kQOi.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./CSSTransitionAnimate-MDdemCoC.js";import"./useAnimationId-BjF_cXy3.js";import"./ZIndexLayer-CxICY6ph.js";import"./ScatterChart-CaYlENSr.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./CartesianGrid-DL0uandd.js";import"./CartesianAxis-B3Lcnjmt.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./Label-D0b7Dnqv.js";import"./types-BngWNVP1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-bu2lwvBT.js";import"./YAxis-BSExt7in.js";import"./Scatter-SO0UaFBL.js";import"./ReactUtils-Bs-3TSfa.js";import"./Curve-IfIaqkcg.js";import"./tooltipContext-DguwpOPg.js";import"./Symbols-ByXfoODU.js";import"./ActiveShapeUtils-j7lBkeSN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0I4wQZ7.js";import"./Trapezoid-BBf2jkzZ.js";import"./Sector-DJmKtBTn.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./RechartsHookInspector-IvFhBGHX.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
