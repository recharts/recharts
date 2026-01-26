import{j as r}from"./jsx-runtime-DoNBrXlS.js";import{useMDXComponents as n}from"./index-D_QnqnjR.js";import{M as s,C as a,a as p}from"./blocks-DrsSeHfZ.js";import{C as m,A as i}from"./ErrorBar.stories-qcDzuL3a.js";import"./iframe-BfI_ST9A.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ChuKY9XN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DmrS4iDC.js";import"./Layer-Y7LjbTmX.js";import"./resolveDefaultProps-AaslCT8i.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./arrayEqualityCheck-Dpn6Yh1q.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./zIndexSlice-DXwF7pA6.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./CSSTransitionAnimate-izbLRLFV.js";import"./useAnimationId-COKmXqbi.js";import"./ZIndexLayer-BqmPWyE4.js";import"./ScatterChart-CJv63DdJ.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./CartesianGrid-B6zMTXDB.js";import"./CartesianAxis-DmSsZovB.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./Label-bNYHk-eM.js";import"./types-C63RoX8s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BmtgQOLB.js";import"./YAxis-DTgMZjXd.js";import"./Scatter-DvV2hhP8.js";import"./ReactUtils-DCNpXtNn.js";import"./Curve-CQI60C70.js";import"./tooltipContext-Cb6TcB2g.js";import"./Symbols-BZnP9syB.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./RechartsHookInspector-CVEQV9do.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
