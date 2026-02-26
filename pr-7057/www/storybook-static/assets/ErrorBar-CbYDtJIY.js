import{j as r}from"./jsx-runtime-DnJcU5n2.js";import{useMDXComponents as n}from"./index-DKsiHYUR.js";import{M as p,C as s,a}from"./blocks-CuFWFhqr.js";import{C as m,A as i}from"./ErrorBar.stories-C9WOtFDH.js";import"./iframe-D4_kWiik.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx5VrxvW.js";import"./utils-ePvtT4un.js";import"./ErrorBar-kqJjxQSH.js";import"./Layer-hulGBcYw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./ErrorBarContext-KX3UjoPN.js";import"./RechartsWrapper-CPReM4TO.js";import"./arrayEqualityCheck-B3HrMvOJ.js";import"./immer-0ruqGMtg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DoPLCw_p.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./CSSTransitionAnimate-B9mu_X2z.js";import"./useAnimationId-Dur5dtsq.js";import"./ZIndexLayer-sXRztW1g.js";import"./ScatterChart-edkN6_rP.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./CartesianGrid-CxCgcGG8.js";import"./CartesianAxis-Lz5XVqBq.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./Label-CWL13-o_.js";import"./types-BCRPpXrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DYXsWNnz.js";import"./YAxis-DgOR7wnS.js";import"./Scatter-ZwbUowfH.js";import"./ReactUtils-B0Tr3Kw3.js";import"./Curve-DIMr1GZI.js";import"./step-9zWUSiR2.js";import"./tooltipContext-JicCWQGV.js";import"./Symbols-CHUFq9Ay.js";import"./symbol-BoxvpimM.js";import"./ActiveShapeUtils-DVInz7Qi.js";import"./isPlainObject-Bzk1EvI7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGtDGrdk.js";import"./Trapezoid-BH067hRN.js";import"./Sector-D-XRTfZm.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./RechartsHookInspector-CKRvII-U.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
