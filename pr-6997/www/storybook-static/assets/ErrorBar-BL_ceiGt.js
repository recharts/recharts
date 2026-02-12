import{j as r}from"./jsx-runtime-BnbFLutN.js";import{useMDXComponents as n}from"./index-CUUK1cgW.js";import{M as s,C as a,a as p}from"./blocks-C1Ms957R.js";import{C as l,A as i}from"./ErrorBar.stories-DHhSsqlB.js";import"./iframe-D4XW71qE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-r8aHoL1L.js";import"./utils-ePvtT4un.js";import"./ErrorBar-W2QJER8p.js";import"./Layer-_WbjJ9WY.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./ErrorBarContext-CYBrSxT_.js";import"./RechartsWrapper-C0DDkfJP.js";import"./arrayEqualityCheck-Ct0H2J7-.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./CSSTransitionAnimate-DOUItrUm.js";import"./useAnimationId-BXlO72m4.js";import"./ZIndexLayer-uUtlF8oG.js";import"./ScatterChart-CcxzpwM3.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./CartesianGrid-7yO0-lso.js";import"./CartesianAxis-8-c0TmU5.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B7adFIe7.js";import"./YAxis-BzXwxAD2.js";import"./Scatter-DTuwk89x.js";import"./ReactUtils-Dt1V4s2Z.js";import"./Curve-BM6HUAhp.js";import"./tooltipContext-B9cVE9M5.js";import"./Symbols-CZhPoTol.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./RechartsHookInspector-9aXKf5pi.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
