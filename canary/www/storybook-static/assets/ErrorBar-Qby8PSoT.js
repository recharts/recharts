import{j as r}from"./jsx-runtime-Dq2QB0xh.js";import{useMDXComponents as n}from"./index-yaFANuJd.js";import{M as s,C as p,a}from"./blocks-BRrOSDIg.js";import{C as l,A as i}from"./ErrorBar.stories-DkvS-8qg.js";import"./iframe-DnFqMkNF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4_M3vQq.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CY2HfkXj.js";import"./Layer-9mC9xCqL.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./RechartsWrapper-5Wt67h2M.js";import"./arrayEqualityCheck-DEUF_nnv.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./CSSTransitionAnimate-CdOaY-9C.js";import"./useAnimationId-CAcVrmxD.js";import"./ZIndexLayer-B30mlZWZ.js";import"./ScatterChart-CllBpFw0.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./CartesianGrid-CdVi4ss0.js";import"./CartesianAxis-CJ5glNJc.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./Label-D7fFgVlW.js";import"./types-D_jqkROP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-j8l4i7VN.js";import"./YAxis-DkzCTt_M.js";import"./Scatter-DPM8B_t8.js";import"./ReactUtils-46mNTZgz.js";import"./Curve-BT-KWQUD.js";import"./tooltipContext-e4AoOKdp.js";import"./Symbols-CDqR_0sP.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./RechartsHookInspector-CUfHCEPB.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
