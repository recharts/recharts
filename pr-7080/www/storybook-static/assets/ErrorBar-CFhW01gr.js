import{j as r}from"./jsx-runtime-v48PkFMy.js";import{useMDXComponents as n}from"./index-RZ8sMRpS.js";import{M as p,C as s,a}from"./blocks-BAoOBO0W.js";import{C as m,A as i}from"./ErrorBar.stories-BlsQkTKc.js";import"./iframe-DtsdDKdZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-txaMAxKK.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DcAFfN8G.js";import"./Layer-SH7Pqpr5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYphw90L.js";import"./ErrorBarContext-BXVMNut-.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./arrayEqualityCheck-Droc7dSW.js";import"./immer-Cl4pjRPT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C-dV99_B.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./zIndexSlice-C9mn4FBr.js";import"./renderedTicksSlice-DiHGExst.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./CSSTransitionAnimate-BL6ZQ47D.js";import"./useAnimationId-BeYERtYV.js";import"./ZIndexLayer-DBoKoGoH.js";import"./ScatterChart-4uEHKQZZ.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./CartesianGrid-E5AGxnFR.js";import"./CartesianAxis-XgYIScCi.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./Label-DA1oiymG.js";import"./types-8PVRu1dQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BoqN_M_f.js";import"./YAxis-Ca_gtZCr.js";import"./Scatter-TVJd8pSe.js";import"./ReactUtils-D2snZVWC.js";import"./Curve-DR4nUNk7.js";import"./step-BAMUjg0M.js";import"./tooltipContext-DsgXlwBL.js";import"./Symbols-Ct3soTwA.js";import"./symbol-Biu6vDdW.js";import"./ActiveShapeUtils-DTqZq5h0.js";import"./isPlainObject-PKiGLw7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bs14o4jp.js";import"./Trapezoid-CfylSPEx.js";import"./Sector-BvQTjcKL.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./RechartsHookInspector-BlgcmNAN.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
