import{j as r}from"./jsx-runtime-Cue0IvzG.js";import{useMDXComponents as n}from"./index-CrUxydCA.js";import{M as s,C as a,a as p}from"./blocks-CwZSq62W.js";import{C as l,A as i}from"./ErrorBar.stories-DMrFPeZI.js";import"./iframe-DKGTY5BH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpSNf8hh.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DPihuysf.js";import"./Layer-BMyAm0Vh.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./ErrorBarContext-l5-2cdDP.js";import"./RechartsWrapper-C4nUVXRx.js";import"./arrayEqualityCheck-a5J2QiQR.js";import"./PolarUtils-BgS5trn7.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./zIndexSlice-BN50EdKr.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./CSSTransitionAnimate-D3NaQrWZ.js";import"./useAnimationId-Br5iK6pF.js";import"./ZIndexLayer-ChxBgnpv.js";import"./ScatterChart-HkllbjHY.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./CartesianGrid-B2IA90L2.js";import"./CartesianAxis-C0xV_R2I.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./Label-8CsqNV_S.js";import"./types-BBKXijxu.js";import"./XAxis-vvYkOBCU.js";import"./YAxis-DfYPGWBI.js";import"./Scatter-CTULD2L9.js";import"./ReactUtils-_yo6pVT0.js";import"./Curve-B8K-f9lF.js";import"./tooltipContext-BovvOkHK.js";import"./Symbols-Bske3hMz.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./Trapezoid-ClVeJ0sq.js";import"./Sector-wwquBaDN.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./RechartsHookInspector-ltFkNW4M.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
