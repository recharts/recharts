import{j as r}from"./jsx-runtime-B-jYdhI6.js";import{useMDXComponents as n}from"./index-CYAXT5m5.js";import{M as p,C as s,a}from"./blocks-BD3wXhHJ.js";import{C as m,A as i}from"./ErrorBar.stories-luyCzZ9B.js";import"./iframe-BMiRdtzi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxIeWHLt.js";import"./utils-ePvtT4un.js";import"./ErrorBar-XC18ftIV.js";import"./Layer-D9Oz3zOW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./ErrorBarContext-CzWKH65H.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./arrayEqualityCheck-Da9FQhP8.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./CSSTransitionAnimate-WoZivmPm.js";import"./useAnimationId-5Oa7E8I_.js";import"./ZIndexLayer-BSi_oIk9.js";import"./ScatterChart-A6FmZgvp.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./CartesianGrid-CM8CSWoO.js";import"./CartesianAxis-B9OgjJ9q.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./Label-BNGz4hpX.js";import"./types-nLF0_SAW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-zYIEy4Nj.js";import"./YAxis-4AjIhGFV.js";import"./Scatter-Bi5SlX-d.js";import"./ReactUtils-f9rIQTZx.js";import"./Curve-B8D8lFuj.js";import"./step-BA38JlTy.js";import"./tooltipContext-DA92YycH.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./RechartsHookInspector-PXISS_9s.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
