import{j as r}from"./jsx-runtime-B6lnrEtR.js";import{useMDXComponents as n}from"./index-DjNnwIal.js";import{M as s,C as a,a as p}from"./blocks-Du1HgVex.js";import{C as l,A as i}from"./ErrorBar.stories-C7E1-Tb3.js";import"./iframe-BD1KoWK2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-G9AZeeqA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dszwhi9I.js";import"./Layer-CRI4mTHm.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./ErrorBarContext-DDBG_BG0.js";import"./RechartsWrapper-CyX5gEfk.js";import"./arrayEqualityCheck-Cde7DPwP.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./CSSTransitionAnimate-Cr3UwUlf.js";import"./useAnimationId-C52_k4XW.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./ScatterChart-H3YdrBZj.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./CartesianGrid-BcU30g3K.js";import"./CartesianAxis-le_A4Q3P.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./Label-DKDP8eG9.js";import"./types-CvLbK4WM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DnAqFIqk.js";import"./YAxis-Ck4AhIst.js";import"./Scatter--R2gxHG-.js";import"./ReactUtils-Z9JD7jXO.js";import"./Curve-CTi9DAae.js";import"./tooltipContext-DR1TWxOU.js";import"./Symbols-Cd74flzx.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dqzy-26l.js";import"./Trapezoid-Ce1Zpmiv.js";import"./Sector-BVsQ6t1D.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./RechartsHookInspector-D7IHkHn9.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
