import{j as r}from"./jsx-runtime-XQ1BFmkZ.js";import{useMDXComponents as n}from"./index-C8aeQlyV.js";import{M as p,C as s,a}from"./blocks-CEj78zsH.js";import{C as m,A as i}from"./ErrorBar.stories-Cv0ofhAs.js";import"./iframe-DkLawzFT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ClmqdCp3.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BJA6fOWM.js";import"./Layer-D1t_xfer.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrteeSnw.js";import"./ErrorBarContext-BlXGa7jj.js";import"./RechartsWrapper-ZZ9SYGf8.js";import"./arrayEqualityCheck-D3l_Six5.js";import"./immer-BgQ6ewOL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BAEjUqpG.js";import"./hooks-mxsXvsXQ.js";import"./axisSelectors-WJrRsxNm.js";import"./d3-scale-CQPtLnPq.js";import"./zIndexSlice-D7gaPfmN.js";import"./renderedTicksSlice-CxLVT98p.js";import"./RegisterGraphicalItemId-Sw1cCXMw.js";import"./CSSTransitionAnimate-BF_s3SLo.js";import"./useAnimationId-ndVuSCuU.js";import"./ZIndexLayer-BzQ04t8l.js";import"./ScatterChart-BRCDzKp0.js";import"./CartesianChart-B_kqxRby.js";import"./chartDataContext-BQhtyhGa.js";import"./CategoricalChart-ClWY8mqV.js";import"./CartesianGrid-DRBqNtxc.js";import"./CartesianAxis-B2aKO3V6.js";import"./Text-Cnf9BrSi.js";import"./DOMUtils-CeS2jzYu.js";import"./Label-B8g-EXnh.js";import"./types-BodbCBWC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Bhs0VEqV.js";import"./YAxis-DUSsUT3d.js";import"./Scatter-CVVwr7TT.js";import"./ReactUtils-0q8uPUdp.js";import"./Curve-BHXnsRVh.js";import"./step-BKMOa0zg.js";import"./tooltipContext-Dd3PQMFh.js";import"./Symbols-BESx1iMX.js";import"./symbol-yD_N7Rt-.js";import"./ActiveShapeUtils-CYrS0ywm.js";import"./isPlainObject-Dna09QVC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmL8vsSC.js";import"./Trapezoid-DgQekCnf.js";import"./Sector-CQDhqwWL.js";import"./GraphicalItemClipPath-BMzTlgpv.js";import"./SetGraphicalItem-CQ9RSPfd.js";import"./RechartsHookInspector-CP5-3lHb.js";import"./ChartSizeDimensions-sxZZm2vK.js";import"./OffsetShower-Bbq9KY1d.js";import"./PlotAreaShower-BpZ3JX6M.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
