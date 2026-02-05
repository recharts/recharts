import{j as r}from"./jsx-runtime-CqVS-Ca-.js";import{useMDXComponents as n}from"./index-BR-mDRw4.js";import{M as s,C as a,a as p}from"./blocks--VjigPqA.js";import{C as l,A as i}from"./ErrorBar.stories-DJGVoxP7.js";import"./iframe-BucFZ_rI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B0oRtae4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CIVgUCzG.js";import"./Layer-CF_MVGlz.js";import"./resolveDefaultProps-B03Au56-.js";import"./ErrorBarContext-B9myFNJx.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./arrayEqualityCheck-Cub9yyg8.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./zIndexSlice-DdWCw1KG.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./CSSTransitionAnimate-D6FUIEzq.js";import"./useAnimationId-aMKT9xva.js";import"./ZIndexLayer-L4xm7ML-.js";import"./ScatterChart-CJAJZPjM.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./CartesianGrid-k2NHIDcT.js";import"./CartesianAxis-CXwjW_bT.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./Label-9_EmwvzQ.js";import"./types-ClOjhPxm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-ClQb6fgI.js";import"./YAxis-H-QqP90D.js";import"./Scatter-LimuH32n.js";import"./ReactUtils-Bzngk0QG.js";import"./Curve-DctSWulj.js";import"./tooltipContext-CwJMoPuu.js";import"./Symbols-oEWjslm_.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./RechartsHookInspector-DS-kex3x.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
