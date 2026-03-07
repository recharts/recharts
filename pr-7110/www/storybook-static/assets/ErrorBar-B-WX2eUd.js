import{j as r}from"./jsx-runtime-Dmyc_JhQ.js";import{useMDXComponents as n}from"./index-CW5Dorx9.js";import{M as p,C as s,a}from"./blocks-gXhfbboz.js";import{C as m,A as i}from"./ErrorBar.stories-QmCDroFs.js";import"./iframe-DDWKRrqv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsIrbSk0.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C4BVC0PQ.js";import"./Layer-h3-3YPyh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./ErrorBarContext-Bbishcw-.js";import"./RechartsWrapper-DzmWRH09.js";import"./arrayEqualityCheck-B69_8zAh.js";import"./immer-BOVNGK3k.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bsn1GeuN.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./zIndexSlice-BN5Gbmzf.js";import"./renderedTicksSlice-C67zSA8W.js";import"./RegisterGraphicalItemId-CcVRSfeO.js";import"./CSSTransitionAnimate-BzKHa7Sg.js";import"./useAnimationId-BITKm10d.js";import"./ZIndexLayer-BwiDnk8J.js";import"./ScatterChart-CxU11Dbt.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./CartesianGrid-BUxTPynp.js";import"./CartesianAxis-6QkrUt7M.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./Label-NRlvBr1w.js";import"./types-DOdoKNLX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D_2M1x8X.js";import"./YAxis-BdM975Hp.js";import"./Scatter-BLapk7aG.js";import"./ReactUtils-cVwoq5mQ.js";import"./Curve-DHOaOh81.js";import"./step-lfEQ-oxP.js";import"./tooltipContext-CfFTqT1f.js";import"./Symbols-BqNcdAfC.js";import"./symbol-dPepbRJM.js";import"./ActiveShapeUtils-EGVfTGvU.js";import"./isPlainObject-u-9GKdyb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQpz_Kxu.js";import"./Trapezoid-D8tIh_kI.js";import"./Sector-OY9ONPbP.js";import"./GraphicalItemClipPath-D--Twx0M.js";import"./SetGraphicalItem-Cmo6HR7d.js";import"./RechartsHookInspector-DceXjH5Q.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./OffsetShower-CMRNvtsS.js";import"./PlotAreaShower-C4MeqViy.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
