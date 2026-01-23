import{j as r}from"./jsx-runtime-B1RicqGs.js";import{useMDXComponents as n}from"./index-BFRCzk-b.js";import{M as s,C as a,a as p}from"./blocks-avgTb2Yx.js";import{C as m,A as i}from"./ErrorBar.stories-Ct498Vre.js";import"./iframe-3ssOB91Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cewrc6A2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DrJJKks6.js";import"./Layer-W17HINYn.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./ErrorBarContext-Btf7Lyk8.js";import"./RechartsWrapper-8idYzD5u.js";import"./arrayEqualityCheck-RWElLsK2.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./zIndexSlice-ho1ylgk9.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./CSSTransitionAnimate-CymU9NEa.js";import"./useAnimationId-C6CpCegT.js";import"./ZIndexLayer-CTlKz5-T.js";import"./ScatterChart-CTPFx_sa.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./CartesianGrid-r34ttTM3.js";import"./CartesianAxis-B8B5j-ea.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./Label-DzudoiWU.js";import"./types-CfIL69ww.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B0PHajli.js";import"./YAxis-CCiXb5zT.js";import"./Scatter-broDHu9r.js";import"./ReactUtils-DVrxVJVb.js";import"./Curve-D5W7Bwp2.js";import"./tooltipContext-CpkpOP-2.js";import"./Symbols-CXbAeeaq.js";import"./ActiveShapeUtils-D4XQIZp-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrCnLm7V.js";import"./Trapezoid-bVA-uN3w.js";import"./Sector-2W0uOEF9.js";import"./GraphicalItemClipPath-BNmYXfJz.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./RechartsHookInspector-DHP-9GZN.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
