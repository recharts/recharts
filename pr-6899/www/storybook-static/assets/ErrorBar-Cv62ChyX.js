import{j as r}from"./jsx-runtime-CNAO9L_c.js";import{useMDXComponents as n}from"./index-Bo43ht7G.js";import{M as s,C as a,a as p}from"./blocks-CE4vXd9J.js";import{C as l,A as i}from"./ErrorBar.stories-BRBV9baj.js";import"./iframe-DVbcaGEk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAtGFOnL.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BT9zPk9R.js";import"./Layer-CTeRo74K.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./ErrorBarContext-BcI0a9d6.js";import"./RechartsWrapper-CI_kVB3D.js";import"./arrayEqualityCheck-D_Ccs7mG.js";import"./PolarUtils-BCmS2GQK.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./CSSTransitionAnimate-BDa7IpQz.js";import"./useAnimationId-BsgPO1Qj.js";import"./ZIndexLayer-DQcVBq3k.js";import"./ScatterChart-BAFhJPLY.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./CartesianGrid-BC7g-EtZ.js";import"./CartesianAxis-DJav8QwX.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./Label-Vy4t0U1x.js";import"./types-glyr-q7x.js";import"./XAxis-3cZu4ol_.js";import"./YAxis-C7ETLAW_.js";import"./Scatter-DM-AOBnL.js";import"./ReactUtils-PeKnJ7eE.js";import"./Curve-DRY3YzYB.js";import"./tooltipContext-7-acIv96.js";import"./Symbols-D0zgYynQ.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDg01dVF.js";import"./Trapezoid-_bdwRMqG.js";import"./Sector-D5CuENkF.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./RechartsHookInspector-CNkljFSC.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
