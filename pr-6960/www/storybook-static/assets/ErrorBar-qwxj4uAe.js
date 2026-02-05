import{j as r}from"./jsx-runtime-DyxU0AnD.js";import{useMDXComponents as n}from"./index-De18m4eL.js";import{M as s,C as a,a as p}from"./blocks-Drg7hyUU.js";import{C as l,A as i}from"./ErrorBar.stories-CsKIvDG5.js";import"./iframe-BDkb7FkG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BiD0RfS5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-qT6G7PLn.js";import"./Layer-DN29fGq2.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./ErrorBarContext-Cklgrfin.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./arrayEqualityCheck-B0TJyWD5.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DxXidz5r.js";import"./axisSelectors-BNLmthUg.js";import"./zIndexSlice-CEfchlTx.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./CSSTransitionAnimate-BZttK65g.js";import"./useAnimationId-Dt_DMrVN.js";import"./ZIndexLayer-CSKx51xZ.js";import"./ScatterChart-DW0RUgcx.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./CartesianGrid-D4TC9vM6.js";import"./CartesianAxis-CqOMvTf3.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./Label-557v0PPI.js";import"./types-lD78ZLRW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CmGav0vS.js";import"./YAxis-Q5HYawHS.js";import"./Scatter-B94jtqDW.js";import"./ReactUtils-Bu2m7OLZ.js";import"./Curve-BhcGGWB4.js";import"./tooltipContext-BT8nO4h9.js";import"./Symbols-cZo6AVu-.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./RechartsHookInspector-BNEsfHz6.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
