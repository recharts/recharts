import{j as r}from"./jsx-runtime-Bizj1BZg.js";import{useMDXComponents as n}from"./index-DecX7BQA.js";import{M as p,C as s,a}from"./blocks-Xd87GS-V.js";import{C as m,A as i}from"./ErrorBar.stories-BkrtLdEb.js";import"./iframe-uVZDwAjj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bf-UOCze.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CcK7T0mB.js";import"./Layer-kSeehgUS.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./ErrorBarContext-yNZJHACW.js";import"./RechartsWrapper-v0y6A39c.js";import"./arrayEqualityCheck-BVLp_fP4.js";import"./immer-ChwPqFH_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D4nlSVrI.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./CSSTransitionAnimate-C9aVsgl1.js";import"./useAnimationId-CLB64h0U.js";import"./ZIndexLayer-B6kXppYb.js";import"./ScatterChart-DSamtf4C.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./CartesianGrid-BRZTTi6Z.js";import"./CartesianAxis-D-nGvafv.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DDi_F3ms.js";import"./YAxis-2LEHyJIA.js";import"./Scatter-Cy1QeUYa.js";import"./ReactUtils-CdVDZBtJ.js";import"./Curve-BRxcZY_5.js";import"./step-Prvlnfgp.js";import"./tooltipContext-DnVcYxBZ.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./ActiveShapeUtils-DdtpNjHl.js";import"./isPlainObject-DmqrNdKc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-GgKpEWLk.js";import"./Trapezoid-B50tZYZr.js";import"./Sector-CYoBZdRL.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./RechartsHookInspector-B8IZQaM2.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
