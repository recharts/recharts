import{j as r}from"./jsx-runtime-BFtV2RBe.js";import{useMDXComponents as n}from"./index-D6Mh06D3.js";import{M as p,C as s,a}from"./blocks-BsFiGLEC.js";import{C as m,A as i}from"./ErrorBar.stories-D0XekQOP.js";import"./iframe-CxdcV2iU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8erOpdWv.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BmWNMAcU.js";import"./Layer-C-TFz9Vn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./ErrorBarContext-CcA-FFLX.js";import"./RechartsWrapper-xlhT3EQD.js";import"./arrayEqualityCheck-DE5QCts1.js";import"./immer-DbqgSjuj.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQ1yjceL.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./CSSTransitionAnimate-BfAnzxHo.js";import"./useAnimationId-LJTPfExM.js";import"./ZIndexLayer-CWN6c1mH.js";import"./ScatterChart-cdeQbZqg.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./CartesianGrid-B38EGBL2.js";import"./CartesianAxis-BIQ5tC5_.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./Label-BgXSQpWc.js";import"./types-d6h03Wgd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C3dQuPvy.js";import"./YAxis-Kn_05Fgj.js";import"./Scatter-DFaRqrmR.js";import"./ReactUtils-BTiU_wBS.js";import"./Curve-BibSVypT.js";import"./step-D4kO6QN2.js";import"./tooltipContext-_0hGqBv0.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";import"./ActiveShapeUtils-C1lnMWmS.js";import"./isPlainObject-7KcThv1C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dl57DUUW.js";import"./Trapezoid-DT3U4xXZ.js";import"./Sector-CTFx0r-m.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./RechartsHookInspector-Cmn_3oAZ.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
