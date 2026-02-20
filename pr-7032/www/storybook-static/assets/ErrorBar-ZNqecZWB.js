import{j as r}from"./jsx-runtime-CaVGOAfR.js";import{useMDXComponents as n}from"./index-GFzGqA4Z.js";import{M as s,C as p,a}from"./blocks-BBOTf_kW.js";import{C as l,A as i}from"./ErrorBar.stories-BETneWOz.js";import"./iframe-DhupoOg_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1siFWfz.js";import"./utils-ePvtT4un.js";import"./ErrorBar-FwClFDeA.js";import"./Layer-Bu6njlMc.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./ErrorBarContext-DeheRuUe.js";import"./RechartsWrapper-BO7q4INj.js";import"./arrayEqualityCheck-1a2j5A1f.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./CSSTransitionAnimate-D6tGZNce.js";import"./useAnimationId-DwQLM9Vt.js";import"./ZIndexLayer-UCgdXbxU.js";import"./ScatterChart-DJmNVp-6.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./CartesianGrid-CZVdI6-b.js";import"./CartesianAxis-CrD8JHxo.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./Label-jW6-M5QE.js";import"./types-CAd6nAW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-GsEtiJs1.js";import"./YAxis-Bqh3gjFj.js";import"./Scatter-CVId0wIH.js";import"./ReactUtils-Den_eo7w.js";import"./Curve-BbS-sSDe.js";import"./tooltipContext-HVTI-kwf.js";import"./Symbols-B_Z7RLio.js";import"./ActiveShapeUtils-CwO0ADgQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CD_6SwFf.js";import"./Trapezoid-CNwzGgkA.js";import"./Sector-qA3WmdGy.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./RechartsHookInspector-BRJSRdzz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
