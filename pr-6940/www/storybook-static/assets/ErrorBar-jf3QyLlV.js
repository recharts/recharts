import{j as r}from"./jsx-runtime-CQvYWa6q.js";import{useMDXComponents as n}from"./index-CDgPl6-y.js";import{M as s,C as a,a as p}from"./blocks-CdIhFSnh.js";import{C as l,A as i}from"./ErrorBar.stories-DkQqHW7s.js";import"./iframe-C0b843bJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lXdD0Nzr.js";import"./utils-ePvtT4un.js";import"./ErrorBar-nj-69xFs.js";import"./Layer-purCCvV2.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./ErrorBarContext-CEzzcyRd.js";import"./RechartsWrapper-CO19iou7.js";import"./arrayEqualityCheck-Cbemodpd.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./zIndexSlice-B8FeRzdW.js";import"./RegisterGraphicalItemId-BWOfQp6C.js";import"./CSSTransitionAnimate-GTcoupoE.js";import"./useAnimationId-D7FQIEyi.js";import"./ZIndexLayer-_DstmVXN.js";import"./ScatterChart-D1Y8FDCD.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./CartesianGrid-D40AEZku.js";import"./CartesianAxis-By4zoTN4.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./Label-2fZ2yvU7.js";import"./types-B5P-qikU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-ARyNq3Ww.js";import"./YAxis-DsEQlDV3.js";import"./Scatter-BUjvWky2.js";import"./ReactUtils-BUf380BK.js";import"./Curve-Bs2FAeTM.js";import"./tooltipContext-DNnYpWA8.js";import"./Symbols-C_e-ILSN.js";import"./ActiveShapeUtils-BcJOrbCg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4tB6UmQ.js";import"./Trapezoid-CtFJUH4H.js";import"./Sector-C0mFPEM4.js";import"./GraphicalItemClipPath-BXQrJ9Pv.js";import"./SetGraphicalItem-BrMK-Pyd.js";import"./RechartsHookInspector-CBnKyMAv.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./OffsetShower-1eskoS1A.js";import"./PlotAreaShower-8zrELIBX.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
