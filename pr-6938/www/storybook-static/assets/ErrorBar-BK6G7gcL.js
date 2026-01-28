import{j as r}from"./jsx-runtime-mmukPk0j.js";import{useMDXComponents as n}from"./index-BRsLgt2v.js";import{M as s,C as a,a as p}from"./blocks-DT9CoFJI.js";import{C as m,A as i}from"./ErrorBar.stories-DmiER_Hv.js";import"./iframe-DsOUfprP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-G8W79pF2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D9dTCZuo.js";import"./Layer-LWw9M75d.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./ErrorBarContext-D6eG4SLo.js";import"./RechartsWrapper-DwZNGVuW.js";import"./arrayEqualityCheck-DjO11PbP.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-wPJ0hpZq.js";import"./axisSelectors-CJQMQFai.js";import"./zIndexSlice-Dgi_woyo.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./CSSTransitionAnimate-B6t2B-nc.js";import"./useAnimationId-zJAyy6w7.js";import"./ZIndexLayer-kg9R7P8d.js";import"./ScatterChart-n2Iz31on.js";import"./CartesianChart-BHRGlbKq.js";import"./chartDataContext-Dq9n1Njf.js";import"./CategoricalChart-BNNYxF9g.js";import"./CartesianGrid-CE8LIB2Q.js";import"./CartesianAxis-Cr7pmBhV.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./Label-CbeoYjYN.js";import"./types-PuShQX9K.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CfXuJc3U.js";import"./YAxis-hF6Y_Nk5.js";import"./Scatter-Be036rr7.js";import"./ReactUtils-CwDP136p.js";import"./Curve-DNHLMjMe.js";import"./tooltipContext-lAxfuQBZ.js";import"./Symbols-DhTE1eBy.js";import"./ActiveShapeUtils-CdiCAAYX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqV75pSw.js";import"./Trapezoid-tgNCAV59.js";import"./Sector-ClMrTgKg.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./RechartsHookInspector-mhd3rbsm.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./OffsetShower-CmgUZqHD.js";import"./PlotAreaShower-Da3_E1UK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
