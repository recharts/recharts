import{j as r}from"./jsx-runtime-DD1530hF.js";import{useMDXComponents as n}from"./index-DGZcuJ7W.js";import{M as p,C as s,a}from"./blocks-DQUJL9al.js";import{C as m,A as i}from"./ErrorBar.stories-BqsahwWa.js";import"./iframe-6geHM4bd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-W9fTJ1Ap.js";import"./utils-ePvtT4un.js";import"./ErrorBar-m6Hxmvvf.js";import"./Layer-AOnBAVLr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./ErrorBarContext-D0w-EAob.js";import"./RechartsWrapper-CT-ler3b.js";import"./arrayEqualityCheck-Bhk4eC6b.js";import"./immer-BHDsl4Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BthKVvnl.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./CSSTransitionAnimate-DXxmXoLM.js";import"./useAnimationId-RNAT_shg.js";import"./ZIndexLayer-D_4fvMt1.js";import"./ScatterChart-6mcxwa_t.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./CartesianGrid-OsQE69dK.js";import"./CartesianAxis-BqFoQr74.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-enChBe_S.js";import"./YAxis-CyQoyaj5.js";import"./Scatter-D26HZQIq.js";import"./ReactUtils-DLbKFm0I.js";import"./Curve-CQuCDB0y.js";import"./step-DQP9UvLT.js";import"./tooltipContext-Bp0p3vM5.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./RechartsHookInspector-DIMVuZhQ.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
