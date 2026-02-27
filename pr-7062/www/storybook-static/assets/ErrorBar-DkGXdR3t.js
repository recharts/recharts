import{j as r}from"./jsx-runtime-CAllpw4O.js";import{useMDXComponents as n}from"./index-DH_bnoEo.js";import{M as p,C as s,a}from"./blocks-3i3UnXRY.js";import{C as m,A as i}from"./ErrorBar.stories-Yaata4PS.js";import"./iframe-DFGAofbe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C6DKtKjE.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BKHOJ0kl.js";import"./Layer-DkQEAz0F.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiW6MX56.js";import"./ErrorBarContext-CN4hBBfW.js";import"./RechartsWrapper-BW69_AMP.js";import"./arrayEqualityCheck-ljAchZLP.js";import"./immer-BNIFj7IH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BuPlUYom.js";import"./hooks-NQJeEPvo.js";import"./axisSelectors-wlNZvql0.js";import"./d3-scale-BORVzaI0.js";import"./zIndexSlice-ZGxvoLlb.js";import"./renderedTicksSlice-zWZrw6WL.js";import"./RegisterGraphicalItemId-BoqMctej.js";import"./CSSTransitionAnimate-D1vMnsIb.js";import"./useAnimationId-DLq-j523.js";import"./ZIndexLayer-C2uBG0v5.js";import"./ScatterChart-CVAGPOEd.js";import"./CartesianChart-B919z8kN.js";import"./chartDataContext-3sHnV3LN.js";import"./CategoricalChart-DiTxXNb9.js";import"./CartesianGrid-BvlU0hyK.js";import"./CartesianAxis-CchT0nWW.js";import"./Text-eVa9CtOa.js";import"./DOMUtils-Bb3CoATj.js";import"./Label-D3hyhnox.js";import"./types-hODQJ_Fi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B7s0I8c_.js";import"./YAxis-BGW4Fg8K.js";import"./Scatter-DBZUMmUF.js";import"./ReactUtils-Zl7yFqa2.js";import"./Curve-DUQRfqey.js";import"./step-D87477lM.js";import"./tooltipContext-RM9zVRDO.js";import"./Symbols-smoeIwKM.js";import"./symbol-ChY4FcTv.js";import"./ActiveShapeUtils-BldO5j8K.js";import"./isPlainObject-CgDaYdpj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXQZY0za.js";import"./Trapezoid-C7B2-ixr.js";import"./Sector-BpsG7dxK.js";import"./GraphicalItemClipPath-CAWgOBcy.js";import"./SetGraphicalItem-BNO-bjOH.js";import"./RechartsHookInspector-DbJ87cdf.js";import"./ChartSizeDimensions-BkxkztHc.js";import"./OffsetShower-B3oZm6GE.js";import"./PlotAreaShower-CBxzL5FD.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
