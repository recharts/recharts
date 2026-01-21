import{j as r}from"./jsx-runtime-Dhc8VUKm.js";import{useMDXComponents as n}from"./index-uxakdMKt.js";import{M as s,C as a,a as p}from"./blocks-CQqa1qek.js";import{C as m,A as i}from"./ErrorBar.stories-Cjo-IJ5k.js";import"./iframe-B6AlQnM2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYGFbMYu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CejDKIty.js";import"./Layer-Cdn-3vsr.js";import"./resolveDefaultProps-osVefOLp.js";import"./ErrorBarContext-DYHYd6lU.js";import"./RechartsWrapper-CexAAOIz.js";import"./arrayEqualityCheck-DOlZ0mCX.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./CSSTransitionAnimate-Ql2Ve5Fa.js";import"./useAnimationId-CsS9GYvF.js";import"./ZIndexLayer-KOQQKvvO.js";import"./ScatterChart-C2QfNY70.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./CartesianGrid-BsrOPDfE.js";import"./CartesianAxis-BwDpbQiB.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./Label-CIaajA0c.js";import"./types-C25Y7m2H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B2vfw6Li.js";import"./YAxis-BtS_tsxk.js";import"./Scatter-BQcU1ZTc.js";import"./ReactUtils-ODr0KtTw.js";import"./Curve-DTUwCS4t.js";import"./tooltipContext-D0kn5MH1.js";import"./Symbols-Cm6_UFeB.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./Trapezoid-DdjR8tMX.js";import"./Sector-D5Wtmz4T.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./RechartsHookInspector-C4bhcvg_.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
