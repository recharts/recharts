import{j as r}from"./jsx-runtime-u_mDm9vI.js";import{useMDXComponents as n}from"./index-C-D9i3I6.js";import{M as p,C as s,a}from"./blocks-CgLfhBXE.js";import{C as m,A as i}from"./ErrorBar.stories-Dc-AR96E.js";import"./iframe-YHIi0zNq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cat5Cyt-.js";import"./utils-ePvtT4un.js";import"./ErrorBar-3jP64dN3.js";import"./Layer-xP0kyya2.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./ErrorBarContext-CYNYOD56.js";import"./RechartsWrapper-o-AfycQs.js";import"./arrayEqualityCheck-CiMVM-SL.js";import"./immer-D_GJadju.js";import"./PolarUtils-CTnnDHZv.js";import"./index-u4istH96.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./zIndexSlice-DeqvswTX.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./CSSTransitionAnimate-CsiKhvFO.js";import"./useAnimationId-ZghgqyXB.js";import"./ZIndexLayer-ntDhn9GI.js";import"./ScatterChart-yupXhQTV.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./CartesianGrid-By76E-K9.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-kqqXeMbl.js";import"./YAxis-EBaaYeoG.js";import"./Scatter-CXXHua0y.js";import"./ReactUtils-HN0dEhAf.js";import"./Curve-fcCSfps7.js";import"./step-ByfP7lrq.js";import"./tooltipContext-CJg7C4G4.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";import"./ActiveShapeUtils-BKfvV8h2.js";import"./isPlainObject-GBUylHQy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtRVLgVP.js";import"./Trapezoid-CkRbYMAh.js";import"./Sector-BgEwi5iM.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./RechartsHookInspector-Cdc_RxXj.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
