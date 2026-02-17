import{j as r}from"./jsx-runtime-Di4BKyOA.js";import{useMDXComponents as n}from"./index-CSWzZ084.js";import{M as s,C as p,a}from"./blocks-DW6zG0B6.js";import{C as l,A as i}from"./ErrorBar.stories-CofGEi2D.js";import"./iframe-DtzQZ5We.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CiWjk4ms.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CwUrTd3t.js";import"./Layer-P1mRwVv-.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./ErrorBarContext-BtAqYSS8.js";import"./RechartsWrapper-DGOHUa9W.js";import"./arrayEqualityCheck-3Q4fEezD.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./zIndexSlice-DS1PNPXk.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./CSSTransitionAnimate-BDFdkJ1v.js";import"./useAnimationId-GgPPrJFw.js";import"./ZIndexLayer-DGEtHlps.js";import"./ScatterChart-QYqJ45Hr.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./CartesianGrid-CjCU3Tmd.js";import"./CartesianAxis-D6UZdOOc.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./Label-D5-8z0UP.js";import"./types-DcSMO55m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DbDdWo9i.js";import"./YAxis-jb4FGmfu.js";import"./Scatter-B46dk96E.js";import"./ReactUtils-Bg8ILpJF.js";import"./Curve-C7rWq_eQ.js";import"./tooltipContext-zNVcvoEf.js";import"./Symbols-k0cT0xYb.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSEdSL9_.js";import"./Trapezoid-DCMThu2C.js";import"./Sector-CcjHcsYG.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./RechartsHookInspector-podkStYr.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
