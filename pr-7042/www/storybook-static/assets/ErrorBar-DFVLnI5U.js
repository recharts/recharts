import{j as r}from"./jsx-runtime-D4ZaYDhS.js";import{useMDXComponents as n}from"./index-5-eClV24.js";import{M as p,C as s,a}from"./blocks-BYtZDAsh.js";import{C as m,A as i}from"./ErrorBar.stories-B7gMo2Cs.js";import"./iframe-Cg8afp3P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRXexYxK.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CFtXo0CO.js";import"./Layer-YebNzFxt.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-3HltEOEu.js";import"./ErrorBarContext-CYmUoBhN.js";import"./RechartsWrapper-Jn537Djk.js";import"./arrayEqualityCheck-CdnxX3zW.js";import"./immer-496O7mbU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTReDVD1.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./CSSTransitionAnimate-DrOKRXGm.js";import"./useAnimationId-KzNTUIqt.js";import"./ZIndexLayer-8TBIBWl0.js";import"./ScatterChart-DSruVZGH.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./CartesianGrid-Dufe2PKF.js";import"./CartesianAxis-BH2_JJNm.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CcHOaWFK.js";import"./YAxis-B5L1n3Hm.js";import"./Scatter-DwFOF4KQ.js";import"./ReactUtils-Bs6wbtV4.js";import"./Curve-kDork6Kh.js";import"./step-CqAkm0lp.js";import"./tooltipContext-BYXsX5Eu.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./RechartsHookInspector-DBmCwbx2.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
