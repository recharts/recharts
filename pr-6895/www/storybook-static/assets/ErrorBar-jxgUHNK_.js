import{j as r}from"./jsx-runtime-Dkpuf-5q.js";import{useMDXComponents as n}from"./index-_hxrCw25.js";import{M as s,C as a,a as p}from"./blocks-B1NWUqHs.js";import{C as l,A as i}from"./ErrorBar.stories-B6Xgk-Gq.js";import"./iframe-BmaSkXVD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8VqDYui.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D73-jyEJ.js";import"./Layer-kGCv99f8.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./ErrorBarContext-DJ_jm3x0.js";import"./RechartsWrapper-CKnhTxOl.js";import"./arrayEqualityCheck-DFn-H49U.js";import"./PolarUtils-fSNmW3dt.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./zIndexSlice-DNtltYbu.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./CSSTransitionAnimate-TbsmycWs.js";import"./useAnimationId-CSP1LMrK.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./ScatterChart-CduE2jIy.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./CartesianGrid-DLvI6tq0.js";import"./CartesianAxis-CTYOybg_.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./Label-Ba2fKD7_.js";import"./types-B1enpQ2U.js";import"./XAxis-C3x6dMLi.js";import"./YAxis-bl9CTFgn.js";import"./Scatter-C2vxKDBP.js";import"./ReactUtils-DF_Mupxs.js";import"./Curve-Ct1DVFB9.js";import"./tooltipContext-C34n9vuI.js";import"./Symbols-BOIH3U2b.js";import"./ActiveShapeUtils-450HsfaK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuCzHhek.js";import"./Trapezoid-B-uAYGkA.js";import"./Sector-BIUOjaCq.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./RechartsHookInspector-C0qStJOJ.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
