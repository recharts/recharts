import{j as r}from"./jsx-runtime-COm2fJr8.js";import{useMDXComponents as n}from"./index-DBg85-IU.js";import{M as p,C as s,a}from"./blocks-DKT2c1L4.js";import{C as m,A as i}from"./ErrorBar.stories-BWKocucv.js";import"./iframe-DAZKVxz9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B6PIiwfp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DGghDNoW.js";import"./Layer-B5mQaLs_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./ErrorBarContext-baTIc42o.js";import"./RechartsWrapper-BjWlMXU1.js";import"./arrayEqualityCheck-dPOQS8pO.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./CSSTransitionAnimate-CdCMshe7.js";import"./useAnimationId-Bfut_0eb.js";import"./ZIndexLayer-CksZ3gAG.js";import"./ScatterChart-Q_fC7YzK.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./CartesianGrid-B_MixTEO.js";import"./CartesianAxis-B8h3nSA3.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./Label-DNW4k13o.js";import"./types-4_oq0AJp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DrBlWbCQ.js";import"./YAxis-BKsd-W4f.js";import"./Scatter-_R-fNgm7.js";import"./ReactUtils-CccuW9N4.js";import"./Curve-ZE8xv1Ny.js";import"./step-DOJR22o0.js";import"./tooltipContext-DVUOTG4B.js";import"./Symbols-D-cPayMS.js";import"./symbol-BHK6xqri.js";import"./ActiveShapeUtils-CSU1QkFK.js";import"./isPlainObject-BF_n072g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-nMN8f2_i.js";import"./Trapezoid-DUbCLHLc.js";import"./Sector-DBc0T8Rp.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./RechartsHookInspector-B2Mat80Z.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
