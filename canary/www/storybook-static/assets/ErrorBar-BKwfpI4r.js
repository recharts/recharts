import{j as r}from"./jsx-runtime-DClscGYh.js";import{useMDXComponents as n}from"./index-DGUUVjaW.js";import{M as p,C as s,a}from"./blocks-tv7EE2lh.js";import{C as m,A as i}from"./ErrorBar.stories-EvvwqSsp.js";import"./iframe-CV07hTJo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NB669Q6L.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D2OnrAue.js";import"./Layer-CjSu9kHg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./ErrorBarContext-CcVjgEJt.js";import"./RechartsWrapper-B_A_zLwr.js";import"./arrayEqualityCheck-DZYwMANi.js";import"./immer-DZr-3B4h.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BbPZUkKO.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./zIndexSlice-bGazLamm.js";import"./renderedTicksSlice-BVud2Eit.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./CSSTransitionAnimate-TUNYo9ht.js";import"./useAnimationId-DLuTmxa5.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./ScatterChart-BhSbuJ86.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./CartesianGrid-CEddv1BI.js";import"./CartesianAxis-DglFdQa3.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./Label-DYpp1LIm.js";import"./types-BW-iMsEE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D8-FPQnZ.js";import"./YAxis-CQ-pu87S.js";import"./Scatter-_DSqA-ci.js";import"./ReactUtils-C6WIusF5.js";import"./Curve-6Ct2z4dM.js";import"./step-DxAhMwRF.js";import"./tooltipContext-BKDJzLkt.js";import"./Symbols-DUW3Pbjx.js";import"./symbol-D3LFYW8o.js";import"./ActiveShapeUtils-dmrR1-Re.js";import"./isPlainObject-BDdyHw-3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3uD8Idm.js";import"./Trapezoid-C129hHgo.js";import"./Sector-BzLPim6R.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./RechartsHookInspector-ouq6dPls.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
