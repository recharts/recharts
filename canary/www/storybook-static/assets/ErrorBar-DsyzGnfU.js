import{j as r}from"./jsx-runtime-DO35SsBJ.js";import{useMDXComponents as n}from"./index-CtihkLPt.js";import{M as s,C as a,a as p}from"./blocks-BboiZT-H.js";import{C as m,A as i}from"./ErrorBar.stories-iuhMZqUa.js";import"./iframe-B_h1eZxb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iiBRXnxx.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Ze7nmk7-.js";import"./Layer-YFSiP5O_.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./ErrorBarContext-hJIAPStP.js";import"./RechartsWrapper-GoD8D7jd.js";import"./arrayEqualityCheck-BQ7vn4Fs.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./zIndexSlice-DBtbpS_b.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./CSSTransitionAnimate-DDLFo8fE.js";import"./useAnimationId-BJhibfpC.js";import"./ZIndexLayer-O03ayMNB.js";import"./ScatterChart-BEfIVtBW.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./CartesianGrid-Dn1eke1q.js";import"./CartesianAxis-DOEAGTwm.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./Label-B4qm1C3r.js";import"./types-DbDrWtQW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Mxp9ktjo.js";import"./YAxis-DgW-EgkF.js";import"./Scatter-IqrqY-2n.js";import"./ReactUtils-DsQBac2C.js";import"./Curve-BIskmgLq.js";import"./tooltipContext-KGWC9APg.js";import"./Symbols-3gLai2FA.js";import"./ActiveShapeUtils-CedxEX3v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EuLtLzS8.js";import"./Trapezoid-CJEFZDfs.js";import"./Sector-CFscv7k5.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./RechartsHookInspector-CaskrBRm.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./OffsetShower-DZ8KqkSb.js";import"./PlotAreaShower-CXGDRKi2.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
