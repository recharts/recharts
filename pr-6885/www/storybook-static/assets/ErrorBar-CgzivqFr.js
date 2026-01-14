import{j as r}from"./jsx-runtime-BfkMEMNV.js";import{useMDXComponents as n}from"./index-BVwME_a2.js";import{M as s,C as a,a as p}from"./blocks-Bg2VcY-Q.js";import{C as l,A as i}from"./ErrorBar.stories-DWA9NQTK.js";import"./iframe-DYFx2r-j.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqI5oxI8.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C2Qfh49E.js";import"./Layer-BC3vDM2H.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./ErrorBarContext-BaEgtdW6.js";import"./RechartsWrapper-C83nyDwr.js";import"./arrayEqualityCheck-DCVaqN9G.js";import"./PolarUtils-C1zbAlbA.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./CSSTransitionAnimate-BdbjkgE5.js";import"./useAnimationId-xTCLSGwz.js";import"./ZIndexLayer-CCFXe3ig.js";import"./ScatterChart-BsYWUvpn.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./CartesianGrid-BbLxz0NB.js";import"./CartesianAxis-DetyPtZ0.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./Label-DjuisPzU.js";import"./types-Cik9NZHM.js";import"./XAxis-CrWNcebb.js";import"./YAxis-BQSE3w1-.js";import"./Scatter-CKrQIA5q.js";import"./ReactUtils-B5hh0nCE.js";import"./Curve-7IBZZol0.js";import"./tooltipContext-DOjE1Le6.js";import"./Symbols-DOMt1Ple.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./RechartsHookInspector-8HiD6XU_.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
