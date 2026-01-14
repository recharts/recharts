import{j as r}from"./jsx-runtime-CM8L90pV.js";import{useMDXComponents as n}from"./index-MX_zHJ8d.js";import{M as s,C as a,a as p}from"./blocks-B3tSnMJQ.js";import{C as l,A as i}from"./ErrorBar.stories-C74kSKxL.js";import"./iframe-0lTGunMW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DjmMVEJp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BKaV8awY.js";import"./Layer-BnXp22uo.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./ErrorBarContext-ADLH_OpK.js";import"./RechartsWrapper-CnzobKYl.js";import"./arrayEqualityCheck-BcVHM6kB.js";import"./PolarUtils-mWliNy-S.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./zIndexSlice-D-YSqdMJ.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./CSSTransitionAnimate-DUpiNDDI.js";import"./useAnimationId-D9Wpr36K.js";import"./ZIndexLayer-DWGlhSed.js";import"./ScatterChart-Cg7lMgYY.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./CartesianGrid-C3bTOkY1.js";import"./CartesianAxis-Co_LHUOm.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./types-WsTRE19v.js";import"./XAxis-Cfcoth7C.js";import"./YAxis-lXYEyZz1.js";import"./Scatter-Bsm7LF5u.js";import"./ReactUtils-CXVPwG-V.js";import"./Curve-DZsm4o-J.js";import"./tooltipContext-PVr3o7WU.js";import"./Symbols-DWUe3itn.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./Trapezoid-Tsb3ohUM.js";import"./Sector-Doli5igL.js";import"./GraphicalItemClipPath-DvXQ6fJn.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./RechartsHookInspector-Dk1C8jj5.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
