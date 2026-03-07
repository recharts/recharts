import{j as r}from"./jsx-runtime-DsNduLhK.js";import{useMDXComponents as n}from"./index-D9YmfrWY.js";import{M as p,C as s,a}from"./blocks-8vYEtCSu.js";import{C as m,A as i}from"./ErrorBar.stories-BgQISxgH.js";import"./iframe-CxA-LBWH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DMMo74k-.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DAXCt4y3.js";import"./Layer-5LyTOX7F.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./ErrorBarContext-CztBpvft.js";import"./RechartsWrapper-DQKKXFhE.js";import"./arrayEqualityCheck-hJaoC2QB.js";import"./immer-xqAoRSgx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Dk8ktJ0b.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./zIndexSlice-BN1d4D77.js";import"./renderedTicksSlice-hESCiC9f.js";import"./RegisterGraphicalItemId-D9LaM4VI.js";import"./CSSTransitionAnimate-DWALRSUo.js";import"./useAnimationId-aDbwOJad.js";import"./ZIndexLayer-N8IExBeW.js";import"./ScatterChart-vUbiKz6e.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./CartesianGrid-CezShP0V.js";import"./CartesianAxis-D_h95VSX.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./Label-CVqcP_87.js";import"./types-C0V6O8sH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-re4pUrp8.js";import"./YAxis-BcK0se4x.js";import"./Scatter-CtRaiJvA.js";import"./ReactUtils-B-8-Nq1R.js";import"./Curve-C0Mvljc7.js";import"./step-o5fwVMRf.js";import"./tooltipContext-DnxwZPxO.js";import"./Symbols-N7aoJg5C.js";import"./symbol-BbORdVVc.js";import"./ActiveShapeUtils-BTPYOWGE.js";import"./isPlainObject-_PMt6I7e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B05RSUx1.js";import"./Trapezoid-DGB4adeR.js";import"./Sector-C9Xa9AX9.js";import"./GraphicalItemClipPath-BCMoGptD.js";import"./SetGraphicalItem-CRDshZRQ.js";import"./RechartsHookInspector-Ddvgytdy.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
