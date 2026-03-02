import{j as r}from"./jsx-runtime-DukYp7aB.js";import{useMDXComponents as n}from"./index-DI8EVUzf.js";import{M as p,C as s,a}from"./blocks-Bhtia3U0.js";import{C as m,A as i}from"./ErrorBar.stories-BsBgTdvr.js";import"./iframe-XFn8o3qI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BCvGM1bQ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-_UfAbOEu.js";import"./Layer-DCadlIaL.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./ErrorBarContext-BybKQWHl.js";import"./RechartsWrapper-Bqol093Z.js";import"./arrayEqualityCheck-DoWZ8Al-.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./CSSTransitionAnimate-DK3_BX4k.js";import"./useAnimationId-DlDP6-K6.js";import"./ZIndexLayer-DWBavU2w.js";import"./ScatterChart-BnnDZkO8.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./CartesianGrid-WQDXrRHE.js";import"./CartesianAxis-j4wY0iFh.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./Label-BlYwY5-1.js";import"./types-Bj0G5aQF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-wsJSxX26.js";import"./YAxis-DlNOg73C.js";import"./Scatter-D5Hn32cH.js";import"./ReactUtils-B41U7gki.js";import"./Curve-C3P9kzpN.js";import"./step-DeRmKfqt.js";import"./tooltipContext-ZAGbgBUG.js";import"./Symbols-zbF4VeV5.js";import"./symbol-D6QfEsFp.js";import"./ActiveShapeUtils-MPa98qw4.js";import"./isPlainObject-CuZzfPHd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kXtUPCc6.js";import"./Trapezoid-CWabxdPa.js";import"./Sector-DJqtk5y0.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./RechartsHookInspector-D90IXMov.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
