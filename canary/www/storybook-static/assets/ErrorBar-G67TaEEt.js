import{j as r}from"./jsx-runtime-DOBHsvQd.js";import{useMDXComponents as n}from"./index-LRwpsLRR.js";import{M as p,C as s,a}from"./blocks-BsgsvKoW.js";import{C as m,A as i}from"./ErrorBar.stories-BWiZKY4e.js";import"./iframe-DjYpiCK1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQOJXr3R.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DtTUQkY4.js";import"./Layer-DTpB7dpX.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./ErrorBarContext-D-vVpbAT.js";import"./RechartsWrapper-BsT6E87M.js";import"./arrayEqualityCheck-ChWij-6b.js";import"./immer-Q7LYndgz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Dcc_DcJs.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./zIndexSlice-DD29w02m.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./CSSTransitionAnimate-Drbk4LYu.js";import"./useAnimationId-DKdTeHc-.js";import"./ZIndexLayer-DPHhTAxg.js";import"./ScatterChart-Dg2XBvGj.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./CartesianGrid-CqWR3c8s.js";import"./CartesianAxis-C5b0QVvJ.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./Label-BjhhnV9x.js";import"./types-uugzObvO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BAlFokgy.js";import"./YAxis-bUcTdGAX.js";import"./Scatter-DIlC-WmZ.js";import"./ReactUtils-Bc2S-2Ko.js";import"./Curve-CcdovDiP.js";import"./step-e2Z4FnHn.js";import"./tooltipContext-AAl5ihZW.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./Trapezoid-ljRWXtqg.js";import"./Sector-lipzQdUB.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./RechartsHookInspector-ycUhMjsN.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
