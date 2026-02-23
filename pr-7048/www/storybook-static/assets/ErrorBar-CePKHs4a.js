import{j as r}from"./jsx-runtime-u7gfZ2kS.js";import{useMDXComponents as n}from"./index-DholKdsQ.js";import{M as p,C as s,a}from"./blocks-Co0g5-Ma.js";import{C as m,A as i}from"./ErrorBar.stories-C0ctv1gx.js";import"./iframe-EDkYpgFH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-VaoQyGQZ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DcnyLcgj.js";import"./Layer-B_dQgSH5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CektsYXT.js";import"./ErrorBarContext-BSOP-KRw.js";import"./RechartsWrapper-D3m4uKer.js";import"./arrayEqualityCheck-3I37HEG_.js";import"./immer-OU7Y0bVq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-g2grDsWN.js";import"./hooks-9dyjFB2O.js";import"./axisSelectors-DuoLroUy.js";import"./d3-scale-Da0yFaRI.js";import"./zIndexSlice-CEaJbv0z.js";import"./renderedTicksSlice-tL_S_nSy.js";import"./RegisterGraphicalItemId-BmJCRqzh.js";import"./CSSTransitionAnimate-C5AppsLw.js";import"./useAnimationId-BbddIEaK.js";import"./ZIndexLayer-CFOztK9t.js";import"./ScatterChart-BdppcsUg.js";import"./CartesianChart-Dj1xYMR5.js";import"./chartDataContext-D4KzV5Tt.js";import"./CategoricalChart-AyWzdtKe.js";import"./CartesianGrid-Z31fTq1Q.js";import"./CartesianAxis-DB9dh0sL.js";import"./Text-_RLDIMGf.js";import"./DOMUtils-BmamCvsY.js";import"./Label-tpHL658P.js";import"./types-BIaRI4-l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DF72n0MP.js";import"./YAxis-vzHqkzuu.js";import"./Scatter-B2YeuX0k.js";import"./ReactUtils-pbZTnHEY.js";import"./Curve-CaKiPo4V.js";import"./step-CNqQtAg0.js";import"./tooltipContext-BVpCKy2N.js";import"./Symbols-Ba1mC9Fj.js";import"./symbol-DtUDp9_D.js";import"./ActiveShapeUtils-DdBu78Ro.js";import"./isPlainObject-MAh5iL27.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUAMyMnQ.js";import"./Trapezoid-Ce9uM3y7.js";import"./Sector-DxWTUroZ.js";import"./GraphicalItemClipPath-LiQwpHfd.js";import"./SetGraphicalItem-DkwojxeX.js";import"./RechartsHookInspector-CH0J_Gc_.js";import"./ChartSizeDimensions-zH_0qASi.js";import"./OffsetShower-C_V4W_fW.js";import"./PlotAreaShower-DtLh3AKd.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
