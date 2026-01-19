import{j as r}from"./jsx-runtime-C-frbG8c.js";import{useMDXComponents as n}from"./index-DmjFt5GR.js";import{M as s,C as a,a as p}from"./blocks-OPavV_Ph.js";import{C as l,A as i}from"./ErrorBar.stories-VIxim-Ei.js";import"./iframe-CYxrfzzg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DoBieDfB.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BhYUPf9R.js";import"./Layer-2CuCTQZP.js";import"./resolveDefaultProps-BKLgGEJu.js";import"./ErrorBarContext-fxacjPOS.js";import"./RechartsWrapper-BZIHJFZl.js";import"./arrayEqualityCheck-DP0kYLs9.js";import"./PolarUtils-DvrgzDo3.js";import"./hooks-D7sBhVDC.js";import"./axisSelectors-tnzCSBUQ.js";import"./zIndexSlice-BSioTKNu.js";import"./RegisterGraphicalItemId-C3n7rMAE.js";import"./CSSTransitionAnimate-CmQG4e-Y.js";import"./useAnimationId-CUiISCsF.js";import"./ZIndexLayer-C2lFhuDH.js";import"./ScatterChart-C33n0XWA.js";import"./CartesianChart-IXi_xLkG.js";import"./chartDataContext-CfwPSU5Z.js";import"./CategoricalChart-SSUATRMB.js";import"./CartesianGrid-DD_pLZGb.js";import"./CartesianAxis-nwRWnCEW.js";import"./Text-DTTsbVV0.js";import"./DOMUtils-DHZkznbd.js";import"./Label-CODmrKP6.js";import"./types-VzENM0tL.js";import"./XAxis-Dmnl9BhD.js";import"./YAxis-BTS_JFed.js";import"./Scatter-H9ArdF72.js";import"./ReactUtils-BBB3MvZm.js";import"./Curve-BNAJs-1X.js";import"./tooltipContext-Ir0EVXeq.js";import"./Symbols-BD1jJmy1.js";import"./ActiveShapeUtils-DyLP3gGN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_ysU7C8.js";import"./Trapezoid-B1yeBwPe.js";import"./Sector-BlYN7QdB.js";import"./GraphicalItemClipPath-CBtigOwz.js";import"./SetGraphicalItem-DBWDI1yN.js";import"./RechartsHookInspector-CKj7z6NA.js";import"./ChartSizeDimensions-HwMCl-rE.js";import"./OffsetShower-B_S1QpU_.js";import"./PlotAreaShower-CbgSdBZD.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
