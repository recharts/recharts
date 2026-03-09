import{j as r}from"./jsx-runtime-j9B0IZog.js";import{useMDXComponents as n}from"./index-BCE3vKCb.js";import{M as p,C as s,a}from"./blocks-BcsYjNuW.js";import{C as m,A as i}from"./ErrorBar.stories-B7pLbPBS.js";import"./iframe-C-iVd-D9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-4pvBd6R2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cysfevx9.js";import"./Layer-PcuWobZF.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./ErrorBarContext-DToJ31oQ.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./arrayEqualityCheck-CykFyG3w.js";import"./immer-9akI4mGC.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D7iAvCJZ.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./zIndexSlice-DM0eYjRM.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./CSSTransitionAnimate-CHhMAMtD.js";import"./useAnimationId-DF-bmt8J.js";import"./ZIndexLayer-CF1VRPo3.js";import"./ScatterChart-BKHn9Llx.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./CartesianGrid-Dwq0ZjHG.js";import"./CartesianAxis-DbYsYZ3j.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./Label-B2Hnjv9f.js";import"./types-DAf5tiec.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DSNvwzP_.js";import"./YAxis-BMfSetrt.js";import"./Scatter-BOdCJPn6.js";import"./ReactUtils-nzFm5ghx.js";import"./Curve-6NVtDyjZ.js";import"./step-Ca8O5Pe5.js";import"./tooltipContext-DmQQI9hK.js";import"./Symbols-DpPGUMp-.js";import"./symbol-BuPqUUJq.js";import"./ActiveShapeUtils-LerByRq_.js";import"./isPlainObject-y7gB3M8h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CZ4Fndbl.js";import"./Trapezoid-C-P9UIeU.js";import"./Sector-Xd_RhtXJ.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./RechartsHookInspector-BmWQIBw0.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
