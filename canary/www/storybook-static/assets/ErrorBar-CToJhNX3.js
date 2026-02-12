import{j as r}from"./jsx-runtime-Bv7zbNRF.js";import{useMDXComponents as n}from"./index-ByvzyQa5.js";import{M as s,C as a,a as p}from"./blocks-sYZFxZuB.js";import{C as l,A as i}from"./ErrorBar.stories-BVT8HSaj.js";import"./iframe-DG5XGAD6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ZiVRns4Q.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dhx58QZ8.js";import"./Layer-CzlbLnCA.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./ErrorBarContext-DyIY829R.js";import"./RechartsWrapper-BwgBVkto.js";import"./arrayEqualityCheck-j51cHR5x.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./zIndexSlice-DIZTBSXC.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./CSSTransitionAnimate-DG7_C2G0.js";import"./useAnimationId-NyrgIauS.js";import"./ZIndexLayer-CKRqVJn0.js";import"./ScatterChart--GxN2WQ7.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./CartesianGrid-Cc33JTQ2.js";import"./CartesianAxis-a2JFC2mr.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./Label-bn2tJ_cj.js";import"./types-D0CjTngR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-oYzB5LXw.js";import"./YAxis-CCH0cAJm.js";import"./Scatter-CN5ZE7w2.js";import"./ReactUtils-Vfgvf3cC.js";import"./Curve-BnD4_LTQ.js";import"./tooltipContext-D-6MSdau.js";import"./Symbols-C5H0HNIV.js";import"./ActiveShapeUtils-Cyi76-oO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-xQMUTm.js";import"./Trapezoid-C7Z3OQT2.js";import"./Sector-B5if7fUR.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./RechartsHookInspector-YgQTDZfw.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
