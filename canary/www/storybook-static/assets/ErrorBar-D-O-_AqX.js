import{j as r}from"./jsx-runtime-GVwugCgy.js";import{useMDXComponents as n}from"./index-pevc6O52.js";import{M as p,C as s,a}from"./blocks-BwVTD23i.js";import{C as m,A as i}from"./ErrorBar.stories-W-AycXmb.js";import"./iframe-9V8AjEOx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwQkTyvb.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CyMOFAsz.js";import"./Layer-BqC-87gq.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./arrayEqualityCheck--JByrSZG.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./CSSTransitionAnimate-CieYz6Ec.js";import"./useAnimationId-DIbwNcNj.js";import"./ZIndexLayer-jMQWKp1h.js";import"./ScatterChart-D9sLHmzL.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./CartesianGrid-NlelQ9W-.js";import"./CartesianAxis-BQAjBvVB.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./Label-BTjKNwoq.js";import"./types-O5g7_guk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DLQ4yzhf.js";import"./YAxis-CMVVgcYW.js";import"./Scatter-CLsylHJB.js";import"./ReactUtils-D2pkvG7O.js";import"./Curve-DFGvX__4.js";import"./step-gLl9sxps.js";import"./tooltipContext-DhT2eG4F.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./RechartsHookInspector-BPTP_PJv.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
