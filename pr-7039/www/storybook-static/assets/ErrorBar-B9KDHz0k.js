import{j as r}from"./jsx-runtime-BiQjQ2nr.js";import{useMDXComponents as n}from"./index-C7RXYO4N.js";import{M as p,C as s,a}from"./blocks-DN4yt8u6.js";import{C as m,A as i}from"./ErrorBar.stories-DDUm7KPK.js";import"./iframe-BAkhr1dX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEM5lfG1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CnovP1Ti.js";import"./Layer-ChOUaBRc.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNqTx6xA.js";import"./ErrorBarContext-DGlqNFZc.js";import"./RechartsWrapper-C6vYGZxV.js";import"./arrayEqualityCheck-ws_I-Su9.js";import"./immer-CpzDDdx2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cogrk3y-.js";import"./hooks-BQ6EMEQX.js";import"./axisSelectors-5IeRVjyJ.js";import"./d3-scale-D4vzySek.js";import"./zIndexSlice-DySAbts1.js";import"./renderedTicksSlice-KIutDziH.js";import"./RegisterGraphicalItemId-BbgywdL0.js";import"./CSSTransitionAnimate-DdnK36-N.js";import"./useAnimationId-DpHYdy2q.js";import"./ZIndexLayer-D9oqm7-r.js";import"./ScatterChart-CpOYio0H.js";import"./CartesianChart-JKhVhhuI.js";import"./chartDataContext-BxZ2tnlW.js";import"./CategoricalChart-BEpc5Jb6.js";import"./CartesianGrid-aFWZAFV9.js";import"./CartesianAxis-DhYmi_Op.js";import"./Text-DEUhZcIO.js";import"./DOMUtils-B-z1kise.js";import"./Label-C63pHtg-.js";import"./types-UutyoBzA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DFbVQKiI.js";import"./YAxis-B2mEiGUw.js";import"./Scatter-Dka_yzKe.js";import"./ReactUtils-CLeHX5Ip.js";import"./Curve-oAmAnVW8.js";import"./step-BqWOfOpT.js";import"./tooltipContext-DZAPIpvh.js";import"./Symbols-BpFdmF0L.js";import"./symbol-BeaTf5eH.js";import"./ActiveShapeUtils-xtyk6YAI.js";import"./isPlainObject-_51Ij8KQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGk7C1pp.js";import"./Trapezoid-XKQAH1TM.js";import"./Sector-CoTacwlm.js";import"./GraphicalItemClipPath-wygGc-U-.js";import"./SetGraphicalItem-D74ae6eQ.js";import"./RechartsHookInspector-CZGFYlgB.js";import"./ChartSizeDimensions-DS99mPzw.js";import"./OffsetShower-BN9FCNNs.js";import"./PlotAreaShower-DjsLqly8.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
