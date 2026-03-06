import{j as r}from"./jsx-runtime-DgsInMeQ.js";import{useMDXComponents as n}from"./index-hZJzoIsj.js";import{M as p,C as s,a}from"./blocks-DiY-4EEn.js";import{C as m,A as i}from"./ErrorBar.stories-BffIt0AT.js";import"./iframe-D0SJPJ1y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CBc708fQ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bcv2ME-l.js";import"./Layer-Dax6EhgB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./RechartsWrapper-DR1v2TsK.js";import"./arrayEqualityCheck-CYS0izrw.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./CSSTransitionAnimate-DtG3ep58.js";import"./useAnimationId-wUwzbzyQ.js";import"./ZIndexLayer-DYNk2l8y.js";import"./ScatterChart-DRCfyZ8d.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./CartesianGrid-DpDtCUwn.js";import"./CartesianAxis-D59EO1CG.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./Label-Cf3oENl6.js";import"./types-Cyc_Gww5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CwSSbwpc.js";import"./YAxis-DF4qEhbE.js";import"./Scatter-Drk1tPNI.js";import"./ReactUtils-a6BVn4Bt.js";import"./Curve-Cx3Ohe6s.js";import"./step-RKAN_I-J.js";import"./tooltipContext-BCgsFGCF.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./RechartsHookInspector-4NIikMun.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
