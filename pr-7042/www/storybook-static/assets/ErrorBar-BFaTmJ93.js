import{j as r}from"./jsx-runtime-DeqqtUII.js";import{useMDXComponents as n}from"./index-Dkb3RFkV.js";import{M as p,C as s,a}from"./blocks-BvXXpAXl.js";import{C as m,A as i}from"./ErrorBar.stories-OxI2zTWW.js";import"./iframe-Dic5b5u9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-G3yyNK.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D7xfvGfd.js";import"./Layer--MXbGqBf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./ErrorBarContext-BCjIHby4.js";import"./RechartsWrapper-BwcAc9rH.js";import"./arrayEqualityCheck-CfNiUq5T.js";import"./immer-DO_1p9A2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BBLbjH9O.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./d3-scale-CJF7DMMB.js";import"./zIndexSlice-c2vW1fTY.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./CSSTransitionAnimate-dYyO04eu.js";import"./useAnimationId-BHBeabuo.js";import"./ZIndexLayer-Du88RvFA.js";import"./ScatterChart-Dm3ExG8b.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./CartesianGrid-D6ulWQP1.js";import"./CartesianAxis-rhfOp6jM.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./Label-XiLbdVhV.js";import"./types-MaB3S0wV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DwuUVeKv.js";import"./YAxis-B6y0Pw6u.js";import"./Scatter-Bqp6C57K.js";import"./ReactUtils-C3t93VlX.js";import"./Curve-C8vpU7Np.js";import"./step-CGWB_5kj.js";import"./tooltipContext-BCIFIRU3.js";import"./Symbols-Dq5eEVdj.js";import"./symbol-DYOCtDcg.js";import"./ActiveShapeUtils-Bfxy2ZjA.js";import"./isPlainObject-DFOBG5y0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-Toc0UH.js";import"./Trapezoid-BhSV_XOS.js";import"./Sector-Dn12wzOD.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./RechartsHookInspector-BvAm56d5.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
