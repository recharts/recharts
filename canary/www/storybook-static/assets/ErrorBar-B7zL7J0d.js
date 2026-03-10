import{j as r}from"./jsx-runtime-BTr2rTV-.js";import{useMDXComponents as n}from"./index-DpHmHXsJ.js";import{M as p,C as s,a}from"./blocks-B-6sHjpE.js";import{C as m,A as i}from"./ErrorBar.stories-Bp3XM7UB.js";import"./iframe-O9ArEVIv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKq64LI9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEGfJLW0.js";import"./Layer-Bs1IQ35S.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cjflm227.js";import"./ErrorBarContext-Caa3uBDH.js";import"./RechartsWrapper-DOYlziR8.js";import"./arrayEqualityCheck-C-MTCypy.js";import"./immer-BFzhs2u-.js";import"./PolarUtils-CTnnDHZv.js";import"./index-a21uXOx0.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./d3-scale-CJB90U0O.js";import"./zIndexSlice-Sxdp-diY.js";import"./renderedTicksSlice-BvOqc92I.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./CSSTransitionAnimate-ad2OpEs0.js";import"./useAnimationId-DFOXeF_s.js";import"./ZIndexLayer-gMxYNdgc.js";import"./ScatterChart-BVTPLE5R.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./CartesianGrid-DxswWlbo.js";import"./CartesianAxis-Ds14BfSb.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./Label-CEXSNWpb.js";import"./types-CsxGUr-v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cej5L1H9.js";import"./YAxis-Br5uA6sX.js";import"./Scatter-iRnptBIF.js";import"./ReactUtils-BfiyyF4-.js";import"./Curve-BaetafJM.js";import"./step-CooRIyZW.js";import"./tooltipContext-CkAKGhbX.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./RechartsHookInspector-16YUtyRB.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
