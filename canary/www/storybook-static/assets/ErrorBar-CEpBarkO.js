import{j as r}from"./jsx-runtime-DZp4dqjr.js";import{useMDXComponents as n}from"./index-DBjs_Sqv.js";import{M as s,C as a,a as p}from"./blocks-5RdNCo4F.js";import{C as l,A as i}from"./ErrorBar.stories-tjla3g8c.js";import"./iframe-_im4GKTL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3zuwbjl.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEbOWoVk.js";import"./Layer-ojK6bjXb.js";import"./resolveDefaultProps-CaxhqgES.js";import"./ErrorBarContext-NodAal-E.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./arrayEqualityCheck-DQWePApg.js";import"./PolarUtils-DcWiW1XO.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./zIndexSlice-CPIWfeLh.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./CSSTransitionAnimate-DRikpEF8.js";import"./useAnimationId-iCdU_Q_k.js";import"./ZIndexLayer-DmWCVoEY.js";import"./ScatterChart-Dx-1aMQa.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./CartesianGrid-DiDHt8mA.js";import"./CartesianAxis-BZEJptN1.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./Label-CTy8eywr.js";import"./types-CFuB44L5.js";import"./XAxis-BtqRyYI3.js";import"./YAxis-D-u8YWMK.js";import"./Scatter-CAqbj5D0.js";import"./ReactUtils-CAkOWUwD.js";import"./Curve-CjWJcBC1.js";import"./tooltipContext-BHy7B8jS.js";import"./Symbols-aMSa3fiu.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./Trapezoid-C1OI6suu.js";import"./Sector-BGg8SpOK.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./RechartsHookInspector-2hFEojhh.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
