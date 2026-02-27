import{j as r}from"./jsx-runtime-zfBQddGE.js";import{useMDXComponents as n}from"./index-Mz9OM0oQ.js";import{M as p,C as s,a}from"./blocks-DFqUpKdW.js";import{C as m,A as i}from"./ErrorBar.stories-Rb0EDH5J.js";import"./iframe-Dr9hlnt0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dj7LSIr-.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DcvefVkO.js";import"./Layer-Dau6qZl4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./ErrorBarContext-DFPKgud5.js";import"./RechartsWrapper-DInH99Th.js";import"./arrayEqualityCheck-dGE5_Gdx.js";import"./immer-B0cgghQh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-IE9LPIX3.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./CSSTransitionAnimate-BSWPeAdK.js";import"./useAnimationId-DF7fT-LB.js";import"./ZIndexLayer-bo4FLnP8.js";import"./ScatterChart-DZ5gRzxm.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./CartesianGrid-C-DxZLwk.js";import"./CartesianAxis-zfjDIuu9.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DVCekQJU.js";import"./YAxis-oVvY9CD_.js";import"./Scatter-BTwtoxfX.js";import"./ReactUtils-DLDWRsmH.js";import"./Curve-B9wE7HPg.js";import"./step-0gc20F8a.js";import"./tooltipContext-Bl5xznvE.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./RechartsHookInspector-DqXSZ2_4.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
