import{j as r}from"./jsx-runtime-BQ90IwzR.js";import{useMDXComponents as n}from"./index-DJ0dOtz4.js";import{M as p,C as s,a}from"./blocks-CwPlukp0.js";import{C as m,A as i}from"./ErrorBar.stories-B6TedMff.js";import"./iframe-DU58YqXX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D73aQCF4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D-lzn4bf.js";import"./Layer-D-R-VvL4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvRsDILo.js";import"./ErrorBarContext-CYZNadIi.js";import"./RechartsWrapper-DCRQCspP.js";import"./arrayEqualityCheck-CPm_ZzNM.js";import"./immer-CCty7oPO.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CAIf49bT.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./zIndexSlice-D06B5CMj.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./CSSTransitionAnimate-CNj0Ec_T.js";import"./useAnimationId-hGktevsz.js";import"./ZIndexLayer-DrZECD3r.js";import"./ScatterChart-twDpneZ-.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./CartesianGrid-CFA0soYO.js";import"./CartesianAxis-C18m4Bo_.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./Label-1-xmv-OU.js";import"./types-BRRO6f_Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CqmwPZ8Q.js";import"./YAxis-DIF8wKFU.js";import"./Scatter-BafFtQhP.js";import"./ReactUtils-qI72OB32.js";import"./Curve-CdKz9IVe.js";import"./step-DaNDWZj1.js";import"./tooltipContext-DbSMOeuq.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";import"./ActiveShapeUtils-CmjzNmwX.js";import"./isPlainObject-CFpSvqCv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiaAAf2E.js";import"./Trapezoid-BQne9xH8.js";import"./Sector-NGcPnez7.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./RechartsHookInspector-bU2QYxIO.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./OffsetShower-OVwVH-bI.js";import"./PlotAreaShower-Yynvk9Up.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
