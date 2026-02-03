import{j as r}from"./jsx-runtime-DOHObFrQ.js";import{useMDXComponents as n}from"./index-D1ryuIj7.js";import{M as s,C as a,a as p}from"./blocks-CeUpSbUC.js";import{C as l,A as i}from"./ErrorBar.stories-BvKfZlU_.js";import"./iframe-b3l0oylc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKFod4yn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dnnjz96J.js";import"./Layer-2yxRimi5.js";import"./resolveDefaultProps-DcvR48Du.js";import"./ErrorBarContext-4m-euoOZ.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./arrayEqualityCheck-CjMmMQbn.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./zIndexSlice-6dxWRD0w.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./CSSTransitionAnimate-BstHgSC6.js";import"./useAnimationId-DdymZr7z.js";import"./ZIndexLayer-CtStE837.js";import"./ScatterChart-D6sly08d.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./CartesianGrid-BJVKZUb8.js";import"./CartesianAxis-BaEBZn5E.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./Label-DllavO7s.js";import"./types-DcS7TQb1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DQI4GC2q.js";import"./YAxis-DBt_3tXp.js";import"./Scatter-mYSVJ31E.js";import"./ReactUtils-BwdRCLdj.js";import"./Curve-1kQ3M0AJ.js";import"./tooltipContext-Bg8AINqD.js";import"./Symbols-CncGFVbc.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./RechartsHookInspector-XGSushi8.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
