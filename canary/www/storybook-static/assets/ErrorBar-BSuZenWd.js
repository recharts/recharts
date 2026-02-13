import{j as r}from"./jsx-runtime-CT_lF2SA.js";import{useMDXComponents as n}from"./index-CVYGi4Lm.js";import{M as s,C as a,a as p}from"./blocks-D_XjuBLO.js";import{C as l,A as i}from"./ErrorBar.stories-BUGLLudZ.js";import"./iframe-B49GSwh0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DmOyJeTl.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CNzMysiK.js";import"./Layer-D1N02uqa.js";import"./resolveDefaultProps-C-joITAz.js";import"./ErrorBarContext-Kb4FINZU.js";import"./RechartsWrapper-csJjzcSq.js";import"./arrayEqualityCheck-DINBFxv3.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./zIndexSlice-BRDipK6V.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./CSSTransitionAnimate-cOQE4D0-.js";import"./useAnimationId-CWbWu1ju.js";import"./ZIndexLayer-BDRmqb48.js";import"./ScatterChart-DAmskEZd.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./CartesianGrid-C0HJQEi1.js";import"./CartesianAxis-hdd-vl6G.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./Label-CpKUDdzk.js";import"./types-OGa7TdGT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D-J-5rSI.js";import"./YAxis--1-yNCnR.js";import"./Scatter-BHRL6Q9y.js";import"./ReactUtils-yuOGi8sn.js";import"./Curve-D2h7ncG8.js";import"./tooltipContext-BGuZis9J.js";import"./Symbols-BhCWiDph.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./RechartsHookInspector-OdbWm_9I.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
