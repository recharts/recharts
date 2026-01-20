import{j as r}from"./jsx-runtime-CvDkp79j.js";import{useMDXComponents as n}from"./index-DXrWm-z1.js";import{M as s,C as a,a as p}from"./blocks-DEy_ZHxe.js";import{C as l,A as i}from"./ErrorBar.stories-Cb_bND7z.js";import"./iframe-CZOKXyYX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq0EYqss.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DXUh82lO.js";import"./Layer-ipPtt6GK.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./ErrorBarContext-CgOU7j9T.js";import"./RechartsWrapper-BzS4jEvb.js";import"./arrayEqualityCheck-ZCpvDDUM.js";import"./PolarUtils-BdcP-kXS.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./zIndexSlice-DkluUigR.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./CSSTransitionAnimate-CSWg_c3x.js";import"./useAnimationId-BrU_ieRo.js";import"./ZIndexLayer-DuvPoAvp.js";import"./ScatterChart-BYa6y0BN.js";import"./CartesianChart-CEGcX5i7.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./CartesianGrid-CAS1UQAw.js";import"./CartesianAxis-DWBeqImC.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./Label-wuyiSzGf.js";import"./types-mDJez9wS.js";import"./XAxis-DzfgVxfw.js";import"./YAxis-3HWUkaDa.js";import"./Scatter-mjUfzo-q.js";import"./ReactUtils-CKx1UPE3.js";import"./Curve-Cn7M-l6J.js";import"./tooltipContext-DDrfIX0-.js";import"./Symbols-DZsrADbK.js";import"./ActiveShapeUtils-BNlU2ssp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8jBBkAoM.js";import"./Trapezoid-Damk21qr.js";import"./Sector-Dsjq5sTO.js";import"./GraphicalItemClipPath-DG_FLSO_.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./RechartsHookInspector-B7tAaeEL.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./OffsetShower-D0BahXva.js";import"./PlotAreaShower-D0tOLrH8.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
