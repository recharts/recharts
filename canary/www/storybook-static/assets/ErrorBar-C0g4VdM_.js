import{j as r}from"./jsx-runtime-DgY5Bcka.js";import{useMDXComponents as n}from"./index-CVfFePG-.js";import{M as s,C as a,a as p}from"./blocks-CT4i1Og6.js";import{C as l,A as i}from"./ErrorBar.stories-NwTgcG9p.js";import"./iframe-DxZX8v3W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-59kLrafc.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BOHoVePG.js";import"./Layer-BPZWkKY5.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./ErrorBarContext-BbaI3C-C.js";import"./RechartsWrapper-DMTy2N8_.js";import"./arrayEqualityCheck-CHFkqTV_.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./CSSTransitionAnimate-_WubUejH.js";import"./useAnimationId-DTZHXicx.js";import"./ZIndexLayer-u2cA8wLh.js";import"./ScatterChart-Btfg7vmd.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./CartesianGrid-DQNeuEVT.js";import"./CartesianAxis-DPUMtDOy.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./Label-DcVTU5jd.js";import"./types-DXQoRjfG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DzPSb7qL.js";import"./YAxis-CpMOxs2p.js";import"./Scatter-C5h5a6Fc.js";import"./ReactUtils-BR0ZodR6.js";import"./Curve-amoMOh-y.js";import"./tooltipContext-DP8uoYir.js";import"./Symbols-ByPpWVp2.js";import"./ActiveShapeUtils-umUGRO3f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZKdZP-LA.js";import"./Trapezoid-B8lDUleJ.js";import"./Sector-C4RYsjmR.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./RechartsHookInspector-EozXGI-d.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
