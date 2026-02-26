import{j as r}from"./jsx-runtime-BuEKlqPC.js";import{useMDXComponents as n}from"./index-CKyAUV7-.js";import{M as p,C as s,a}from"./blocks-B2lQytM2.js";import{C as m,A as i}from"./ErrorBar.stories-hWC1D0so.js";import"./iframe-CIxNp6W3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEgQsKlh.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CSfBQgc1.js";import"./Layer-Bp29xhoh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./ErrorBarContext-Dko46g4M.js";import"./RechartsWrapper-CnQHtrMt.js";import"./arrayEqualityCheck-ZcVH4_uJ.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./CSSTransitionAnimate-yBejQ4nE.js";import"./useAnimationId-BJAtAhRd.js";import"./ZIndexLayer-DPYjXPVc.js";import"./ScatterChart-Be20Skb7.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./CartesianGrid-Bwn46UyA.js";import"./CartesianAxis-vyecr7Hl.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./Label-DM_zt9zM.js";import"./types-D88TaevE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DSbNXcpO.js";import"./YAxis-Dt9ZpeSD.js";import"./Scatter-Cyfgeshd.js";import"./ReactUtils-CD81hbcy.js";import"./Curve-CcclPR5V.js";import"./step-CuAsm7Fe.js";import"./tooltipContext-BltSJ5jf.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDKHqCIu.js";import"./Trapezoid-BynO58oQ.js";import"./Sector-NGTsm_Cr.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./RechartsHookInspector-B8l4NQFC.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
