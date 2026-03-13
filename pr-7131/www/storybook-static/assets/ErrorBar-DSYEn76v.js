import{j as r}from"./jsx-runtime-BRse81rZ.js";import{useMDXComponents as n}from"./index-wc9P_Vl4.js";import{M as p,C as s,a}from"./blocks-jFQ1iL11.js";import{C as m,A as i}from"./ErrorBar.stories-BjnOW_H9.js";import"./iframe-BDTlfdm2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT8_ithu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B18fMYHv.js";import"./Layer-CqYlT3eS.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Czz55H-I.js";import"./ErrorBarContext-DViBWZq0.js";import"./RechartsWrapper-CFvbTCKp.js";import"./arrayEqualityCheck--4uVIqe7.js";import"./immer-D4Dnjbsg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B3NJv-3m.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./CSSTransitionAnimate-Dlp3WeXd.js";import"./useAnimationId-CupwM_tg.js";import"./ZIndexLayer-DC39aMOh.js";import"./ScatterChart-CirLCJfl.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./CartesianGrid-CMA7C2-6.js";import"./CartesianAxis-CZM1jQf4.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./Label-VxKVkBMg.js";import"./types-D6KN9kQt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CGiSi9HN.js";import"./YAxis-ClHUtMv7.js";import"./Scatter-DA17Lpxo.js";import"./ReactUtils-ma75EdaK.js";import"./Curve-g-MTQgVG.js";import"./step-C4gkOhOo.js";import"./tooltipContext-CXmFM1_D.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";import"./ActiveShapeUtils-ZL_pxKoe.js";import"./isPlainObject-Cnip5whK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWWR6MHC.js";import"./Trapezoid-yGMiXHgj.js";import"./Sector-ketJTAKQ.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./RechartsHookInspector-CwVl35lx.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
