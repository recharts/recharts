import{j as r}from"./jsx-runtime-B4evxZC5.js";import{useMDXComponents as n}from"./index-g5jvKK9i.js";import{M as s,C as a,a as p}from"./blocks-DKVa1zlC.js";import{C as m,A as i}from"./ErrorBar.stories-6HTzgAlL.js";import"./iframe-Byw-Ecda.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq4G09kn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DC8imAoU.js";import"./Layer-BCc3Ql-7.js";import"./resolveDefaultProps-DghbljUc.js";import"./ErrorBarContext-Cl5G60_X.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./arrayEqualityCheck-DJZ_H245.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./zIndexSlice-BBcvffed.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./CSSTransitionAnimate-Bl9QIT_h.js";import"./useAnimationId-QmVedw8X.js";import"./ZIndexLayer-CyfG8XIl.js";import"./ScatterChart-Bk16XEUD.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./CartesianGrid-Ulf2y6c_.js";import"./CartesianAxis-C435YXcQ.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DKuVnBhX.js";import"./YAxis-CD7xJu8W.js";import"./Scatter-BWWkSd64.js";import"./ReactUtils-Cjy_uT2w.js";import"./Curve-Dgc9kazX.js";import"./tooltipContext-C5cmHvPB.js";import"./Symbols-BEvrU7lm.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./RechartsHookInspector-DU_Xges7.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
