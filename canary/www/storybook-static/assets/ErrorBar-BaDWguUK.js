import{j as r}from"./jsx-runtime-B91pGx2n.js";import{useMDXComponents as n}from"./index-DBGF6Ijz.js";import{M as s,C as a,a as p}from"./blocks-f5KHJyRj.js";import{C as l,A as i}from"./ErrorBar.stories-V_sCoOzQ.js";import"./iframe-ZneQOoj5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhzpkJlR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BIYNvmiu.js";import"./Layer-CxIF_InE.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./ErrorBarContext-ZUCqOgTN.js";import"./RechartsWrapper-Cti5RU63.js";import"./arrayEqualityCheck-BNajb9_C.js";import"./PolarUtils-kb3Ynomj.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./CSSTransitionAnimate-DMRQa4je.js";import"./useAnimationId-qX2h62Hn.js";import"./ZIndexLayer-DbAXPfU_.js";import"./ScatterChart-Dnbzgy9w.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./CartesianGrid-9pcoHFJE.js";import"./CartesianAxis-ZVfszaWr.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./Label-s2gAZUId.js";import"./types-D_7qF1fe.js";import"./XAxis-iiI74VtB.js";import"./YAxis-B0TStWJD.js";import"./Scatter-BzAhewyV.js";import"./ReactUtils-Bw9y5ciT.js";import"./Curve-D5OcxVms.js";import"./tooltipContext-8ILqyGXc.js";import"./Symbols-DOSg8I_W.js";import"./ActiveShapeUtils-DknnfoXI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-gyHsx_3Q.js";import"./Trapezoid-aiu3Rixu.js";import"./Sector-CIuTmDEF.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./RechartsHookInspector-o16may3G.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
