import{j as r}from"./jsx-runtime-CZtxBwkB.js";import{useMDXComponents as n}from"./index-hbXPspBU.js";import{M as p,C as s,a}from"./blocks-DtFM3XJR.js";import{C as m,A as i}from"./ErrorBar.stories-66o5IuKT.js";import"./iframe-DRzfceQj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKayDJ64.js";import"./utils-ePvtT4un.js";import"./ErrorBar-h6Mnz3AN.js";import"./Layer-sUtHTMZe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./RechartsWrapper-Cr19GrQC.js";import"./arrayEqualityCheck-rosVEDiH.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./CSSTransitionAnimate-kQYNwlX_.js";import"./useAnimationId-B4oBcBYL.js";import"./ZIndexLayer-rLB6bkwI.js";import"./ScatterChart-C2bIAN3u.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./CartesianGrid-Bod_OhoR.js";import"./CartesianAxis-BV4F2Vv5.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./Label-CCBnxLca.js";import"./types-BIqkUGja.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-sc_rEheo.js";import"./YAxis-BpCe0zSN.js";import"./Scatter-DTMMjXv9.js";import"./ReactUtils-BLIIVErJ.js";import"./Curve-BAw1ZqwZ.js";import"./step-vYfigx3D.js";import"./tooltipContext-AJFVvBA8.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./RechartsHookInspector-iKfkRHZC.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
