import{j as r}from"./jsx-runtime-BJ6B5s2u.js";import{useMDXComponents as n}from"./index-s2ShXhln.js";import{M as s,C as a,a as p}from"./blocks-Bn-ANO_b.js";import{C as l,A as i}from"./ErrorBar.stories-DTzDgheS.js";import"./iframe-BrTwOhsr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8XSHT_-Z.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CACN-qcI.js";import"./Layer-B-9J2nmA.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./ErrorBarContext-B6qv5CJK.js";import"./RechartsWrapper-D38DG274.js";import"./arrayEqualityCheck-CfVGBoS6.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./zIndexSlice-q9T-BB65.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./CSSTransitionAnimate-GKh1Shqb.js";import"./useAnimationId-DrcXJvRo.js";import"./ZIndexLayer-vpi4acAX.js";import"./ScatterChart-BC96Ly7o.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./CartesianGrid-CyCZ17TZ.js";import"./CartesianAxis-BnpVD6GC.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./Label-Bx9GqcNI.js";import"./types-CgBItb-S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DQVoLVBJ.js";import"./YAxis-DRNSDCDv.js";import"./Scatter-BJCX7Msk.js";import"./ReactUtils-BRgMO5-h.js";import"./Curve-CFG-wGoi.js";import"./tooltipContext-C74b5_44.js";import"./Symbols-L5mWEGXG.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./RechartsHookInspector-wr1qbxN7.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
