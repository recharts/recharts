import{j as r}from"./jsx-runtime-CWSJO-Rc.js";import{useMDXComponents as n}from"./index-De9LWY3D.js";import{M as s,C as a,a as p}from"./blocks-DEyjh5WS.js";import{C as l,A as i}from"./ErrorBar.stories-BdCgTmLP.js";import"./iframe-CsUpRRwn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOefsbVi.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bb26fHrw.js";import"./Layer-DS1Wp5Ew.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./ErrorBarContext-DPfvolDE.js";import"./RechartsWrapper-zi21JKPF.js";import"./arrayEqualityCheck-Df4uzLw-.js";import"./PolarUtils-B4KHlE6s.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./zIndexSlice-Cey6hWeC.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./CSSTransitionAnimate-CLQqIs9J.js";import"./useAnimationId-LktXmMrZ.js";import"./ZIndexLayer-VR9NNsxL.js";import"./ScatterChart-B4o7srbl.js";import"./CartesianChart-k_KAObT0.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./CartesianGrid-Da4wFyBU.js";import"./CartesianAxis-BncnjfCs.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./Label-B_KIKWwL.js";import"./types-B0LA1FfJ.js";import"./XAxis-DUx64kuA.js";import"./YAxis-FNiiJ-AQ.js";import"./Scatter-DHUgX5hI.js";import"./ReactUtils-BcCnPuvu.js";import"./Curve-qa4VelFY.js";import"./tooltipContext-CLzHhvJj.js";import"./Symbols-DiPp8IeL.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./Trapezoid-BXYnhgSX.js";import"./Sector-B6CpJ8fc.js";import"./GraphicalItemClipPath-CasRTjDB.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./RechartsHookInspector-D2kAWSRM.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
