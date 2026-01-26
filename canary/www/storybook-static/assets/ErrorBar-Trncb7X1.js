import{j as r}from"./jsx-runtime-DIOkh3Vt.js";import{useMDXComponents as n}from"./index-BBPjW73W.js";import{M as s,C as a,a as p}from"./blocks-DOAGqolC.js";import{C as m,A as i}from"./ErrorBar.stories-g5kcGoKr.js";import"./iframe-BtSIgQK6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1fEpgHD.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BsBTeoSP.js";import"./Layer-C0Jzn9sV.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./ErrorBarContext-COBKZW6S.js";import"./RechartsWrapper-y4jP1OLx.js";import"./arrayEqualityCheck-DE2iBB4w.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-3j04d5vi.js";import"./axisSelectors-CGAxpLYE.js";import"./zIndexSlice-BxfsWazG.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./CSSTransitionAnimate-DH28GAh9.js";import"./useAnimationId-B8iQHdnT.js";import"./ZIndexLayer-GjRfBXiF.js";import"./ScatterChart-B-bo4mrW.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./CategoricalChart-CKsWezcf.js";import"./CartesianGrid-D4eJIbAF.js";import"./CartesianAxis-B7nPrlAA.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./Label-CWG_XmjD.js";import"./types-CCc-_PPP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Duh47LNW.js";import"./YAxis-Dja6peqA.js";import"./Scatter-iYhyut7n.js";import"./ReactUtils-CkWZzFSr.js";import"./Curve-CPkDoGPV.js";import"./tooltipContext-skMOZCQR.js";import"./Symbols-DbTQ7A03.js";import"./ActiveShapeUtils-8qEwWVM1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BdN80mGv.js";import"./Trapezoid-CtEgnRI2.js";import"./Sector-BRe1-FfM.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./RechartsHookInspector-CTyYdRny.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
