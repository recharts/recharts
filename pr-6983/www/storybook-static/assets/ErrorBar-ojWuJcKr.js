import{j as r}from"./jsx-runtime-CbhLOJh8.js";import{useMDXComponents as n}from"./index-Da67r-8j.js";import{M as s,C as a,a as p}from"./blocks-BbX4xiCR.js";import{C as l,A as i}from"./ErrorBar.stories-CF3UJ-CO.js";import"./iframe-B5r3cecm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkOLfLi3.js";import"./utils-ePvtT4un.js";import"./ErrorBar-tbRAIPml.js";import"./Layer-5sA9M2a_.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./ErrorBarContext-VyPM_pF3.js";import"./RechartsWrapper-CS6LSkHo.js";import"./arrayEqualityCheck-Czqc1yJH.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./RegisterGraphicalItemId-C9-Dm0DM.js";import"./CSSTransitionAnimate-DAufW7d9.js";import"./useAnimationId-BDFPsv26.js";import"./ZIndexLayer-CK5fYLk5.js";import"./ScatterChart-W-ITEED3.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./CartesianGrid-DNHyoKf7.js";import"./CartesianAxis-Xf3h13YN.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./Label-CuwvUyc2.js";import"./types-0ytZb3l6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BkMRDr4M.js";import"./YAxis-TYBY8JO1.js";import"./Scatter-2qIGgcAY.js";import"./ReactUtils-CFOSv3NQ.js";import"./Curve-BkRyhV0i.js";import"./tooltipContext-BQbQDo2U.js";import"./Symbols-B2Id_P0j.js";import"./ActiveShapeUtils-4xjvutom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CEg1ZuEo.js";import"./Trapezoid-B9ic5-qM.js";import"./Sector-Dx2gEVnp.js";import"./GraphicalItemClipPath-BBRif3g7.js";import"./SetGraphicalItem-D_EjQgzP.js";import"./RechartsHookInspector-DV5jRegM.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
