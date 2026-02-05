import{j as r}from"./jsx-runtime-Ck6dWWCG.js";import{useMDXComponents as n}from"./index-C1qMLbxk.js";import{M as s,C as a,a as p}from"./blocks-BeFvB4Nq.js";import{C as l,A as i}from"./ErrorBar.stories-DXE-ZsOE.js";import"./iframe-D44FkRcR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7ezxrhm.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DldJfvgo.js";import"./Layer-Cw02mn90.js";import"./resolveDefaultProps-C9MxTna8.js";import"./ErrorBarContext-WrFhm3tP.js";import"./RechartsWrapper-CZxiJS72.js";import"./arrayEqualityCheck-CpHRyEoZ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./zIndexSlice-By2Q2sEz.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./CSSTransitionAnimate-DOIintMG.js";import"./useAnimationId-B6KoK7rR.js";import"./ZIndexLayer-6GEHbSGN.js";import"./ScatterChart-c2eB4lDV.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./CartesianGrid-ZMyhlhKd.js";import"./CartesianAxis-CQLQyo5l.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./Label-BDKklye7.js";import"./types-BaOyAkY9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Bc7aqN4V.js";import"./YAxis-B19HmFuc.js";import"./Scatter-DfUbv5D7.js";import"./ReactUtils-Dk5cr1D8.js";import"./Curve-gEApNnTT.js";import"./tooltipContext-Cjj_6dN7.js";import"./Symbols-D2aKUPGo.js";import"./ActiveShapeUtils-CvDVndyY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuTYB5sP.js";import"./Trapezoid-B3gZXa3J.js";import"./Sector-CGH7Ttue.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./RechartsHookInspector-BUut-YKB.js";import"./ChartSizeDimensions-B61qSqob.js";import"./OffsetShower-BfGtxzWE.js";import"./PlotAreaShower-DA_KxbUr.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
