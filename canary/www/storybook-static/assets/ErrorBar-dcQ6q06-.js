import{j as r}from"./jsx-runtime-vhnusKH7.js";import{useMDXComponents as n}from"./index-DC12QoLr.js";import{M as s,C as a,a as p}from"./blocks-DaouS2t5.js";import{C as m,A as i}from"./ErrorBar.stories-B3A4G4Y2.js";import"./iframe-BZbOzzTY.js";import"./preload-helper-Dp1pzeXC.js";import"./index--k4eFqf6.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BYeADmdb.js";import"./Layer-Ca1ZcU8K.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./ErrorBarContext-D7kGcYfA.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./arrayEqualityCheck-D0qDv0Fd.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./zIndexSlice-J5rUHDmR.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./CSSTransitionAnimate-CQFXVe04.js";import"./useAnimationId-CbTMmgPX.js";import"./ZIndexLayer-CLlHxURh.js";import"./ScatterChart-Dv7fPuC7.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./CartesianGrid-BfQ3xRz4.js";import"./CartesianAxis-B2T9DZ1W.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./Label-D9W5dwQ-.js";import"./types-CCRlLAaX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D_0iXdcr.js";import"./YAxis-Dya7AK5Z.js";import"./Scatter-bVPjAU37.js";import"./ReactUtils-BZBgIdmA.js";import"./Curve-LGs6YPsX.js";import"./tooltipContext-CEJlVqMU.js";import"./Symbols-BeK0vgrh.js";import"./ActiveShapeUtils-dkNue--z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkInrNvF.js";import"./Trapezoid-vZxOp19A.js";import"./Sector-Cp2fRZg0.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./RechartsHookInspector-135t8dQu.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
