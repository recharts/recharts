import{j as r}from"./jsx-runtime-kRRnGuJy.js";import{useMDXComponents as n}from"./index-C6CHNYeW.js";import{M as p,C as s,a}from"./blocks-CTMnnv2K.js";import{C as m,A as i}from"./ErrorBar.stories-qTBDltSz.js";import"./iframe-I81QGiZ0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DG9lLNBE.js";import"./utils-ePvtT4un.js";import"./ErrorBar-rv8ENnQt.js";import"./Layer-nQYqqIOO.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CESK2sOz.js";import"./ErrorBarContext-6fNIAsL2.js";import"./RechartsWrapper-DhPN24j4.js";import"./arrayEqualityCheck-DEF1A1K9.js";import"./immer-Bx-m2dTE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-MTHTVMV2.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./CSSTransitionAnimate-bxyYb83x.js";import"./useAnimationId-BTiaxNBH.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./ScatterChart-B9036uhD.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./CartesianGrid-D0gWY7Nf.js";import"./CartesianAxis-B00ihn4w.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CQKq-ex8.js";import"./YAxis-w5mY6Ink.js";import"./Scatter-BlG6CDEj.js";import"./ReactUtils-bl8BpOYM.js";import"./Curve-COcp6alG.js";import"./step-DCb-mqT3.js";import"./tooltipContext-BkxoPcwr.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSAz1yWp.js";import"./Trapezoid-BCwQCoIH.js";import"./Sector-CEDvP0Pt.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./RechartsHookInspector-CY8GaMGS.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
