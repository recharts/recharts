import{j as r}from"./jsx-runtime-DiPmrdb8.js";import{useMDXComponents as n}from"./index-C-93G_c1.js";import{M as s,C as a,a as p}from"./blocks-D_sxn7i9.js";import{C as l,A as i}from"./ErrorBar.stories-D9mgW7yf.js";import"./iframe-Isp5DByQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DhR5oTPc.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BPUIdtcB.js";import"./Layer-BzTi7EcX.js";import"./resolveDefaultProps-CktQcWs0.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./RechartsWrapper-DJiHoXCP.js";import"./arrayEqualityCheck-DcSZTGrK.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./CSSTransitionAnimate-DjU2yh-4.js";import"./useAnimationId-BH36Yv-4.js";import"./ZIndexLayer-B7yLevK6.js";import"./ScatterChart-D0btnWIu.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./CartesianGrid-B1FnrzVO.js";import"./CartesianAxis-CtKR5av8.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./Label-BIeSPvzh.js";import"./types-BUXZfUBK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DbS-5SMi.js";import"./YAxis-Earp8u6b.js";import"./Scatter-SB6KJ6_m.js";import"./ReactUtils-BG9wPH-d.js";import"./Curve-BVujXptJ.js";import"./tooltipContext-PfS5Zao3.js";import"./Symbols-CRejWEVT.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./RechartsHookInspector-BcUB3q5g.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
