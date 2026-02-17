import{j as r}from"./jsx-runtime-CCgrjUPu.js";import{useMDXComponents as n}from"./index-CXfPUGy3.js";import{M as s,C as p,a}from"./blocks-NRYIX1Vt.js";import{C as l,A as i}from"./ErrorBar.stories-C2gRxRH1.js";import"./iframe-B9fQ2oqm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpQlVcWs.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DfLDHcT7.js";import"./Layer-Be_YD9cf.js";import"./resolveDefaultProps-I2gIUEIG.js";import"./ErrorBarContext-B0P8b6XD.js";import"./RechartsWrapper-Cj27l0cc.js";import"./arrayEqualityCheck-BL4DC-lX.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CgvDvD0u.js";import"./axisSelectors-WDcSlsrb.js";import"./zIndexSlice-Dtm-TxeQ.js";import"./renderedTicksSlice-BpKCGg5r.js";import"./RegisterGraphicalItemId-DqMQRK17.js";import"./CSSTransitionAnimate-807SQg_1.js";import"./useAnimationId-ixpsepmW.js";import"./ZIndexLayer-sFj17QWh.js";import"./ScatterChart-DE7ZnENv.js";import"./CartesianChart-BNj2fWwb.js";import"./chartDataContext-C4zbKrr2.js";import"./CategoricalChart-vuUHc2U_.js";import"./CartesianGrid-DlVZn37a.js";import"./CartesianAxis-IX04Fc3e.js";import"./Text-CtxM0wos.js";import"./DOMUtils-fTKYrial.js";import"./Label-CAIiijl8.js";import"./types-CGGhjhj7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C_-a0rcx.js";import"./YAxis-DLGPf3is.js";import"./Scatter-BI4FbMt8.js";import"./ReactUtils-C4s4yAkw.js";import"./Curve-BO7IcGeE.js";import"./tooltipContext-hkxIgnnF.js";import"./Symbols-B8Ovocri.js";import"./ActiveShapeUtils-B57xr0Gy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H10qCiiT.js";import"./Trapezoid-DsuehI9k.js";import"./Sector-C5PqXP9J.js";import"./GraphicalItemClipPath-C2gRI9rX.js";import"./SetGraphicalItem-MN_yffMw.js";import"./RechartsHookInspector-Bgd-A5WA.js";import"./ChartSizeDimensions-DoVF9EA8.js";import"./OffsetShower-BUflKiRR.js";import"./PlotAreaShower-DNG_eO1L.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
