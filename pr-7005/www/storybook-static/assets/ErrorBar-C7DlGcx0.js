import{j as r}from"./jsx-runtime-Yz_XdECx.js";import{useMDXComponents as n}from"./index-DjtU5Y8s.js";import{M as s,C as a,a as p}from"./blocks-BrFByQ0T.js";import{C as l,A as i}from"./ErrorBar.stories-K0O6zCIY.js";import"./iframe-BdYBH0hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsvAOYvG.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BD0qF8kz.js";import"./Layer-CC1sQm5k.js";import"./resolveDefaultProps-BV4LHELv.js";import"./ErrorBarContext-CAApCFPz.js";import"./RechartsWrapper-92XHVlpU.js";import"./arrayEqualityCheck-CnZHVnux.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./CSSTransitionAnimate-CdJRcpiQ.js";import"./useAnimationId-D1PUvmFT.js";import"./ZIndexLayer-D6TqYbdI.js";import"./ScatterChart-D8X863Ky.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./CartesianGrid-CogLHW9f.js";import"./CartesianAxis-DtTXwL03.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./Label-nQ379wTM.js";import"./types-CeaFy_xO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C-6SXyUA.js";import"./YAxis-i93sK3J3.js";import"./Scatter-BSjetk6V.js";import"./ReactUtils-BSN6r0Fc.js";import"./Curve-C1OuXXjt.js";import"./tooltipContext-BdRs6IP9.js";import"./Symbols-Dfpy34Qh.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./RechartsHookInspector-XSvtem8K.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
