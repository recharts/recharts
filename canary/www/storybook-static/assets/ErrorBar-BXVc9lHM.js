import{j as r}from"./jsx-runtime-BibHpxEz.js";import{useMDXComponents as n}from"./index-Bb44ssM5.js";import{M as p,C as s,a}from"./blocks-BLgNTd9p.js";import{C as m,A as i}from"./ErrorBar.stories-DtEN3T3U.js";import"./iframe-q7EKBh7o.js";import"./preload-helper-Dp1pzeXC.js";import"./index-z6UB51wB.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CTQJXs-2.js";import"./Layer-QiojE74q.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./ErrorBarContext-B0wOEolD.js";import"./RechartsWrapper-B22qLPQG.js";import"./arrayEqualityCheck-CNeXmyp-.js";import"./immer-so6Ulnev.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C4-9aL-F.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./CSSTransitionAnimate-CNYu0_My.js";import"./useAnimationId-CVW780SS.js";import"./ZIndexLayer-CyDdrDhA.js";import"./ScatterChart-cq0DXZZ0.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./CartesianGrid-zerpxpsB.js";import"./CartesianAxis-DgR0v-Eb.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./Label-D0Yxhrga.js";import"./types-8fLOkEDP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cc06MLaN.js";import"./YAxis-Dzu9zp52.js";import"./Scatter-B1HYY-b8.js";import"./ReactUtils-CCO8h_ST.js";import"./Curve-CMEBV0h5.js";import"./step-BUn93TOQ.js";import"./tooltipContext-D-kQhLHL.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";import"./ActiveShapeUtils-BUcYuJvN.js";import"./isPlainObject-DABaG52Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9CBwic5.js";import"./Trapezoid-C9zo0qDT.js";import"./Sector-CO_u1rWF.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./RechartsHookInspector-DewVmCy0.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
