import{j as r}from"./jsx-runtime-Ddrw1Zsw.js";import{useMDXComponents as n}from"./index-aUurmpFS.js";import{M as p,C as s,a}from"./blocks-B4Shi9V1.js";import{C as m,A as i}from"./ErrorBar.stories-B8ndDxip.js";import"./iframe-DVKGYMpC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DH-aWMW3.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DWYz3zxo.js";import"./Layer-Cbzg46jm.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-m52n9a41.js";import"./ErrorBarContext-D0RCHEkz.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./arrayEqualityCheck-C3dMZwVz.js";import"./immer-mdmEhKTL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-XfA7Rruh.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./CSSTransitionAnimate-CZHyt5_d.js";import"./useAnimationId-BLC1f5rw.js";import"./ZIndexLayer-D9yE2b_P.js";import"./ScatterChart-BMS7G2Ah.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./CartesianGrid-DdK_tTpX.js";import"./CartesianAxis-hM284rmA.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./Label-CgM8GhgJ.js";import"./types-D5_2czw6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-WP1B-t-F.js";import"./YAxis-36kfWwzX.js";import"./Scatter-CTJV1DD5.js";import"./ReactUtils-2VJeHFxo.js";import"./Curve-DFpbuCXU.js";import"./step-BPnB-OiB.js";import"./tooltipContext-FOInBi45.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./RechartsHookInspector-BRvRKLe7.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
