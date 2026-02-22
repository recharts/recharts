import{j as r}from"./jsx-runtime-C729ke3_.js";import{useMDXComponents as n}from"./index-DbfBMZl_.js";import{M as p,C as s,a}from"./blocks-BkI0rh7b.js";import{C as m,A as i}from"./ErrorBar.stories-CI5FRPuY.js";import"./iframe-DwKnaYxn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DfrlB0-M.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ZzGhWKsw.js";import"./Layer-DSEoyjCD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./ErrorBarContext-C_ynaDio.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./arrayEqualityCheck-LpIzrfco.js";import"./immer-DQq_9s85.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CdfNcBdj.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./zIndexSlice-BYI3CC3N.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./CSSTransitionAnimate-DPfiu2fJ.js";import"./useAnimationId-DAuxgXsL.js";import"./ZIndexLayer-BN-fjZdO.js";import"./ScatterChart-DMJ_l10N.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./CartesianGrid-BvxKDgK5.js";import"./CartesianAxis-CcPlK-DU.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./Label-V1o-IcdK.js";import"./types-CuZ_PvfO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BZQZZAmU.js";import"./YAxis-CPIo8OmW.js";import"./Scatter-DvAlnjEG.js";import"./ReactUtils-BWd9nqnf.js";import"./Curve-BGSMtIpM.js";import"./step-Cbn8vCGE.js";import"./tooltipContext-Bp_z7nZo.js";import"./Symbols-C2QRSUXD.js";import"./symbol-CZd2cT8P.js";import"./ActiveShapeUtils-BElib0Bt.js";import"./isPlainObject-CWJcMVMA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bCycDAsX.js";import"./Trapezoid-lPFf9vCg.js";import"./Sector-DE27qkYe.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./RechartsHookInspector-BulN8Qtf.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./OffsetShower-BpsLBEIx.js";import"./PlotAreaShower-5WwlvIXR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
