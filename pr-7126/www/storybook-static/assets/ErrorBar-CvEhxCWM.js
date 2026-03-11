import{j as r}from"./jsx-runtime-BhsRBv7B.js";import{useMDXComponents as n}from"./index-b0R-9gSR.js";import{M as p,C as s,a}from"./blocks-DhUIhXug.js";import{C as m,A as i}from"./ErrorBar.stories-DMe8r60p.js";import"./iframe-D86QwX9l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhBhI1sn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-COgRVN8E.js";import"./Layer-7ZFhhqEA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./ErrorBarContext-CuFeAbue.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./arrayEqualityCheck-CgXO-ZuA.js";import"./immer-8-oQo3xP.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Dlozd1Zf.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./CSSTransitionAnimate-BIWPoODe.js";import"./useAnimationId-DeGRDsC6.js";import"./ZIndexLayer-UcIV_jcl.js";import"./ScatterChart-ChqoBMO1.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./CartesianGrid-CHsoccTH.js";import"./CartesianAxis-DxWgPgnd.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BmsupeL1.js";import"./YAxis-Dp7U47F6.js";import"./Scatter-lDkuDv7d.js";import"./ReactUtils-BRuRWbDc.js";import"./Curve-r3vqpxAw.js";import"./step-lGE8FQDz.js";import"./tooltipContext-C-SAUFQD.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";import"./ActiveShapeUtils-B0bsImWY.js";import"./isPlainObject-HWQUIItt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlbPkBXV.js";import"./Trapezoid-jhl-5jxc.js";import"./Sector-qJl1uh8Z.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./RechartsHookInspector-BUpx_xVe.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
