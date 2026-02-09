import{j as r}from"./jsx-runtime-CGnBCF3I.js";import{useMDXComponents as n}from"./index-D2C1pLb9.js";import{M as s,C as a,a as p}from"./blocks-BFM-CZ5v.js";import{C as l,A as i}from"./ErrorBar.stories-nGbFqNWC.js";import"./iframe-_ezCe_To.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsSUOPyu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CK3JuY45.js";import"./Layer-BtA8wuUB.js";import"./resolveDefaultProps-R_saYEpi.js";import"./ErrorBarContext-DrqmUEJ9.js";import"./RechartsWrapper-B3l68k8X.js";import"./arrayEqualityCheck-OWAMtNJc.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./zIndexSlice-Dca2j4f-.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./CSSTransitionAnimate-CC415-hU.js";import"./useAnimationId-BzKwp2Yk.js";import"./ZIndexLayer-CWThG05g.js";import"./ScatterChart-D63pg9VT.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./CartesianGrid--UGEY6i0.js";import"./CartesianAxis-DGvPXtLW.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./Label-CHFqoGJt.js";import"./types-DgqTh4_l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CcLZPlVE.js";import"./YAxis-CEv_a0Mr.js";import"./Scatter-qKdDBM9M.js";import"./ReactUtils-B0BDd-2i.js";import"./Curve-C2x4bgof.js";import"./tooltipContext-C3W9U2Bx.js";import"./Symbols-DtsjZSQh.js";import"./ActiveShapeUtils-C67ovaxo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-citx9Y_h.js";import"./Trapezoid-CX1vw1n4.js";import"./Sector-Cl8ZFmwF.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./RechartsHookInspector-D5tzqIDa.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
