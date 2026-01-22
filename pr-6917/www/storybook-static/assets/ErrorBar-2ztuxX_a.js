import{j as r}from"./jsx-runtime-CWU7iAQ9.js";import{useMDXComponents as n}from"./index-JAgchrzo.js";import{M as s,C as a,a as p}from"./blocks-G9y1T6eh.js";import{C as m,A as i}from"./ErrorBar.stories-B4DcmRp6.js";import"./iframe-D2DyXbcn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5oQXnTT.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DZS5q4xa.js";import"./Layer-BwzoyCOr.js";import"./resolveDefaultProps-DA54HTPm.js";import"./ErrorBarContext-C7pLQCZx.js";import"./RechartsWrapper-BOCCBYR7.js";import"./arrayEqualityCheck-WjtHcJHc.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./zIndexSlice-BQ_BDZqW.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./CSSTransitionAnimate-C9HaklI9.js";import"./useAnimationId-D72jT57q.js";import"./ZIndexLayer-NA5ERVnG.js";import"./ScatterChart-DPDs2UeV.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./CartesianGrid-lVO3DWYE.js";import"./CartesianAxis-YVPJ9daY.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./Label-CjanQvYq.js";import"./types-uxMSZ2Tc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B_Rkajbb.js";import"./YAxis-9nabWNdp.js";import"./Scatter-BlsxoNrA.js";import"./ReactUtils-D1zizFIc.js";import"./Curve-O5r-1d1a.js";import"./tooltipContext-CpcGEiKt.js";import"./Symbols-f5SXrcZl.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./RechartsHookInspector-CDdA-ZFQ.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
