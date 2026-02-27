import{j as r}from"./jsx-runtime-Bi1ehL5K.js";import{useMDXComponents as n}from"./index-D7G7Pyuz.js";import{M as p,C as s,a}from"./blocks-CoUGfbYn.js";import{C as m,A as i}from"./ErrorBar.stories-BVyrUuNu.js";import"./iframe-8sIubbdi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIusEcOA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B9J3i3TW.js";import"./Layer-BRXiwqet.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./ErrorBarContext-bky3Fevr.js";import"./RechartsWrapper-D30EcdBX.js";import"./arrayEqualityCheck-DbCj9c-Y.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./CSSTransitionAnimate-CKC9D5f-.js";import"./useAnimationId-De5EZ4DF.js";import"./ZIndexLayer-Ts04gVrK.js";import"./ScatterChart-CEBKYa-e.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./CartesianGrid-DEIWEGJ2.js";import"./CartesianAxis-DgCpBkCM.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./Label-DilR1ra4.js";import"./types-Bp02LWfB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-IWyMdbO5.js";import"./YAxis-CDYxK6mN.js";import"./Scatter-BiOUyA9k.js";import"./ReactUtils-BXvpQNi2.js";import"./Curve-BZpcUU-T.js";import"./step-CjuXRgh8.js";import"./tooltipContext-Do3gtYgl.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./RechartsHookInspector-AlYSKZYm.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
