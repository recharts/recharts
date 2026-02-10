import{j as r}from"./jsx-runtime-C6u5MZCH.js";import{useMDXComponents as n}from"./index-qtiw1v7p.js";import{M as s,C as a,a as p}from"./blocks-pVYMRPjx.js";import{C as l,A as i}from"./ErrorBar.stories-FGvktBh5.js";import"./iframe-BtK7K3Kv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPKyuAeN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-zFd1vMs8.js";import"./Layer-DV1icpzr.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./ErrorBarContext-CiGlk53m.js";import"./RechartsWrapper-DGVCpdWj.js";import"./arrayEqualityCheck-CFfqZo_0.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./CSSTransitionAnimate-BrYggcey.js";import"./useAnimationId-FO0Tg1s_.js";import"./ZIndexLayer-DaJzxTrT.js";import"./ScatterChart-NlZMqydk.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./CartesianGrid-GHJ_f6DI.js";import"./CartesianAxis-BOqlO8Q1.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./Label-DynPPCJ6.js";import"./types-CVJb2MOT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DGpvny6L.js";import"./YAxis-CwLMlwVC.js";import"./Scatter-CsLwTst8.js";import"./ReactUtils-BJV4SHfz.js";import"./Curve-yPyY_uXZ.js";import"./tooltipContext-C__a452J.js";import"./Symbols-DqB8iXHv.js";import"./ActiveShapeUtils-DG-TGbIe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_NKn9vF.js";import"./Trapezoid-C4MEq2xn.js";import"./Sector-8dbuSlIN.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./RechartsHookInspector-D4JLTX2d.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
