import{j as r}from"./jsx-runtime-BnDz5crv.js";import{useMDXComponents as n}from"./index-ChPpGA8l.js";import{M as s,C as a,a as p}from"./blocks-CKWt7aYM.js";import{C as l,A as i}from"./ErrorBar.stories-E4UDw35H.js";import"./iframe-CtEwCT9X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wj7KHo_g.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CDNhaK_4.js";import"./Layer-BNdxATQx.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./ErrorBarContext-G6eCMKH6.js";import"./RechartsWrapper-AnHxT7w4.js";import"./arrayEqualityCheck-H3JWu4Kp.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./CSSTransitionAnimate-Bsp6-cJv.js";import"./useAnimationId-DKUOkxb7.js";import"./ZIndexLayer-BGiHPSQp.js";import"./ScatterChart-SXG1p3Gp.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./CartesianGrid-B-PS9MdK.js";import"./CartesianAxis-CVBmqBFQ.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./Label-4VfWqw9i.js";import"./types-BlQIDijQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dyu1KvxF.js";import"./YAxis-KCRp4wE3.js";import"./Scatter-btml2muk.js";import"./ReactUtils-BjGJq1or.js";import"./Curve-CYu7zDaL.js";import"./tooltipContext-B6fZsSyh.js";import"./Symbols-DsTuGPc2.js";import"./ActiveShapeUtils-BcU5bshf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpE70r4e.js";import"./Trapezoid-DBpBN19V.js";import"./Sector-Do1ff_IB.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./RechartsHookInspector-DzvPF_wD.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
