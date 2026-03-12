import{j as r}from"./jsx-runtime-fg8QO-7f.js";import{useMDXComponents as n}from"./index-DmAuEy-e.js";import{M as p,C as s,a}from"./blocks-Tm6LlTCf.js";import{C as m,A as i}from"./ErrorBar.stories-BEbSoSnp.js";import"./iframe-COcG-qbh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-R98a5OxC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B7nECjk1.js";import"./Layer-vnezQjXg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./ErrorBarContext-DI230CHI.js";import"./RechartsWrapper-C1tql2K4.js";import"./arrayEqualityCheck-BeOMvnb3.js";import"./immer-Ca_zwxaB.js";import"./PolarUtils-CTnnDHZv.js";import"./index-L5JLgxKc.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./CSSTransitionAnimate-D1VYAKPU.js";import"./useAnimationId-C4wu98Fe.js";import"./ZIndexLayer-BbjqRzm7.js";import"./ScatterChart-Cv_I5dQl.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./CartesianGrid-1N8_LUDi.js";import"./CartesianAxis-RY42tSQN.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./Label-DoQmsUBD.js";import"./types-BmPLOBN4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BvRN0x7f.js";import"./YAxis-D1iCzuYE.js";import"./Scatter-DTV3opqm.js";import"./ReactUtils-ByNOpxgT.js";import"./Curve-C3xLkezj.js";import"./step-CYjHyJAh.js";import"./tooltipContext-CBZyweKL.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";import"./ActiveShapeUtils-RW2zb_O9.js";import"./isPlainObject-C1cKrmsx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DI-yKH8h.js";import"./Trapezoid-CsCypRfT.js";import"./Sector-DxAh5Ohi.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./RechartsHookInspector-D4zrFLHG.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
