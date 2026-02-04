import{j as r}from"./jsx-runtime-BDe6QK-q.js";import{useMDXComponents as n}from"./index-5Y70uyDT.js";import{M as s,C as a,a as p}from"./blocks-lBPRxuc9.js";import{C as l,A as i}from"./ErrorBar.stories-DKF0WvNC.js";import"./iframe-CU9XYLf3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DN73DgGW.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CJUqO-IH.js";import"./Layer-DY220JH0.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./ErrorBarContext-asfsfUUV.js";import"./RechartsWrapper-CMA78OKy.js";import"./arrayEqualityCheck-eFaqPFyI.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./CSSTransitionAnimate-BnS4ZCQd.js";import"./useAnimationId-VWf3KASX.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./ScatterChart-Cgfv_9L1.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./CartesianGrid-D5isxS3W.js";import"./CartesianAxis-D8E3unsA.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Bcv7Mskw.js";import"./YAxis-BemMrlFL.js";import"./Scatter-N2Au8fGb.js";import"./ReactUtils-D-xpVFtM.js";import"./Curve-_cbPrSga.js";import"./tooltipContext-CaWPMfld.js";import"./Symbols-DqoOcyix.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wboqG7.js";import"./Trapezoid-BbNzWkoD.js";import"./Sector-CkX8bkkx.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./RechartsHookInspector-_W3CqC5M.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
