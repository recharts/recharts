import{j as r}from"./jsx-runtime-DTxy6EBE.js";import{useMDXComponents as n}from"./index-CwJoXbiB.js";import{M as p,C as s,a}from"./blocks-Cbyhgu2F.js";import{C as m,A as i}from"./ErrorBar.stories-CYJhvQSp.js";import"./iframe-DujSE0UK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_iM8tEy.js";import"./utils-ePvtT4un.js";import"./ErrorBar-bP18Lk9N.js";import"./Layer-B-nUYb5l.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C48txAh5.js";import"./ErrorBarContext-D8NP2kg_.js";import"./RechartsWrapper-CZxyCKqo.js";import"./arrayEqualityCheck-D8VjMjvf.js";import"./immer-DoffRpuJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BzWEaTVN.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./CSSTransitionAnimate-BDwofIN_.js";import"./useAnimationId-DcYOTGVs.js";import"./ZIndexLayer-sSQKP7NE.js";import"./ScatterChart-DR8fVJUX.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./CartesianGrid-DMmCJ2YK.js";import"./CartesianAxis-DVd0f2kI.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-YY1xwgnu.js";import"./YAxis-DGH9UPdi.js";import"./Scatter-Bclmu3HN.js";import"./ReactUtils-CJKtjJwj.js";import"./Curve-BIsIHsFZ.js";import"./step-BqfvS8lo.js";import"./tooltipContext-DMW6mWzr.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SsDZNd-D.js";import"./Trapezoid-C4tWIuQV.js";import"./Sector-FLQA7LtL.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./RechartsHookInspector-CRMB31G9.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
