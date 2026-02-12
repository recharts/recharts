import{j as r}from"./jsx-runtime-GRChs32V.js";import{useMDXComponents as n}from"./index-D7tlvmFD.js";import{M as s,C as a,a as p}from"./blocks-CYnwmanr.js";import{C as l,A as i}from"./ErrorBar.stories-DE9XOxDc.js";import"./iframe-ByhUx3i5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bitkd77q.js";import"./utils-ePvtT4un.js";import"./ErrorBar-x0_hXWg_.js";import"./Layer-C6tXeN-I.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./ErrorBarContext-Coaa-8b_.js";import"./RechartsWrapper-CIwNTWTh.js";import"./arrayEqualityCheck-Dc2-6IGJ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./CSSTransitionAnimate-BGzcf0Mc.js";import"./useAnimationId-aMq0pZgy.js";import"./ZIndexLayer-ktHWf7_5.js";import"./ScatterChart-B5mOXJyL.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./CartesianGrid-cSH_-Fn1.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BI5mxokc.js";import"./YAxis-D42CMzIK.js";import"./Scatter-DZCgZeQG.js";import"./ReactUtils-BmZRR5An.js";import"./Curve-CS0P1hcX.js";import"./tooltipContext-7NlN6gcD.js";import"./Symbols-C3LGHQVt.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./RechartsHookInspector-7ObrtXBg.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
