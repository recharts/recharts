import{j as r}from"./jsx-runtime-Ctc7hcIg.js";import{useMDXComponents as n}from"./index-CAft1nZP.js";import{M as s,C as a,a as p}from"./blocks-CTdkEJM2.js";import{C as l,A as i}from"./ErrorBar.stories-CLWOszfa.js";import"./iframe-C-p_RB-q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wD3bNdwk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C4RXRoh8.js";import"./Layer-C7f6suDu.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./ErrorBarContext-DqfvC5Ba.js";import"./RechartsWrapper-DIdR0t3A.js";import"./arrayEqualityCheck-B-MvrmN7.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./CSSTransitionAnimate-CxGRQMRc.js";import"./useAnimationId-DU1HvgwT.js";import"./ZIndexLayer-DCWgaX-H.js";import"./ScatterChart-CyHiTdYL.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./CartesianGrid-BwIpVtPi.js";import"./CartesianAxis-B6zbzI9s.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./Label-C5MK-SLm.js";import"./types-GK0667Eh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C08WqI39.js";import"./YAxis-D8H0bjJG.js";import"./Scatter-Cdl0Wr1p.js";import"./ReactUtils-Dp-34n25.js";import"./Curve-p-GL7vDw.js";import"./tooltipContext-hEh8YB2b.js";import"./Symbols-pu40Z5kC.js";import"./ActiveShapeUtils-CQt1QMv8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3AEn-NX.js";import"./Trapezoid-3HlUouXc.js";import"./Sector-Dx36qTvv.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./RechartsHookInspector-A7vZopTv.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
