import{j as r}from"./jsx-runtime-BQOUy_5x.js";import{useMDXComponents as n}from"./index-Cg7h6weo.js";import{M as s,C as a,a as p}from"./blocks-BM5Z35Eh.js";import{C as l,A as i}from"./ErrorBar.stories-Ch3BaZkY.js";import"./iframe-S3w8vazP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DLTKO4-0.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BY321qqW.js";import"./Layer-Dpjv3Z7H.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./ErrorBarContext-B0bCUlMx.js";import"./RechartsWrapper-BglxN53s.js";import"./arrayEqualityCheck-CVVcuOqH.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./CSSTransitionAnimate-BZ257sAf.js";import"./useAnimationId-Pi9wCxwd.js";import"./ZIndexLayer-DtdorfOg.js";import"./ScatterChart-BKixyU82.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./CartesianGrid-DDXkKXYO.js";import"./CartesianAxis-CWMaA0v8.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./Label-BFw783un.js";import"./types-46Crnp6z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-y9KwpsE4.js";import"./YAxis-BLaSPofG.js";import"./Scatter-BIrCKjMg.js";import"./ReactUtils-DdWnBm1Y.js";import"./Curve-DzPn9elm.js";import"./tooltipContext-Dc6qy00p.js";import"./Symbols-DWbc74gd.js";import"./ActiveShapeUtils-D5tQ5sxS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClBH0-aW.js";import"./Trapezoid-BgHkPCBK.js";import"./Sector-JtnSW-LM.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./RechartsHookInspector-BtEk5fyn.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./OffsetShower-By9PfpSa.js";import"./PlotAreaShower-BawApXcc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
