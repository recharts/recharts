import{j as r}from"./jsx-runtime-9GQvXmdB.js";import{useMDXComponents as n}from"./index-BIzHRgtK.js";import{M as s,C as a,a as p}from"./blocks-1oxIQafP.js";import{C as l,A as i}from"./ErrorBar.stories-CW0_1h1u.js";import"./iframe-Bm_dlztP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DBvu736D.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEsNzz8_.js";import"./Layer-DqzpUDSE.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./ErrorBarContext-DrNk0Egn.js";import"./RechartsWrapper-BufFVb6a.js";import"./arrayEqualityCheck-BKx_y40S.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./CSSTransitionAnimate-3H0GGpHS.js";import"./useAnimationId-DL43TA5B.js";import"./ZIndexLayer-BWJMOT1A.js";import"./ScatterChart-BlHtVisJ.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./CartesianGrid-D8kzHBwE.js";import"./CartesianAxis-Df-SQWPS.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./Label-CDVZMFBi.js";import"./types-DmFvG4SC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DiBdkzoV.js";import"./YAxis-Dt19AUea.js";import"./Scatter-DZ3ium70.js";import"./ReactUtils-278YW1x2.js";import"./Curve-D1sI4FDZ.js";import"./tooltipContext-Cd6Bnoeq.js";import"./Symbols-CIac5k7Z.js";import"./ActiveShapeUtils-CdMwlbl5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CF3NoYDn.js";import"./Trapezoid-BcjTe3fL.js";import"./Sector-Tp_jaJNZ.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./RechartsHookInspector-CZNQLUTJ.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
