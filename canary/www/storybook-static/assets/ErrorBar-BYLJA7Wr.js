import{j as r}from"./jsx-runtime-CKdnp7Q3.js";import{useMDXComponents as n}from"./index-BTVrWQs8.js";import{M as s,C as a,a as p}from"./blocks-CDK508sk.js";import{C as l,A as i}from"./ErrorBar.stories-C1_jdxcu.js";import"./iframe-BqavfRSI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwE92fQv.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DnxQ_nn4.js";import"./Layer-7F20iT3S.js";import"./resolveDefaultProps-BagVy590.js";import"./ErrorBarContext-CMc8E4Ed.js";import"./RechartsWrapper-BQN53ECK.js";import"./arrayEqualityCheck-Ra3gjxaW.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./zIndexSlice-cuW5CNY3.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./CSSTransitionAnimate-D1MeC1Ik.js";import"./useAnimationId-CE6HvtJ3.js";import"./ZIndexLayer-BDqdije3.js";import"./ScatterChart-HCalWlJ0.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./CartesianGrid-BPs8G6WA.js";import"./CartesianAxis--LdiM4X3.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./Label-DNJA6zIC.js";import"./types-etyYATxu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DMyHdO-k.js";import"./YAxis-Ce0lAKWw.js";import"./Scatter-BGMfCAwF.js";import"./ReactUtils-wyfG9-H0.js";import"./Curve-Bl7M7m7v.js";import"./tooltipContext-BflV6d4d.js";import"./Symbols-Dkh1Olqs.js";import"./ActiveShapeUtils-Dcqmnzwc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxU_uLMj.js";import"./Trapezoid-B5zHDmOP.js";import"./Sector-BUeJdgSe.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./RechartsHookInspector-DIZI_dr5.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
