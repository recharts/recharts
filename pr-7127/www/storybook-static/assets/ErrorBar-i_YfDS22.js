import{j as r}from"./jsx-runtime-BOOljMWN.js";import{useMDXComponents as n}from"./index-DHk8KsLm.js";import{M as p,C as s,a}from"./blocks-9THzIe0k.js";import{C as m,A as i}from"./ErrorBar.stories-BN52_E48.js";import"./iframe-DhSnVUUY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AtwlN2q9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-U46BBf2R.js";import"./Layer-DqA8yJsy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./ErrorBarContext-CqudBFLS.js";import"./RechartsWrapper-yZud87Hm.js";import"./arrayEqualityCheck-ItSr43uT.js";import"./immer-ffnfnJI7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CW6mkywG.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./zIndexSlice-CmnFYU-3.js";import"./renderedTicksSlice-aQirpCka.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./CSSTransitionAnimate-xu0x4rbo.js";import"./useAnimationId-DocxG_ZJ.js";import"./ZIndexLayer-qqef8KVB.js";import"./ScatterChart-DRMHnvyd.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./CartesianGrid-H5SRNHVz.js";import"./CartesianAxis-wTVaN_w2.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./Label-CbPieNct.js";import"./types-B9YiKk4f.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BK9sGi8f.js";import"./YAxis-CXFxK72j.js";import"./Scatter-CjGohezh.js";import"./ReactUtils-BaLETgkD.js";import"./Curve-BOb3x1Vv.js";import"./step-CbaapRre.js";import"./tooltipContext-Cx0YQoA4.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./RechartsHookInspector-_iSQ6Sv6.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
