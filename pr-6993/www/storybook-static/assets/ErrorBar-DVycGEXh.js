import{j as r}from"./jsx-runtime-Bt6LSN7W.js";import{useMDXComponents as n}from"./index-BZ-swnc7.js";import{M as s,C as a,a as p}from"./blocks-YdTPs1Vr.js";import{C as l,A as i}from"./ErrorBar.stories-P6eUVPjL.js";import"./iframe-B-Dp18cD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-GlpghtR4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BfVfiXpg.js";import"./Layer-sRK8yL2I.js";import"./resolveDefaultProps-ClUavgcZ.js";import"./ErrorBarContext-BVXjh-mB.js";import"./RechartsWrapper-uJ7UoaAC.js";import"./arrayEqualityCheck-n6VvjF1v.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BBxeeore.js";import"./axisSelectors-OuIDnENT.js";import"./zIndexSlice-BzpbxKTs.js";import"./RegisterGraphicalItemId-CxTaZDZc.js";import"./CSSTransitionAnimate-DGAtzaXO.js";import"./useAnimationId-BP7QGUYe.js";import"./ZIndexLayer-DZaorHCJ.js";import"./ScatterChart-BhYr-Qw3.js";import"./CartesianChart-CJ47btSF.js";import"./chartDataContext-zsQASXZN.js";import"./CategoricalChart-BJqjUyur.js";import"./CartesianGrid-26YaUCM_.js";import"./CartesianAxis-Btb51IPQ.js";import"./Text-B2w_0Ecu.js";import"./DOMUtils-3l5WS7n1.js";import"./Label-GlXCPztW.js";import"./types-D_31He_k.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BEv3sJL0.js";import"./YAxis-B-v6qizp.js";import"./Scatter-btT_FXYF.js";import"./ReactUtils-CS1JgmNI.js";import"./Curve-B9DUpoMg.js";import"./tooltipContext-HGf7dTk3.js";import"./Symbols-CnYaDh9V.js";import"./ActiveShapeUtils-m1wJj2Q4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B651D3DK.js";import"./Trapezoid-BORovwBS.js";import"./Sector-ByD9psuI.js";import"./GraphicalItemClipPath-C0nz93m4.js";import"./SetGraphicalItem-Dgsvv4_3.js";import"./RechartsHookInspector-CHTp98JP.js";import"./ChartSizeDimensions-DKPKgNfh.js";import"./OffsetShower-vf47GvB5.js";import"./PlotAreaShower-oIrFVBlc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
