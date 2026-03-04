import{j as r}from"./jsx-runtime-DKI3G6lV.js";import{useMDXComponents as n}from"./index-Bb5WoCM6.js";import{M as p,C as s,a}from"./blocks-D38Oq2Ps.js";import{C as m,A as i}from"./ErrorBar.stories-DhqUx4v-.js";import"./iframe-BOKMyF_X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C_V29KK9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-vsI8Gpwn.js";import"./Layer-jqqI8J4h.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./ErrorBarContext-hDWWdNkc.js";import"./RechartsWrapper-BbOfJK_v.js";import"./arrayEqualityCheck-CqOdBUpx.js";import"./immer-BWwXhaAr.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DyqnJuAH.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./CSSTransitionAnimate-CXbdNSPW.js";import"./useAnimationId-CQeaLNgU.js";import"./ZIndexLayer-BPVGtKRn.js";import"./ScatterChart-DOT1IcTJ.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./CartesianGrid-CODw85-L.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CZEffDuF.js";import"./YAxis-CBNt9JSX.js";import"./Scatter-oTA4YchH.js";import"./ReactUtils-D8BtYMdD.js";import"./Curve-B4PvFjai.js";import"./step-CSZdFR4k.js";import"./tooltipContext-BBzuwH_s.js";import"./Symbols-Bgq4WsjW.js";import"./symbol-BbSh3W4q.js";import"./ActiveShapeUtils-B0yU484R.js";import"./isPlainObject-DIE9lg5n.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DaPP8vxp.js";import"./Trapezoid-Ckkc98J5.js";import"./Sector-DFBFkrCL.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./RechartsHookInspector-CyXtWZCT.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
