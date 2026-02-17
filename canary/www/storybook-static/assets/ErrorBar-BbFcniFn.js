import{j as r}from"./jsx-runtime-TQLgbC9M.js";import{useMDXComponents as n}from"./index-DONIycnH.js";import{M as s,C as p,a}from"./blocks-CX7tkCHG.js";import{C as l,A as i}from"./ErrorBar.stories-TzLypI0I.js";import"./iframe-DCHwmqK8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsiXN0IX.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DKCpKj3G.js";import"./Layer-7f0xQXhX.js";import"./resolveDefaultProps-9mPboPW3.js";import"./ErrorBarContext-Cu1B03x6.js";import"./RechartsWrapper-Dam48Pnw.js";import"./arrayEqualityCheck-PCrDa-mZ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./CSSTransitionAnimate-DBRoGYxO.js";import"./useAnimationId-C8JLALld.js";import"./ZIndexLayer-B-u8VTE_.js";import"./ScatterChart-D_WGS0p5.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./CartesianGrid-X_8lntYf.js";import"./CartesianAxis-BkIGBz3a.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./Label-BPyHNFQk.js";import"./types-B1B-Xneg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dy9Xo9z7.js";import"./YAxis-CKNZXN9_.js";import"./Scatter-C1k3hHIS.js";import"./ReactUtils-CDXy_Xlj.js";import"./Curve-B04YTzst.js";import"./tooltipContext-DiLFHyIn.js";import"./Symbols-Bq3Wi3iy.js";import"./ActiveShapeUtils-BILPqCjw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CB4U0IVW.js";import"./Trapezoid-Avw1E6Og.js";import"./Sector-Ch_o0ANK.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./RechartsHookInspector-DqPpRwC6.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
