import{j as r}from"./jsx-runtime-B04AyZ9x.js";import{useMDXComponents as n}from"./index-VwUK6y5l.js";import{M as s,C as a,a as p}from"./blocks-CwRPxJjO.js";import{C as m,A as i}from"./ErrorBar.stories-CHNGPpjM.js";import"./iframe-Dt2-Rn2T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DBIfqZnx.js";import"./utils-ePvtT4un.js";import"./ErrorBar-4uJXZ5bs.js";import"./Layer-Cy-kS3Tn.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./RechartsWrapper-CBGhND_r.js";import"./arrayEqualityCheck-e3rdG8sZ.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./CSSTransitionAnimate-BHStpI00.js";import"./useAnimationId-C5m05tY7.js";import"./ZIndexLayer-RqzvM65R.js";import"./ScatterChart-BywnI8Ox.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./CartesianGrid-BL4VMlI3.js";import"./CartesianAxis-CuL6QCDl.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./Label-C32CYHoq.js";import"./types-BU6HIYaW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CRrkfAWq.js";import"./YAxis-CkTVj5OB.js";import"./Scatter-nXXse662.js";import"./ReactUtils-OtSSiA15.js";import"./Curve-Ff2ksW4t.js";import"./tooltipContext-BR1HLUbB.js";import"./Symbols-Cq9VSHhf.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./RechartsHookInspector-5aSdxu_t.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
