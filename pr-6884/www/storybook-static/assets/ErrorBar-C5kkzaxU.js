import{j as r}from"./jsx-runtime-BIa2_aWM.js";import{useMDXComponents as n}from"./index-jUG2ePtj.js";import{M as s,C as a,a as p}from"./blocks-DKDgomPN.js";import{C as l,A as i}from"./ErrorBar.stories-5fSpgOaU.js";import"./iframe-CaIgGyHM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-tNTan1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B51MvO4f.js";import"./Layer-Bv6QiOXu.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./ErrorBarContext-Dm8UQh69.js";import"./RechartsWrapper-GR6QdmkY.js";import"./arrayEqualityCheck-CjxR2bSj.js";import"./PolarUtils-DrqRDweU.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./zIndexSlice-Q7xIp-VY.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./CSSTransitionAnimate-BM_E1byY.js";import"./useAnimationId-C8_uny94.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./ScatterChart-L17JPGV-.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./CartesianGrid-Bv3reDCi.js";import"./CartesianAxis-BIL2gr42.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./Label-P-OvPLPn.js";import"./types-8d_H4dY-.js";import"./XAxis-CTD8LeaB.js";import"./YAxis-CtUU2Zal.js";import"./Scatter-BAwTdfrI.js";import"./ReactUtils-CsC3O-TD.js";import"./Curve-9htNi4i5.js";import"./tooltipContext-C07Af5tl.js";import"./Symbols-Crj6RDt9.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./Trapezoid-DwBeZXV_.js";import"./Sector-BJsydvu6.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./RechartsHookInspector-Dwl6GEES.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
