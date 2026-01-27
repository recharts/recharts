import{j as r}from"./jsx-runtime-9ErjGPVk.js";import{useMDXComponents as n}from"./index-B5IoNtO1.js";import{M as s,C as a,a as p}from"./blocks-uxh1uKLf.js";import{C as m,A as i}from"./ErrorBar.stories-CQneVFJ2.js";import"./iframe-CpBR2FD-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dknhq_uL.js";import"./utils-ePvtT4un.js";import"./ErrorBar-dJ_TMgCO.js";import"./Layer-DEK88535.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./ErrorBarContext-D_KmDbtZ.js";import"./RechartsWrapper-CoeBe9ik.js";import"./arrayEqualityCheck-DfVEXElD.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./RegisterGraphicalItemId-C5HCX42f.js";import"./CSSTransitionAnimate-aWHnwo1P.js";import"./useAnimationId-CFZ1kX6W.js";import"./ZIndexLayer-fbfZmhXg.js";import"./ScatterChart-95d6yDcG.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./CartesianGrid-BAFAxm3s.js";import"./CartesianAxis-DIWnau3l.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./Label-DWBk7fhM.js";import"./types-D4KZK8k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cmud21dv.js";import"./YAxis-CYDXfh77.js";import"./Scatter-qSOTgWzI.js";import"./ReactUtils-VfTt9PFz.js";import"./Curve-DWHqQWsG.js";import"./tooltipContext-B_FRzbLp.js";import"./Symbols-9dW_oll9.js";import"./ActiveShapeUtils-oHT1Tkw8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPCbtxXK.js";import"./Trapezoid-gv9uLae-.js";import"./Sector-UZPxualI.js";import"./GraphicalItemClipPath-VjF6EdyN.js";import"./SetGraphicalItem-BgcHabrg.js";import"./RechartsHookInspector-C3421ru3.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
