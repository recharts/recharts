import{j as r}from"./jsx-runtime-C1ot20lR.js";import{useMDXComponents as n}from"./index-DILf96Dt.js";import{M as s,C as a,a as p}from"./blocks-BYl3ixDh.js";import{C as l,A as i}from"./ErrorBar.stories-6OgbwFlg.js";import"./iframe-D10KqzUD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CvJ6Av4F.js";import"./utils-ePvtT4un.js";import"./ErrorBar-jivm0U2R.js";import"./Layer-ht9SJGho.js";import"./resolveDefaultProps-9OrE3puy.js";import"./ErrorBarContext-D0gYYf11.js";import"./RechartsWrapper-DmZaXDX9.js";import"./arrayEqualityCheck-BiFmrFlI.js";import"./PolarUtils--rK1_r3m.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./zIndexSlice-C09Fe5zh.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./CSSTransitionAnimate-S2Wt11LU.js";import"./useAnimationId-CbuLj6s5.js";import"./ZIndexLayer-CJv48mZa.js";import"./ScatterChart-BJfdGvQu.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./CartesianGrid-BamDRBTo.js";import"./CartesianAxis-UUDtKWGi.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./Label-NWVYeZEG.js";import"./types-DH2QYYrT.js";import"./XAxis-BQt1-o4i.js";import"./YAxis-DR2gGzMh.js";import"./Scatter-CRn_m1xy.js";import"./ReactUtils-Bjqgxmj3.js";import"./Curve-BHXU1eAM.js";import"./tooltipContext-BnAKNcVt.js";import"./Symbols-DUUGs6sP.js";import"./ActiveShapeUtils-DYlzmj4y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpWw-GEi.js";import"./Trapezoid-DuyF-aaV.js";import"./Sector-C5ufK4tl.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./RechartsHookInspector-D11PdPOv.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./OffsetShower-CpYxr2Ft.js";import"./PlotAreaShower-B_BAjCHP.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
