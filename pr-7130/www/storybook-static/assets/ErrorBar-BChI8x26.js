import{j as r}from"./jsx-runtime-D1Akl5ys.js";import{useMDXComponents as n}from"./index-CvQUIDec.js";import{M as p,C as s,a}from"./blocks-BUzsmiwM.js";import{C as m,A as i}from"./ErrorBar.stories-CzxqE1Og.js";import"./iframe-RyyUADvi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPy7O-_m.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BAD2BP2h.js";import"./Layer-DGeVqCLc.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./ErrorBarContext-DoMKVMyl.js";import"./RechartsWrapper-oQCIJm_t.js";import"./arrayEqualityCheck-BK7ZKOIC.js";import"./immer-DiJOv4tT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DS9IaigZ.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./CSSTransitionAnimate-Byxqw5Tb.js";import"./useAnimationId-6eUUABj9.js";import"./ZIndexLayer-CXHEgDXB.js";import"./ScatterChart-C78bYaVu.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./CartesianGrid-DWbw8Yjd.js";import"./CartesianAxis-BpXuAb-I.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CoWhvSWs.js";import"./YAxis-Un8vVQsB.js";import"./Scatter-CPC32Lm3.js";import"./ReactUtils-BuUocuWo.js";import"./Curve-BOxvHyTd.js";import"./step-4PchhSUC.js";import"./tooltipContext-DHhWnKq3.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./RechartsHookInspector-p0Yz6ifZ.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
