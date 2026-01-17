import{j as r}from"./jsx-runtime-CYepl4uI.js";import{useMDXComponents as n}from"./index-BWqwZwMj.js";import{M as s,C as a,a as p}from"./blocks-CZjpfLo4.js";import{C as l,A as i}from"./ErrorBar.stories-DSX3OsDT.js";import"./iframe-C7dv0yNH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtbSRCbY.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CulTzSDJ.js";import"./Layer-BTAEH97T.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./ErrorBarContext-FWB8EeAg.js";import"./RechartsWrapper-C9EYdUpz.js";import"./arrayEqualityCheck-DyqdVI3P.js";import"./PolarUtils-Cz9TAlOj.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./zIndexSlice-BInAuLle.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./CSSTransitionAnimate-B5_EZ-Z2.js";import"./useAnimationId-y4GFPobY.js";import"./ZIndexLayer-DHYRzIS_.js";import"./ScatterChart-DdDMddY-.js";import"./CartesianChart-DFTdRJBL.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./CartesianGrid-TP-3ZJJg.js";import"./CartesianAxis-qkbdisew.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./Label-pLuTDL7t.js";import"./types-CjrwKJ5w.js";import"./XAxis-B2XI662D.js";import"./YAxis-BUtL7A2A.js";import"./Scatter-CEOsELJt.js";import"./ReactUtils-Jbry0BUC.js";import"./Curve-DWNdd9EU.js";import"./tooltipContext-CjDRDyLu.js";import"./Symbols-CWjjEhVI.js";import"./ActiveShapeUtils-BhYBD1tZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BknPpfrj.js";import"./Trapezoid-B8NGdIRJ.js";import"./Sector-DHOItzHM.js";import"./GraphicalItemClipPath-DkWi_iXg.js";import"./SetGraphicalItem-dcgdauaK.js";import"./RechartsHookInspector-lhW0mFdD.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./OffsetShower-CNtlgBc5.js";import"./PlotAreaShower-DP2LRcem.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
