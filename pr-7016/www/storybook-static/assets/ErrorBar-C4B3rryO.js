import{j as r}from"./jsx-runtime-0Z83iFZ0.js";import{useMDXComponents as n}from"./index-CkgbCiPA.js";import{M as s,C as p,a}from"./blocks-D9RsLXnZ.js";import{C as l,A as i}from"./ErrorBar.stories-CIDUjIYY.js";import"./iframe-Ch6AeBvd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bzb6Yeqp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DWPKRN46.js";import"./Layer-4QzHj9sV.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./ErrorBarContext-mxMpkgJh.js";import"./RechartsWrapper-DrY4pfOn.js";import"./arrayEqualityCheck-DGZ3teMN.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./CSSTransitionAnimate-DKhKwZ8X.js";import"./useAnimationId-YtLKjIEe.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./ScatterChart-BVV4RLBO.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./CartesianGrid-Ca-CvEI5.js";import"./CartesianAxis-DGiGQ4zb.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./Label-BhgECJNB.js";import"./types-Do_qsLRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Ct6CHpvF.js";import"./YAxis-CBFbjxfR.js";import"./Scatter-CnxZ5tnk.js";import"./ReactUtils-DkszlIgF.js";import"./Curve-Bln8u_qs.js";import"./tooltipContext-DgLUObry.js";import"./Symbols-WE9lD8Kq.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./RechartsHookInspector-B8QYXaP3.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
