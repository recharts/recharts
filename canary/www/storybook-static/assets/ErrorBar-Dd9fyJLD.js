import{j as r}from"./jsx-runtime-CiSBLcpU.js";import{useMDXComponents as n}from"./index-Cn2ROF9H.js";import{M as s,C as p,a}from"./blocks-i2fu4RLR.js";import{C as l,A as i}from"./ErrorBar.stories-DIsib2YC.js";import"./iframe-xRIz3qbF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTLusoTB.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DtN524Gq.js";import"./Layer-BmRFOYbB.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./ErrorBarContext-BFUqajde.js";import"./RechartsWrapper-y0J6uKM2.js";import"./arrayEqualityCheck-BdN7i4MO.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./CSSTransitionAnimate-Duf8FCpC.js";import"./useAnimationId-Ca9wkO8e.js";import"./ZIndexLayer-CoDEXRAT.js";import"./ScatterChart-Bpm2C4Bf.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./CartesianGrid-c2xUxGhI.js";import"./CartesianAxis-7YSNf4Ta.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./Label-w-b8AlxD.js";import"./types-BXkuDJCo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-k5taAUht.js";import"./YAxis-cxDuI0HH.js";import"./Scatter-CsV7Xvmk.js";import"./ReactUtils-Cl__7Wwh.js";import"./Curve-DYmyqph4.js";import"./tooltipContext-DDQr_iGb.js";import"./Symbols-DxmxARm7.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./RechartsHookInspector-CC_tuF9F.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
