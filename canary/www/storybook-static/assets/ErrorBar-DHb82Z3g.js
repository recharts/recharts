import{j as r}from"./jsx-runtime-9QnznEtu.js";import{useMDXComponents as n}from"./index-CrvxrVPU.js";import{M as s,C as a,a as p}from"./blocks-B6uEiZiv.js";import{C as l,A as i}from"./ErrorBar.stories-DkrSDIuV.js";import"./iframe-5gSlIHH4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BT-ezfJz.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CeBXt9k3.js";import"./Layer-OyNvh1Ue.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./ErrorBarContext-BOsyAuvl.js";import"./RechartsWrapper-D6JQB65s.js";import"./arrayEqualityCheck-BEqt-CBJ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./zIndexSlice-BvmJeHFk.js";import"./RegisterGraphicalItemId-C8051Zi-.js";import"./CSSTransitionAnimate-D7C1NpM-.js";import"./useAnimationId-CiuthG3f.js";import"./ZIndexLayer-CgtyelTd.js";import"./ScatterChart-DmV3DzBb.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./CartesianGrid-cQLUWQqD.js";import"./CartesianAxis-BR-I9vbL.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./Label-A5hrmEss.js";import"./types-D2uPaQlB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CJFZHxba.js";import"./YAxis-BedJogos.js";import"./Scatter-CWLUJX1h.js";import"./ReactUtils-DmzojIhK.js";import"./Curve-D2ClwKYm.js";import"./tooltipContext-DWBZc0FA.js";import"./Symbols-BlEQEpn8.js";import"./ActiveShapeUtils-B3Ii4nXp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsjrTG3t.js";import"./Trapezoid-CZIjMiGb.js";import"./Sector-BnVCCXEU.js";import"./GraphicalItemClipPath-DuWpJ7iO.js";import"./SetGraphicalItem-GsI-naXM.js";import"./RechartsHookInspector-DIk6ks1k.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
