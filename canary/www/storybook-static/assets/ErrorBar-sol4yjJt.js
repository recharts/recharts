import{j as r}from"./jsx-runtime-DhGAD-8G.js";import{useMDXComponents as n}from"./index-BczxCEij.js";import{M as s,C as a,a as p}from"./blocks-BQ3PvKtl.js";import{C as l,A as i}from"./ErrorBar.stories-1HzAGrHQ.js";import"./iframe-DDDJQB5W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BliyNw2M.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C6jt1Smp.js";import"./Layer-VwKMwUPk.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./ErrorBarContext-Ds9eksq1.js";import"./RechartsWrapper-DdXQ715_.js";import"./arrayEqualityCheck-D0Xb1fN2.js";import"./PolarUtils-t5VCEmBY.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./zIndexSlice-rPTjsX-n.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./CSSTransitionAnimate-uleGCdb4.js";import"./useAnimationId-C8z7_GYR.js";import"./ZIndexLayer-DbViNaNl.js";import"./ScatterChart-C2NRembV.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./CartesianGrid-jc_ttR56.js";import"./CartesianAxis-CkTm5RK2.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./Label-vsQtY8U6.js";import"./types-CGHtFgCy.js";import"./XAxis-wieUEhCR.js";import"./YAxis-5_ZrD8qJ.js";import"./Scatter-Bjg4-rHZ.js";import"./ReactUtils-DAfUDxZJ.js";import"./Curve-zMorL5Ul.js";import"./tooltipContext-DL1Jhu1K.js";import"./Symbols-ykgg1Owr.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMimnTgv.js";import"./Trapezoid-DCDgebWC.js";import"./Sector-DoveBBFo.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./RechartsHookInspector-UcMzq5oF.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
