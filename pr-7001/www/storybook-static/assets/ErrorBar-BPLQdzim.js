import{j as r}from"./jsx-runtime-DEqCYHOl.js";import{useMDXComponents as n}from"./index-DE1JE6ED.js";import{M as s,C as a,a as p}from"./blocks-Bk_dNum_.js";import{C as l,A as i}from"./ErrorBar.stories-DnXFbAxj.js";import"./iframe-7yPApSvt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CTyUbB7m.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DCG-bRUs.js";import"./Layer-uYiMe6t4.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./ErrorBarContext-DG4gMx-N.js";import"./RechartsWrapper-BuUb30Xi.js";import"./arrayEqualityCheck-BRhf3SEW.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./CSSTransitionAnimate-ChzfJh9J.js";import"./useAnimationId-DZFmgCE1.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./ScatterChart-RlB8Rwxe.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./CartesianGrid-Csd8Dh3x.js";import"./CartesianAxis-bgrWTzp1.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./Label-DRJZdylN.js";import"./types-OVAUyZ3J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D9IId5KY.js";import"./YAxis-p892jm1t.js";import"./Scatter-2npMskTX.js";import"./ReactUtils-C9q2a11f.js";import"./Curve-DU3LHYbT.js";import"./tooltipContext-C-rSDLYt.js";import"./Symbols-Cj90JcMH.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-VDS0PGUg.js";import"./Trapezoid-CDa1-n6T.js";import"./Sector-B6puIsbo.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./RechartsHookInspector-BsW7gU1Y.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
