import{j as r}from"./jsx-runtime-Bh7S5Iug.js";import{useMDXComponents as n}from"./index-BMJlWq_j.js";import{M as s,C as a,a as p}from"./blocks-DpZpVSgE.js";import{C as l,A as i}from"./ErrorBar.stories-wnhF8xhx.js";import"./iframe-KPAXLOLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DScL8g0g.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DNDQ8zyb.js";import"./Layer-Da82H4oD.js";import"./resolveDefaultProps-DoONYDR5.js";import"./ErrorBarContext-DSh5xxoF.js";import"./RechartsWrapper-DbDiUXBh.js";import"./arrayEqualityCheck-C56QUJ1f.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./zIndexSlice-BZZRXwbi.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./CSSTransitionAnimate-2LP9JtNI.js";import"./useAnimationId-CcLJkYYw.js";import"./ZIndexLayer-DGM-MLqc.js";import"./ScatterChart-DBQZIUYu.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./CartesianGrid-YuL8M4DH.js";import"./CartesianAxis-Fwh7n2FF.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./Label-BCITgdoX.js";import"./types-Bf6Uuk4n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C4HchdwG.js";import"./YAxis-CAPsonmh.js";import"./Scatter-hKRpyXv7.js";import"./ReactUtils-DU0YFNnG.js";import"./Curve-DKnP5GEK.js";import"./tooltipContext-CHrD_CwG.js";import"./Symbols-B8OFT3tL.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./RechartsHookInspector-kpgbJjbF.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
