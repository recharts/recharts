import{j as r}from"./jsx-runtime-CWQSBxhC.js";import{useMDXComponents as n}from"./index-BgenzOY8.js";import{M as s,C as a,a as p}from"./blocks-D4tvKvQC.js";import{C as l,A as i}from"./ErrorBar.stories-Dqf_yYM6.js";import"./iframe-DZL_Ah-h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DN9IEtGR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DIiPYeMX.js";import"./Layer-Cvyl7OZW.js";import"./resolveDefaultProps-DcfSkoMJ.js";import"./ErrorBarContext-DiSHSCH2.js";import"./RechartsWrapper-Ck-Abs8b.js";import"./arrayEqualityCheck-D-Ts3cDI.js";import"./PolarUtils-DfkNCrwZ.js";import"./hooks-Dodf-ron.js";import"./axisSelectors-Df1JfYHl.js";import"./zIndexSlice-DxoPuFz2.js";import"./RegisterGraphicalItemId--gKDrMRm.js";import"./CSSTransitionAnimate-B06Kmm_e.js";import"./useAnimationId-B-fQiutN.js";import"./ZIndexLayer-B8J5qb9c.js";import"./ScatterChart-B9Wt9W7d.js";import"./CartesianChart-Ci6fm2Tl.js";import"./chartDataContext-9vV2ynlS.js";import"./CategoricalChart-BD-QnqEO.js";import"./CartesianGrid-zh2iKR1S.js";import"./CartesianAxis-hqZlkA4G.js";import"./Text-8PeDrNfr.js";import"./DOMUtils-D_0MfqW3.js";import"./Label-DNHrzZbV.js";import"./types-Dy3M-0QX.js";import"./XAxis-CfBz4GHV.js";import"./YAxis-B4LI4Fwk.js";import"./Scatter-O6FBg_9V.js";import"./ReactUtils-BhJ_85C1.js";import"./Curve-DKq7X7FQ.js";import"./tooltipContext-CIXEKVCI.js";import"./Symbols-DeYh9DPD.js";import"./ActiveShapeUtils-Bh1zAbKh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DBmW1QC4.js";import"./Trapezoid-IG7QOLLM.js";import"./Sector-CFzlz6F5.js";import"./GraphicalItemClipPath-BTtL5NTg.js";import"./SetGraphicalItem-BZkyoZO7.js";import"./RechartsHookInspector-CKjH9lIc.js";import"./ChartSizeDimensions-DKkQ1adP.js";import"./OffsetShower-DmaMI3on.js";import"./PlotAreaShower-BpNrAEUE.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
