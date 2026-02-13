import{j as r}from"./jsx-runtime-Cf4D7i78.js";import{useMDXComponents as n}from"./index-D7xLJCl5.js";import{M as s,C as a,a as p}from"./blocks-BxCD0jWy.js";import{C as l,A as i}from"./ErrorBar.stories-yAlCgAV2.js";import"./iframe-DDewu6bn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXZrkBkN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Ch6sHdb-.js";import"./Layer-DqLbE6Uv.js";import"./resolveDefaultProps-B5JubxST.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./RechartsWrapper-CzQiRy-1.js";import"./arrayEqualityCheck-DXTExga0.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./CSSTransitionAnimate-pUWC9oD9.js";import"./useAnimationId-CjgQOJMR.js";import"./ZIndexLayer-mUyPWZcK.js";import"./ScatterChart-DWU65CMi.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./CartesianGrid-Bh2qCtop.js";import"./CartesianAxis-D7kXIk58.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./Label-J4ZfWAib.js";import"./types-BJyKbQEz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-8FAWklv8.js";import"./YAxis-D9vEUw1w.js";import"./Scatter-CA7hUtgP.js";import"./ReactUtils-DtjzxdpY.js";import"./Curve-BBC21-sm.js";import"./tooltipContext-BdVIHa0M.js";import"./Symbols-DzJjx9Jp.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./RechartsHookInspector-CD3vvvGL.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
