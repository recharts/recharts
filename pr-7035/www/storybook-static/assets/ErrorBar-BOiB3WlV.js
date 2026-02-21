import{j as r}from"./jsx-runtime-FdTZ51Cg.js";import{useMDXComponents as n}from"./index-B8odwAAj.js";import{M as p,C as s,a}from"./blocks-CsN3vRpC.js";import{C as m,A as i}from"./ErrorBar.stories-DkTgJYLu.js";import"./iframe-BJOlw-Op.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9yuPKYy.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B8CSBDn5.js";import"./Layer-BBwqN8Jm.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./ErrorBarContext-DQMcR9jZ.js";import"./RechartsWrapper-BHn8DA_q.js";import"./arrayEqualityCheck-DnusCzBD.js";import"./immer-DfiRd44R.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Qcq4P_Nt.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./d3-scale-DYbsxYoA.js";import"./zIndexSlice-CeiBfx4M.js";import"./renderedTicksSlice-BL6GofNb.js";import"./RegisterGraphicalItemId-Dp1CPZih.js";import"./CSSTransitionAnimate-BC1HejFR.js";import"./useAnimationId-C14qPNnG.js";import"./ZIndexLayer-DYremzN-.js";import"./ScatterChart-CIBk83Zc.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./CartesianGrid-Diy8NTCf.js";import"./CartesianAxis-Y6m8iiHs.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./Label-D8He3MwY.js";import"./types-CnF3ZZeT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-43KHVoFo.js";import"./YAxis-BPIAOwcF.js";import"./Scatter-Dmtq4Xro.js";import"./ReactUtils-BfARamF_.js";import"./Curve-pTrnSDAj.js";import"./step-DgvGX9zV.js";import"./tooltipContext-BCFBe9nx.js";import"./Symbols-rjn2Khx8.js";import"./symbol-DL0oUuW8.js";import"./ActiveShapeUtils-CbtKb807.js";import"./isPlainObject-D466DHg4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vSj0lbmg.js";import"./Trapezoid-DFU8e3Ta.js";import"./Sector-CGzr-x9r.js";import"./GraphicalItemClipPath-EzqtyZLV.js";import"./SetGraphicalItem-BPcUI2au.js";import"./RechartsHookInspector-CPO0M8Xx.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
