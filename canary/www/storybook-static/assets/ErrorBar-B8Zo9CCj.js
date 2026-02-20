import{j as r}from"./jsx-runtime-RzWxKkcK.js";import{useMDXComponents as n}from"./index-BN-U4nca.js";import{M as s,C as p,a}from"./blocks-BuGPsn8e.js";import{C as l,A as i}from"./ErrorBar.stories-C0macppR.js";import"./iframe-Caz6nZ2I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BX6q2UKF.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BA5_dDC_.js";import"./Layer-B1GIAb1E.js";import"./resolveDefaultProps-DAfTexXm.js";import"./ErrorBarContext-BJza0ZIr.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./arrayEqualityCheck-CcFxY-Xq.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./RegisterGraphicalItemId-t2v7UQtx.js";import"./CSSTransitionAnimate-e0OQH7bS.js";import"./useAnimationId-DFkOU0Go.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./ScatterChart-5JgGItap.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./CartesianGrid-DoN3UDrT.js";import"./CartesianAxis-DlMujoQ4.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./Label-Ek7Phs8Z.js";import"./types-8IoGCZ4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dd-oJpip.js";import"./YAxis-BRCgxqg5.js";import"./Scatter-BGxpAyR_.js";import"./ReactUtils-R8D9NurX.js";import"./Curve-B5Ob5vne.js";import"./tooltipContext-C6PSabt-.js";import"./Symbols-C3i96Wdn.js";import"./ActiveShapeUtils-D4vAh-I1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DOnXuvZA.js";import"./Trapezoid-z6JJWRCw.js";import"./Sector-0pp4XTlb.js";import"./GraphicalItemClipPath-Cv5KZpMj.js";import"./SetGraphicalItem-DOmEhcN0.js";import"./RechartsHookInspector-DDSzpp5A.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
