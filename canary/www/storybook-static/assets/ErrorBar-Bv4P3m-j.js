import{j as r}from"./jsx-runtime-DG2NHuRm.js";import{useMDXComponents as n}from"./index-BQyhtJY4.js";import{M as p,C as s,a}from"./blocks-Dv8wZEYI.js";import{C as m,A as i}from"./ErrorBar.stories-BkBtSUgA.js";import"./iframe-DDI_DJJN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iQmKaGYo.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DYTkXEki.js";import"./Layer-CIeq28iC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLbNKqYx.js";import"./ErrorBarContext-CWlsK-qh.js";import"./RechartsWrapper-DMJyf-Ro.js";import"./arrayEqualityCheck-hZTzDH-w.js";import"./immer-Brsuo9bJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cy1m0pGF.js";import"./hooks-wL8R-wOE.js";import"./axisSelectors-ChmA7UB1.js";import"./d3-scale-C1aLw3GY.js";import"./zIndexSlice-DxTiX0Vg.js";import"./renderedTicksSlice-CdTaSuMU.js";import"./RegisterGraphicalItemId-CcKibD6X.js";import"./CSSTransitionAnimate-B6JPOTxI.js";import"./useAnimationId-CexGYFUY.js";import"./ZIndexLayer-NEFv0ypW.js";import"./ScatterChart-DcKonc8E.js";import"./CartesianChart-0fUn6gYr.js";import"./chartDataContext-D_5cMEe0.js";import"./CategoricalChart-lTFMLhnQ.js";import"./CartesianGrid-djPL6F_S.js";import"./CartesianAxis-FKnuWFmP.js";import"./Text-lRH21Xfn.js";import"./DOMUtils-CSAlYQMj.js";import"./Label-CGfHxLGm.js";import"./types-3HOHeyG7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CyGjCDT7.js";import"./YAxis-8PQWMae8.js";import"./Scatter-Cc4Y2dP_.js";import"./ReactUtils-BsJAl1au.js";import"./Curve-CV9593Ht.js";import"./step-8724oeyl.js";import"./tooltipContext-CjrLdc-j.js";import"./Symbols-Cb1Mvpcy.js";import"./symbol-BbtwQcdi.js";import"./ActiveShapeUtils-TXeo_kM0.js";import"./isPlainObject-DQmMsT9g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYHIra0M.js";import"./Trapezoid-CCG-1NIc.js";import"./Sector-BD9d8CEy.js";import"./GraphicalItemClipPath-BeQVZHHf.js";import"./SetGraphicalItem-D9woa3Pp.js";import"./RechartsHookInspector-C3V8sbCd.js";import"./ChartSizeDimensions-BQ24u2Cw.js";import"./OffsetShower-BVATxvoJ.js";import"./PlotAreaShower-uC34L_bk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
