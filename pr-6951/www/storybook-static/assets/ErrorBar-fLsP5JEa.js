import{j as r}from"./jsx-runtime-BZhsVWvl.js";import{useMDXComponents as n}from"./index-c_VXm6iH.js";import{M as s,C as a,a as p}from"./blocks-CdKUKPLz.js";import{C as l,A as i}from"./ErrorBar.stories-DQMyqCw2.js";import"./iframe-Cce3OzqZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DVt7NuEo.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B-SeoAJS.js";import"./Layer-CFkQXCn1.js";import"./resolveDefaultProps-clrD5nAI.js";import"./ErrorBarContext-DV0NqXL1.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./arrayEqualityCheck-Db-Wlt3-.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./zIndexSlice-Cor1sHRq.js";import"./RegisterGraphicalItemId-9_Paa6o8.js";import"./CSSTransitionAnimate-CpGRTPST.js";import"./useAnimationId-CDstBXSk.js";import"./ZIndexLayer-BKOy02ft.js";import"./ScatterChart-CxojcQB4.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./CartesianGrid-xJPuKkvE.js";import"./CartesianAxis-D93mj95O.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./Label-C4rMK4zH.js";import"./types-b_fBODQO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DnzcawyL.js";import"./YAxis-Dzu8TGr_.js";import"./Scatter-CDFJo5kI.js";import"./ReactUtils-Nar3liya.js";import"./Curve-Fkz9pikW.js";import"./tooltipContext-Bb15o9BC.js";import"./Symbols-BhodARnK.js";import"./ActiveShapeUtils-BMdNKtxM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3wzWw1S.js";import"./Trapezoid-kBqI72Ws.js";import"./Sector-CPI45FrX.js";import"./GraphicalItemClipPath-BC3qMhyN.js";import"./SetGraphicalItem-DtwoVgdz.js";import"./RechartsHookInspector-eGeMVAmo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
