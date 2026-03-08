import{j as r}from"./jsx-runtime-DUTSIAQy.js";import{useMDXComponents as n}from"./index-Dvw2eObP.js";import{M as p,C as s,a}from"./blocks-ahKe2k2R.js";import{C as m,A as i}from"./ErrorBar.stories-CSK0uhLv.js";import"./iframe-DSZ2QiJB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDQU038C.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DQyUhOJF.js";import"./Layer-CfeiBM7_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./ErrorBarContext-BIl6qq4l.js";import"./RechartsWrapper-BWBPYC1r.js";import"./arrayEqualityCheck-rt-62tKM.js";import"./immer-D42ZyI8P.js";import"./PolarUtils-CTnnDHZv.js";import"./index-1kC-pV_c.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./CSSTransitionAnimate-vGQXGeyv.js";import"./useAnimationId-CVC-EATQ.js";import"./ZIndexLayer-BB6UhYUp.js";import"./ScatterChart-xEqTvdmU.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./CartesianGrid-tCMk91Zb.js";import"./CartesianAxis-BOemEoe1.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./Label-DwmX4z8O.js";import"./types-DHG31Cql.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C40iw1gZ.js";import"./YAxis-x1YS6WwT.js";import"./Scatter-1BYPbNPq.js";import"./ReactUtils-BPco_pTv.js";import"./Curve-1v3U2npm.js";import"./step-28_znSZY.js";import"./tooltipContext-DkQDnNhX.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";import"./ActiveShapeUtils-atDgqYom.js";import"./isPlainObject-eGyZT97o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-U6qmZG0w.js";import"./Trapezoid-eVJamGS1.js";import"./Sector-Cw_z1t88.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./RechartsHookInspector-CbZDQ_xN.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./OffsetShower-Bc2DkPnc.js";import"./PlotAreaShower-B81JCCGH.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
