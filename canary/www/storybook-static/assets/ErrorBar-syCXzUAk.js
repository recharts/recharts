import{j as r}from"./jsx-runtime-I9L8lrv5.js";import{useMDXComponents as n}from"./index-08dGANYb.js";import{M as s,C as a,a as p}from"./blocks-B7jlDFe9.js";import{C as m,A as i}from"./ErrorBar.stories-Dnr1Gdxm.js";import"./iframe-DwqRYk2I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B__3XDnp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DScvSoJL.js";import"./Layer-CKGvS6fh.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./ErrorBarContext-DWBN2nFH.js";import"./RechartsWrapper-C7VpHEZH.js";import"./arrayEqualityCheck-DgzFlSOI.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./CSSTransitionAnimate-B0KfdiCI.js";import"./useAnimationId-BgtwKRIK.js";import"./ZIndexLayer-14WaUFCY.js";import"./ScatterChart-CLuivfM3.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./CartesianGrid-CsOMLjge.js";import"./CartesianAxis-0yio1lEn.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./Label-BBrY7asM.js";import"./types-DQBQm6yM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Cyh_YOcY.js";import"./YAxis-QYWka3EJ.js";import"./Scatter-0mIHd5IA.js";import"./ReactUtils-CSQ_QEna.js";import"./Curve-MGg7iv1Z.js";import"./tooltipContext-D4tYLNyP.js";import"./Symbols--4uQfBg4.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./RechartsHookInspector-DYt25tbN.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
