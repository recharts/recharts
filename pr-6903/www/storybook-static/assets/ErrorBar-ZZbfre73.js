import{j as r}from"./jsx-runtime-bbHVWXR5.js";import{useMDXComponents as n}from"./index-CEbcfqMS.js";import{M as s,C as a,a as p}from"./blocks-DKAtQ71Z.js";import{C as l,A as i}from"./ErrorBar.stories-ci-DALnj.js";import"./iframe-oKMzB0d-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bw063qfE.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B8izkwOR.js";import"./Layer-Drq4I3c8.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./ErrorBarContext-DSBHo_om.js";import"./RechartsWrapper-CTDVW_mD.js";import"./arrayEqualityCheck-Caoo2I2E.js";import"./PolarUtils-BvDSiGX_.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./CSSTransitionAnimate-CZiEdg0q.js";import"./useAnimationId-D0v972Sk.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./ScatterChart-DP9_YkrJ.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./CartesianGrid-5hmKvUrP.js";import"./CartesianAxis-D9OPLMCI.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./Label-CUg786Ba.js";import"./types-Bjx9mdsH.js";import"./XAxis-DlRmKJ01.js";import"./YAxis-DLym79d9.js";import"./Scatter-CXEkS9w3.js";import"./ReactUtils-BHQlFXLR.js";import"./Curve-C8ob2FQq.js";import"./tooltipContext-CIiVfwCR.js";import"./Symbols-mKBUz55k.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CfUKIL1Q.js";import"./Trapezoid-D0zfblCG.js";import"./Sector-DAIlPrp3.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./RechartsHookInspector-BzEUDXeW.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
