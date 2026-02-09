import{j as r}from"./jsx-runtime-BvoGhGHM.js";import{useMDXComponents as n}from"./index-CFSMnObL.js";import{M as s,C as a,a as p}from"./blocks-hozsKmsh.js";import{C as l,A as i}from"./ErrorBar.stories-nkA_6ghp.js";import"./iframe-Ddtg6pJD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxoUglm9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C65D_jJ6.js";import"./Layer-DFCJKk43.js";import"./resolveDefaultProps-BClOIvLb.js";import"./ErrorBarContext-CvI528BI.js";import"./RechartsWrapper-_aZbub_8.js";import"./arrayEqualityCheck-CG9XTfyR.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./zIndexSlice-Ccg2qy_d.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./CSSTransitionAnimate-B2Cz-1Ug.js";import"./useAnimationId-CURyQWbL.js";import"./ZIndexLayer-BmeIxVaP.js";import"./ScatterChart-C1M12tKq.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./CartesianGrid-ClAnFFvt.js";import"./CartesianAxis-Bg_xmACB.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./Label-DVFU8Pe0.js";import"./types-ClXtAg6j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BuVbltIt.js";import"./YAxis-DZmITrXC.js";import"./Scatter-DRV73jGR.js";import"./ReactUtils-Cw8MXjHP.js";import"./Curve-C-ksUiT7.js";import"./tooltipContext-k2sqnbZb.js";import"./Symbols-TieKMT2F.js";import"./ActiveShapeUtils-DMR6fW_T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJ8F3yH0.js";import"./Trapezoid-CtTP1eQD.js";import"./Sector-ClpHZ9p-.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./RechartsHookInspector-CCfITcFS.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
