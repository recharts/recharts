import{j as r}from"./jsx-runtime-3tqSvZF1.js";import{useMDXComponents as n}from"./index-D2mO6lZQ.js";import{M as s,C as a,a as p}from"./blocks-RGE9lYPS.js";import{C as l,A as i}from"./ErrorBar.stories-BYX2zOIh.js";import"./iframe-Qbvlqe9c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BFsVO8Up.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C_rT2Ivr.js";import"./Layer-CGD9i9Tv.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./ErrorBarContext-BToEOD0T.js";import"./RechartsWrapper-j0khHO2J.js";import"./arrayEqualityCheck-B3n_664E.js";import"./PolarUtils-1Zh54hEc.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./CSSTransitionAnimate-BEzMzncf.js";import"./useAnimationId-BMBkTPld.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./ScatterChart-BmmR_42K.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./CartesianGrid-BrR2o-p8.js";import"./CartesianAxis-a9jFIi9h.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./Label-BjNpzDAS.js";import"./types-BIElRGEC.js";import"./XAxis-DvwXUl6_.js";import"./YAxis-CbhDcywn.js";import"./Scatter-BrzIvc2Q.js";import"./ReactUtils-DDfXx9yL.js";import"./Curve-viWUlKkP.js";import"./tooltipContext-CUM_ZwHn.js";import"./Symbols-DUUTByO6.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./Trapezoid-B2gFU9p-.js";import"./Sector-Byha0vVB.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./RechartsHookInspector-Bcf65z8s.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
