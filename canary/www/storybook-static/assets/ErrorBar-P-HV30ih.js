import{j as r}from"./jsx-runtime-CMFNmbZc.js";import{useMDXComponents as n}from"./index-GIPnfRue.js";import{M as s,C as a,a as p}from"./blocks-Q1u18JO9.js";import{C as l,A as i}from"./ErrorBar.stories-JdClPGpD.js";import"./iframe-BP2nTpch.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3FDMrYE.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CPSnzQlP.js";import"./Layer-2wKCZbds.js";import"./resolveDefaultProps-pblYALGE.js";import"./ErrorBarContext-NtZ5hNP2.js";import"./RechartsWrapper-B99qXj5r.js";import"./arrayEqualityCheck-uIVE1gVz.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-C4-fdNyt.js";import"./axisSelectors-D2SDnJRJ.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./CSSTransitionAnimate-Be8KxhI-.js";import"./useAnimationId-BKvpnK5Z.js";import"./ZIndexLayer-571M2aB4.js";import"./ScatterChart-utuC04X_.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./CartesianGrid-DA7Rb6hV.js";import"./CartesianAxis-Dig3Hc3j.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./Label-CpYvd4nZ.js";import"./types-7mx8q_Dg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CXtp3tfD.js";import"./YAxis-nqLFZHiU.js";import"./Scatter-HK-Q1XyX.js";import"./ReactUtils-8y56L2KY.js";import"./Curve-DDVqNpBq.js";import"./tooltipContext-DFZzgyhw.js";import"./Symbols-99I1PudQ.js";import"./ActiveShapeUtils-CDlOYSnz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-OJy3hMDx.js";import"./Trapezoid-n9rYv4uE.js";import"./Sector-iFxFptm9.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./RechartsHookInspector-DAq4QekR.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
