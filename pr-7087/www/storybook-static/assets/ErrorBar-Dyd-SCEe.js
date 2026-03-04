import{j as r}from"./jsx-runtime-R58pvDMP.js";import{useMDXComponents as n}from"./index-aGMbpSgz.js";import{M as p,C as s,a}from"./blocks-ZPF_eCT4.js";import{C as m,A as i}from"./ErrorBar.stories-CATPDEQy.js";import"./iframe-kEab-1de.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRJo_4d4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ktrCd9Gz.js";import"./Layer-Dvp9QxpM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D3Hyj-pA.js";import"./ErrorBarContext-CSP8NLhc.js";import"./RechartsWrapper-CML9BKQL.js";import"./arrayEqualityCheck-CYrh2cjl.js";import"./immer-C4eWxQIR.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1RE61xO.js";import"./hooks-CJ2fHPGA.js";import"./axisSelectors-Tp_fxU6n.js";import"./d3-scale-sz-3qxpi.js";import"./zIndexSlice-BaIw-MhD.js";import"./renderedTicksSlice-BrUKQsnm.js";import"./RegisterGraphicalItemId-Z8hxEYqU.js";import"./CSSTransitionAnimate-BW3BE2ja.js";import"./useAnimationId-DmziQOA2.js";import"./ZIndexLayer-DOe9AOBU.js";import"./ScatterChart-BrRWocVj.js";import"./CartesianChart-BAMega6b.js";import"./chartDataContext-DvTCGmxA.js";import"./CategoricalChart-C5mOLgQl.js";import"./CartesianGrid-Dz-jm-Oh.js";import"./CartesianAxis-3YcfdTBf.js";import"./Text-DdI2ODY4.js";import"./DOMUtils-WUqQkZq5.js";import"./Label-CVjBmkuR.js";import"./types-B8qtknYP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B2e8gJVO.js";import"./YAxis-C_wTf9xH.js";import"./Scatter-01Gk-GjI.js";import"./ReactUtils-BiGj3rxx.js";import"./Curve-B815kJjs.js";import"./step-BiRjne67.js";import"./tooltipContext-BU-SCK6n.js";import"./Symbols-eEknJRPm.js";import"./symbol-Mwvb6Rn8.js";import"./ActiveShapeUtils-DS-9aDIa.js";import"./isPlainObject-DYt69ZGI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bb8G2Q0h.js";import"./Trapezoid-DOWeSYXh.js";import"./Sector-DyyTlWTh.js";import"./GraphicalItemClipPath-CrzbaPUK.js";import"./SetGraphicalItem-D6ZVSQU1.js";import"./RechartsHookInspector-CC5UoVXz.js";import"./ChartSizeDimensions-D96mYFyL.js";import"./OffsetShower-Db9WbllM.js";import"./PlotAreaShower-_gQbuJS1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
