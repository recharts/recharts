import{j as r}from"./jsx-runtime-CQuu2XJQ.js";import{useMDXComponents as n}from"./index-DhN8WJrw.js";import{M as s,C as a,a as p}from"./blocks-Dl1utgfM.js";import{C as l,A as i}from"./ErrorBar.stories-C7gR3Gt4.js";import"./iframe-CxI43GLZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QQ_t_uQR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B9U4TjDE.js";import"./Layer-CmGdcww6.js";import"./resolveDefaultProps-UONb-avO.js";import"./ErrorBarContext-D61wHuQh.js";import"./RechartsWrapper--eelc2ZG.js";import"./arrayEqualityCheck-BfVdm9jV.js";import"./PolarUtils-DHQUPcK8.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./zIndexSlice-DIL5Sqm1.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./CSSTransitionAnimate-QnbbXu5-.js";import"./useAnimationId-CTE4KFOU.js";import"./ZIndexLayer-B1TtTzTT.js";import"./ScatterChart-CxbjxBiU.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./CartesianGrid-DQNW5f0G.js";import"./CartesianAxis-CGSh7ZG4.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./Label-B09Q27rq.js";import"./types-KA7-71SW.js";import"./XAxis-DH2Q1e34.js";import"./YAxis-C-oWd5yq.js";import"./Scatter-05lnAMbd.js";import"./ReactUtils-elXAGoBP.js";import"./Curve-BWaqjCRV.js";import"./tooltipContext-BEJZa1vO.js";import"./Symbols-CSvR9izB.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bz1Foak7.js";import"./Trapezoid-B_Aa80Lz.js";import"./Sector-BrRXNJ4R.js";import"./GraphicalItemClipPath-D5JGy8J4.js";import"./SetGraphicalItem-CwpQjYla.js";import"./RechartsHookInspector-DtRN3lc4.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
