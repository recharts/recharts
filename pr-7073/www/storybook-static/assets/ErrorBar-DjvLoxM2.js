import{j as r}from"./jsx-runtime-DiVhSI_8.js";import{useMDXComponents as n}from"./index-BK-b4VHl.js";import{M as p,C as s,a}from"./blocks-1g2HTmUM.js";import{C as m,A as i}from"./ErrorBar.stories-uOyTDdLq.js";import"./iframe-DNAE1NhS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FFJywn3r.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cgd9zqTv.js";import"./Layer-D_bZVw-_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjxP23mN.js";import"./ErrorBarContext-CfrG8dxY.js";import"./RechartsWrapper-BnyLV03c.js";import"./arrayEqualityCheck-mXK7KdlW.js";import"./immer-CgyYfbuD.js";import"./PolarUtils-CTnnDHZv.js";import"./index-zEpWvrsz.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./CSSTransitionAnimate-BlEHlill.js";import"./useAnimationId-BLg_egJR.js";import"./ZIndexLayer-NBg0M_kA.js";import"./ScatterChart-BSb8kcT5.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./CartesianGrid-DynNJww8.js";import"./CartesianAxis-ya5SmFCu.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BXzG9_su.js";import"./YAxis-Cl8JaIdm.js";import"./Scatter-CaftnQxH.js";import"./ReactUtils-DmdO9I71.js";import"./Curve-DnknT2C5.js";import"./step-DDruULJc.js";import"./tooltipContext-Cs2F9uWa.js";import"./Symbols-DnMbrkmh.js";import"./symbol-CmAtNHVX.js";import"./ActiveShapeUtils-DszuQs4M.js";import"./isPlainObject-YFgp9Ig4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cm__RLQd.js";import"./Trapezoid-D2GZv-Mv.js";import"./Sector-BPDHR2kf.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./RechartsHookInspector-CXdTs72e.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
