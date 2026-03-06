import{j as r}from"./jsx-runtime-Bw-CPngc.js";import{useMDXComponents as n}from"./index-q8ntbOTj.js";import{M as p,C as s,a}from"./blocks-CBJGGH2I.js";import{C as m,A as i}from"./ErrorBar.stories-1OcP3uE0.js";import"./iframe-_5zxKgci.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSd9dO1D.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BEOTzUzj.js";import"./Layer-BeNKD6uh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./ErrorBarContext-CvNdI_Cv.js";import"./RechartsWrapper-C0zBti2g.js";import"./arrayEqualityCheck-DLMNeVLZ.js";import"./immer-BaMlApsY.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CQESjCWD.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./d3-scale-CRK2FJTc.js";import"./zIndexSlice-D2iO7-nB.js";import"./renderedTicksSlice-txKnD5_R.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./CSSTransitionAnimate-DUmu5FHb.js";import"./useAnimationId-B5UzlvQm.js";import"./ZIndexLayer-DbY9BdOy.js";import"./ScatterChart-C7Da1jH9.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./CartesianGrid-Dzhi_uZZ.js";import"./CartesianAxis-t0Xlfasl.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./Label-B3FoJLG-.js";import"./types-B4BvwS0U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BoiUuQV6.js";import"./YAxis-DbWdO-Gr.js";import"./Scatter-Y_JEgxwp.js";import"./ReactUtils-u6DOyzs3.js";import"./Curve-DLvP5FI3.js";import"./step-CFxJr1fu.js";import"./tooltipContext-7zEpgpzG.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";import"./ActiveShapeUtils-DyNfLGNz.js";import"./isPlainObject-DMrThXxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLAaMXbr.js";import"./Trapezoid-DHmjrzCK.js";import"./Sector-CZQdSV3s.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./RechartsHookInspector-C23NmY-H.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./OffsetShower-_I7-ZVXC.js";import"./PlotAreaShower-Duhke6Yi.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
