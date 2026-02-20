import{j as r}from"./jsx-runtime-DKpH9hG6.js";import{useMDXComponents as n}from"./index-CbKiBjrk.js";import{M as s,C as p,a}from"./blocks-Z7VcWwKv.js";import{C as l,A as i}from"./ErrorBar.stories-BSiGFVlR.js";import"./iframe-d3qCsCxk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DStWVrKL.js";import"./utils-ePvtT4un.js";import"./ErrorBar-bWTWIUU9.js";import"./Layer-CUjYvDWI.js";import"./resolveDefaultProps-BEotyltG.js";import"./ErrorBarContext-BMBoMP-k.js";import"./RechartsWrapper-B3juZhR0.js";import"./arrayEqualityCheck-BSeezrw4.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./CSSTransitionAnimate-BsguMHQu.js";import"./useAnimationId-OmpdHa5n.js";import"./ZIndexLayer-D3LUzJCs.js";import"./ScatterChart-CQS71c97.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./CartesianGrid-DEXLWDCT.js";import"./CartesianAxis-CyPlzw3T.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./Label-oam-p3Cf.js";import"./types-B3TZRrDh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BmRFblia.js";import"./YAxis-BYMuo7gN.js";import"./Scatter-cLVV0Mty.js";import"./ReactUtils-DxKtCUtQ.js";import"./Curve-D8rLd4C3.js";import"./tooltipContext-CVRUuPKw.js";import"./Symbols-XJ3mO982.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./RechartsHookInspector-ILLh7APk.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
