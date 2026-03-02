import{j as r}from"./jsx-runtime-CXWy1VQi.js";import{useMDXComponents as n}from"./index-DjbL7Yc-.js";import{M as p,C as s,a}from"./blocks-DCuPjVVF.js";import{C as m,A as i}from"./ErrorBar.stories--yR5nYET.js";import"./iframe-D-0IUJGK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CvEiFoUh.js";import"./utils-ePvtT4un.js";import"./ErrorBar-jmebWOJs.js";import"./Layer-CTviFarP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./ErrorBarContext-CnqimuFK.js";import"./RechartsWrapper-CufL0AhU.js";import"./arrayEqualityCheck-C2_-Uu4b.js";import"./immer-BqKqj1gc.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BKZ6_UMT.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./d3-scale-bTazPGJf.js";import"./zIndexSlice-DSGfPW9M.js";import"./renderedTicksSlice-CBi406A9.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./CSSTransitionAnimate-tIoYVbYq.js";import"./useAnimationId-C9TFjIVY.js";import"./ZIndexLayer-dNEhzNo8.js";import"./ScatterChart-AwPg2krC.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./CartesianGrid-wYYb_ETo.js";import"./CartesianAxis-BpaKC44j.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CVV4DzFI.js";import"./YAxis-DgsPqkY3.js";import"./Scatter-Cwt8BQT1.js";import"./ReactUtils-DhoIBDOK.js";import"./Curve-CUbaL9A5.js";import"./step-DIrgAirM.js";import"./tooltipContext-BbhojBiB.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./RechartsHookInspector-ByAlRvo4.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
