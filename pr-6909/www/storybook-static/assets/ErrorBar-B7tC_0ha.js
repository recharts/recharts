import{j as r}from"./jsx-runtime-CHZt2yqy.js";import{useMDXComponents as n}from"./index-DqKADZLz.js";import{M as s,C as a,a as p}from"./blocks-Cd3v8ZgY.js";import{C as l,A as i}from"./ErrorBar.stories-DFIDdHxr.js";import"./iframe-DvdxI6dC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwHutVPN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CiEkhBYb.js";import"./Layer-QQplstvs.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./ErrorBarContext-CaA_0bex.js";import"./RechartsWrapper-BLfZDcOn.js";import"./arrayEqualityCheck-DXUAObl0.js";import"./PolarUtils-BY4iZmOi.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./CSSTransitionAnimate-C9_Ml9Hv.js";import"./useAnimationId-Dy3gyKDZ.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./ScatterChart-B9vKHXOx.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./CartesianGrid-DGiABNyR.js";import"./CartesianAxis-CptW6PK3.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./types-8AXfgSIv.js";import"./XAxis-DJowtDGC.js";import"./YAxis-Qq9BKQtQ.js";import"./Scatter-yKni7quE.js";import"./ReactUtils-DqWjpCBi.js";import"./Curve-BRTvsj-M.js";import"./tooltipContext-D7aHeXgA.js";import"./Symbols-BZsKNNtj.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./Trapezoid-BNKT4KGX.js";import"./Sector-DWkTEbbM.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./RechartsHookInspector-B_PrFdYH.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
