import{j as r}from"./jsx-runtime-cSc29jOf.js";import{useMDXComponents as n}from"./index-jOji8zuM.js";import{M as s,C as a,a as p}from"./blocks-DYkow_yi.js";import{C as l,A as i}from"./ErrorBar.stories-DcLlf2oR.js";import"./iframe-CTxRHOGj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-HMl1pmjv.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bxgv85Bw.js";import"./Layer-NDmuZa_H.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./ErrorBarContext-D1j-EPSf.js";import"./RechartsWrapper-B2RXwXeU.js";import"./arrayEqualityCheck-B_rRIojj.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./CSSTransitionAnimate-BDeXB9jE.js";import"./useAnimationId-BmKrhVKp.js";import"./ZIndexLayer-hZNMFSqY.js";import"./ScatterChart-Bm3D9n3z.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./CartesianGrid-BpC0r6wr.js";import"./CartesianAxis-BedncvxG.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./Label-D926DJYr.js";import"./types-CAlg1Faj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BNIlZlch.js";import"./YAxis-D6e6Qj3m.js";import"./Scatter-DsPHFwB4.js";import"./ReactUtils-BZY6277w.js";import"./Curve-Dmxl7Q3I.js";import"./tooltipContext-DXRTN6s2.js";import"./Symbols-BBka0yme.js";import"./ActiveShapeUtils-Dwyol1Bt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxJQxHPh.js";import"./Trapezoid-VAjw1k5b.js";import"./Sector-DQFWjz1_.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./RechartsHookInspector-Dvolm171.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
