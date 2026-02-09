import{j as r}from"./jsx-runtime-DUmu7zxi.js";import{useMDXComponents as n}from"./index-Tq6H2tFL.js";import{M as s,C as a,a as p}from"./blocks-CeC0Urp7.js";import{C as l,A as i}from"./ErrorBar.stories-D2QrZsJ1.js";import"./iframe-xqabyeMj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIiQC_pi.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CTkxNA1V.js";import"./Layer-Bh77GRoo.js";import"./resolveDefaultProps-C4CpinzP.js";import"./ErrorBarContext-BxBXv2QU.js";import"./RechartsWrapper-BiqM6SLb.js";import"./arrayEqualityCheck-8L6pkBib.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./CSSTransitionAnimate-CLadEBg4.js";import"./useAnimationId-Cs8mC2Bw.js";import"./ZIndexLayer-DT_FpcHY.js";import"./ScatterChart-ChpDIWF7.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianGrid-BBOEzBe7.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DCnicXeQ.js";import"./YAxis-DVjLQwct.js";import"./Scatter-CmgWSqGz.js";import"./ReactUtils-bWGvhqKE.js";import"./Curve-DXgolxSe.js";import"./tooltipContext-vrzPBdCH.js";import"./Symbols-Co2bCSmq.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnLG2ZKC.js";import"./Trapezoid-CzCZCQIg.js";import"./Sector-BI2kwOQX.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./RechartsHookInspector-CFJUwZ9y.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
