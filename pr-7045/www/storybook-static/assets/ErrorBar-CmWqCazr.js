import{j as r}from"./jsx-runtime-Blm06YUH.js";import{useMDXComponents as n}from"./index-Cu534Gea.js";import{M as p,C as s,a}from"./blocks-Dli9oGMQ.js";import{C as m,A as i}from"./ErrorBar.stories-DED1kTqw.js";import"./iframe-DUQ2rD4k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-mcEQG0VX.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BLRrlkR4.js";import"./Layer-7WkqLLbY.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./ErrorBarContext-Clyukq3z.js";import"./RechartsWrapper-rIHkV1_R.js";import"./arrayEqualityCheck-BBPGZIUg.js";import"./immer-CXKbBCwk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B0EPCnDB.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./CSSTransitionAnimate-D2eDiwyh.js";import"./useAnimationId-yl6yHjaO.js";import"./ZIndexLayer-59Hqjxa2.js";import"./ScatterChart-CzwEZh5-.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./CartesianGrid-CrLNpTgd.js";import"./CartesianAxis-CJmVZJSG.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./Label-C0FJwtOT.js";import"./types-SmO60qvE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dj-mbvwT.js";import"./YAxis-CeQ3Mvu1.js";import"./Scatter-D_rTqCWD.js";import"./ReactUtils-BJlu3yfQ.js";import"./Curve-CF17Mcfw.js";import"./step-DYxjvIwM.js";import"./tooltipContext-k7gZluVX.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./RechartsHookInspector-EoCZS-ly.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
