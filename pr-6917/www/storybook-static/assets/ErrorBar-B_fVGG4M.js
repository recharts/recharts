import{j as r}from"./jsx-runtime-B7qEVVFh.js";import{useMDXComponents as n}from"./index-B1h8y65x.js";import{M as s,C as a,a as p}from"./blocks-BWxoNjte.js";import{C as m,A as i}from"./ErrorBar.stories-Cix6W2DD.js";import"./iframe-A-0tKSWD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-Mvr0XH.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C2dvfs6W.js";import"./Layer-CxQ6kbYz.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./ErrorBarContext-9JUs1gmp.js";import"./RechartsWrapper-SmBFshtg.js";import"./arrayEqualityCheck-Bi53fE_W.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./zIndexSlice-BnuFP1kN.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./CSSTransitionAnimate-Cxs_wdk_.js";import"./useAnimationId-CvIqeW01.js";import"./ZIndexLayer-BJZUY29j.js";import"./ScatterChart-Bd27NBf_.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./CartesianGrid-B7hvWmGU.js";import"./CartesianAxis-DX3J6okb.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./Label-C7autWsa.js";import"./types-BYDpjVEr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BXhGyvV2.js";import"./YAxis-DGY1JRVK.js";import"./Scatter-B6ce3Gtw.js";import"./ReactUtils-ptTox43v.js";import"./Curve-BQURRmu9.js";import"./tooltipContext-DyV9aXyZ.js";import"./Symbols-C_xPmfi9.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./RechartsHookInspector-BiAUdU7M.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./OffsetShower-C5qrbqGT.js";import"./PlotAreaShower-DXZIEGcd.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
