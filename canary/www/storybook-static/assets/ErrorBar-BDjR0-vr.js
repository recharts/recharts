import{j as r}from"./jsx-runtime-CvN5qDwD.js";import{useMDXComponents as n}from"./index-CDGNYqQe.js";import{M as p,C as s,a}from"./blocks-Dv0f-Dwz.js";import{C as m,A as i}from"./ErrorBar.stories-Bo_TGtvm.js";import"./iframe-Dd1Sjt9X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAwGKYht.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D6b6eqms.js";import"./Layer-CX4gucce.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./ErrorBarContext-L_IEZQFq.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./arrayEqualityCheck-pUdtrDKv.js";import"./immer-ezkOMCj7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DHxloPwC.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./d3-scale-BBdKeTjL.js";import"./zIndexSlice-B2TlWuzN.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./CSSTransitionAnimate-D9FdZckm.js";import"./useAnimationId-ax-iI9cP.js";import"./ZIndexLayer-nfwFwrW8.js";import"./ScatterChart-DZnTx5Om.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./CartesianGrid-VgSpPdk9.js";import"./CartesianAxis-CovsPuDZ.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./Label-ByOVYkgq.js";import"./types-5Z667yyH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BYGa6kOu.js";import"./YAxis-BRdJhjsx.js";import"./Scatter-CxxO7rh9.js";import"./ReactUtils-0A2SPQqI.js";import"./Curve-DCc30kqb.js";import"./step-3UMSkQg1.js";import"./tooltipContext-CtzA5r-a.js";import"./Symbols-nv82Msvy.js";import"./symbol-DU1W-Oc6.js";import"./ActiveShapeUtils-DgMKp2OJ.js";import"./isPlainObject-Dk8iq51s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChXOGBDT.js";import"./Trapezoid-XW4nj9Uq.js";import"./Sector-C-MT-tlR.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./RechartsHookInspector-Cr2Johcx.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
