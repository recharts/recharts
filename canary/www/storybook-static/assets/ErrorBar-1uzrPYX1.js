import{j as r}from"./jsx-runtime-CGGIlVrh.js";import{useMDXComponents as n}from"./index-CxR1yGJD.js";import{M as s,C as a,a as p}from"./blocks-C_ydeIi5.js";import{C as l,A as i}from"./ErrorBar.stories-DHfvBgIQ.js";import"./iframe-E6stEF2S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_N7o97v.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dcz7wHfv.js";import"./Layer-BegbPFb9.js";import"./resolveDefaultProps-DpBS-wta.js";import"./ErrorBarContext-C4-NhtXv.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./arrayEqualityCheck-CwuTMurj.js";import"./PolarUtils-BcxrLtWd.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./CSSTransitionAnimate-AceoPSRf.js";import"./useAnimationId-jacrtTCV.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./ScatterChart-Bw0wSJyB.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./CartesianGrid-S_-5ZoSZ.js";import"./CartesianAxis-Ji6qmxj-.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./Label-rhvib36b.js";import"./types-FSWLiQQw.js";import"./XAxis-Bwrfz7AR.js";import"./YAxis-ChoODXTv.js";import"./Scatter-jQH9Fj6t.js";import"./ReactUtils-ofTPTzz1.js";import"./Curve-CjjQKwtg.js";import"./tooltipContext-Cla1oypE.js";import"./Symbols-BofiGE9Z.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJCClTE6.js";import"./Trapezoid-BRnSAzjS.js";import"./Sector-DQ6bsa91.js";import"./GraphicalItemClipPath-D7GqE0xr.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./RechartsHookInspector-DWDZSsYq.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
