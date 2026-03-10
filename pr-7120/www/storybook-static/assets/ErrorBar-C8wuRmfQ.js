import{j as r}from"./jsx-runtime-L8T91fB2.js";import{useMDXComponents as n}from"./index-Dkr1zSNj.js";import{M as p,C as s,a}from"./blocks-Cc2IeWIp.js";import{C as m,A as i}from"./ErrorBar.stories-BgBN9iIf.js";import"./iframe-DHjTBwa0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CGH8qd9t.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D2qWAnr6.js";import"./Layer-CoFjoalk.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./ErrorBarContext-By3ClU9F.js";import"./RechartsWrapper-DyX2fUcK.js";import"./arrayEqualityCheck-CGXWmECa.js";import"./immer-BrXT1eSW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BPCnijYz.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./zIndexSlice-DqtSbfBR.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./CSSTransitionAnimate-BLO1cB2r.js";import"./useAnimationId-C2i6VIVJ.js";import"./ZIndexLayer-CWpbiknC.js";import"./ScatterChart-BxZghllx.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./CartesianGrid-Dn9Sz7KD.js";import"./CartesianAxis-D9ZJukHE.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DzpQW1k6.js";import"./YAxis-CHgoMFSJ.js";import"./Scatter-DJDP7-2K.js";import"./ReactUtils-DXoYQqwM.js";import"./Curve-DPzG6TNm.js";import"./step-C25GYkrO.js";import"./tooltipContext-C8KY5Efg.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";import"./ActiveShapeUtils-9h77ymCT.js";import"./isPlainObject-DLGkOX2v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj02ipMQ.js";import"./Trapezoid-DxOEh9VV.js";import"./Sector-CIZ18yvj.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./RechartsHookInspector-D6nhtH8K.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
