import{j as r}from"./jsx-runtime-C4nln6HL.js";import{useMDXComponents as n}from"./index-p5my270k.js";import{M as p,C as s,a}from"./blocks-DUnceedf.js";import{C as m,A as i}from"./ErrorBar.stories-CVrGMd0e.js";import"./iframe-DbhhbAlo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BEJpunbk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cl--QLl9.js";import"./Layer-BLRPCKMQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./ErrorBarContext-8lDTik7_.js";import"./RechartsWrapper-BqWeXDcR.js";import"./arrayEqualityCheck-Lx_TMjyu.js";import"./immer-CXubSzbd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-bP3uccvR.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./CSSTransitionAnimate-DbWpaaSQ.js";import"./useAnimationId-CLYn9ysU.js";import"./ZIndexLayer-BXjMifaG.js";import"./ScatterChart-CTt9Hzl2.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./CartesianGrid-S4-Vu-NK.js";import"./CartesianAxis-DOxCqOnp.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./Label-BD-AsMTb.js";import"./types-DCl9eSsv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DjIfDDta.js";import"./YAxis-Dj1421bZ.js";import"./Scatter-Bz62uyow.js";import"./ReactUtils-DlRYbFyy.js";import"./Curve-Dxoto--N.js";import"./step-B3CTsvyi.js";import"./tooltipContext-CoRJaSgw.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIGKSdSo.js";import"./Trapezoid-okY0yamA.js";import"./Sector-C3VJLfsw.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./RechartsHookInspector-BSvxhUzi.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
