import{j as r}from"./jsx-runtime-eU9s1MHW.js";import{useMDXComponents as n}from"./index-DDn4rp6T.js";import{M as s,C as a,a as p}from"./blocks-T0DEmS0i.js";import{C as l,A as i}from"./ErrorBar.stories-BhbLmGec.js";import"./iframe-DMofGbdh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5a3_tnM.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BOe2iius.js";import"./Layer-BiV0mvq6.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./ErrorBarContext-BGJbOelu.js";import"./RechartsWrapper-C7CsVMpm.js";import"./arrayEqualityCheck-CsoqXgVI.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DQLTrr19.js";import"./axisSelectors-CeuWGW4U.js";import"./zIndexSlice-CsA5GGWo.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./CSSTransitionAnimate-BO1cTv5v.js";import"./useAnimationId-CkpaA0hy.js";import"./ZIndexLayer-CWIihq-M.js";import"./ScatterChart-PdFAF6gK.js";import"./CartesianChart-DWOZMVOy.js";import"./chartDataContext-K-dQ-k-3.js";import"./CategoricalChart-D_GR9jLw.js";import"./CartesianGrid-BbwQGwf7.js";import"./CartesianAxis-BNGc91Ri.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./Label-DxmFoslz.js";import"./types-DMK1Hrm-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D0dacd78.js";import"./YAxis-B_yG4ERH.js";import"./Scatter-k-cOlybk.js";import"./ReactUtils-Dv6d3MQ5.js";import"./Curve-Dep4Vom7.js";import"./tooltipContext-D08fW7T9.js";import"./Symbols-iw9OdhhJ.js";import"./ActiveShapeUtils-D8pbFwx0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWfmzqul.js";import"./Trapezoid-CRq1iTfA.js";import"./Sector-BMWgIsRC.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./RechartsHookInspector-DJgQFG2f.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
