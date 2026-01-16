import{j as r}from"./jsx-runtime-VmSVFTzD.js";import{useMDXComponents as n}from"./index-CebmvTFC.js";import{M as s,C as a,a as p}from"./blocks-BBqWXsny.js";import{C as l,A as i}from"./ErrorBar.stories-r6iNQHEE.js";import"./iframe-Daa7gVLq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hu5OYDiu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-jHii-v3S.js";import"./Layer-CGvX8Aev.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./ErrorBarContext-C3qObGNC.js";import"./RechartsWrapper-DHnB2RYt.js";import"./arrayEqualityCheck-DHiMbEr4.js";import"./PolarUtils-BgeQKPj6.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./CSSTransitionAnimate-DOf_w-oX.js";import"./useAnimationId-ahZSEp8i.js";import"./ZIndexLayer-BpC0cLWO.js";import"./ScatterChart-BYwJO60L.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./CartesianGrid-75effBkS.js";import"./CartesianAxis-BVtnbRV6.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./Label-Czm8SDG7.js";import"./types-C4ZPTuLr.js";import"./XAxis-9jKN-_DJ.js";import"./YAxis-BnejCEyC.js";import"./Scatter-CO0mO3bv.js";import"./ReactUtils-DBjM8e5X.js";import"./Curve-CWMRaKtl.js";import"./tooltipContext-CiX2yvNE.js";import"./Symbols-Ct_d7yT0.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./Trapezoid-BpmoHtq5.js";import"./Sector-BNry3-1y.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./RechartsHookInspector-5CuZ5Ttw.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
