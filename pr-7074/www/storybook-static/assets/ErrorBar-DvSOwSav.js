import{j as r}from"./jsx-runtime-BaV326DK.js";import{useMDXComponents as n}from"./index-FfK1bz-H.js";import{M as p,C as s,a}from"./blocks-BbPpjt9v.js";import{C as m,A as i}from"./ErrorBar.stories-C3DzZjPQ.js";import"./iframe-DhkZ2o0m.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CflVzEfn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-GWTnvYtE.js";import"./Layer-d6_qX3Uw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CSGl7VrG.js";import"./ErrorBarContext-e2M7C2yw.js";import"./RechartsWrapper-CmxS5fzr.js";import"./arrayEqualityCheck-DiorVL0F.js";import"./immer-Bkx33mOQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-SD_aaOBA.js";import"./hooks-OILl07sr.js";import"./axisSelectors-Cvg0ebzb.js";import"./d3-scale-q2jyLF3t.js";import"./zIndexSlice-DaOHrDE6.js";import"./renderedTicksSlice-D1lm_SFB.js";import"./RegisterGraphicalItemId--Yyxg6pn.js";import"./CSSTransitionAnimate-Xmk77mKO.js";import"./useAnimationId-C7zWi5EW.js";import"./ZIndexLayer-CshXapoA.js";import"./ScatterChart-n65C5RwG.js";import"./CartesianChart-aiKFXcKI.js";import"./chartDataContext-B8muVvAS.js";import"./CategoricalChart-BQJMywxR.js";import"./CartesianGrid-fnsXYIZE.js";import"./CartesianAxis-Cd-ivPq_.js";import"./Text-DrfD7ZzH.js";import"./DOMUtils-qE1uPIkW.js";import"./Label-5AtDVNzN.js";import"./types-BTJpC2jO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C7MynCpy.js";import"./YAxis-BaziairH.js";import"./Scatter-D9TJd2Qq.js";import"./ReactUtils-BqOB82pn.js";import"./Curve-B6e_2wmJ.js";import"./step-BPbIkI3w.js";import"./tooltipContext-ILD7aXDO.js";import"./Symbols-BdtXuEdD.js";import"./symbol-DeXXZ1mf.js";import"./ActiveShapeUtils-BaWWvfWL.js";import"./isPlainObject-vBW-S9US.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8JV8bc4.js";import"./Trapezoid-C1XUw6XG.js";import"./Sector-8SUCxTQC.js";import"./GraphicalItemClipPath-yVVA2tQv.js";import"./SetGraphicalItem-_G_kPX0B.js";import"./RechartsHookInspector-BuoZ4ObR.js";import"./ChartSizeDimensions-lGHONQf_.js";import"./OffsetShower-DEQj44LB.js";import"./PlotAreaShower-DvHNujuQ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
