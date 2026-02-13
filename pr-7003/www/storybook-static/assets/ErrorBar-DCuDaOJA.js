import{j as r}from"./jsx-runtime-rJLuh0X-.js";import{useMDXComponents as n}from"./index-N0sMlk9Q.js";import{M as s,C as a,a as p}from"./blocks-DHgqYv5D.js";import{C as l,A as i}from"./ErrorBar.stories-tq2V_S1c.js";import"./iframe-Cy8G_j66.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Blxurm1a.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DfVuEJuc.js";import"./Layer-D4d1YeMH.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./ErrorBarContext-D6VQHKa5.js";import"./RechartsWrapper-BtX23pZ_.js";import"./arrayEqualityCheck-dp8dfL7u.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Dh2IuVAR.js";import"./axisSelectors-Dnswsufb.js";import"./zIndexSlice-BDvzw6V8.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./CSSTransitionAnimate-DfZqKF7f.js";import"./useAnimationId-YkjhaILr.js";import"./ZIndexLayer-DYA27QSR.js";import"./ScatterChart-rBFDiUtF.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./CartesianGrid-DLAikBSQ.js";import"./CartesianAxis-mJhpe0_9.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./Label-r4OEA6Zh.js";import"./types-BSABi_Hc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-sHLPbu1e.js";import"./YAxis-DfWkuEr-.js";import"./Scatter-BLrgSO1O.js";import"./ReactUtils-CPeEyyol.js";import"./Curve-B4b9EAiq.js";import"./tooltipContext-Bnl8clU0.js";import"./Symbols-Dz-91Pdw.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./RechartsHookInspector-lSqxoQlZ.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
