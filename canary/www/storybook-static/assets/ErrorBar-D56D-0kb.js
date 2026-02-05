import{j as r}from"./jsx-runtime-DlaSrxEi.js";import{useMDXComponents as n}from"./index-B6Z7g-Ly.js";import{M as s,C as a,a as p}from"./blocks-Dgjf2UjC.js";import{C as l,A as i}from"./ErrorBar.stories-BqNa5rfi.js";import"./iframe-DerYKIzi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Baa4xFqo.js";import"./utils-ePvtT4un.js";import"./ErrorBar-yA-M9qol.js";import"./Layer-D3SGVv1F.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./ErrorBarContext-B9auALKr.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./arrayEqualityCheck-BjVe0Fqi.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./zIndexSlice-Dl8TZiao.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./CSSTransitionAnimate-BOXdu_FU.js";import"./useAnimationId-Q_ju2aFP.js";import"./ZIndexLayer-B4AZig9C.js";import"./ScatterChart-DWy8fqX7.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./CartesianGrid-Cj39R05K.js";import"./CartesianAxis-CgnzR7dE.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./Label-Dcc5xZ5Y.js";import"./types-aH4hB60Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Bgvn5DCx.js";import"./YAxis-D6MwvlMv.js";import"./Scatter-BJKxS4DI.js";import"./ReactUtils-C811ViG8.js";import"./Curve-HbHV5hCk.js";import"./tooltipContext-DpD997Ve.js";import"./Symbols-BsidgTnn.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./RechartsHookInspector-6OICS92a.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
