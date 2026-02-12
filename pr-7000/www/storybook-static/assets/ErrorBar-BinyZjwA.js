import{j as r}from"./jsx-runtime-CWx3WOJq.js";import{useMDXComponents as n}from"./index-a7HWR9HB.js";import{M as s,C as a,a as p}from"./blocks-DEXTiBAb.js";import{C as l,A as i}from"./ErrorBar.stories-CYvU_Kjq.js";import"./iframe-CFT77Gxv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9FfrM9hg.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BKuJ6_px.js";import"./Layer-MeOR0S7X.js";import"./resolveDefaultProps-BfLi8adI.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./RechartsWrapper-C06tio3K.js";import"./arrayEqualityCheck-D0woyLdN.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-yAz6J_Nf.js";import"./axisSelectors-DOMws57m.js";import"./zIndexSlice-Czz78II2.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./CSSTransitionAnimate-UdGO0ICy.js";import"./useAnimationId-DgcLlBvC.js";import"./ZIndexLayer-uKRagXxd.js";import"./ScatterChart-BPQcpLha.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./CartesianGrid-CWZ25BdI.js";import"./CartesianAxis-BbU1esix.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./Label-BG9DvreX.js";import"./types-CpsEOU-X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-iSjPfIVk.js";import"./YAxis-AxMvucM_.js";import"./Scatter-E0zCOH1P.js";import"./ReactUtils-BfhnJY8u.js";import"./Curve-D6lAkyMf.js";import"./tooltipContext-DyXLZ6PX.js";import"./Symbols-Cng0_jSU.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./RechartsHookInspector-BcoRzUX4.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
