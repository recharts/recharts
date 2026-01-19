import{j as r}from"./jsx-runtime-BzLQj0rQ.js";import{useMDXComponents as n}from"./index-CpVzUgH2.js";import{M as s,C as a,a as p}from"./blocks-D7wU49kb.js";import{C as l,A as i}from"./ErrorBar.stories-DK6eCBJM.js";import"./iframe-C1zBrMCd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7UfPOGu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DMQzgrdk.js";import"./Layer-D3PE35Mq.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./ErrorBarContext-KwhhmAaQ.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./arrayEqualityCheck-Df8r3poz.js";import"./PolarUtils-_NKSevVn.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./CSSTransitionAnimate-y_Ajwimo.js";import"./useAnimationId-D3t9NmUg.js";import"./ZIndexLayer-BetO650l.js";import"./ScatterChart-B8ST8VEd.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./CartesianGrid-CcFLJXfP.js";import"./CartesianAxis-DF9he0a4.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./Label-6nnLE5h5.js";import"./types-HpBDQdg7.js";import"./XAxis-DU1SAysF.js";import"./YAxis-Bcx80oq7.js";import"./Scatter-GS3KqXqH.js";import"./ReactUtils-D752dz6O.js";import"./Curve-BNkJ4mrR.js";import"./tooltipContext-Bo3nAzCj.js";import"./Symbols-PCV2wn4X.js";import"./ActiveShapeUtils-CdNQy3O6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhdzWbEl.js";import"./Trapezoid-D2TjGKOo.js";import"./Sector-w-WfrIQ8.js";import"./GraphicalItemClipPath-M-I7Ebzy.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./RechartsHookInspector-BISA2G0k.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
