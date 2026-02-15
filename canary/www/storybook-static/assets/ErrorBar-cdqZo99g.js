import{j as r}from"./jsx-runtime-CZ-9iQO8.js";import{useMDXComponents as n}from"./index-C2-R82zm.js";import{M as s,C as p,a}from"./blocks-TckcV_yb.js";import{C as l,A as i}from"./ErrorBar.stories-CQbnc8--.js";import"./iframe-NOjYqVDf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ioy1DO1u.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BeZiK1hr.js";import"./Layer-C5eEc_aO.js";import"./resolveDefaultProps-B4jksYlp.js";import"./ErrorBarContext-BzRoxPBz.js";import"./RechartsWrapper-CYtF97y_.js";import"./arrayEqualityCheck-CKPvr2Sv.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./CSSTransitionAnimate-BoXd7EfT.js";import"./useAnimationId-DyWolGb_.js";import"./ZIndexLayer-CmnykYAa.js";import"./ScatterChart-DVJ3QR7R.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./CartesianGrid-CbxaQV6M.js";import"./CartesianAxis-DmPLGWaH.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./Label-DSmhxnyp.js";import"./types-Cdrp97aK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-gQef3nNh.js";import"./YAxis-R69UNor-.js";import"./Scatter-But1KdEQ.js";import"./ReactUtils-B9O68L3J.js";import"./Curve-DR3tx7PX.js";import"./tooltipContext-Bv3LOeHc.js";import"./Symbols-CYsc0tYe.js";import"./ActiveShapeUtils-BNzKmu3G.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B01634cJ.js";import"./Trapezoid-BprYBPWk.js";import"./Sector-Bz2V5crH.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./RechartsHookInspector-CZuAKH0J.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
