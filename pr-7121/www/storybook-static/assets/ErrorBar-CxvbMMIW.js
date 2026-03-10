import{j as r}from"./jsx-runtime-OhKwFSwZ.js";import{useMDXComponents as n}from"./index-DIDieYwo.js";import{M as p,C as s,a}from"./blocks-CoPurKDI.js";import{C as m,A as i}from"./ErrorBar.stories-CnjKShXq.js";import"./iframe-B0RBHKhv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAjd4rxZ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cg3i12vW.js";import"./Layer-DKG_J2lX.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COjtEafr.js";import"./ErrorBarContext-Lg7BjtUv.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./arrayEqualityCheck-CUrlIiZa.js";import"./immer-4Zn5elZn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CJLF0Mhh.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./CSSTransitionAnimate-C5YvgC8X.js";import"./useAnimationId-BhQIBdFI.js";import"./ZIndexLayer-D0KeT139.js";import"./ScatterChart-BmVoirIp.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./CartesianGrid-CB91r2uB.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CmZ1Qc-G.js";import"./YAxis-CpFYoB6j.js";import"./Scatter-Hi6uG4YY.js";import"./ReactUtils-4VVLboep.js";import"./Curve-OyQHTjUf.js";import"./step-tovYZaNJ.js";import"./tooltipContext-8hUHBFaI.js";import"./Symbols-DeqF7aJf.js";import"./symbol-Br_8ecW-.js";import"./ActiveShapeUtils-BxyuTB5c.js";import"./isPlainObject-CN9etUkS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwMZJDWv.js";import"./Trapezoid-CNfMGcYM.js";import"./Sector-COzuaaOM.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./RechartsHookInspector-BW5IS2xz.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
