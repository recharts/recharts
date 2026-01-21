import{j as r}from"./jsx-runtime-AHPPVI6T.js";import{useMDXComponents as n}from"./index-u8Dt6Z4Y.js";import{M as s,C as a,a as p}from"./blocks-FgHapuha.js";import{C as m,A as i}from"./ErrorBar.stories-Co9MdReZ.js";import"./iframe-DNZpCyoe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CZ8HrsbR.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D_5-c-C6.js";import"./Layer-CrRkJfyu.js";import"./resolveDefaultProps-2DomDO9e.js";import"./ErrorBarContext-CuMQg8zm.js";import"./RechartsWrapper-BQVorp6g.js";import"./arrayEqualityCheck-szoTsszl.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./CSSTransitionAnimate-CZ0xpynK.js";import"./useAnimationId-CRV9WByP.js";import"./ZIndexLayer-eq4dVVjm.js";import"./ScatterChart-DYwaft3X.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./CartesianGrid-Dcjh4S5F.js";import"./CartesianAxis-CbYE_e4I.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./Label-DtNzO2lD.js";import"./types-Dxz_CRdn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BWyuZPtw.js";import"./YAxis-qzfDCcGS.js";import"./Scatter-COwb99ar.js";import"./ReactUtils-DE6T7IjU.js";import"./Curve-CA7wgxde.js";import"./tooltipContext-DBHawIRO.js";import"./Symbols-D3jTalrW.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./RechartsHookInspector-PStiuiJe.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
