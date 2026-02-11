import{j as r}from"./jsx-runtime-C-AJri7T.js";import{useMDXComponents as n}from"./index-Cd6bIZIy.js";import{M as s,C as a,a as p}from"./blocks-ByEno3rd.js";import{C as l,A as i}from"./ErrorBar.stories-Ca4ZrHab.js";import"./iframe-DAKkOQol.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IHUVzBeJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-AkWoxVMV.js";import"./Layer-BguUBi1k.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./ErrorBarContext-ig0ccB3h.js";import"./RechartsWrapper-DReT11ch.js";import"./arrayEqualityCheck-NbiC3pou.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./zIndexSlice-ConFYYKV.js";import"./RegisterGraphicalItemId-DNcFFbXF.js";import"./CSSTransitionAnimate-C00iiKu_.js";import"./useAnimationId-BJodvzW1.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./ScatterChart-ClFjViyn.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./CartesianGrid-mv357iBP.js";import"./CartesianAxis-BHWsH5fF.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DHACXabx.js";import"./YAxis-DShQZAzJ.js";import"./Scatter-qVTAZ85z.js";import"./ReactUtils-BWrOVeoB.js";import"./Curve-Jt8KljXD.js";import"./tooltipContext-CrkcFAQN.js";import"./Symbols-NCjlL2qf.js";import"./ActiveShapeUtils-DnsJnZjx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CgMMN0ms.js";import"./Trapezoid-DpCkavyj.js";import"./Sector-BqcXv69K.js";import"./GraphicalItemClipPath-C0lJi0bX.js";import"./SetGraphicalItem-CWARA50H.js";import"./RechartsHookInspector-BfHJy13b.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
