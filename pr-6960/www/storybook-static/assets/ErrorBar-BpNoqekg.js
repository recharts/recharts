import{j as r}from"./jsx-runtime-hP-D5ck4.js";import{useMDXComponents as n}from"./index-CFC5d23H.js";import{M as s,C as a,a as p}from"./blocks-ObZz90BW.js";import{C as l,A as i}from"./ErrorBar.stories-KqCDVzQU.js";import"./iframe-CWWhV85a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1_XwddF_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C4x2aZ_Z.js";import"./Layer-CEGJXWpg.js";import"./resolveDefaultProps-C1e51uNd.js";import"./ErrorBarContext-BiKvJSsP.js";import"./RechartsWrapper-B76lvk5b.js";import"./arrayEqualityCheck-BrvYjDvj.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./CSSTransitionAnimate-Cs1Gg-NI.js";import"./useAnimationId--U2HKBmo.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./ScatterChart-J80AWyIo.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./CartesianGrid-C3-6Xyui.js";import"./CartesianAxis-BLwbg9OG.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./Label-sj2OS_tg.js";import"./types-HO0i5iTi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Csdvagzn.js";import"./YAxis-DfgzXKJt.js";import"./Scatter-Dy60YYiF.js";import"./ReactUtils-erR6fuGc.js";import"./Curve-CEhuq5Wz.js";import"./tooltipContext-BFGNKkU0.js";import"./Symbols-D5GFnflg.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgoKSUUy.js";import"./Trapezoid-CadbmzeJ.js";import"./Sector-CjkT0xYm.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./RechartsHookInspector-C1-BzxNv.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
