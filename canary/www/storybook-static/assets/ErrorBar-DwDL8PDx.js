import{j as r}from"./jsx-runtime-wCOhfAsD.js";import{useMDXComponents as n}from"./index-B1ygsLIP.js";import{M as s,C as a,a as p}from"./blocks-D8_aLDKK.js";import{C as l,A as i}from"./ErrorBar.stories-C9yz1g5z.js";import"./iframe-BqhCRw8_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUjJ7HF5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DSqhaYbt.js";import"./Layer-STOxxKM-.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./ErrorBarContext-B1PjpMzV.js";import"./RechartsWrapper-CKbioI8N.js";import"./arrayEqualityCheck-C0e5XGku.js";import"./PolarUtils-DQrS6uhh.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./zIndexSlice-DIIl2FeU.js";import"./RegisterGraphicalItemId-OICgoI54.js";import"./CSSTransitionAnimate-C_5C2MEc.js";import"./useAnimationId-DEFSqTDH.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./ScatterChart-5uGcdCAI.js";import"./CartesianChart-FjeQ0j5o.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./CartesianGrid-_rSYIU2z.js";import"./CartesianAxis-D53Jp3Xe.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./Label-DtQEJ7YC.js";import"./types-DSzwAYYq.js";import"./XAxis-B6heQTMm.js";import"./YAxis--q0qF4k-.js";import"./Scatter-D96hru2s.js";import"./ReactUtils-CMMuRoIm.js";import"./Curve-ttUwhXb9.js";import"./tooltipContext-CfZt-ZyU.js";import"./Symbols-BJgGnflL.js";import"./ActiveShapeUtils-BwvIzm_Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg3AWp4l.js";import"./Trapezoid-D6Ifyq-x.js";import"./Sector-Cc8cLGGz.js";import"./GraphicalItemClipPath-De0vPM73.js";import"./SetGraphicalItem-5CyATFN5.js";import"./RechartsHookInspector-D3QTgPO3.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
