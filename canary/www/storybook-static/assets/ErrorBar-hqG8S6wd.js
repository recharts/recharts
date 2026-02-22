import{j as r}from"./jsx-runtime-BH75SPlg.js";import{useMDXComponents as n}from"./index-pQKrvNJQ.js";import{M as p,C as s,a}from"./blocks-qy_MJTkf.js";import{C as m,A as i}from"./ErrorBar.stories-aA6RrlSt.js";import"./iframe-C2QqRKe7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnZqoCYA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-bHpKSXuA.js";import"./Layer-DCLj2Osy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./ErrorBarContext-C3fSByYS.js";import"./RechartsWrapper-uOO6_n61.js";import"./arrayEqualityCheck-PWQDmerQ.js";import"./immer-CHIvT254.js";import"./PolarUtils-CTnnDHZv.js";import"./index-rLwxE0hv.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./CSSTransitionAnimate-BV2zSZG1.js";import"./useAnimationId-Bi88RhdV.js";import"./ZIndexLayer-DIR-sv8W.js";import"./ScatterChart-iSEwF621.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./CartesianGrid-D-1j0FVM.js";import"./CartesianAxis-se2SzLtu.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./Label-s7jamoYW.js";import"./types-DlfTkI4e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DNcvFPfK.js";import"./YAxis-21rUvSzF.js";import"./Scatter-DaBYs8tm.js";import"./ReactUtils-D05HJqIj.js";import"./Curve-CBR7IDRo.js";import"./step--bjVkvqq.js";import"./tooltipContext-DGqI9VgG.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./ActiveShapeUtils-CkOZGg75.js";import"./isPlainObject-DLKiFJlX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOyb4uG2.js";import"./Trapezoid-Dk1NLMTJ.js";import"./Sector-BVmDGxYU.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./RechartsHookInspector-CgITLFRP.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
