import{j as r}from"./jsx-runtime--i8onJxV.js";import{useMDXComponents as n}from"./index-QKALeE7T.js";import{M as s,C as a,a as p}from"./blocks-BJocNxsd.js";import{C as m,A as i}from"./ErrorBar.stories-BvrgK0tp.js";import"./iframe-CoxmJKyj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjMwiY7v.js";import"./utils-ePvtT4un.js";import"./ErrorBar-1F3BRhyW.js";import"./Layer-FnVtSY9f.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./RechartsWrapper-BeGnBw32.js";import"./arrayEqualityCheck-BiMa-XSg.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./zIndexSlice-BS5hTNaN.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./CSSTransitionAnimate-DQbqyh69.js";import"./useAnimationId-DMb1Vy6w.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./ScatterChart-DhUvrsvR.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./CartesianGrid-BvUKtn8y.js";import"./CartesianAxis-C3XzKlXq.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./Label-BaauyrMN.js";import"./types-VgYnwRoj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-ByfqRbuq.js";import"./YAxis-CBdXzckK.js";import"./Scatter-Bto393MC.js";import"./ReactUtils-DelGq7vW.js";import"./Curve-BcGu8BmK.js";import"./tooltipContext-Didt6qB_.js";import"./Symbols-3p0hcDOB.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./RechartsHookInspector-DxKqckh3.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./OffsetShower-BIEGpqN_.js";import"./PlotAreaShower-B9vM17qm.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
