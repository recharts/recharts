import{j as r}from"./jsx-runtime-DpZEkJ2T.js";import{useMDXComponents as n}from"./index-DFaVjRln.js";import{M as s,C as a,a as p}from"./blocks-B-SX1iKv.js";import{C as l,A as i}from"./ErrorBar.stories-Br3B3t3d.js";import"./iframe-BfbK0YnM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DXUjyqxC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DOSc12Zu.js";import"./Layer-CgE-ub3Y.js";import"./resolveDefaultProps-1x2577Vl.js";import"./ErrorBarContext-CY5jd0h0.js";import"./RechartsWrapper-CneYaVm0.js";import"./arrayEqualityCheck-DNFpTLKx.js";import"./PolarUtils-D7VIOQ5-.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./CSSTransitionAnimate-CN8cSUx2.js";import"./useAnimationId-D-pFcM5J.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./ScatterChart-DdS8k_la.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./CartesianGrid-DByKPwMu.js";import"./CartesianAxis-BYWnjPPG.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./Label-DahQkxIF.js";import"./types-Bmf6Pun4.js";import"./XAxis-C98xK6t1.js";import"./YAxis-BIVxSChd.js";import"./Scatter-5Axc3mgg.js";import"./ReactUtils-CcajNckk.js";import"./Curve-DDb4cbsk.js";import"./tooltipContext-0V0eoMU8.js";import"./Symbols-sbw_CJaX.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./Trapezoid-CzxVEg4f.js";import"./Sector-BlKZ7V0w.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./RechartsHookInspector-hJ2wORVM.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
