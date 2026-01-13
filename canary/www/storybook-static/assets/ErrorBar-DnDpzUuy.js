import{j as r}from"./jsx-runtime-Cs7PGNph.js";import{useMDXComponents as n}from"./index-BiUwAJMQ.js";import{M as s,C as a,a as p}from"./blocks-C59UfAXf.js";import{C as l,A as i}from"./ErrorBar.stories-C-a6wUJG.js";import"./iframe-bYFtU2gB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxosQgk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DPMF0QQ0.js";import"./Layer-BBEIeca0.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./ErrorBarContext-Dr9wrC8F.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./arrayEqualityCheck-BHNF6PA7.js";import"./PolarUtils-BwgqFbq3.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./zIndexSlice-UFbR30dZ.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./CSSTransitionAnimate-DO5qN5Xc.js";import"./useAnimationId-DJ17eyu2.js";import"./ZIndexLayer-BgNsQjiU.js";import"./ScatterChart-AQkmXT8p.js";import"./CartesianChart-lWIloUy5.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./CartesianGrid-Bi2RJxGH.js";import"./CartesianAxis-B3J6v13U.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./Label-CFtnFUI6.js";import"./types-rMmo8sSI.js";import"./XAxis-B6h0khsn.js";import"./YAxis-Cal0939d.js";import"./Scatter-ChDyxlgY.js";import"./ReactUtils-C_A_edxl.js";import"./Curve-CtUoNekQ.js";import"./tooltipContext-BoUwqDRy.js";import"./Symbols-CNah5pWh.js";import"./ActiveShapeUtils-CJjJYwGu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhTN5tPV.js";import"./Trapezoid-DSgAJSbG.js";import"./Sector-CLRLJGPS.js";import"./GraphicalItemClipPath-BBMk50de.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./RechartsHookInspector-Cgqq1XBh.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
