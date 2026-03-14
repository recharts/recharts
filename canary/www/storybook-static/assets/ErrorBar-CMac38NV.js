import{j as r}from"./jsx-runtime-BPthyFi9.js";import{useMDXComponents as n}from"./index-BoubqBEx.js";import{M as p,C as s,a}from"./blocks-pCRbELr1.js";import{C as m,A as i}from"./ErrorBar.stories-D6oIs8Rf.js";import"./iframe-DvuZWOTb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CGCMEZS5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CbKoExGQ.js";import"./Layer-D0S2CDqI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNfHMc3-.js";import"./ErrorBarContext-Dt0Jqr2E.js";import"./RechartsWrapper-C8dH0HHg.js";import"./arrayEqualityCheck-BBARzIRr.js";import"./immer-BHFkM9Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-eU4Ehn4B.js";import"./hooks-43hsLZ0P.js";import"./axisSelectors-BnR_Cfp_.js";import"./d3-scale-BdRaduXu.js";import"./zIndexSlice-BABNjTcN.js";import"./renderedTicksSlice-BAodcevd.js";import"./RegisterGraphicalItemId-BH6ssqoP.js";import"./CSSTransitionAnimate-DeYgfU2T.js";import"./useAnimationId-oxTUA15o.js";import"./ZIndexLayer-DRMyD2Rp.js";import"./ScatterChart-D_3ln63v.js";import"./CartesianChart-CnMFmEeq.js";import"./chartDataContext-BXYQ6GMf.js";import"./CategoricalChart-CPAqYbsf.js";import"./CartesianGrid-CDq5TP-K.js";import"./CartesianAxis-Dm47pK4a.js";import"./Text-CU_3ER1b.js";import"./DOMUtils-BxxJ-Wkd.js";import"./Label-CD05nnQG.js";import"./types-BkPBAcGb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DowQdhQL.js";import"./YAxis-DIT5pVYc.js";import"./Scatter-CBDTjpUp.js";import"./ReactUtils-jSjmTH71.js";import"./Curve-CApkeTVu.js";import"./step-Cug99buo.js";import"./tooltipContext-QkxCPnN-.js";import"./Symbols-4yD0ZZ3H.js";import"./symbol-tCdMof47.js";import"./ActiveShapeUtils-0RU40zhg.js";import"./isPlainObject-BJJzFz0o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpIWh0L4.js";import"./Trapezoid-BCrvbeh4.js";import"./Sector-Uwlbv7Cd.js";import"./GraphicalItemClipPath-DmmSLEF_.js";import"./SetGraphicalItem-Dkbl2A_A.js";import"./RechartsHookInspector-Cl4EGw9D.js";import"./ChartSizeDimensions-E7tryntV.js";import"./OffsetShower-BUvvOC4J.js";import"./PlotAreaShower-iq9hWQZ1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
