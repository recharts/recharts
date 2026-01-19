import{j as r}from"./jsx-runtime-DxNQgo_M.js";import{useMDXComponents as n}from"./index-DQsjE7VW.js";import{M as s,C as a,a as p}from"./blocks-BVIMXuba.js";import{C as l,A as i}from"./ErrorBar.stories-DRhEW0mA.js";import"./iframe-BfEeuf29.js";import"./preload-helper-Dp1pzeXC.js";import"./index-n-fO4kHm.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BSl8uHeP.js";import"./Layer-WUPrCNhO.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./ErrorBarContext-D7bWjwna.js";import"./RechartsWrapper-DsA4AxRI.js";import"./arrayEqualityCheck-CQTYn8oK.js";import"./PolarUtils-B3A4Bn44.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./CSSTransitionAnimate-DA2ScfBa.js";import"./useAnimationId-593qmaql.js";import"./ZIndexLayer-nNaEVjlH.js";import"./ScatterChart-Dk4aCPU_.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./CartesianGrid-Pr14iCpc.js";import"./CartesianAxis-D11Z6FnG.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./Label-BQL_xh_a.js";import"./types-B9h6Osdn.js";import"./XAxis-DCok0cmX.js";import"./YAxis-Dk-NUqCy.js";import"./Scatter-ChDnBrZc.js";import"./ReactUtils-Dy1dqhtA.js";import"./Curve-QDibvidp.js";import"./tooltipContext-GkGaAySd.js";import"./Symbols-DTph50Q3.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./Trapezoid-D5AU_-Tp.js";import"./Sector-Bpai8LVK.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./RechartsHookInspector-CaAU2h8E.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
