import{j as r}from"./jsx-runtime-BsLuP03l.js";import{useMDXComponents as n}from"./index-DIWE8O-I.js";import{M as s,C as p,a}from"./blocks-BRiTuyD6.js";import{C as l,A as i}from"./ErrorBar.stories-B3JoIWTw.js";import"./iframe-C8rrCX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CVthgwiF.js";import"./utils-ePvtT4un.js";import"./ErrorBar-QMJ2qC3a.js";import"./Layer-D1v-1P4s.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./ErrorBarContext-CHadBikd.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./arrayEqualityCheck-B6s-2qWd.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./CSSTransitionAnimate-CcF1P6wR.js";import"./useAnimationId-CljxjOmY.js";import"./ZIndexLayer-DFkgVZys.js";import"./ScatterChart-DjuUNG4m.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./CartesianGrid-EKJBNeKk.js";import"./CartesianAxis-B58JFruC.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./Label-pD9QpgDQ.js";import"./types-DDBoPPlm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B3LhdJHC.js";import"./YAxis-DOVMeyYT.js";import"./Scatter-1GOTVvK0.js";import"./ReactUtils-B6XfFwTE.js";import"./Curve-ckN9X3mA.js";import"./tooltipContext-BXl1HKdK.js";import"./Symbols-CojuA_dk.js";import"./ActiveShapeUtils-BVoBh-mr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk1pBm8g.js";import"./Trapezoid-8D3XkRpf.js";import"./Sector-Doajdj9m.js";import"./GraphicalItemClipPath-BqvBTWAt.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./RechartsHookInspector-CRTByZl4.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
