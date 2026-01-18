import{j as r}from"./jsx-runtime-DKMsejpA.js";import{useMDXComponents as n}from"./index-BPcdvhNF.js";import{M as s,C as a,a as p}from"./blocks-DIHJ1uNJ.js";import{C as l,A as i}from"./ErrorBar.stories-CYO3bjMT.js";import"./iframe-DZy4Dead.js";import"./preload-helper-Dp1pzeXC.js";import"./index-SrSy7NGQ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-182MeW_F.js";import"./Layer-Bpoel1Lp.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./ErrorBarContext-Du58iR9d.js";import"./RechartsWrapper-nPRv-TTN.js";import"./arrayEqualityCheck-ApBChTfQ.js";import"./PolarUtils-Dc-YJkTz.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./zIndexSlice-BHURSyYA.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./CSSTransitionAnimate-D7VHsEOu.js";import"./useAnimationId-C4mX0K92.js";import"./ZIndexLayer-DncsytRr.js";import"./ScatterChart-Cj6Hhwa7.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./CartesianGrid-CsqV1Iwf.js";import"./CartesianAxis-CJ1CYBzd.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./Label-BnGgD6KR.js";import"./types-BfEpf9p_.js";import"./XAxis-B-yW469b.js";import"./YAxis-CetTQXLx.js";import"./Scatter-CmDaXZh9.js";import"./ReactUtils-MfSKnK6Q.js";import"./Curve-ChmxEyvD.js";import"./tooltipContext-BUOejfSR.js";import"./Symbols-BE9qwwFU.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./Trapezoid-C-7zXkUX.js";import"./Sector-Cjw5cIeP.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./RechartsHookInspector-BQ2LFFE8.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
