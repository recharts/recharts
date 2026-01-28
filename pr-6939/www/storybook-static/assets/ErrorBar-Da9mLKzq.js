import{j as r}from"./jsx-runtime-BD-WEGcu.js";import{useMDXComponents as n}from"./index-CtRL42xd.js";import{M as s,C as a,a as p}from"./blocks-C1-2gEDd.js";import{C as m,A as i}from"./ErrorBar.stories-DQb_AHy3.js";import"./iframe-BQPEMrXd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIjwufBA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BGldPr82.js";import"./Layer-DxbBzKq7.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./ErrorBarContext-DCh3UuB4.js";import"./RechartsWrapper-DACGaUhd.js";import"./arrayEqualityCheck-CslLKJ6H.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./zIndexSlice-CdQy2W3n.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./CSSTransitionAnimate-Pe4xD9gN.js";import"./useAnimationId-BxGZeVYE.js";import"./ZIndexLayer-BhdUGqn6.js";import"./ScatterChart-ClVH_VM-.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./CartesianGrid-CXNnKGRI.js";import"./CartesianAxis-CNEc1nbZ.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./Label-CJDR703l.js";import"./types-BQWi4mRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-mF1pALMt.js";import"./YAxis-CIcAGIvo.js";import"./Scatter-DyHRAjNy.js";import"./ReactUtils-Ctv4TrHD.js";import"./Curve-CkSquOYK.js";import"./tooltipContext-BHcOw0lj.js";import"./Symbols-zJ2C1Rrw.js";import"./ActiveShapeUtils-BLcBZx_i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmEiGd0_.js";import"./Trapezoid-uvUeJozR.js";import"./Sector-gJW5kDSo.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./RechartsHookInspector-DspFoKBX.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./OffsetShower-DTE5GBb5.js";import"./PlotAreaShower-6AA0_a8Q.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
