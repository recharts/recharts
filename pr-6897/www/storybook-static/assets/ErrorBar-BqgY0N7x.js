import{j as r}from"./jsx-runtime-2t0euTN8.js";import{useMDXComponents as n}from"./index-Cc9TknsS.js";import{M as s,C as a,a as p}from"./blocks-C7fJfnSg.js";import{C as l,A as i}from"./ErrorBar.stories-DNPv2YLE.js";import"./iframe-BESbJ0y8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUJCh7cc.js";import"./utils-ePvtT4un.js";import"./ErrorBar-_Nu5cgcN.js";import"./Layer-C8CJBWmq.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./ErrorBarContext-D0r4aWU5.js";import"./RechartsWrapper-DRe6KgwL.js";import"./arrayEqualityCheck-BJiY8zR4.js";import"./PolarUtils-BLb-h-71.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./CSSTransitionAnimate-D-zIPGYN.js";import"./useAnimationId-XfKJYBN0.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./ScatterChart-CTkY38WW.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./CartesianGrid-BpXt6o3f.js";import"./CartesianAxis-D-J9lWts.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./Label-qXVAmmrb.js";import"./types-CGrtFV1P.js";import"./XAxis-DXfH0Gay.js";import"./YAxis-Cn9GoD8s.js";import"./Scatter-Csf4U-eq.js";import"./ReactUtils-CdwmpjBo.js";import"./Curve-9nr7VYb2.js";import"./tooltipContext-D7tZ70Gw.js";import"./Symbols-D6ejZ83Z.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./Trapezoid-BCkjDT6c.js";import"./Sector-DR905TlL.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./RechartsHookInspector-BIrUgBA6.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
