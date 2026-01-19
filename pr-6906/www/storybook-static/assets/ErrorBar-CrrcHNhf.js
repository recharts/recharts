import{j as r}from"./jsx-runtime-CoIw0guH.js";import{useMDXComponents as n}from"./index-aR9TzjpI.js";import{M as s,C as a,a as p}from"./blocks-CktBnc8J.js";import{C as l,A as i}from"./ErrorBar.stories-DQH9eMfs.js";import"./iframe-DwwP6BDm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPFUjSxJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DvqSFe9f.js";import"./Layer-CFoQxLn1.js";import"./resolveDefaultProps-fclRL42w.js";import"./ErrorBarContext-CdRKq8JD.js";import"./RechartsWrapper-DfwiyTzK.js";import"./arrayEqualityCheck-CXp0SSuS.js";import"./PolarUtils-Dg8SPN1d.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./zIndexSlice-B2wHCWq0.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./CSSTransitionAnimate-Dflk8aMB.js";import"./useAnimationId-DSGl_EXu.js";import"./ZIndexLayer-BDklLudV.js";import"./ScatterChart-Ba7Yp2AD.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./CartesianGrid-1armELAk.js";import"./CartesianAxis-eabYiytD.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./types-B_qGOwmF.js";import"./XAxis-CWc7NM0U.js";import"./YAxis-BtN4txUd.js";import"./Scatter-B8rz732e.js";import"./ReactUtils-DUdaZBrS.js";import"./Curve-CYEqd5kN.js";import"./tooltipContext-HXLRqA2y.js";import"./Symbols-C6tHIL3l.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./RechartsHookInspector-CJI_KtjH.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
