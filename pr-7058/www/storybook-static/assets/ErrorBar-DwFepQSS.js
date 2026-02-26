import{j as r}from"./jsx-runtime-CWneEOD4.js";import{useMDXComponents as n}from"./index-DvDNKUqH.js";import{M as p,C as s,a}from"./blocks-T2QnrqQF.js";import{C as m,A as i}from"./ErrorBar.stories-zQ2GJ09A.js";import"./iframe-Cff4EXi3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lBMzeJSk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DcIYl8SL.js";import"./Layer-D22mEoCB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./ErrorBarContext-BXEok-II.js";import"./RechartsWrapper-DMPfsW98.js";import"./arrayEqualityCheck-VW91KjqU.js";import"./immer-Cixy3ajB.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B-6vBbA8.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./zIndexSlice-C-izguCE.js";import"./renderedTicksSlice-B92sUlvw.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./CSSTransitionAnimate-DNVkwG4m.js";import"./useAnimationId-CJEIt2ET.js";import"./ZIndexLayer-UZz4JYvU.js";import"./ScatterChart-DBix7RyC.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./CartesianGrid-BGjt4faW.js";import"./CartesianAxis-CTKh-VYh.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./Label-KYKyDNcr.js";import"./types-CtvHHRW4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-asdFitiM.js";import"./YAxis-CEsMkUHq.js";import"./Scatter-KjfWJq52.js";import"./ReactUtils-BhGfO_gM.js";import"./Curve-1dMXeL2S.js";import"./step-YwxG2wvl.js";import"./tooltipContext-BWdtFUR0.js";import"./Symbols-i7pcWr_t.js";import"./symbol-7J1n19-D.js";import"./ActiveShapeUtils-BY5228yv.js";import"./isPlainObject-BUXLJ9Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BITjWgSa.js";import"./Trapezoid-BMmW3PWG.js";import"./Sector-BomCciMR.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./RechartsHookInspector-qCKXCEwx.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
