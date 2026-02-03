import{j as r}from"./jsx-runtime-812x3qrY.js";import{useMDXComponents as n}from"./index-Dk-7Siqm.js";import{M as s,C as a,a as p}from"./blocks-Xo8jHJUc.js";import{C as l,A as i}from"./ErrorBar.stories-rxl5KZfx.js";import"./iframe-ildNGUcB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bl4fk5Ry.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DCpBnNUd.js";import"./Layer-C1Vpqy4i.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./RechartsWrapper-BhDWMvuB.js";import"./arrayEqualityCheck-DoW--ad2.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./zIndexSlice-D5G-T-vj.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./CSSTransitionAnimate-CORyYaMC.js";import"./useAnimationId-BnV1d9M_.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./ScatterChart-B6AeLiZ_.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./CartesianGrid-BTgrJBfl.js";import"./CartesianAxis-BT55_pa3.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./Label-hP_NWlrR.js";import"./types-C_F-U0PG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BpmpMVxP.js";import"./YAxis-CynyduVr.js";import"./Scatter-CqbL--Ak.js";import"./ReactUtils-DZ7Bf0_2.js";import"./Curve-C50TS3eJ.js";import"./tooltipContext-Bpxhm3w9.js";import"./Symbols-DUzk_pf6.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./RechartsHookInspector-DjpRKvg6.js";import"./ChartSizeDimensions-DAfFC157.js";import"./OffsetShower-DLkMsMHT.js";import"./PlotAreaShower-Bhcl3vg9.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
