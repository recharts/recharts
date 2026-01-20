import{j as r}from"./jsx-runtime-BUr2w4GQ.js";import{useMDXComponents as n}from"./index-DsTA8bmR.js";import{M as s,C as a,a as p}from"./blocks-BXfQXHod.js";import{C as l,A as i}from"./ErrorBar.stories-Dn7PlxFX.js";import"./iframe-BLLNbNku.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dyt5IQSl.js";import"./utils-ePvtT4un.js";import"./ErrorBar-sIdDRGJ6.js";import"./Layer-BCxNAEKV.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./ErrorBarContext-HC4TQGzt.js";import"./RechartsWrapper-DHcwqX8r.js";import"./arrayEqualityCheck-Co8h5dnX.js";import"./PolarUtils-DXjI68e5.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./CSSTransitionAnimate-C5y1Mb1l.js";import"./useAnimationId-Brx318jV.js";import"./ZIndexLayer-rdL7qpG4.js";import"./ScatterChart-5YTYBp1i.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./CartesianGrid-NLii9Zxh.js";import"./CartesianAxis-ol8Jf5am.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./Label-BoL4zXeM.js";import"./types-C2V5y-Kb.js";import"./XAxis-raVyKb45.js";import"./YAxis-DzinWbKB.js";import"./Scatter-kK2e_zE_.js";import"./ReactUtils-DqoF2LGV.js";import"./Curve-k7SSPeeE.js";import"./tooltipContext-Di8nQB5E.js";import"./Symbols-Uq5NG2Xk.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./RechartsHookInspector-0ZdSIZYh.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
