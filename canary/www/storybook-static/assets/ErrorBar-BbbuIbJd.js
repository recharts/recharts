import{j as r}from"./jsx-runtime-BPRO0oCx.js";import{useMDXComponents as n}from"./index-CmYRjRic.js";import{M as s,C as a,a as p}from"./blocks-Dxvo9Xbe.js";import{C as l,A as i}from"./ErrorBar.stories-ZEhky2Vk.js";import"./iframe-BnXWjslm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDMR2Hui.js";import"./utils-ePvtT4un.js";import"./ErrorBar-iYTqf2wZ.js";import"./Layer-A6Fuc82i.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./ErrorBarContext-CDqLcMo6.js";import"./RechartsWrapper-BfUKOtD7.js";import"./arrayEqualityCheck-DUiNH6C9.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./CSSTransitionAnimate-XY7-WB1A.js";import"./useAnimationId-cDAtDGt9.js";import"./ZIndexLayer-BvBrZyR1.js";import"./ScatterChart-7JbZRofS.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./CartesianGrid-CKomsyf3.js";import"./CartesianAxis-RUdXwPBb.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./Label-Znit4TkG.js";import"./types-TTX5RUO9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CmdVCSMA.js";import"./YAxis-B7_xgRPt.js";import"./Scatter-4zlZBK9G.js";import"./ReactUtils-R08Tgf5F.js";import"./Curve-Bkc50DRF.js";import"./tooltipContext-ehiEzAat.js";import"./Symbols-yqo_ZORc.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DiN3KyDm.js";import"./Trapezoid-DoyDZqd_.js";import"./Sector-CE4yIiKS.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./RechartsHookInspector-CJTq0Gdr.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./OffsetShower-CSNclTFq.js";import"./PlotAreaShower-Conl4mfo.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
