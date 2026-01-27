import{j as r}from"./jsx-runtime-B5mw0i5r.js";import{useMDXComponents as n}from"./index-C_3ww70d.js";import{M as s,C as a,a as p}from"./blocks-DmS_dk27.js";import{C as m,A as i}from"./ErrorBar.stories-DtHeoyLb.js";import"./iframe-Db4zTqbk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bol23Ne6.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CY3Js7i1.js";import"./Layer-Cflbp2vf.js";import"./resolveDefaultProps-C9skBriC.js";import"./ErrorBarContext-EfIpxhpK.js";import"./RechartsWrapper-FQCKz-X1.js";import"./arrayEqualityCheck-3CRW7fvn.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./zIndexSlice-CrYwnyyD.js";import"./RegisterGraphicalItemId-Dl15i-mE.js";import"./CSSTransitionAnimate-DTY2Msz3.js";import"./useAnimationId-CxVKnk1J.js";import"./ZIndexLayer-BUznzSNs.js";import"./ScatterChart-DqFY5t9P.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./CartesianGrid-B9AADoff.js";import"./CartesianAxis-CUgWXt_R.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./Label-CqrigLpP.js";import"./types-BTyyhFf_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-2YmY08Fs.js";import"./YAxis-C58kpuB1.js";import"./Scatter-BKHugCgQ.js";import"./ReactUtils-OGo3X-P4.js";import"./Curve-D50n1SBe.js";import"./tooltipContext-ifBmNptB.js";import"./Symbols-G_hIZhWd.js";import"./ActiveShapeUtils-DuwLTnau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C_uWIMPJ.js";import"./Trapezoid-m-4m64o7.js";import"./Sector-CU3fNncw.js";import"./GraphicalItemClipPath-BZwY5GCl.js";import"./SetGraphicalItem-DZCf9fqS.js";import"./RechartsHookInspector-CrEL5moc.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./OffsetShower-n4gU0hEx.js";import"./PlotAreaShower-Dgj_k8x2.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
