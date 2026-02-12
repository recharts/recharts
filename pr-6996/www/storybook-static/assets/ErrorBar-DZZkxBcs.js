import{j as r}from"./jsx-runtime-CrkQxqAn.js";import{useMDXComponents as n}from"./index-DncpvWVE.js";import{M as s,C as a,a as p}from"./blocks-CDWtPyZr.js";import{C as l,A as i}from"./ErrorBar.stories-CFhZLk-Q.js";import"./iframe-Qw1xV4gr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwnoBx2f.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEE_vVA1.js";import"./Layer-CkwgDlKc.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./ErrorBarContext-JD7QlRlS.js";import"./RechartsWrapper-T9NKaIls.js";import"./arrayEqualityCheck-D10Koezk.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./RegisterGraphicalItemId-OUWj4Tar.js";import"./CSSTransitionAnimate-C4RwfKid.js";import"./useAnimationId-CmKwPH-s.js";import"./ZIndexLayer-E7tGttad.js";import"./ScatterChart-BwRfU7_s.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./CartesianGrid-BN7mOFms.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CBWX_4iF.js";import"./YAxis-C_ExxpTj.js";import"./Scatter-BcHgPndy.js";import"./ReactUtils-NyMdEGMN.js";import"./Curve-BAYVpCYt.js";import"./tooltipContext-DoIMhh9S.js";import"./Symbols-CO8nxrkO.js";import"./ActiveShapeUtils-dC2_TVxn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-sthHTnfU.js";import"./Trapezoid-q5W18TEo.js";import"./Sector-KkZnhZNR.js";import"./GraphicalItemClipPath-CmAyPo3v.js";import"./SetGraphicalItem-BrmdzJxe.js";import"./RechartsHookInspector-D6S_l26T.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
