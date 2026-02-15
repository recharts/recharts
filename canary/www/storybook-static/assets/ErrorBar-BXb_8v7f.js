import{j as r}from"./jsx-runtime-B3awdtXi.js";import{useMDXComponents as n}from"./index-BFr5BZym.js";import{M as s,C as p,a}from"./blocks-DZ6xSdfh.js";import{C as l,A as i}from"./ErrorBar.stories-OXzrBGEU.js";import"./iframe-yr43iL0r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BF6TeZpk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DTA6xe3o.js";import"./Layer-CmzX8B_O.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./ErrorBarContext-OMAqLqYv.js";import"./RechartsWrapper-CBwzaw9q.js";import"./arrayEqualityCheck-CCQ3u8Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./CSSTransitionAnimate-C-mR_79H.js";import"./useAnimationId-CevQg5hG.js";import"./ZIndexLayer-Cs9veiYj.js";import"./ScatterChart-BLRD3fY-.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./CartesianGrid-BGR_wFd3.js";import"./CartesianAxis-DoAv_8BM.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./Label-BXAwjjII.js";import"./types-C8fXyDYe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CO6uFh57.js";import"./YAxis-mhKbt4Et.js";import"./Scatter-Bd0MIIuI.js";import"./ReactUtils-BmYUR6Pw.js";import"./Curve-BbMbMcrT.js";import"./tooltipContext-CZrHOkRy.js";import"./Symbols-DYDfKw0L.js";import"./ActiveShapeUtils-tkDZnXJM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KnzijHvw.js";import"./Trapezoid-BsqiFDvD.js";import"./Sector-BWGZTQIf.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./RechartsHookInspector-DBIDewuF.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
