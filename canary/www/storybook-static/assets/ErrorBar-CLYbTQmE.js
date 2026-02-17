import{j as r}from"./jsx-runtime-REVbmv-Q.js";import{useMDXComponents as n}from"./index-BOLh1l1z.js";import{M as s,C as p,a}from"./blocks-433RX6z6.js";import{C as l,A as i}from"./ErrorBar.stories-tM3iZA0o.js";import"./iframe-BekWtzeP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7stEGDS.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CrUpGEgm.js";import"./Layer-Bfyqa5-M.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./ErrorBarContext-erPuSmOq.js";import"./RechartsWrapper-BLym1DZ5.js";import"./arrayEqualityCheck-Dex07G1y.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-M7JbNACE.js";import"./axisSelectors-dkELBwuo.js";import"./zIndexSlice-C6dUOqXj.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./RegisterGraphicalItemId-DBrxdiVv.js";import"./CSSTransitionAnimate-LhKWzObS.js";import"./useAnimationId-BhuDd99U.js";import"./ZIndexLayer-BEmVcKyp.js";import"./ScatterChart-Zl4sBvTv.js";import"./CartesianChart-DBKl6El9.js";import"./chartDataContext-DIse9eKf.js";import"./CategoricalChart-DjOHDvdh.js";import"./CartesianGrid-BBzAe3s9.js";import"./CartesianAxis-CVhNrsBY.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./Label-Co8l3-0E.js";import"./types-BAUrPFwC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BaakOQmt.js";import"./YAxis-D6pypf8E.js";import"./Scatter-rDLNZlzl.js";import"./ReactUtils-V0CtXr9z.js";import"./Curve-DNeihdYA.js";import"./tooltipContext-VhsL2koV.js";import"./Symbols-CsDFwuaA.js";import"./ActiveShapeUtils-DEhZs-Ax.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BI0WfAac.js";import"./Trapezoid-BGCarJJl.js";import"./Sector-B9JgPSGu.js";import"./GraphicalItemClipPath-CbuKIejK.js";import"./SetGraphicalItem-COH5jwOQ.js";import"./RechartsHookInspector-DYfLD4ov.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
