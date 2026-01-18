import{j as r}from"./jsx-runtime-8P-vzkt7.js";import{useMDXComponents as n}from"./index-YAVYFRPA.js";import{M as s,C as a,a as p}from"./blocks-D0bWNpAL.js";import{C as l,A as i}from"./ErrorBar.stories-CEbqB5NW.js";import"./iframe-Bn_7jga7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wlSGh2Q3.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C71GglZW.js";import"./Layer-COTxk2h3.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./ErrorBarContext-D9hbJwiU.js";import"./RechartsWrapper-DSmS8nVp.js";import"./arrayEqualityCheck-CSuBYCWj.js";import"./PolarUtils-CBWSHxoJ.js";import"./hooks-BL6pVXml.js";import"./axisSelectors-B3n8BDRj.js";import"./zIndexSlice-usP7cHtF.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./CSSTransitionAnimate-C3wG8KgZ.js";import"./useAnimationId-id_mTj1h.js";import"./ZIndexLayer-BXCJNtZK.js";import"./ScatterChart-JRTAbdcv.js";import"./CartesianChart-CFgpMI4e.js";import"./chartDataContext-CGN_dwZ0.js";import"./CategoricalChart-C3CVYlbu.js";import"./CartesianGrid-Bjka6DH2.js";import"./CartesianAxis-5Tz-WD7f.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./Label-CS-Zhu5a.js";import"./types-SXh4X6nB.js";import"./XAxis-CkQlFxje.js";import"./YAxis-C7ibSyRg.js";import"./Scatter-BO0afSDi.js";import"./ReactUtils-GlbSvDIy.js";import"./Curve-qns-9S5i.js";import"./tooltipContext-BkkKQoXo.js";import"./Symbols-DCEXw1ah.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./Trapezoid-BCX-j7xi.js";import"./Sector-CuwRjw3S.js";import"./GraphicalItemClipPath-ECv6yN9n.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./RechartsHookInspector-B4H5Lyo-.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
