import{j as r}from"./jsx-runtime-DAqvNVP3.js";import{useMDXComponents as n}from"./index-BUCxvfZK.js";import{M as p,C as s,a}from"./blocks-DOpSFrw2.js";import{C as m,A as i}from"./ErrorBar.stories-BSq1ubz0.js";import"./iframe-VPJyTU3C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C07bsWnd.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CfTj7wis.js";import"./Layer-7CDZtGSl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./ErrorBarContext-DWym-0i0.js";import"./RechartsWrapper-BCl2bEfe.js";import"./arrayEqualityCheck-CXN3l8IH.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./CSSTransitionAnimate-vUIjokJt.js";import"./useAnimationId-83t5rQCc.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./ScatterChart-wb56nWnT.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./CartesianGrid-BbDsYPkG.js";import"./CartesianAxis-CiyiTEma.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./Label-9AdH7Mzz.js";import"./types-CXB2nDIk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-3pLP0gWY.js";import"./YAxis-wNsuba1v.js";import"./Scatter-BGdHatBs.js";import"./ReactUtils-DXFU76qs.js";import"./Curve-C7OUetYn.js";import"./step-AwB8z33l.js";import"./tooltipContext-BKAt1yN3.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./Trapezoid-CegYn91N.js";import"./Sector-CrGccqha.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./RechartsHookInspector-vDuc6y-U.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
