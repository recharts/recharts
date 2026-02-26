import{j as r}from"./jsx-runtime-Dq2QpJnu.js";import{useMDXComponents as n}from"./index-BFZOvg3z.js";import{M as p,C as s,a}from"./blocks-BDC-omyZ.js";import{C as m,A as i}from"./ErrorBar.stories-CcWIUTob.js";import"./iframe-CZHGkDMk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CdrqNv6J.js";import"./utils-ePvtT4un.js";import"./ErrorBar-De7YM9wN.js";import"./Layer-BtRR3UnB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKtEFeCC.js";import"./ErrorBarContext-CBnG3rqw.js";import"./RechartsWrapper-BGk6MiSH.js";import"./arrayEqualityCheck-t7_Vj7sH.js";import"./immer-CfF_q19L.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D3qhFu-Q.js";import"./hooks-CUvOjLlM.js";import"./axisSelectors-D3XLf68-.js";import"./d3-scale-CJ4CmDjU.js";import"./zIndexSlice-GashnqAX.js";import"./renderedTicksSlice-BHMidfzd.js";import"./RegisterGraphicalItemId-ZIh58Q32.js";import"./CSSTransitionAnimate-CJKGa_FI.js";import"./useAnimationId-Dafl-wjr.js";import"./ZIndexLayer-BsPUf8rB.js";import"./ScatterChart-Dyaj22Ue.js";import"./CartesianChart-DdydfBsf.js";import"./chartDataContext-jJyFb7d8.js";import"./CategoricalChart-DKqzOjpF.js";import"./CartesianGrid-BIRxsn1l.js";import"./CartesianAxis-DF2xaChD.js";import"./Text-Dz8Smy7e.js";import"./DOMUtils-Dplq7MJH.js";import"./Label-BXzi6VYN.js";import"./types-DWMIcrlC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cs9WyPyM.js";import"./YAxis-CdFo-ouM.js";import"./Scatter-CO86oVaC.js";import"./ReactUtils-BbDB6XIE.js";import"./Curve-Blj5JdwD.js";import"./step-Dqoonar_.js";import"./tooltipContext-CIWZ3GZr.js";import"./Symbols-Ctb7kZia.js";import"./symbol-CijKNxf6.js";import"./ActiveShapeUtils-o-rZaL_n.js";import"./isPlainObject-D32szo0O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-edUSSKkv.js";import"./Trapezoid-BJG4OUz6.js";import"./Sector-DW-S4DGt.js";import"./GraphicalItemClipPath-ChUVq13t.js";import"./SetGraphicalItem-CkEorLUE.js";import"./RechartsHookInspector-C2iN9faU.js";import"./ChartSizeDimensions-CNgNJ-I_.js";import"./OffsetShower-CN3I_bcm.js";import"./PlotAreaShower-AE8bmklz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
