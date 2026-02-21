import{j as r}from"./jsx-runtime-D8r_wTNX.js";import{useMDXComponents as n}from"./index-ChH7MBCA.js";import{M as p,C as s,a}from"./blocks-C257JmYw.js";import{C as m,A as i}from"./ErrorBar.stories-BHugfj-0.js";import"./iframe-BC-5LcYb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_pdBQCR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ZboIvN4Z.js";import"./Layer-DTseK4B8.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./ErrorBarContext-B8bfqZ6V.js";import"./RechartsWrapper-B8Da5X0m.js";import"./arrayEqualityCheck-ChXaihMZ.js";import"./immer-ZiBWKhHb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DddLbDqU.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./zIndexSlice-BntL5RH1.js";import"./renderedTicksSlice-D9tlxui6.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./CSSTransitionAnimate-DA6RTtqB.js";import"./useAnimationId-1buHKKGB.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./ScatterChart-79HQgRBx.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./CartesianGrid-fHF5ZW2a.js";import"./CartesianAxis-B0mR8vIz.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./Label-DpYIsLw2.js";import"./types-DPX13aC-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-c4svWBsh.js";import"./YAxis-DdqcUQaJ.js";import"./Scatter-Dy4A1FdJ.js";import"./ReactUtils-DTBTVl0S.js";import"./Curve-28zddxeA.js";import"./step-CVSHTaSO.js";import"./tooltipContext-D_ugRJhv.js";import"./Symbols-CjqMpyW7.js";import"./symbol-BKo09A-g.js";import"./ActiveShapeUtils-i3MObavq.js";import"./isPlainObject-CJKJH7Oc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BjlfkU01.js";import"./Trapezoid-JczkhOAH.js";import"./Sector-BhUjloQr.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./RechartsHookInspector-B75ZFa4B.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
