import{j as r}from"./jsx-runtime-C-RL8ZUh.js";import{useMDXComponents as n}from"./index-WQUgECEI.js";import{M as p,C as s,a}from"./blocks-DLGdR7kJ.js";import{C as m,A as i}from"./ErrorBar.stories-lI-aEiCc.js";import"./iframe-BB4UUGL6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UCZ6NmO8.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BWbjt5YI.js";import"./Layer-CzRXBUT9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./ErrorBarContext-CSlHUW5r.js";import"./RechartsWrapper-D-mKRVYc.js";import"./arrayEqualityCheck-BYmPeJrr.js";import"./immer-CGr0ptDX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DU7ieidm.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./zIndexSlice-CuyQJUW0.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./CSSTransitionAnimate-CWcXg6iL.js";import"./useAnimationId-CR73Z47T.js";import"./ZIndexLayer-C40yFkyN.js";import"./ScatterChart-DINhYIj2.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./CartesianGrid-BCxtGjHc.js";import"./CartesianAxis-D42FnObu.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./Label-BuQHIgdG.js";import"./types-DX1g5Szp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Sg_yoptQ.js";import"./YAxis-BjQFu2fY.js";import"./Scatter-DwZ5u7FK.js";import"./ReactUtils-C_PCtVqv.js";import"./Curve--7RAEkWQ.js";import"./step-BIZ2Vv4e.js";import"./tooltipContext-BBUNFgLK.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";import"./ActiveShapeUtils-DQggNROu.js";import"./isPlainObject-BHtqOomI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BoM2sg2T.js";import"./Trapezoid-02WGJX_U.js";import"./Sector-DNRZINVD.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./RechartsHookInspector-Bh0xNYsg.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
