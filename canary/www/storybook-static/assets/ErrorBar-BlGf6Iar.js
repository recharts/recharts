import{j as r}from"./jsx-runtime-BnYblL8A.js";import{useMDXComponents as n}from"./index-B9zltoev.js";import{M as p,C as s,a}from"./blocks-YmLPvSnj.js";import{C as m,A as i}from"./ErrorBar.stories-b6TaGoWF.js";import"./iframe-Gi8dyZ6e.js";import"./preload-helper-Dp1pzeXC.js";import"./index-rE-DaWJc.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B0B8hwQa.js";import"./Layer-DeXjDdnZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./ErrorBarContext-BpvUZnWq.js";import"./RechartsWrapper-CB2AOINA.js";import"./arrayEqualityCheck-DuhG7Z2p.js";import"./immer-D5pmFx9i.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DFJBHj5i.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./d3-scale-B9haREcB.js";import"./zIndexSlice-DnlbZmgt.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./CSSTransitionAnimate-DgzaX7ZA.js";import"./useAnimationId-DlkxhLWt.js";import"./ZIndexLayer-gbXEsAYB.js";import"./ScatterChart-BBIaT32g.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./CartesianGrid-B_ujkWpT.js";import"./CartesianAxis-Cy_oOLdQ.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./Label-DaPx3_eW.js";import"./types-I1HiLSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-y3nTYyyS.js";import"./YAxis-CqPjiITk.js";import"./Scatter-BYIM1g15.js";import"./ReactUtils-CMiXbBDc.js";import"./Curve-BOJjXgXN.js";import"./step-fw1t_kgZ.js";import"./tooltipContext-DjTLAhoG.js";import"./Symbols-CboXRb1J.js";import"./symbol-U_eLqT-N.js";import"./ActiveShapeUtils-Cw5EPp8e.js";import"./isPlainObject-DlPp7zEZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2pGK9fNN.js";import"./Trapezoid-CjUP9FD5.js";import"./Sector-D2nuXpAg.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./RechartsHookInspector-xuUFm4Np.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
