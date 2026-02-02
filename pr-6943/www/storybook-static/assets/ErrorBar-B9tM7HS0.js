import{j as r}from"./jsx-runtime-CuzRmg2A.js";import{useMDXComponents as n}from"./index-DNjMHtu3.js";import{M as s,C as a,a as p}from"./blocks-vKZvUMzd.js";import{C as l,A as i}from"./ErrorBar.stories-_e3S50gX.js";import"./iframe-CdO7Aj1B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2k25Twf.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cb4AGBxF.js";import"./Layer-oFeUaaGY.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./ErrorBarContext-DHKDzrNN.js";import"./RechartsWrapper-CFINL4TS.js";import"./arrayEqualityCheck-DSjGda-c.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./CSSTransitionAnimate-Cvj8rdsP.js";import"./useAnimationId-Ci_KtL1a.js";import"./ZIndexLayer-Dre2jW6R.js";import"./ScatterChart-DXwxQsio.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./CartesianGrid-DVOfHa-A.js";import"./CartesianAxis-C5xy13MG.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./Label-BR3nHz9_.js";import"./types-DFIEYgnV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B3LqZDEz.js";import"./YAxis-BL8TYUdf.js";import"./Scatter-CwNVARXL.js";import"./ReactUtils-D5Zl77ai.js";import"./Curve-BvwXZ_2X.js";import"./tooltipContext-CN5TX6Sq.js";import"./Symbols-DohrOtO1.js";import"./ActiveShapeUtils-BhQSb30R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ct8C5CYW.js";import"./Trapezoid-UgLOqUt_.js";import"./Sector-D64_Ht99.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./RechartsHookInspector-8WkUE3nw.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
