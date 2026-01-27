import{j as r}from"./jsx-runtime-UIXbJy2p.js";import{useMDXComponents as n}from"./index-Cse-BH3X.js";import{M as s,C as a,a as p}from"./blocks-Dbn4BluL.js";import{C as m,A as i}from"./ErrorBar.stories-uG4uIrEq.js";import"./iframe-IlsB_rJq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bb2whpql.js";import"./utils-ePvtT4un.js";import"./ErrorBar-UwQvrzdH.js";import"./Layer-vBbFq665.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./ErrorBarContext-XG0EPrx-.js";import"./RechartsWrapper-C3UkR7qf.js";import"./arrayEqualityCheck-DRku3AZG.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./CSSTransitionAnimate-Dtms0iXZ.js";import"./useAnimationId-Bms0uFs7.js";import"./ZIndexLayer-9CrWluzk.js";import"./ScatterChart-C-TkQYI1.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./CartesianGrid-Bw_j7iWQ.js";import"./CartesianAxis-SxT37-Os.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BQuXAPTr.js";import"./YAxis-454ehxbM.js";import"./Scatter-Dbd0PAI8.js";import"./ReactUtils-Pssbr3N2.js";import"./Curve-BktJTjWe.js";import"./tooltipContext-C9iFvvqf.js";import"./Symbols-DKmDvY-C.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./RechartsHookInspector-HlZdM34s.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
