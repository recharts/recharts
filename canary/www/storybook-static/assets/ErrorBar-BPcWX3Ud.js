import{j as r}from"./jsx-runtime-BiftO-Me.js";import{useMDXComponents as n}from"./index-f0qhJevJ.js";import{M as p,C as s,a}from"./blocks-DiMKnyzV.js";import{C as m,A as i}from"./ErrorBar.stories-qas4IkHS.js";import"./iframe-daRyhr9r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AR7D8lqg.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CrTT5Tv9.js";import"./Layer-Bnvu8mRz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./ErrorBarContext-CeBeQ7um.js";import"./RechartsWrapper-C9EF5VFS.js";import"./arrayEqualityCheck-2Pg-cl6R.js";import"./immer-C5a-5af_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CdQ0cAhw.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./d3-scale-CDmp_quo.js";import"./zIndexSlice-B_dP-4_H.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./CSSTransitionAnimate-BlPWBVsO.js";import"./useAnimationId-DzCJLB3u.js";import"./ZIndexLayer-B8DbAkQv.js";import"./ScatterChart-DWNNHr_K.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./CartesianGrid-CEAMYBQl.js";import"./CartesianAxis-BAyDOgMb.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./Label-C2V68gYo.js";import"./types-B1BFfyfQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CvxqYJF6.js";import"./YAxis-CfRyhpY9.js";import"./Scatter-D-qMGz-B.js";import"./ReactUtils-Dnts_VJo.js";import"./Curve-CNVfap9K.js";import"./step-Bh8CmZPH.js";import"./tooltipContext-D6W8k41Y.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./ActiveShapeUtils-BwOb2O47.js";import"./isPlainObject-Lpl2eom0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0FBXqMT.js";import"./Trapezoid-C-VqU7dw.js";import"./Sector-g7YAEghM.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./RechartsHookInspector-Dokqg7We.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
