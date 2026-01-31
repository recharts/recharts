import{j as r}from"./jsx-runtime-BOOY8Ly4.js";import{useMDXComponents as n}from"./index-f_ONShaf.js";import{M as s,C as a,a as p}from"./blocks-D7uoEx9k.js";import{C as l,A as i}from"./ErrorBar.stories-BBdC67Gr.js";import"./iframe-Dke1PXsj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CL0r-bPV.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B_-26Xvc.js";import"./Layer-B0EXSY1R.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./ErrorBarContext-Bd_5n0Q0.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./arrayEqualityCheck-DYUGm-S-.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./zIndexSlice-CdkZF_KN.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./CSSTransitionAnimate-D9n1dVWp.js";import"./useAnimationId-CaTohdQl.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./ScatterChart-4WlnaVBy.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./CartesianGrid-BV0PWeig.js";import"./CartesianAxis-DELVukVs.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./Label-BJpGMmXt.js";import"./types-DDM_Xxay.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-A5wiYRJ2.js";import"./YAxis-C_nfgnx0.js";import"./Scatter-ZIEVywu9.js";import"./ReactUtils-BSYO7pn7.js";import"./Curve-DAvXUCHx.js";import"./tooltipContext-o9vI6Nhx.js";import"./Symbols-BgJQYoix.js";import"./ActiveShapeUtils-CVSjVyuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Be-yypRZ.js";import"./Trapezoid-Cffcn2bg.js";import"./Sector-DEw-Ho6t.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./RechartsHookInspector-DESYImpk.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./OffsetShower-l-ss4yV0.js";import"./PlotAreaShower-D_tFdLxx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
