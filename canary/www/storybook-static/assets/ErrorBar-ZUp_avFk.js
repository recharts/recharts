import{j as r}from"./jsx-runtime-wC7fy548.js";import{useMDXComponents as n}from"./index-DUMxoBIH.js";import{M as s,C as a,a as p}from"./blocks-BcJ0boof.js";import{C as l,A as i}from"./ErrorBar.stories-C_6sm60R.js";import"./iframe-BJmj21Iv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bcx4MYAQ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DoHVR22A.js";import"./Layer-CfTs1qEr.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./ErrorBarContext-DSxRheLC.js";import"./RechartsWrapper-DbAa2EPs.js";import"./arrayEqualityCheck-DUr5Baor.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./RegisterGraphicalItemId-DTHmNv35.js";import"./CSSTransitionAnimate-LbMftZKl.js";import"./useAnimationId-BtjxpnPj.js";import"./ZIndexLayer-h8hw7e3y.js";import"./ScatterChart-h925rLtF.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./CartesianGrid-C729DxfB.js";import"./CartesianAxis-BAnw5oBq.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./Label-B5aPNwUF.js";import"./types-BB2yvksg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B-U8Jsdu.js";import"./YAxis-BnZN_5Sd.js";import"./Scatter-DBClnQw5.js";import"./ReactUtils-B_n9e2df.js";import"./Curve-DSyQRjp9.js";import"./tooltipContext-9TyWwaRO.js";import"./Symbols-Li-QgOej.js";import"./ActiveShapeUtils-COxfqJFr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtPz-Bf1.js";import"./Trapezoid-DUAp6hoC.js";import"./Sector-Dq6mbUDa.js";import"./GraphicalItemClipPath-CzdqANMv.js";import"./SetGraphicalItem-DUq8N8zo.js";import"./RechartsHookInspector-niLfVp7l.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
