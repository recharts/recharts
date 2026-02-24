import{j as r}from"./jsx-runtime-C4YFS89q.js";import{useMDXComponents as n}from"./index-Booeo6Sz.js";import{M as p,C as s,a}from"./blocks-Cf5az706.js";import{C as m,A as i}from"./ErrorBar.stories-CnNVohf4.js";import"./iframe-zwlZ9sO1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfDL0XYd.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DLqXxRaM.js";import"./Layer-BoZ3FYfy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./ErrorBarContext-D80HzYFV.js";import"./RechartsWrapper-C3nGIabu.js";import"./arrayEqualityCheck-CJjag0zJ.js";import"./immer-BiA4uk1x.js";import"./PolarUtils-CTnnDHZv.js";import"./index-eUA2bMWQ.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./CSSTransitionAnimate-VaNzmOOv.js";import"./useAnimationId-BwEUZfoI.js";import"./ZIndexLayer-DApcsQWW.js";import"./ScatterChart-sdhMtDXC.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./CartesianGrid-B642OziP.js";import"./CartesianAxis--bPf-qQg.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CnAuA4rg.js";import"./YAxis-Dth2njTV.js";import"./Scatter-15QTdBde.js";import"./ReactUtils-KsuQNZ47.js";import"./Curve-D-syDesq.js";import"./step-DUUdO3U1.js";import"./tooltipContext-CLsKdU7b.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./RechartsHookInspector-DHSpqDma.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
