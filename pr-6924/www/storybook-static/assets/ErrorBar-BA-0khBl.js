import{j as r}from"./jsx-runtime-CekeAHXC.js";import{useMDXComponents as n}from"./index-DXFdfQaR.js";import{M as s,C as a,a as p}from"./blocks-xLC7ZhyH.js";import{C as m,A as i}from"./ErrorBar.stories-B5S6JTWt.js";import"./iframe-qr4fLFpB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzLAea9N.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bhr9Z7BV.js";import"./Layer-CflgJyns.js";import"./resolveDefaultProps-C5koYet4.js";import"./ErrorBarContext-iPmq77XA.js";import"./RechartsWrapper-Mc2-Xf8T.js";import"./arrayEqualityCheck-Bgik-Trt.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BuX4DZtw.js";import"./axisSelectors-Bo6ergNf.js";import"./zIndexSlice-DUnMgb4W.js";import"./RegisterGraphicalItemId-Bik8WklO.js";import"./CSSTransitionAnimate-Dk9dRUnF.js";import"./useAnimationId-C_x8lvyj.js";import"./ZIndexLayer-BTmo2O_X.js";import"./ScatterChart-DYCyHxMP.js";import"./CartesianChart-ByeB8V_W.js";import"./chartDataContext-GFM1rpYw.js";import"./CategoricalChart-KanALp4p.js";import"./CartesianGrid-Dyw4sjTG.js";import"./CartesianAxis-SSDJgaWv.js";import"./Text-GNEjhoqj.js";import"./DOMUtils-DRnJ2sM4.js";import"./Label-BCYS56wU.js";import"./types-D-QHYsBW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-ceniSK6J.js";import"./YAxis-DTFQgDTu.js";import"./Scatter-Bfvwhu7g.js";import"./ReactUtils-Bl1pLFc3.js";import"./Curve-VUq81ujr.js";import"./tooltipContext-B9KUdoZ2.js";import"./Symbols-B9DXvbaq.js";import"./ActiveShapeUtils-D_mT6BGA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CTwxPXfp.js";import"./Trapezoid-DV0XCdJ4.js";import"./Sector-D_XFCZJC.js";import"./GraphicalItemClipPath-BxRwLljn.js";import"./SetGraphicalItem--WYAW04t.js";import"./RechartsHookInspector-Br68X8gZ.js";import"./ChartSizeDimensions-CgtvjcwQ.js";import"./OffsetShower-B6BSL9ge.js";import"./PlotAreaShower-CCEHTneG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
