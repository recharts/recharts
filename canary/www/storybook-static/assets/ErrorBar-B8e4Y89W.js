import{j as r}from"./jsx-runtime-D5VpkRXL.js";import{useMDXComponents as n}from"./index-C7Dt7x_x.js";import{M as s,C as a,a as p}from"./blocks-sg7oVblS.js";import{C as l,A as i}from"./ErrorBar.stories-Dip25OuY.js";import"./iframe-BH4WSVJq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cisc0CQR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BZwasJMI.js";import"./Layer-FSItnfZD.js";import"./resolveDefaultProps-YH6ur84t.js";import"./ErrorBarContext-DRki-TWq.js";import"./RechartsWrapper-cR6befFD.js";import"./arrayEqualityCheck-CP7zdH6j.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CsAFpvHN.js";import"./axisSelectors-DWE-oxLu.js";import"./zIndexSlice-DQh671qs.js";import"./RegisterGraphicalItemId-BYo0Vbbs.js";import"./CSSTransitionAnimate-BJOV_pIV.js";import"./useAnimationId-BPcwtD5E.js";import"./ZIndexLayer-CiVdec-B.js";import"./ScatterChart-Dmo56kAe.js";import"./CartesianChart-CnXNKoh0.js";import"./chartDataContext-px_EklfT.js";import"./CategoricalChart-BvpoJ5FY.js";import"./CartesianGrid-ChShBsrG.js";import"./CartesianAxis-6RsVZvqn.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./Label-BSQQrDO-.js";import"./types-BEfpPHVi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Co1hN3iA.js";import"./YAxis-Dj6UBB19.js";import"./Scatter-a8wb2lX_.js";import"./ReactUtils-DW1hnj4j.js";import"./Curve-C54rJcUa.js";import"./tooltipContext-1ySDnoi1.js";import"./Symbols-BTckn8e4.js";import"./ActiveShapeUtils-BnM7Jbce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrKooVgo.js";import"./Trapezoid-B_z9CYCL.js";import"./Sector-BpvDDX3s.js";import"./GraphicalItemClipPath-DGOjr7en.js";import"./SetGraphicalItem-Blp2F8-c.js";import"./RechartsHookInspector-C-rHiQ21.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
