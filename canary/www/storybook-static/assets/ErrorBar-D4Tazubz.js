import{j as r}from"./jsx-runtime-DdFXK-vo.js";import{useMDXComponents as n}from"./index-DbKI1S_U.js";import{M as p,C as s,a}from"./blocks-BUBhCY0t.js";import{C as m,A as i}from"./ErrorBar.stories-CnnMd0sc.js";import"./iframe-DOwSMESw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aBvahWCN.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BCqkkiwC.js";import"./Layer-Dw0puBgf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./ErrorBarContext-CtE8_zM3.js";import"./RechartsWrapper-ls6tVJyv.js";import"./arrayEqualityCheck-CX9-bfYH.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./CSSTransitionAnimate-CZvpoeIl.js";import"./useAnimationId-B99eNrnj.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./ScatterChart-wDfD4F51.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./CartesianGrid-DEbxUIAb.js";import"./CartesianAxis-BJnnwpTK.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./Label-CGJJW7mt.js";import"./types-BVuvkN0T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BPbWU4yR.js";import"./YAxis-DIarP6QG.js";import"./Scatter-DA0dU-hj.js";import"./ReactUtils-D4p-v0tr.js";import"./Curve-HyoTL5em.js";import"./step-CPI5XPf7.js";import"./tooltipContext-CgrK2lZY.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMknbwVL.js";import"./Trapezoid-AfdP-1uh.js";import"./Sector-BzLVEcjl.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./RechartsHookInspector-CcCJcHZ5.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
