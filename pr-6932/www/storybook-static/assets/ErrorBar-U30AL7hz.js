import{j as r}from"./jsx-runtime-grWbM4yW.js";import{useMDXComponents as n}from"./index-Ybzk1HbC.js";import{M as s,C as a,a as p}from"./blocks-BNskXGyE.js";import{C as m,A as i}from"./ErrorBar.stories-BzTuxDjO.js";import"./iframe-CWA75x6f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-rMQlUXxN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BsXz-e03.js";import"./Layer-Dyb8NBHJ.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./arrayEqualityCheck-BbPHrIiT.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./CSSTransitionAnimate-COudJV1h.js";import"./useAnimationId-CiXad0CX.js";import"./ZIndexLayer-C1tQmmyV.js";import"./ScatterChart-Mp58zEmR.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./CartesianGrid-BBd7sKWs.js";import"./CartesianAxis-CEnZCSRe.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./Label-QjXIZu_1.js";import"./types-ieTTG77J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DIb7kM4Q.js";import"./YAxis--OX2yYy6.js";import"./Scatter-D-2oajjW.js";import"./ReactUtils-BsQxKoDK.js";import"./Curve-DzqGeZIr.js";import"./tooltipContext-CcLmKiM8.js";import"./Symbols-BfpcWYyT.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./RechartsHookInspector-SnjudCfW.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
