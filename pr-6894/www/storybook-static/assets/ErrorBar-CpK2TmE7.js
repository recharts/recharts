import{j as r}from"./jsx-runtime-BuavYlYu.js";import{useMDXComponents as n}from"./index-BNg5_hPB.js";import{M as s,C as a,a as p}from"./blocks-Bv5WebGL.js";import{C as l,A as i}from"./ErrorBar.stories-BbyRlMyH.js";import"./iframe-BMuWxLAr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4xTjkvp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BHF8r8rp.js";import"./Layer-B3GdCeOT.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./ErrorBarContext-DEke2_6E.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./arrayEqualityCheck-CqiNO7U9.js";import"./PolarUtils-TfsB6rvw.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./CSSTransitionAnimate-B81RZ1S0.js";import"./useAnimationId-CV7m1u0T.js";import"./ZIndexLayer-5mbugvqo.js";import"./ScatterChart-Beh9-QT4.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./CartesianGrid-BGa4GjxM.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./Label-BDcobJj_.js";import"./types-DTEjZcuz.js";import"./XAxis-WAtQ1axi.js";import"./YAxis-Ce7Q5R0b.js";import"./Scatter-DL_We7HK.js";import"./ReactUtils-CnoqxUjn.js";import"./Curve-vG_gbHgm.js";import"./tooltipContext-D5xQ3oqk.js";import"./Symbols-BPsutJwu.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-TwJi8_LR.js";import"./Trapezoid-CkjHCqiS.js";import"./Sector-BljMkyic.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./RechartsHookInspector-zXV2QGE7.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
