import{j as r}from"./jsx-runtime-B0CwW13p.js";import{useMDXComponents as n}from"./index-C2GN7Wfn.js";import{M as s,C as a,a as p}from"./blocks-DFsiqAws.js";import{C as l,A as i}from"./ErrorBar.stories-D2uc8J8C.js";import"./iframe-B6ZCI1X-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYaSePyf.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CT5M5KxI.js";import"./Layer-fYHElE4I.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./RechartsWrapper-Cm4MNb60.js";import"./arrayEqualityCheck-Vy2dcV_o.js";import"./PolarUtils-DT5LUPN4.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./CSSTransitionAnimate-DqAEwVMX.js";import"./useAnimationId-Czd9yhg2.js";import"./ZIndexLayer-NdV45W3l.js";import"./ScatterChart-C1ZzmQfO.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./CartesianGrid-C7UogyGe.js";import"./CartesianAxis-Cgh_nqbT.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./Label-D44TMXj3.js";import"./types-lQyAqjcM.js";import"./XAxis-C4uw1-2Q.js";import"./YAxis-Bknejqsk.js";import"./Scatter-CqBF_vp2.js";import"./ReactUtils-DztpHcKA.js";import"./Curve-xA1LMbbI.js";import"./tooltipContext-iR4QyRDe.js";import"./Symbols-BpZDCS87.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./RechartsHookInspector-B_-BIKM5.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
