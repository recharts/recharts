import{j as r}from"./jsx-runtime-CNMjlM4a.js";import{useMDXComponents as n}from"./index-CBuHDBkk.js";import{M as s,C as a,a as p}from"./blocks-DYagkh4W.js";import{C as l,A as i}from"./ErrorBar.stories-DiyVq7Jz.js";import"./iframe-DTjNyuRV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-qnmfyn6T.js";import"./utils-ePvtT4un.js";import"./ErrorBar-GnT7Vffv.js";import"./Layer-Bnob1t-w.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./ErrorBarContext-D6_J_E6J.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./arrayEqualityCheck-C4xGcSTy.js";import"./PolarUtils-jGr_7wxa.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./zIndexSlice-DRfn0LKt.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./CSSTransitionAnimate-DEfC1EdY.js";import"./useAnimationId-DyTjjL6a.js";import"./ZIndexLayer-DQomkPs4.js";import"./ScatterChart-DIKvOwkf.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./CartesianGrid-DmHrhKtz.js";import"./CartesianAxis-DGjvbjMn.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./Label-BLKfXojP.js";import"./types-To9Ddb8E.js";import"./XAxis-Cc4WtM0z.js";import"./YAxis-CTYfecrB.js";import"./Scatter-C-ImkC7p.js";import"./ReactUtils-338dS-Qh.js";import"./Curve-OPgUPtNu.js";import"./tooltipContext-DeWM14_N.js";import"./Symbols-Bqb-NDkg.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./RechartsHookInspector-euo4g-ug.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
