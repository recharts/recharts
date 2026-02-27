import{j as r}from"./jsx-runtime-DKrlBxK1.js";import{useMDXComponents as n}from"./index-CPxTLNpB.js";import{M as p,C as s,a}from"./blocks-Doq_FuQi.js";import{C as m,A as i}from"./ErrorBar.stories-Cxev1upo.js";import"./iframe-CLFlzKU9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CmeZFfhb.js";import"./utils-ePvtT4un.js";import"./ErrorBar-bRWdP6vC.js";import"./Layer-D55T8TbI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./ErrorBarContext-CcCgl_nm.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./arrayEqualityCheck-CV0K5b6V.js";import"./immer-Dut6E3j8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Di3CFc3K.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./CSSTransitionAnimate-gvArrkMT.js";import"./useAnimationId-B-nqwfiH.js";import"./ZIndexLayer-CygGErko.js";import"./ScatterChart-DJvgRg11.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./CartesianGrid-B-mexKbJ.js";import"./CartesianAxis-U7WBccnc.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CTep6ajY.js";import"./YAxis-1XrS4lWj.js";import"./Scatter-v7N0ibJl.js";import"./ReactUtils-KqS4Be82.js";import"./Curve-04aIAzqq.js";import"./step-BHh7-B-Y.js";import"./tooltipContext-Ckh_FF-f.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./RechartsHookInspector-EUreR-RY.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
