import{j as r}from"./jsx-runtime-DhHnaIAl.js";import{useMDXComponents as n}from"./index-T5H0eqRR.js";import{M as s,C as a,a as p}from"./blocks-cacdclOu.js";import{C as l,A as i}from"./ErrorBar.stories-C85PNrfF.js";import"./iframe-DltNrMbJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DSMvm7PG.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D9Za9Zm0.js";import"./Layer-CESBlQPf.js";import"./resolveDefaultProps-DUSmftLt.js";import"./ErrorBarContext-D_xaXEzA.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./arrayEqualityCheck-LkDVdEVg.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./zIndexSlice-BY2OfmK4.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./CSSTransitionAnimate-BnL-laDJ.js";import"./useAnimationId-BKMwNFd7.js";import"./ZIndexLayer-BSXb5mnX.js";import"./ScatterChart-Daz5Ba0K.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./CartesianGrid-Dc_J0SIm.js";import"./CartesianAxis-DfRV_-M5.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./Label-WGWSnZjZ.js";import"./types-ByzPfmmH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CERTAhrM.js";import"./YAxis-CJYvma9k.js";import"./Scatter-ChcevaMx.js";import"./ReactUtils-q-DWoBEq.js";import"./Curve-DQJoehXa.js";import"./tooltipContext-74zqqiiW.js";import"./Symbols-VYn2rLNF.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEufvsiJ.js";import"./Trapezoid-AkIt7Koc.js";import"./Sector-CucAHJS5.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./RechartsHookInspector-CkUV0TxE.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
