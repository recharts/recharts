import{j as r}from"./jsx-runtime-BCqy41qg.js";import{useMDXComponents as n}from"./index-Dm0rSt6x.js";import{M as s,C as a,a as p}from"./blocks-BmXUS6al.js";import{C as m,A as i}from"./ErrorBar.stories-1fKbyyTU.js";import"./iframe-DpxBiwXt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-JWi15Uty.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Dq3WgZ6I.js";import"./Layer-B_VW6NEu.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./ErrorBarContext--hzc0ol9.js";import"./RechartsWrapper-BjnJrxH9.js";import"./arrayEqualityCheck-FXkJUuOg.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./zIndexSlice-BKKsRI17.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./CSSTransitionAnimate-CkZ9tlhl.js";import"./useAnimationId-xmRGVEvR.js";import"./ZIndexLayer-D0mBkmdS.js";import"./ScatterChart-Bw6X4ex7.js";import"./CartesianChart-C8Msn2UK.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./CartesianGrid-DNW3g4XV.js";import"./CartesianAxis-DPFPdJc8.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./Label-CEkR5yeX.js";import"./types-BBdfixzL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BwhWcYGH.js";import"./YAxis-Bi8itMA7.js";import"./Scatter-DmtcmF4f.js";import"./ReactUtils-Dffr1epF.js";import"./Curve-D7R0OSkI.js";import"./tooltipContext-CxkAlI2d.js";import"./Symbols-DaC_yNBz.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./RechartsHookInspector-A8kV9_z_.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
