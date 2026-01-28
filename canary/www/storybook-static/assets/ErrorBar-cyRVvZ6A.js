import{j as r}from"./jsx-runtime-Bx7Ar4JM.js";import{useMDXComponents as n}from"./index-Cr5VfxjR.js";import{M as s,C as a,a as p}from"./blocks-B05gnAFO.js";import{C as m,A as i}from"./ErrorBar.stories-L338RVsc.js";import"./iframe-C4IWMahh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aiWA5sXu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CJ-vPods.js";import"./Layer-CdQ-wzgp.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./ErrorBarContext-C2hEeIYE.js";import"./RechartsWrapper-D1ed8gsV.js";import"./arrayEqualityCheck-0GnG-RUv.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./CSSTransitionAnimate-XS4AldeM.js";import"./useAnimationId-DNnry8cr.js";import"./ZIndexLayer-BJJTWLZI.js";import"./ScatterChart-HUjSSwWt.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./CartesianGrid-L1AtGOCH.js";import"./CartesianAxis-DOkMNxmt.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./Label-C0TeAK2L.js";import"./types-Dnr4tbcG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BngJLTZF.js";import"./YAxis-Ba9FHWJv.js";import"./Scatter-CNNBO53S.js";import"./ReactUtils-DjwylJ1a.js";import"./Curve-DlsjNj4d.js";import"./tooltipContext-BVg3pAaY.js";import"./Symbols-BZom7IJQ.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-3bF21H.js";import"./Trapezoid-CRuG6j_-.js";import"./Sector-wIi7OYIA.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./RechartsHookInspector-CpFOwYB5.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
