import{j as r}from"./jsx-runtime-5SCZrT7n.js";import{useMDXComponents as n}from"./index-txfl7j83.js";import{M as s,C as a,a as p}from"./blocks-D5VU1LIP.js";import{C as m,A as i}from"./ErrorBar.stories-8CxCi1tB.js";import"./iframe-BGOJmNjB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbiKP7W2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-K8MXJu1Y.js";import"./Layer-LxxzUP-k.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./ErrorBarContext-5jw4fggF.js";import"./RechartsWrapper-h16g3EQQ.js";import"./arrayEqualityCheck-BjRvnt0s.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./zIndexSlice-DAfFf7yA.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./CSSTransitionAnimate-BNsKFcmj.js";import"./useAnimationId-G8K3lY41.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./ScatterChart-D7g7Ks0T.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./CartesianGrid-CLjZO7hV.js";import"./CartesianAxis-CTaqfxTH.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./Label-Bv9s524x.js";import"./types-DLAnyyDj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CH74Oy12.js";import"./YAxis-BYgICbJJ.js";import"./Scatter-BqW4EEhT.js";import"./ReactUtils-BB1AONhv.js";import"./Curve-Bf5GHIVx.js";import"./tooltipContext-cVTwqAl2.js";import"./Symbols-NLXHxAGu.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./RechartsHookInspector-Cgn96sot.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./OffsetShower-CQ-BgPhh.js";import"./PlotAreaShower-C5FoW2lp.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
