import{j as r}from"./jsx-runtime-CK7FSx1i.js";import{useMDXComponents as n}from"./index-DzR0Mj2f.js";import{M as s,C as a,a as p}from"./blocks-DE5DBDiX.js";import{C as l,A as i}from"./ErrorBar.stories-CA8vzBut.js";import"./iframe-BjYhBrjl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwPjVI_1.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Db96s4_W.js";import"./Layer-DXlUs9xn.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./ErrorBarContext-Bfs-DHyT.js";import"./RechartsWrapper-kzv9It-X.js";import"./arrayEqualityCheck-CNWOZzwZ.js";import"./PolarUtils-DQj3EbdT.js";import"./hooks-Ddl0ZTMw.js";import"./axisSelectors-DEfYHCC1.js";import"./zIndexSlice-CZl4BXnF.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./CSSTransitionAnimate-Pg_CqByC.js";import"./useAnimationId-Da3IHhB2.js";import"./ZIndexLayer-DHhRDpk5.js";import"./ScatterChart-BxlbW8qc.js";import"./CartesianChart-DCPzGlsn.js";import"./chartDataContext-BU8YO9rr.js";import"./CategoricalChart-DF3wtmgo.js";import"./CartesianGrid-CYgd0LlL.js";import"./CartesianAxis-Bk_9WRuu.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./Label-DVod4zfM.js";import"./types-Cdxv11pV.js";import"./XAxis-CWT2ipPv.js";import"./YAxis-BPJqNES7.js";import"./Scatter--KpUkeYG.js";import"./ReactUtils-BfHCN5KQ.js";import"./Curve-Dsad01Eu.js";import"./tooltipContext-D3cZlgyd.js";import"./Symbols-Df7Es6QZ.js";import"./ActiveShapeUtils-C0Pv8fnx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-G9VjTpux.js";import"./Trapezoid-dLSghC9y.js";import"./Sector-DDjBm9K3.js";import"./GraphicalItemClipPath-DwCyfGQq.js";import"./SetGraphicalItem-D87xV8bI.js";import"./RechartsHookInspector-BYUxShfd.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./OffsetShower-DpV5TBrr.js";import"./PlotAreaShower-D3NMg3HB.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
