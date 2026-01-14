import{j as r}from"./jsx-runtime-Bts8KA3Y.js";import{useMDXComponents as n}from"./index-BM8AXMgP.js";import{M as s,C as a,a as p}from"./blocks-D5FbdVGg.js";import{C as l,A as i}from"./ErrorBar.stories-d_CjRCsK.js";import"./iframe-BDEQfIlb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0u2n02A.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CC700oFc.js";import"./Layer-Con5T55J.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./ErrorBarContext-BVoK2OG_.js";import"./RechartsWrapper-CST4_BZP.js";import"./arrayEqualityCheck-BA5tHTkl.js";import"./PolarUtils-KAlgtJ9T.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./zIndexSlice-B88C6q2R.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./CSSTransitionAnimate-G82jgPhi.js";import"./useAnimationId-fPMh2rE3.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./ScatterChart-B3y-1uv2.js";import"./CartesianChart-Cqd8BAy6.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./CartesianGrid-CCyEk27r.js";import"./CartesianAxis-Dj71nMX3.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./Label-B9k6RWTG.js";import"./types-tr7QhDo_.js";import"./XAxis-NhsKtlV2.js";import"./YAxis-CNg2gE42.js";import"./Scatter-BDWH9EzW.js";import"./ReactUtils-B2Wxyi5A.js";import"./Curve-apm-ZytV.js";import"./tooltipContext-DGI_kjpQ.js";import"./Symbols-CIf3O2Az.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZIbf3UH.js";import"./Trapezoid-D-MMn83p.js";import"./Sector-CDYiU8tv.js";import"./GraphicalItemClipPath-Cxm1A7e8.js";import"./SetGraphicalItem-mM5uupNM.js";import"./RechartsHookInspector-BP4qljDX.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
