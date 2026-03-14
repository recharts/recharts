import{j as r}from"./jsx-runtime-BMWFucOR.js";import{useMDXComponents as n}from"./index-DFf8WQ3C.js";import{M as p,C as s,a}from"./blocks-5YGKCi3D.js";import{C as m,A as i}from"./ErrorBar.stories-5yAhr-hQ.js";import"./iframe-Dv2EI0Ju.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQUBjWw-.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C93KOKqP.js";import"./Layer-DEwUBVRy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BAehELTf.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./RechartsWrapper-bNtyFajX.js";import"./arrayEqualityCheck-D1mGNef5.js";import"./immer-C8dYrQHT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bc1bjXU3.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./zIndexSlice-bRjNTWyo.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./CSSTransitionAnimate-ECgaAvxV.js";import"./useAnimationId-CFJ1HB8y.js";import"./ZIndexLayer-yLy7ki0K.js";import"./ScatterChart-BpDpBlJo.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./CartesianGrid-C1dn2kEs.js";import"./CartesianAxis-Ci9kjPzN.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./Label-CoVOGhvs.js";import"./types-BOTa8dCr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BxPBpU10.js";import"./YAxis-Dl3Sd1eT.js";import"./Scatter-w6sbnzMa.js";import"./ReactUtils-CPqsARhu.js";import"./Curve-BYfhifTo.js";import"./step-CXEpNkoj.js";import"./tooltipContext-WuIpWmu1.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./RechartsHookInspector-CyibsFS2.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
