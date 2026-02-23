import{j as r}from"./jsx-runtime-RswFpi5N.js";import{useMDXComponents as n}from"./index-Ctic5PBj.js";import{M as p,C as s,a}from"./blocks-DMDAl1mE.js";import{C as m,A as i}from"./ErrorBar.stories-CkotuGT_.js";import"./iframe-BSrWh3Tm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7iJ4ctw.js";import"./utils-ePvtT4un.js";import"./ErrorBar-F7zPBlal.js";import"./Layer-QGYU9n-M.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uX8ktvRe.js";import"./ErrorBarContext-CUS8wCir.js";import"./RechartsWrapper-Cv7vOboh.js";import"./arrayEqualityCheck-Bi3wam60.js";import"./immer-o57FzM7P.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BKQB3IdD.js";import"./hooks-_Zpl3P7b.js";import"./axisSelectors-DaFs4qrj.js";import"./d3-scale-B1u95Bta.js";import"./zIndexSlice-DiVky1C5.js";import"./renderedTicksSlice-XfGhYDN5.js";import"./RegisterGraphicalItemId-otp8Qv4N.js";import"./CSSTransitionAnimate-DJRpk7hj.js";import"./useAnimationId-DcrpwOmI.js";import"./ZIndexLayer-D38UhR7u.js";import"./ScatterChart-Z7VQJUiu.js";import"./CartesianChart-C6stOvQo.js";import"./chartDataContext-BZoBhnnC.js";import"./CategoricalChart-K47yLqM7.js";import"./CartesianGrid-9ahGzOzg.js";import"./CartesianAxis-DpJRxyLl.js";import"./Text-DUnGW5EL.js";import"./DOMUtils-BZKI_dtW.js";import"./Label-Bl_LjQTl.js";import"./types-CM9WDYf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B42vfkRT.js";import"./YAxis-C6UXDRpG.js";import"./Scatter-eme8JFg3.js";import"./ReactUtils-CJRrmQRl.js";import"./Curve-Y05R0_Dg.js";import"./step-D7Xw_JZz.js";import"./tooltipContext-zAyamVxq.js";import"./Symbols-DUq2FcPQ.js";import"./symbol-Bmu8h110.js";import"./ActiveShapeUtils-CHgfreMM.js";import"./isPlainObject-D_XWLGeo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZDPWd6o.js";import"./Trapezoid-DEogtWZp.js";import"./Sector-Clje0fKa.js";import"./GraphicalItemClipPath-K1LYOcWQ.js";import"./SetGraphicalItem-DrkBT3YT.js";import"./RechartsHookInspector-GGOykVwh.js";import"./ChartSizeDimensions-DsBX0MPa.js";import"./OffsetShower-DXc8wSG5.js";import"./PlotAreaShower-C59CIyfR.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
