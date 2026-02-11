import{j as r}from"./jsx-runtime-CSYNNbYu.js";import{useMDXComponents as n}from"./index-C_v7jaYS.js";import{M as s,C as p,a}from"./blocks-7xv6bGUF.js";import{C as l,A as i}from"./ErrorBar.stories-W8C_Kq9Q.js";import"./iframe-DEzN-0IH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UhpklWmI.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BDiEnuQ5.js";import"./Layer-DoKHSLik.js";import"./resolveDefaultProps--GysF_k-.js";import"./ErrorBarContext-D5xdE6Qk.js";import"./RechartsWrapper-D226X-in.js";import"./arrayEqualityCheck-Dj5rgmpF.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./zIndexSlice-BLXDXR0o.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./CSSTransitionAnimate-Xg88S862.js";import"./useAnimationId-DpL3ZrLE.js";import"./ZIndexLayer-DsNBC3BS.js";import"./ScatterChart-C0y__wmx.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./CartesianGrid-MkBEUlX4.js";import"./CartesianAxis-34WftamX.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./Label-CwNS2FmH.js";import"./types-MnMW5XmF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C9IejdiW.js";import"./YAxis-ywkX_5u_.js";import"./Scatter-abxSs0i-.js";import"./ReactUtils-BQDy0BEl.js";import"./Curve-Een90XLK.js";import"./tooltipContext-Bu74m_yM.js";import"./Symbols-CNlz260r.js";import"./ActiveShapeUtils-DdpV-Pge.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2soG4U2.js";import"./Trapezoid-DvZgohrQ.js";import"./Sector-Cn8fxEII.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./RechartsHookInspector-f3uqQnpf.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
