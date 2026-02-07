import{j as r}from"./jsx-runtime-DknadoYv.js";import{useMDXComponents as n}from"./index-D4cVNJXa.js";import{M as s,C as a,a as p}from"./blocks-DEZ5yGyl.js";import{C as l,A as i}from"./ErrorBar.stories-DfZbjv6g.js";import"./iframe-p_UG0KAI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cmf0vnA4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-99KZejfB.js";import"./Layer-JpdK0Yhb.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./ErrorBarContext-CzGVMKe5.js";import"./RechartsWrapper-tEJUk72V.js";import"./arrayEqualityCheck-RFBrzMpT.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./zIndexSlice-BmIGVCRU.js";import"./RegisterGraphicalItemId-CYD9ORuF.js";import"./CSSTransitionAnimate-Gk5vSXxH.js";import"./useAnimationId-CNvXWFg0.js";import"./ZIndexLayer-CVbpoIAO.js";import"./ScatterChart-DaXuXFag.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./CartesianGrid-DRqphYMG.js";import"./CartesianAxis-0r0p8ryQ.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./Label-079Vd-9w.js";import"./types-PTj5YW0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-zKsPIOo2.js";import"./YAxis-DEIZfQQv.js";import"./Scatter-TIhYMg01.js";import"./ReactUtils-Bi-gzM1a.js";import"./Curve-BzeYL40i.js";import"./tooltipContext-DbI0IIY-.js";import"./Symbols-CtMkMnQW.js";import"./ActiveShapeUtils-BrkQD8_s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxtfu4l2.js";import"./Trapezoid-0x4_ia8j.js";import"./Sector-BYc0giK7.js";import"./GraphicalItemClipPath-QjUTAoiq.js";import"./SetGraphicalItem-JMwAn23t.js";import"./RechartsHookInspector-DC0vak21.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
