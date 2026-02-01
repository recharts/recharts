import{j as r}from"./jsx-runtime-DG6qMvKd.js";import{useMDXComponents as n}from"./index-CkT0fOyQ.js";import{M as s,C as a,a as p}from"./blocks-DXk1XuOF.js";import{C as l,A as i}from"./ErrorBar.stories-BVbQ24uh.js";import"./iframe-BJ3b3BfY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vodQRtzb.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DUp4a6g6.js";import"./Layer-B4_ys6we.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./ErrorBarContext-C1pIVCq0.js";import"./RechartsWrapper-CKiG0ykq.js";import"./arrayEqualityCheck-Bo2Wnkh3.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./CSSTransitionAnimate-B7MRqkxO.js";import"./useAnimationId-PYCZu_AY.js";import"./ZIndexLayer-CUGD5-lC.js";import"./ScatterChart-0u5C2lQj.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./CartesianGrid-DzBAtk5H.js";import"./CartesianAxis-LraHpKTU.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./Label-DeB84C01.js";import"./types-mvH4HYXR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DGMxd97y.js";import"./YAxis-CF3zWZoV.js";import"./Scatter-bolpy4TR.js";import"./ReactUtils-zwc7yRgu.js";import"./Curve-Kded-2mW.js";import"./tooltipContext-DM5wBmSb.js";import"./Symbols-DMZSC_-N.js";import"./ActiveShapeUtils-CxNZmNtv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2kMW3VJ.js";import"./Trapezoid-DF2tlYWx.js";import"./Sector-BHT4ZWAz.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./RechartsHookInspector-ORt5Hm4G.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
