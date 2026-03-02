import{j as r}from"./jsx-runtime-z4Q0N1__.js";import{useMDXComponents as n}from"./index-CUQAbxwN.js";import{M as p,C as s,a}from"./blocks--J32bt1-.js";import{C as m,A as i}from"./ErrorBar.stories-BcfuRgtf.js";import"./iframe-D_8UNJGJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFdITy7w.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bxrd6EKq.js";import"./Layer-CSFY2JoB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5V57fEA.js";import"./ErrorBarContext-F8JTwXXl.js";import"./RechartsWrapper-CeUnYUBi.js";import"./arrayEqualityCheck-DLi0Ag40.js";import"./immer-DgVi67O2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CjxbrGoj.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./zIndexSlice-B5sMKRff.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./CSSTransitionAnimate-C09CpOxy.js";import"./useAnimationId-BTJ6QCKz.js";import"./ZIndexLayer-B2K1T5O_.js";import"./ScatterChart-NrK4bgZY.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./CartesianGrid-DoYIeoEt.js";import"./CartesianAxis-CmGsQYnB.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-nL349YCp.js";import"./YAxis-UxrLaYW9.js";import"./Scatter-G2HeMbBD.js";import"./ReactUtils-lBfKzFjL.js";import"./Curve-ICQj_4TC.js";import"./step-CSwA1lmy.js";import"./tooltipContext-eEAXwUon.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./RechartsHookInspector-DqWSEPyK.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
