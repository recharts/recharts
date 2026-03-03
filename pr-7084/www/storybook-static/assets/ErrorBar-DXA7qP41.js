import{j as r}from"./jsx-runtime-C4eRHZxG.js";import{useMDXComponents as n}from"./index-az-eWcnq.js";import{M as p,C as s,a}from"./blocks-GupD3IGN.js";import{C as m,A as i}from"./ErrorBar.stories-BwSP24Fv.js";import"./iframe-D5au-B4R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-47pdZWe1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BOzOoanG.js";import"./Layer-N2rtvF3c.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoxDJzak.js";import"./ErrorBarContext-BKfr8U3o.js";import"./RechartsWrapper-B2p68SqA.js";import"./arrayEqualityCheck-DjoT1CkP.js";import"./immer-Uxla1AdH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CqclXjSb.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./zIndexSlice-Dfjz8HwK.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./CSSTransitionAnimate-CjejzWK5.js";import"./useAnimationId-B8Se4RD-.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./ScatterChart-CHfdM5Sr.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./CartesianGrid-wjb1mDcc.js";import"./CartesianAxis-fQqkoIc6.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./Label-CgqPFnns.js";import"./types-C71ySwku.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Djz3Z4bE.js";import"./YAxis-Bi10WgdJ.js";import"./Scatter-DaUUkT3o.js";import"./ReactUtils-BP9EaRxl.js";import"./Curve-Cud4Oq3s.js";import"./step-BXVfDqRU.js";import"./tooltipContext-B4qwvaID.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./RechartsHookInspector-DFTuWkwy.js";import"./ChartSizeDimensions-ITlssz9c.js";import"./OffsetShower-r5ZHHhNG.js";import"./PlotAreaShower-Ck8CTF06.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
