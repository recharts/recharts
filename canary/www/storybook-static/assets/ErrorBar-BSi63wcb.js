import{j as r}from"./jsx-runtime-Dq_sxccx.js";import{useMDXComponents as n}from"./index-CFJ3sI8f.js";import{M as s,C as p,a}from"./blocks-DLroJeUc.js";import{C as l,A as i}from"./ErrorBar.stories-DFzmlF41.js";import"./iframe-DvRa5dgx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2ipCF0h.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CFT1cP91.js";import"./Layer-D1P67DdH.js";import"./resolveDefaultProps-SoldR4SX.js";import"./ErrorBarContext-RHRezGW4.js";import"./RechartsWrapper-BMf934kH.js";import"./arrayEqualityCheck-Bp8MITA_.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./zIndexSlice-DOVBAap6.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./CSSTransitionAnimate-Cr39dRkR.js";import"./useAnimationId-BFi3XFtV.js";import"./ZIndexLayer-DYz5TQmP.js";import"./ScatterChart-DlQ6Z_OI.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./CartesianGrid-RFV0CIne.js";import"./CartesianAxis-EG33R3Ra.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./Label-Btvu6YdH.js";import"./types-B9z2jnxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B9F7R6N6.js";import"./YAxis-CxgNkaty.js";import"./Scatter-Bhci5VVC.js";import"./ReactUtils-CmHVY68G.js";import"./Curve-DLYOuSdb.js";import"./tooltipContext-XxmaSwiQ.js";import"./Symbols-DZMMgp9J.js";import"./ActiveShapeUtils-CAuhGApT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNOkSbEV.js";import"./Trapezoid-BUi5_O3W.js";import"./Sector-BF6BfHlW.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./RechartsHookInspector-BA8H9BQA.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
