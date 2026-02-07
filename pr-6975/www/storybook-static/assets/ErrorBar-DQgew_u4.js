import{j as r}from"./jsx-runtime-Dk1RlU0d.js";import{useMDXComponents as n}from"./index-CSOfQE9m.js";import{M as s,C as a,a as p}from"./blocks-BWdnKL3k.js";import{C as l,A as i}from"./ErrorBar.stories-CkCLvjZZ.js";import"./iframe-BGwjwh7b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5-nk5biS.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DfXDzFWO.js";import"./Layer-g7-Im1O-.js";import"./resolveDefaultProps-C4_jkDd5.js";import"./ErrorBarContext-CNFPOgVB.js";import"./RechartsWrapper-hK7FM4lj.js";import"./arrayEqualityCheck-Ci--b7kw.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BrtJ2K4-.js";import"./axisSelectors-DZSZvNV6.js";import"./zIndexSlice-CqqXeG-S.js";import"./RegisterGraphicalItemId-D86zanCr.js";import"./CSSTransitionAnimate-GyA9tQxi.js";import"./useAnimationId-CRoY-omv.js";import"./ZIndexLayer-BlpEyICK.js";import"./ScatterChart-xy9lU6gK.js";import"./CartesianChart-5LhnS4ee.js";import"./chartDataContext-CifXIRqa.js";import"./CategoricalChart-BOR7W1TN.js";import"./CartesianGrid-Bpv9yHg0.js";import"./CartesianAxis-C6FwbBuH.js";import"./Text-BJbt4-uX.js";import"./DOMUtils-B5Va_Rd3.js";import"./Label-ByJ0Zn7t.js";import"./types-DiIJ1tuj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DS9Xkr-k.js";import"./YAxis-BE7e26gY.js";import"./Scatter-C1heRigA.js";import"./ReactUtils-0GYQhZAx.js";import"./Curve-Bx03x7Y9.js";import"./tooltipContext-CpgcyK_Z.js";import"./Symbols-CA485AuF.js";import"./ActiveShapeUtils-BcFn4-44.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpPiBfe5.js";import"./Trapezoid-yFda2MLs.js";import"./Sector-CnD_zSeQ.js";import"./GraphicalItemClipPath-CbnJI2Ms.js";import"./SetGraphicalItem-CfxChqbu.js";import"./RechartsHookInspector-VWahaYTL.js";import"./ChartSizeDimensions-ewe-wGZ_.js";import"./OffsetShower-CVJaT1Gz.js";import"./PlotAreaShower-Cbm_qyV0.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
