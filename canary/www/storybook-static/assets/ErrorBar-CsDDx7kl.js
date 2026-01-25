import{j as r}from"./jsx-runtime-21x5wjGE.js";import{useMDXComponents as n}from"./index-D8DT-iLx.js";import{M as s,C as a,a as p}from"./blocks-DS4_fgny.js";import{C as m,A as i}from"./ErrorBar.stories-BPgk_DY6.js";import"./iframe-zYnk8EOr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4mhfMdJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CMC2MB_V.js";import"./Layer-B9ovT-3z.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./ErrorBarContext-Bboddv8p.js";import"./RechartsWrapper-CuXPMym5.js";import"./arrayEqualityCheck-R2aAAI7x.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./CSSTransitionAnimate-B-ZAI7mB.js";import"./useAnimationId-C9zF9Z14.js";import"./ZIndexLayer-DbRKS04n.js";import"./ScatterChart-yZZ2wAZk.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./CartesianGrid-qx_M6Mk1.js";import"./CartesianAxis-BwSMeEYw.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BSJK083u.js";import"./YAxis--5gqcMjD.js";import"./Scatter-CJfv8Hv_.js";import"./ReactUtils-TEkJxkkD.js";import"./Curve-BERjiOgY.js";import"./tooltipContext-C_ibJ9CU.js";import"./Symbols-CvhTj7bZ.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./Trapezoid-Ciecc0SZ.js";import"./Sector-CRX25Q97.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./RechartsHookInspector-BM6dBg77.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
