import{j as r}from"./jsx-runtime-Hut1mazC.js";import{useMDXComponents as n}from"./index-DJvefxhN.js";import{M as p,C as s,a}from"./blocks-3E9oJXDJ.js";import{C as m,A as i}from"./ErrorBar.stories-n8NjKW9H.js";import"./iframe-CCtdbun4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAcfBBrr.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BveZrTG4.js";import"./Layer-De9fsiqG.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./ErrorBarContext-ANthrryL.js";import"./RechartsWrapper-CEuf5fH-.js";import"./arrayEqualityCheck-BN-qRjNh.js";import"./immer-BcxcW3su.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DBCQ_ffx.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./d3-scale-CwYvmJNK.js";import"./zIndexSlice-DX2GAYEt.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./RegisterGraphicalItemId-BxjxRH6l.js";import"./CSSTransitionAnimate-5m6V_sGd.js";import"./useAnimationId-Dw71NoSQ.js";import"./ZIndexLayer-i87njMD3.js";import"./ScatterChart-CSRy4ryX.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./CartesianGrid-DpC4y52a.js";import"./CartesianAxis-DjTpORWb.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./Label-B5ApX3Ma.js";import"./types-W2NqahI8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Ct1i4Wo3.js";import"./YAxis-BAJWEbem.js";import"./Scatter-rf_2eGx0.js";import"./ReactUtils-DmviycaL.js";import"./Curve-Bg-TKsWy.js";import"./step-axPf2-sT.js";import"./tooltipContext-CClW8n9n.js";import"./Symbols-C_90O_d8.js";import"./symbol-B6Bw4Roa.js";import"./ActiveShapeUtils-DrfPmOEF.js";import"./isPlainObject-Cvg7OzPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkQFoQU0.js";import"./Trapezoid-BDAKKZ25.js";import"./Sector-DD0LTKZr.js";import"./GraphicalItemClipPath-CUfY08eo.js";import"./SetGraphicalItem-CHU7mth4.js";import"./RechartsHookInspector-nkQJYVm3.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
