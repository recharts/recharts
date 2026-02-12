import{j as r}from"./jsx-runtime-ByP4HBn8.js";import{useMDXComponents as n}from"./index-gIrMTsS1.js";import{M as s,C as a,a as p}from"./blocks-Na3Nf-io.js";import{C as l,A as i}from"./ErrorBar.stories-DeXOf-ka.js";import"./iframe-DqbxrOnC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DM8LAuhA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DGkSQ7BE.js";import"./Layer-DO_g1bne.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./ErrorBarContext-brGngOut.js";import"./RechartsWrapper-CpGZSQIF.js";import"./arrayEqualityCheck-DDnB3yQJ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./zIndexSlice-Be92tzJW.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./CSSTransitionAnimate-BXUTRYpT.js";import"./useAnimationId-CZrzdjIq.js";import"./ZIndexLayer-BLOQbcIf.js";import"./ScatterChart-ChK1ZC-6.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./CartesianGrid-DDmVEjV6.js";import"./CartesianAxis-CBS5lhtQ.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./Label-Dn_4yvvw.js";import"./types-DYQm65dh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Clh3r3oa.js";import"./YAxis-C1VoYxeB.js";import"./Scatter-4f3PUwsf.js";import"./ReactUtils-CmTCn7uo.js";import"./Curve-D1iAhDrw.js";import"./tooltipContext-D16SUj3v.js";import"./Symbols-m2t7OCzL.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DoZxp5Jb.js";import"./Trapezoid-CT_AsUkt.js";import"./Sector-BHLa0ImP.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./RechartsHookInspector-nEoOxjIA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
