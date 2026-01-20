import{j as r}from"./jsx-runtime-XyZWG9k7.js";import{useMDXComponents as n}from"./index-DW_Hdbxa.js";import{M as s,C as a,a as p}from"./blocks-DFVe8mRF.js";import{C as l,A as i}from"./ErrorBar.stories-CYcPSeWE.js";import"./iframe-BO2lV8Fr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ci4CsAoU.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BGoj0H9j.js";import"./Layer-IoZ0rL1L.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./ErrorBarContext-BB-sopap.js";import"./RechartsWrapper-CnX2hcx7.js";import"./arrayEqualityCheck-BPZLCCv_.js";import"./PolarUtils-CZtkokJH.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./zIndexSlice-OMKiStTn.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./CSSTransitionAnimate-dEK63Zc_.js";import"./useAnimationId-B_L243Vk.js";import"./ZIndexLayer-CKe6oR6h.js";import"./ScatterChart-f0BQu5lw.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./CartesianGrid-okPqrjow.js";import"./CartesianAxis-wvny4geP.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./Label-4EeKD-N4.js";import"./types-uDYlV2go.js";import"./XAxis-n0cJUWOz.js";import"./YAxis-BHKkX64t.js";import"./Scatter-DkqakoOn.js";import"./ReactUtils-CB6ifrXE.js";import"./Curve-BbZIFp84.js";import"./tooltipContext-hiTRuGT_.js";import"./Symbols-BsRtfl74.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./RechartsHookInspector-BaEmilk5.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
