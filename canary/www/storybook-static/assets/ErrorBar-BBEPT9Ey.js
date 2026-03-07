import{j as r}from"./jsx-runtime-DQjOuEdk.js";import{useMDXComponents as n}from"./index-CIJM32rT.js";import{M as p,C as s,a}from"./blocks-BTa9RTKW.js";import{C as m,A as i}from"./ErrorBar.stories-BPycAyWB.js";import"./iframe-BUt3wnEM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vkdvzxS4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CzTqGw00.js";import"./Layer-f0MP4yLB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./ErrorBarContext-DOPfAlmD.js";import"./RechartsWrapper-z5ezD12U.js";import"./arrayEqualityCheck-DNOyFRmd.js";import"./immer-Djj2d5DN.js";import"./PolarUtils-CTnnDHZv.js";import"./index-pWLF-s6P.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./CSSTransitionAnimate-BO3oDs0i.js";import"./useAnimationId-0NKy_VJI.js";import"./ZIndexLayer-CD2y65wD.js";import"./ScatterChart-DsLEYU2V.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./CartesianGrid-BgL3q-w5.js";import"./CartesianAxis-DLCN0lIN.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./Label-BNS9QM1w.js";import"./types-C3jmTsfH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Ireg13eN.js";import"./YAxis-BhjjKpsZ.js";import"./Scatter-BCVtTG2V.js";import"./ReactUtils-Cta0-SSd.js";import"./Curve-BEPpct8h.js";import"./step-CelYc6K9.js";import"./tooltipContext-GQvEWUxC.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";import"./ActiveShapeUtils-Cy5NcMU8.js";import"./isPlainObject-BhaX48PC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYFau3NF.js";import"./Trapezoid-Bi5qBDT5.js";import"./Sector-CEgJ3DUB.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./RechartsHookInspector-u0LRhk5N.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
