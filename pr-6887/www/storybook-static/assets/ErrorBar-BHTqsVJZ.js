import{j as r}from"./jsx-runtime-D6DutWS-.js";import{useMDXComponents as n}from"./index-DsFe8pnC.js";import{M as s,C as a,a as p}from"./blocks-DPEH3hz1.js";import{C as l,A as i}from"./ErrorBar.stories-CgqPCcnb.js";import"./iframe-BjHGzV_g.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D2ltde3K.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BnaEPBBr.js";import"./Layer-C_w7y8lS.js";import"./resolveDefaultProps-BgzxguqS.js";import"./ErrorBarContext-B6rkjVms.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./arrayEqualityCheck-DSmzEAOj.js";import"./PolarUtils-DVfIyed4.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./zIndexSlice-CeUR4dop.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./CSSTransitionAnimate-Jk27PV6t.js";import"./useAnimationId-aInF8bWj.js";import"./ZIndexLayer-CXQSohMh.js";import"./ScatterChart-D9nWqwzZ.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./CartesianGrid-DuvwaQ2k.js";import"./CartesianAxis-BWIPgogw.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./Label-CYo-ySuR.js";import"./types-CnIXHZZY.js";import"./XAxis-DS6la1y6.js";import"./YAxis-ChYWGLAS.js";import"./Scatter-Bp7svnM3.js";import"./ReactUtils-B_OhT6T8.js";import"./Curve-C15B5k0e.js";import"./tooltipContext-nxdyC6oO.js";import"./Symbols-BMG8T0tH.js";import"./ActiveShapeUtils-GRlfg2FZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DzPvnNyw.js";import"./Trapezoid-BmpvqocW.js";import"./Sector-DqpJYgqY.js";import"./GraphicalItemClipPath-BSkbIiNd.js";import"./SetGraphicalItem-CZBegNK8.js";import"./RechartsHookInspector-D9VSdGzF.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
