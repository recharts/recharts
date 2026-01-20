import{j as r}from"./jsx-runtime-B-ZrMw2f.js";import{useMDXComponents as n}from"./index-CAWevydt.js";import{M as s,C as a,a as p}from"./blocks-CqZ6aI1a.js";import{C as m,A as i}from"./ErrorBar.stories-PmMyJhC1.js";import"./iframe-Bp7wnAMR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6AxLi4e.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CHCdcN0J.js";import"./Layer-7joqFoN-.js";import"./resolveDefaultProps-73ODOPj1.js";import"./ErrorBarContext-D_srHYiC.js";import"./RechartsWrapper-C4djzgpQ.js";import"./arrayEqualityCheck-DxE10Oy_.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./CSSTransitionAnimate-BVDHIScS.js";import"./useAnimationId-goMb22IV.js";import"./ZIndexLayer-CSCYRG22.js";import"./ScatterChart-BveWJirI.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./CartesianGrid-BQDtpVC4.js";import"./CartesianAxis-j6YjD7Sk.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./Label-Tu9yek-h.js";import"./types-7BwnP8OD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CYwkaB_4.js";import"./YAxis-8qVMRpFM.js";import"./Scatter-CUZXJr-x.js";import"./ReactUtils-DrfTY3Od.js";import"./Curve-C9HH72jI.js";import"./tooltipContext-Cksie6Kp.js";import"./Symbols-B3gxOXiD.js";import"./ActiveShapeUtils-B5LL2uEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ck3EAtYG.js";import"./Trapezoid-eO_srE68.js";import"./Sector-BGL47Yd8.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./RechartsHookInspector-DHfob8nJ.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
