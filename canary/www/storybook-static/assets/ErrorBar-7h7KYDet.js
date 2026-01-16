import{j as r}from"./jsx-runtime-CE59Kb_w.js";import{useMDXComponents as n}from"./index-CCmrgqIV.js";import{M as s,C as a,a as p}from"./blocks-IJEeR0SA.js";import{C as l,A as i}from"./ErrorBar.stories-DDHRAjpv.js";import"./iframe-BhN7WL5Z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AX7IXW21.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BH0aEQqM.js";import"./Layer-CfPqbk4S.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./ErrorBarContext-CR9IxJro.js";import"./RechartsWrapper-ngVbXQIL.js";import"./arrayEqualityCheck-D4vVSxnz.js";import"./PolarUtils-DA1Z2LDM.js";import"./hooks-EmXHGT5T.js";import"./axisSelectors-BCCMRHlB.js";import"./zIndexSlice-wy9BZePe.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./CSSTransitionAnimate-LVrNR2mE.js";import"./useAnimationId-BWf0K4Q5.js";import"./ZIndexLayer-C8mR-iMG.js";import"./ScatterChart-Bc0xxWyg.js";import"./CartesianChart-DIFYt1Ja.js";import"./chartDataContext-Dmy6E_I7.js";import"./CategoricalChart-BDJKnV04.js";import"./CartesianGrid-BaKHie_g.js";import"./CartesianAxis-CsSTEuVM.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./Label-DbCyuY2T.js";import"./types-D2HNEHHU.js";import"./XAxis-BkxM2U5C.js";import"./YAxis-CLDqs-dP.js";import"./Scatter-Dv6I9VPe.js";import"./ReactUtils-C4jZBCSK.js";import"./Curve-BUxUFTVS.js";import"./tooltipContext-DHhd83Jr.js";import"./Symbols-BSDl9S1a.js";import"./ActiveShapeUtils-rfu0ISSo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXwR0_dr.js";import"./Trapezoid-CAfSVxJ4.js";import"./Sector-DW4oDqQS.js";import"./GraphicalItemClipPath-DtY2K5G-.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./RechartsHookInspector-DuzZFa2V.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
