import{j as r}from"./jsx-runtime-BjC5XVqS.js";import{useMDXComponents as n}from"./index-CpejEOia.js";import{M as p,C as s,a}from"./blocks-DRryjLss.js";import{C as m,A as i}from"./ErrorBar.stories-BvJ3h8Yq.js";import"./iframe-CLI455N8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DzCTiCHw.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BId09rYE.js";import"./Layer-C2gLD8qT.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CegQPTcY.js";import"./ErrorBarContext-CHpZdGkV.js";import"./RechartsWrapper-BiomK5HP.js";import"./arrayEqualityCheck-DGATYUvM.js";import"./immer-DmWp1HVW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BwppRXXR.js";import"./hooks-Doc11HYF.js";import"./axisSelectors-BdO5JamF.js";import"./d3-scale-BI_Xdw0D.js";import"./zIndexSlice-D_mnyKw0.js";import"./renderedTicksSlice-CceCuUpi.js";import"./RegisterGraphicalItemId-DhtbT04w.js";import"./CSSTransitionAnimate-DoK3LC9J.js";import"./useAnimationId-CjNefpky.js";import"./ZIndexLayer-Bu63NknL.js";import"./ScatterChart-1HU7xXCS.js";import"./CartesianChart-Bvwnl3Az.js";import"./chartDataContext-1HoxnSEy.js";import"./CategoricalChart-M5ONOIR4.js";import"./CartesianGrid-CAPei4--.js";import"./CartesianAxis-DTFJnQq6.js";import"./Text-B9IImLk3.js";import"./DOMUtils-DwfKCbJu.js";import"./Label-DZ3NTBbi.js";import"./types-BBHZriQH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D9lstoZk.js";import"./YAxis-CAsk9t5u.js";import"./Scatter-D9RL_eC6.js";import"./ReactUtils-D6yH62ZJ.js";import"./Curve-jc1v2UsA.js";import"./step-Bbb8NlBF.js";import"./tooltipContext-CJNNno57.js";import"./Symbols-B_3hTHr3.js";import"./symbol-BobG1HrB.js";import"./ActiveShapeUtils-CFqNdOfc.js";import"./isPlainObject-BZ_hFATh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4yn2vQK.js";import"./Trapezoid-B6vgceDf.js";import"./Sector-RnRqdmAJ.js";import"./GraphicalItemClipPath-5s_f3x1V.js";import"./SetGraphicalItem-MRBrVOH2.js";import"./RechartsHookInspector-B0jcEhQg.js";import"./ChartSizeDimensions-CHU61BQR.js";import"./OffsetShower-B0bvPXsU.js";import"./PlotAreaShower-wBW1mPFi.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
