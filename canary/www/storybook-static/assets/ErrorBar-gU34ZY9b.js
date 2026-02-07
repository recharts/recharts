import{j as r}from"./jsx-runtime-Cs3A6X8H.js";import{useMDXComponents as n}from"./index-B6Fkp2aZ.js";import{M as s,C as a,a as p}from"./blocks-m4Mp_PRj.js";import{C as l,A as i}from"./ErrorBar.stories-BfwT-3y0.js";import"./iframe-DhLWPZ06.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvWkBSj_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ByJ7CZtF.js";import"./Layer-DYv-jvxI.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./ErrorBarContext-D2Y9d5di.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./arrayEqualityCheck-CC1O7uMi.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./CSSTransitionAnimate-Bi294Jyw.js";import"./useAnimationId-C9SVwlUf.js";import"./ZIndexLayer-DD1HiNcR.js";import"./ScatterChart-Bn_2fA9D.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./CartesianGrid-Dbvz7fke.js";import"./CartesianAxis-DBjvK8IT.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./Label-FSHYxmdz.js";import"./types-C2AjUdZP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DHBBBHf5.js";import"./YAxis-CnLq9B_y.js";import"./Scatter-BLWJV6uu.js";import"./ReactUtils-BtUFOzkx.js";import"./Curve-CrhEQPlh.js";import"./tooltipContext-BsMjffBi.js";import"./Symbols-BmApJZ92.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./RechartsHookInspector-BYy17HVN.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
