import{j as r}from"./jsx-runtime-BTfjxlsR.js";import{useMDXComponents as n}from"./index-C3qKI6Nl.js";import{M as p,C as s,a}from"./blocks-bNJRohod.js";import{C as m,A as i}from"./ErrorBar.stories-B-IN3QWu.js";import"./iframe-BNAvIRSF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjQmXn2i.js";import"./utils-ePvtT4un.js";import"./ErrorBar-iFT9x8mp.js";import"./Layer-DWhwKERy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8b97oaV.js";import"./ErrorBarContext-BmA35ro-.js";import"./RechartsWrapper-DOKHmNYT.js";import"./arrayEqualityCheck-B_mhFHzb.js";import"./immer-CgHRgtA8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C8X3jAB2.js";import"./hooks-BLrpM1nt.js";import"./axisSelectors-BdwfMvGg.js";import"./d3-scale-H_vF25Xi.js";import"./zIndexSlice-Di15SS1w.js";import"./renderedTicksSlice-BJfEJ4_M.js";import"./RegisterGraphicalItemId-Ddyr6RRu.js";import"./CSSTransitionAnimate-KjT5UcLb.js";import"./useAnimationId-COyixU_T.js";import"./ZIndexLayer-H82-bw69.js";import"./ScatterChart-CcdX1miA.js";import"./CartesianChart-CvP_4bZU.js";import"./chartDataContext-CvjStfkk.js";import"./CategoricalChart-sDSM-fNf.js";import"./CartesianGrid-JU9Ty3P0.js";import"./CartesianAxis-B-mMrgKm.js";import"./Text-3IHlO_kG.js";import"./DOMUtils-PvS2Tri4.js";import"./Label-CPS78KHE.js";import"./types-QGUyibIY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-jNdEOqKJ.js";import"./YAxis-DKn9Z0NX.js";import"./Scatter-BQH7v4AJ.js";import"./ReactUtils-DDF_v5tC.js";import"./Curve-BiyZrQzX.js";import"./step-CmqF8yoP.js";import"./tooltipContext-C5OdXhD3.js";import"./Symbols-DgKTLzDc.js";import"./symbol-CoAiT4va.js";import"./ActiveShapeUtils-7ytblip2.js";import"./isPlainObject-D9rsbW2B.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxFfTDWj.js";import"./Trapezoid-qTCS7j3n.js";import"./Sector-B7_OzMPm.js";import"./GraphicalItemClipPath-B3V5TXUV.js";import"./SetGraphicalItem-BnPwV1U_.js";import"./RechartsHookInspector-RJGN-lnu.js";import"./ChartSizeDimensions-BQzIEJvl.js";import"./OffsetShower-DQh6BuRU.js";import"./PlotAreaShower-C8HeOK1-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
