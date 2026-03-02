import{j as r}from"./jsx-runtime-D8CQj2zw.js";import{useMDXComponents as n}from"./index-OhQJRdN5.js";import{M as p,C as s,a}from"./blocks-D-QbLewc.js";import{C as m,A as i}from"./ErrorBar.stories-Bv-n4K74.js";import"./iframe-DJ6q0UO-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Drj3rz67.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CmiE74ju.js";import"./Layer-DYjtWcck.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./ErrorBarContext-Dz-CTdIG.js";import"./RechartsWrapper-CC4bWY2k.js";import"./arrayEqualityCheck-BTG2-4hW.js";import"./immer-DZ05EljQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-h_islmiW.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./zIndexSlice-BmNGt8JH.js";import"./renderedTicksSlice-D51KP5us.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./CSSTransitionAnimate-dkMhcY8W.js";import"./useAnimationId-DdUAPJ1J.js";import"./ZIndexLayer-nrCDqpeq.js";import"./ScatterChart-6q1Clu4I.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./CartesianGrid-UPpwW0-A.js";import"./CartesianAxis-CbTmm20n.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./Label-Cfw2XXr5.js";import"./types-Ds0jwWEi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DlTasNrE.js";import"./YAxis-BkUPDN4D.js";import"./Scatter-B7mBqxW5.js";import"./ReactUtils-eTAsrJ6L.js";import"./Curve-CUiTauC8.js";import"./step-B8mY4Wsq.js";import"./tooltipContext-BTNw1VO2.js";import"./Symbols-CZ9XpzM5.js";import"./symbol-C9svRAEA.js";import"./ActiveShapeUtils-BXYjh8cu.js";import"./isPlainObject-BG7kj9kW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMamn6k9.js";import"./Trapezoid-BT8qRaiE.js";import"./Sector-CzkjfA5d.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./RechartsHookInspector-CMjN7xhZ.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
