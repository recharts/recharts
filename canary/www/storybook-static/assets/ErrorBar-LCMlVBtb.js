import{j as r}from"./jsx-runtime-zYMd04gK.js";import{useMDXComponents as n}from"./index-CqHGtW-m.js";import{M as p,C as s,a}from"./blocks-CtT1J-do.js";import{C as m,A as i}from"./ErrorBar.stories-DXepf3-s.js";import"./iframe-DrGUwCNH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3x6YcQkr.js";import"./utils-ePvtT4un.js";import"./ErrorBar-McoUROS2.js";import"./Layer-DOWBbL5h.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./ErrorBarContext-Bia10oLS.js";import"./RechartsWrapper-B5QstiPk.js";import"./arrayEqualityCheck-B-thuthJ.js";import"./immer-BtgqId3I.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BPQwAQcQ.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./CSSTransitionAnimate-HvqS308T.js";import"./useAnimationId-CM7jQqD0.js";import"./ZIndexLayer-CBw-SdHg.js";import"./ScatterChart-DuMXz8wu.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./CartesianGrid-C7_CvgCJ.js";import"./CartesianAxis-BAqDA5_7.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./Label-B7C6-KkD.js";import"./types-P3EO869A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DG0gA5yQ.js";import"./YAxis-CXzGtzv8.js";import"./Scatter-BuiY1RpH.js";import"./ReactUtils-C94_zE_J.js";import"./Curve-ywtP4oOQ.js";import"./step-DKLDrfb1.js";import"./tooltipContext-DrtKfZE5.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";import"./ActiveShapeUtils-xJQks6Bh.js";import"./isPlainObject-Bv08dW3C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DeFl-4jd.js";import"./Trapezoid-BR-nBhBU.js";import"./Sector-2SvHHXh3.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./RechartsHookInspector-DVkoldVn.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
