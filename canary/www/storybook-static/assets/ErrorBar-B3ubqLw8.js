import{j as r}from"./jsx-runtime-C8YATIu1.js";import{useMDXComponents as n}from"./index-BQ0jBSKb.js";import{M as s,C as a,a as p}from"./blocks-CSelQTSu.js";import{C as l,A as i}from"./ErrorBar.stories-Bfr24IVu.js";import"./iframe-DTmqf-89.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Csnv4pYo.js";import"./utils-ePvtT4un.js";import"./ErrorBar-KvvKRRm8.js";import"./Layer-BTS4uGxy.js";import"./resolveDefaultProps-C00TVibV.js";import"./ErrorBarContext-CQrouc6N.js";import"./RechartsWrapper-COXu3P-w.js";import"./arrayEqualityCheck-B5lu4Lk9.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./CSSTransitionAnimate-Bj-qNkVQ.js";import"./useAnimationId-CwTw9zZj.js";import"./ZIndexLayer-DxJNdv8G.js";import"./ScatterChart-_WJ5bvZ_.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./CartesianGrid-BWgS--Va.js";import"./CartesianAxis-CyR9LutT.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./Label-egeGTsC3.js";import"./types-B8nej2n0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-FYHpftxu.js";import"./YAxis-CBw5C5aG.js";import"./Scatter-B235CjX1.js";import"./ReactUtils-byYmdu0g.js";import"./Curve-B7xWVUlS.js";import"./tooltipContext-DWeHrq8C.js";import"./Symbols-C_pVSGbd.js";import"./ActiveShapeUtils-BRF5U1J5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-rgqUccDm.js";import"./Trapezoid-jP0l7-Gz.js";import"./Sector-CGOePyQw.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./RechartsHookInspector-1827yCK6.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
