import{j as r}from"./jsx-runtime-D9d9J7ck.js";import{useMDXComponents as n}from"./index-CjR_nCeF.js";import{M as p,C as s,a}from"./blocks-C5OtS_FH.js";import{C as m,A as i}from"./ErrorBar.stories-D87YCyIr.js";import"./iframe-CiJ-9oSW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbWSPN2V.js";import"./utils-ePvtT4un.js";import"./ErrorBar-6JRttIAI.js";import"./Layer-BNBNN9ao.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./ErrorBarContext-CYSXeNyx.js";import"./RechartsWrapper-eTQdG_km.js";import"./arrayEqualityCheck-C8jW8oZt.js";import"./immer-37ItimpE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CDsMfUar.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./zIndexSlice-eHnPInNj.js";import"./renderedTicksSlice-9qCibHxh.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./CSSTransitionAnimate-DObEWNo-.js";import"./useAnimationId-CXrnPLqE.js";import"./ZIndexLayer-BJKv50T_.js";import"./ScatterChart-DP2wYRo8.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./CartesianGrid-DFVcV20B.js";import"./CartesianAxis-BCIccZ9q.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BJxfrRMM.js";import"./YAxis-BZxiz2W9.js";import"./Scatter-BXeKjSUt.js";import"./ReactUtils-DvnOMe61.js";import"./Curve-CSLHFVyE.js";import"./step-DuNs4m9V.js";import"./tooltipContext-bgs-dFTh.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./RechartsHookInspector-CQuYP5B8.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
