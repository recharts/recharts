import{j as r}from"./jsx-runtime-Cz66qJtn.js";import{useMDXComponents as n}from"./index-B3rzFkc2.js";import{M as p,C as s,a}from"./blocks-CCveIrLg.js";import{C as m,A as i}from"./ErrorBar.stories-Bd6i7jLj.js";import"./iframe-BFxtY9dI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df7eFGry.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DFGQtOGH.js";import"./Layer-YgumUWTD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bso679kC.js";import"./ErrorBarContext-BKgH9nv9.js";import"./RechartsWrapper-DLTyrBtL.js";import"./arrayEqualityCheck-BQbZm714.js";import"./immer-CUcePk58.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DIi_90kL.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./CSSTransitionAnimate-CuaPQ9Ne.js";import"./useAnimationId-BSFVs4aF.js";import"./ZIndexLayer-DBC69qog.js";import"./ScatterChart-BlPWIYym.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./CartesianGrid-rH53Dzit.js";import"./CartesianAxis-BYeXOVyG.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./Label-BcnS9G2E.js";import"./types-DnPXbBrB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D3JpuhiV.js";import"./YAxis-CPuMzTzv.js";import"./Scatter-BdLQyPFK.js";import"./ReactUtils-DAjtS1FD.js";import"./Curve-CuVRTfs_.js";import"./step-Ckw-k6uH.js";import"./tooltipContext-DspCVGBW.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./ActiveShapeUtils-C6MZRufc.js";import"./isPlainObject-BfhtbKPL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpImsBEM.js";import"./Trapezoid-DlEtqDsP.js";import"./Sector-CtJlOyZO.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./RechartsHookInspector-gudRCKH0.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./OffsetShower-C5x-sRSJ.js";import"./PlotAreaShower-BaqJ4sLy.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
