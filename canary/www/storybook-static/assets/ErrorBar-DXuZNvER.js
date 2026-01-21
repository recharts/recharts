import{j as r}from"./jsx-runtime-D-5Niasc.js";import{useMDXComponents as n}from"./index-Nrhq5KzH.js";import{M as s,C as a,a as p}from"./blocks-BllNs8tG.js";import{C as m,A as i}from"./ErrorBar.stories-BolJHUYu.js";import"./iframe-But0a38P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C00Mu2Jv.js";import"./utils-ePvtT4un.js";import"./ErrorBar-9RQ5A6HP.js";import"./Layer-afBuC6vE.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./ErrorBarContext-C-Z575OG.js";import"./RechartsWrapper-PnZQcIU_.js";import"./arrayEqualityCheck-CYbCyNsP.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./CSSTransitionAnimate-kA-pVehq.js";import"./useAnimationId-DCy88jod.js";import"./ZIndexLayer-BqdPe-lh.js";import"./ScatterChart-CD4pmF2b.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./CartesianGrid-NrKmnmqB.js";import"./CartesianAxis-C8-lm3EO.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./Label-C7EMJJOB.js";import"./types-BORgRnck.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BAXANk5N.js";import"./YAxis-DG24jA9M.js";import"./Scatter-DtUKNwSt.js";import"./ReactUtils-BkpqDUuI.js";import"./Curve-B4UI-EDA.js";import"./tooltipContext-Bec1jSl9.js";import"./Symbols-D7e9GUiu.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./Trapezoid-OOuCLK_Z.js";import"./Sector-BzzDDKvP.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./RechartsHookInspector-C5Pe1Yuk.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
