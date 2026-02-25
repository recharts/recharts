import{j as r}from"./jsx-runtime-fB_eToSq.js";import{useMDXComponents as n}from"./index-De3HA9Qs.js";import{M as p,C as s,a}from"./blocks-Ckd7waD1.js";import{C as m,A as i}from"./ErrorBar.stories-4-5LctzK.js";import"./iframe-BxnpLNlI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D27xip60.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dshfhnbu.js";import"./Layer-CjPvoy9w.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-znjuu04v.js";import"./ErrorBarContext-BbpRKECp.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./arrayEqualityCheck-Ev4pEcaj.js";import"./immer-BkCi42RL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-b30Cmp9V.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./zIndexSlice--EK8Um__.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./CSSTransitionAnimate-pXFPelBA.js";import"./useAnimationId-BkMfgj6S.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./ScatterChart-6-6MjpjF.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./CartesianGrid-CF0QmcFA.js";import"./CartesianAxis-xelplfqC.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./Label-BJJgujul.js";import"./types-gZ1RVbMB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DivYk73O.js";import"./YAxis-N3Hr219E.js";import"./Scatter-BHYzutoE.js";import"./ReactUtils-BdNEbP_1.js";import"./Curve-Cd2m7ztB.js";import"./step-ClrTL6ck.js";import"./tooltipContext-SqfwDtSJ.js";import"./Symbols-7Di5jhUy.js";import"./symbol-CNSHwdEE.js";import"./ActiveShapeUtils-BFvjG2KX.js";import"./isPlainObject-B1iN99vF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvUDBcr-.js";import"./Trapezoid-BVhmBeys.js";import"./Sector-B9qkET69.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./RechartsHookInspector-BB1lEmoR.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./OffsetShower-tOvUkh5S.js";import"./PlotAreaShower-IShq8O5s.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
