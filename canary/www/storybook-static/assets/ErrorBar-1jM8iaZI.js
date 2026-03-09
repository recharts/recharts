import{j as r}from"./jsx-runtime-ga0_kMPI.js";import{useMDXComponents as n}from"./index-CXr36Q83.js";import{M as p,C as s,a}from"./blocks-BInSHUb2.js";import{C as m,A as i}from"./ErrorBar.stories-BhCXnHIk.js";import"./iframe-zNZ6gtuS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NY9m0Yqy.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C_Grm52e.js";import"./Layer-BQ0S_2Uh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./ErrorBarContext-DueqJhS_.js";import"./RechartsWrapper-C9d9AYjY.js";import"./arrayEqualityCheck-Dt2SCAs7.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./CSSTransitionAnimate-DEiLtWEl.js";import"./useAnimationId-C73SjrYi.js";import"./ZIndexLayer-BqvP1SAm.js";import"./ScatterChart-kVX0_yQD.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./CartesianGrid-DzNs49mq.js";import"./CartesianAxis-CVokkLFp.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./Label-BCeegupp.js";import"./types-ynSAt5pr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DgIpX0Qf.js";import"./YAxis-QWxltK0B.js";import"./Scatter-BaQ3Mnzn.js";import"./ReactUtils-CDHy-yxP.js";import"./Curve-o1yhe_oH.js";import"./step-CCZqHQ-h.js";import"./tooltipContext-BCl8WHt4.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./RechartsHookInspector-C4FQcsDn.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
