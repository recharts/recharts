import{j as r}from"./jsx-runtime-BqhjjAyB.js";import{useMDXComponents as n}from"./index-CmZOvZVk.js";import{M as s,C as a,a as p}from"./blocks-DQg1sTZ3.js";import{C as m,A as i}from"./ErrorBar.stories-CsvW0SUs.js";import"./iframe-DTIyp44P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DH6qoWff.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BxKA91_M.js";import"./Layer-CNvBRmF0.js";import"./resolveDefaultProps-CEVdASN5.js";import"./ErrorBarContext-4Fy8J4Om.js";import"./RechartsWrapper-CMatZq67.js";import"./arrayEqualityCheck-CROVUPPr.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./CSSTransitionAnimate-B7Asn7Qv.js";import"./useAnimationId-cUd_sss9.js";import"./ZIndexLayer-J9Ech39_.js";import"./ScatterChart-DdqZLZ3b.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./CartesianGrid-DaTARVDI.js";import"./CartesianAxis-C2UO2Q74.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./Label-CM6isse0.js";import"./types-CLTao0pZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C5uFpCOY.js";import"./YAxis-Yf9V8Wcd.js";import"./Scatter-DEp1iQRR.js";import"./ReactUtils-BtxPFKgx.js";import"./Curve-QqkAraw2.js";import"./tooltipContext-BWhsucN3.js";import"./Symbols-BXEo6yiB.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./Trapezoid-C-AINK0-.js";import"./Sector-BVwTJui3.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./RechartsHookInspector-D8bdCWM1.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
