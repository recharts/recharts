import{j as r}from"./jsx-runtime-ChdOHkob.js";import{useMDXComponents as n}from"./index-B3eW5byU.js";import{M as s,C as a,a as p}from"./blocks-C8sh2bLe.js";import{C as m,A as i}from"./ErrorBar.stories-RxzDel1D.js";import"./iframe-CQZRorsz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hMecVWzD.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DIYR32XV.js";import"./Layer-BhxYv9l3.js";import"./resolveDefaultProps-DxEfcX11.js";import"./ErrorBarContext-BV2zEajK.js";import"./RechartsWrapper-3JJSXLuc.js";import"./arrayEqualityCheck-CQz2flWD.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./zIndexSlice-DivviUqw.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./CSSTransitionAnimate-BAU_vhDE.js";import"./useAnimationId-DBhXyqXg.js";import"./ZIndexLayer-D-FGBInf.js";import"./ScatterChart-M94uKa2t.js";import"./CartesianChart-BcPUndnw.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./CartesianGrid-CAd5NfVG.js";import"./CartesianAxis-DCx-He5v.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./Label-BJgUEQlL.js";import"./types-Doxj5qxW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BF5Pgeue.js";import"./YAxis-ZJLISdMg.js";import"./Scatter-Dr33IPjb.js";import"./ReactUtils-C6XrS2ih.js";import"./Curve-DrDC8HjY.js";import"./tooltipContext-5nOvhwQX.js";import"./Symbols-DuJw27Ks.js";import"./ActiveShapeUtils-C0gybZn4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSDamI1k.js";import"./Trapezoid-Cm1xY1NA.js";import"./Sector-CNW4UiZI.js";import"./GraphicalItemClipPath-DLLdlCGA.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./RechartsHookInspector-C6yxPh9Y.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
