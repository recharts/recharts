import{j as r}from"./jsx-runtime-DqFyhSZY.js";import{useMDXComponents as n}from"./index-CqyxyU6l.js";import{M as p,C as s,a}from"./blocks-CbW8qD8n.js";import{C as m,A as i}from"./ErrorBar.stories-BGMapkZu.js";import"./iframe-DFPwKozO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKyMZNGM.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DWaj9gN4.js";import"./Layer-UW-3uLDu.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8sM-C45.js";import"./ErrorBarContext-D3fyLUw8.js";import"./RechartsWrapper-CjOfOtkl.js";import"./arrayEqualityCheck-BO0FMWsB.js";import"./immer-Cq-7IBeQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BM-iP6jK.js";import"./hooks-bta4c9FS.js";import"./axisSelectors-Fye4v2An.js";import"./d3-scale-DC5SBv4a.js";import"./zIndexSlice-uamkKpnq.js";import"./renderedTicksSlice-BKeP3MvG.js";import"./RegisterGraphicalItemId-ISC1Bh-u.js";import"./CSSTransitionAnimate-C7A18PEA.js";import"./useAnimationId-DMMdhd1b.js";import"./ZIndexLayer-DyDzR_iO.js";import"./ScatterChart-DcuqfaXJ.js";import"./CartesianChart-Dzwf7i_k.js";import"./chartDataContext-o1PhfYVG.js";import"./CategoricalChart-B84p6B_R.js";import"./CartesianGrid-B_s_8s8s.js";import"./CartesianAxis-BRd4GQUv.js";import"./Text-BuTP6JNp.js";import"./DOMUtils-XVY0zsXA.js";import"./Label-BfeOO_bU.js";import"./types-DHDJ8gyd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DB5s1uQK.js";import"./YAxis-D_B66qKF.js";import"./Scatter-CUWnYcXk.js";import"./ReactUtils-iN1uHd88.js";import"./Curve-Cr2jXmDN.js";import"./step-CD2gspfu.js";import"./tooltipContext-nePS0eA6.js";import"./Symbols-GcyqxXm3.js";import"./symbol-DJv_b8-d.js";import"./ActiveShapeUtils-CntxH9-T.js";import"./isPlainObject-GWG2LZr9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Atcro-mi.js";import"./Trapezoid-DlIOBrOD.js";import"./Sector-UE1_Ib6K.js";import"./GraphicalItemClipPath-CH9onNSH.js";import"./SetGraphicalItem-D8F49Ifw.js";import"./RechartsHookInspector-y9SAwPh-.js";import"./ChartSizeDimensions-tYevmH5B.js";import"./OffsetShower-CuJwjf0e.js";import"./PlotAreaShower-CheWi7Y7.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
