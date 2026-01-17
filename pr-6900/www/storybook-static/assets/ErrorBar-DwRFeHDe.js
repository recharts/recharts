import{j as r}from"./jsx-runtime-YCrlmJle.js";import{useMDXComponents as n}from"./index-n7pFOlMz.js";import{M as s,C as a,a as p}from"./blocks-CnqJXs60.js";import{C as l,A as i}from"./ErrorBar.stories-u0NdddWt.js";import"./iframe-CLIMsGOZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8YxDhDRV.js";import"./utils-ePvtT4un.js";import"./ErrorBar-XqgWGvnO.js";import"./Layer-l9L2Sb8o.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./ErrorBarContext-D97KkegB.js";import"./RechartsWrapper-lPK7Cxev.js";import"./arrayEqualityCheck-CbYFkYA0.js";import"./PolarUtils-BIAYT_Jm.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./CSSTransitionAnimate-oe03vnco.js";import"./useAnimationId-wMl1lWMr.js";import"./ZIndexLayer-5xiPbIim.js";import"./ScatterChart-C-QwRACE.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./CartesianGrid-EVwWbDqI.js";import"./CartesianAxis-tT7FqCIW.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./Label-QzDxpC8q.js";import"./types-HWBumAOZ.js";import"./XAxis-D0rBjGgi.js";import"./YAxis-BCedXT45.js";import"./Scatter-BrigEZ56.js";import"./ReactUtils-Bk0OFjED.js";import"./Curve-DXQteT8k.js";import"./tooltipContext-BI8Gpz0W.js";import"./Symbols-DbV1O1CF.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./Trapezoid-D79jjH6v.js";import"./Sector-C08coEZ4.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./RechartsHookInspector-B158dvGO.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
