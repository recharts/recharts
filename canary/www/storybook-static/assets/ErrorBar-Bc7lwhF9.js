import{j as r}from"./jsx-runtime-BzjbyUcn.js";import{useMDXComponents as n}from"./index-AnqJfCEC.js";import{M as p,C as s,a}from"./blocks-CiyklNDh.js";import{C as m,A as i}from"./ErrorBar.stories--QnqnpqC.js";import"./iframe-ZP7E3tAE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B9IDBt-R.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C-ZC4rdz.js";import"./Layer-BHiu2mcd.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-79J5uOQE.js";import"./ErrorBarContext-BLxncd0z.js";import"./RechartsWrapper-CXTZX0lw.js";import"./arrayEqualityCheck-BZegdwCU.js";import"./immer-DfBDygba.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B6UrQqZ7.js";import"./hooks-DCx4ALdg.js";import"./axisSelectors-jiBsETiM.js";import"./d3-scale-Y646Y1FN.js";import"./zIndexSlice-DYNjVLba.js";import"./renderedTicksSlice-DWiQ850g.js";import"./RegisterGraphicalItemId-Cw_F4O-7.js";import"./CSSTransitionAnimate-BSB9ifKN.js";import"./useAnimationId-DzP9W11z.js";import"./ZIndexLayer-CQ2HcABX.js";import"./ScatterChart-DkeTvcxc.js";import"./CartesianChart-CyeIpcsP.js";import"./chartDataContext-Cn5Bk3lF.js";import"./CategoricalChart-BiLT_62I.js";import"./CartesianGrid-DHIJoitw.js";import"./CartesianAxis-BqPQSvc8.js";import"./Text-Fmn2R1e8.js";import"./DOMUtils-B5v93EaI.js";import"./Label-DQuLGrHO.js";import"./types-BY0ZtJ6u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CN_uVChz.js";import"./YAxis-BhI8CLrp.js";import"./Scatter-vP57BmEB.js";import"./ReactUtils-Jyyk6uCy.js";import"./Curve-BPu6gFcf.js";import"./step-DXK9R3Qh.js";import"./tooltipContext-Da4xql8I.js";import"./Symbols-DjU9F7j-.js";import"./symbol-Db4XPyyX.js";import"./ActiveShapeUtils-DrBMRVee.js";import"./isPlainObject-DdPleWLd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MC9ihyGv.js";import"./Trapezoid-DEV19aif.js";import"./Sector-BSueo3lX.js";import"./GraphicalItemClipPath-D_6vSzHc.js";import"./SetGraphicalItem-Cf9rfdg9.js";import"./RechartsHookInspector-Bzs4iZ_z.js";import"./ChartSizeDimensions-B4BdsRyY.js";import"./OffsetShower-CpH9si2J.js";import"./PlotAreaShower-DFApfivg.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
