import{j as r}from"./jsx-runtime-CdS_1XEN.js";import{useMDXComponents as n}from"./index-D5Gky44o.js";import{M as p,C as s,a}from"./blocks-CljvFOZx.js";import{C as m,A as i}from"./ErrorBar.stories-DTyHnE1v.js";import"./iframe-Ch2H383w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtZkbyPi.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dy8txaEJ.js";import"./Layer-yB3Q88eR.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./ErrorBarContext-BZSQmULr.js";import"./RechartsWrapper-B4us9W1h.js";import"./arrayEqualityCheck-CcoXvTIe.js";import"./immer-CuzWzTfz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B83dRs4n.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./zIndexSlice-D0Km72rD.js";import"./renderedTicksSlice-Cpaoi516.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./CSSTransitionAnimate-BKGoveEW.js";import"./useAnimationId-dRwxXRVb.js";import"./ZIndexLayer-Bo-lDWay.js";import"./ScatterChart-JTUMDPrY.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./CartesianGrid-CTinLeGK.js";import"./CartesianAxis-DOQRlkLH.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./Label-h8Lj8ZpR.js";import"./types-yO-TS24R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CNQurGdF.js";import"./YAxis-DxTWoH9V.js";import"./Scatter-BNr1SzsI.js";import"./ReactUtils-BnK3eejK.js";import"./Curve-BBxbYyGH.js";import"./step-BoAzBu0R.js";import"./tooltipContext-DxircbSh.js";import"./Symbols-DbTFPMcv.js";import"./symbol-BWpDFnQE.js";import"./ActiveShapeUtils-BKBe1trq.js";import"./isPlainObject-Bve2BbtD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKDxLQJC.js";import"./Trapezoid-DPpAMK_h.js";import"./Sector-HOrLF-jD.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./RechartsHookInspector-BJIWLpAN.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
