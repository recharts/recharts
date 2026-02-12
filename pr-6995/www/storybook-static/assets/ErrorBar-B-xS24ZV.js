import{j as r}from"./jsx-runtime-9PpVi6jk.js";import{useMDXComponents as n}from"./index-Cu6ekKVw.js";import{M as s,C as a,a as p}from"./blocks-DYsfH2-j.js";import{C as l,A as i}from"./ErrorBar.stories-DDfqAmNi.js";import"./iframe-D8RsH_ZD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CnFLVdtg.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D8weR-A0.js";import"./Layer-BDdUxbHF.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./ErrorBarContext-CAtMmrl9.js";import"./RechartsWrapper-CikDBT3M.js";import"./arrayEqualityCheck-DfUQQqNG.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./CSSTransitionAnimate-BuvUjSTY.js";import"./useAnimationId-DRWFjGg3.js";import"./ZIndexLayer-DiTXvVi3.js";import"./ScatterChart-7DZOhLJ7.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./CartesianGrid-BLNF8xBj.js";import"./CartesianAxis-ewa7ZF2u.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./Label-DsxuCRwy.js";import"./types-Dyd5Crad.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-9qpGEcGJ.js";import"./YAxis-C3MuBlcJ.js";import"./Scatter-C_LWbQnu.js";import"./ReactUtils-6PKXXThp.js";import"./Curve-CIshv-2z.js";import"./tooltipContext-DuqSWYAC.js";import"./Symbols-CBAU6oWP.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./RechartsHookInspector-DuFREeNP.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
