import{j as r}from"./jsx-runtime-B6HFnVQS.js";import{useMDXComponents as n}from"./index-wZYaA3Ap.js";import{M as s,C as a,a as p}from"./blocks-BqSLIsQK.js";import{C as l,A as i}from"./ErrorBar.stories-CXwOV1r9.js";import"./iframe-Dim5_luC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BcXSgkDx.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bz1jBNPa.js";import"./Layer-DsncGJyW.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./ErrorBarContext-swBbnM0b.js";import"./RechartsWrapper-BTGjRieY.js";import"./arrayEqualityCheck-DY4kDyOd.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./zIndexSlice-DWwDEXe3.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./CSSTransitionAnimate-BqxBFXtC.js";import"./useAnimationId-BMRzQV3k.js";import"./ZIndexLayer-D1v8rxBH.js";import"./ScatterChart-BtHq9Ne1.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./CartesianGrid-_WEiigJ6.js";import"./CartesianAxis-CuZKHGcg.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./Label-g1K_6191.js";import"./types-BxKSV5b4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CajpKvi_.js";import"./YAxis-BX5wgPpW.js";import"./Scatter-Cl8qtZIn.js";import"./ReactUtils-B4IuMLLa.js";import"./Curve-C8164FP7.js";import"./tooltipContext-CdUJRRJL.js";import"./Symbols-BQHr33CI.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./RechartsHookInspector-P8u42xZf.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
