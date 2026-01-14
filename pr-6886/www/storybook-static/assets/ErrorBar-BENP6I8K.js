import{j as r}from"./jsx-runtime-DQCNqyPM.js";import{useMDXComponents as n}from"./index-dthVtBBd.js";import{M as s,C as a,a as p}from"./blocks-c5v6Rtxu.js";import{C as l,A as i}from"./ErrorBar.stories-Ce0Uwaqa.js";import"./iframe-B8YYEd9G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4mlw0NF.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BkIEmklA.js";import"./Layer-ChuaoeIg.js";import"./resolveDefaultProps-Css_XkGu.js";import"./ErrorBarContext-TR9hiCFQ.js";import"./RechartsWrapper-pZyt8ABU.js";import"./arrayEqualityCheck-BJSPs_LU.js";import"./PolarUtils-DYWzGjDu.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./zIndexSlice-BLNkJo_X.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./CSSTransitionAnimate-7Ig_9j1W.js";import"./useAnimationId-pnmN_K1g.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./ScatterChart-BztvlMT4.js";import"./CartesianChart-DBZcJX6H.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./CartesianGrid-Bmr_xbA1.js";import"./CartesianAxis-BAmncUEg.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./Label-XqAMTaA_.js";import"./types-CnVGCqEL.js";import"./XAxis-Dznlbswx.js";import"./YAxis-Bx5APNu1.js";import"./Scatter-CxhI7k65.js";import"./ReactUtils-DfY637Lx.js";import"./Curve-B-G6e6PZ.js";import"./tooltipContext-Cp6s-Na8.js";import"./Symbols-jZ2_n1nU.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./Trapezoid-C7ogOYif.js";import"./Sector-BNyMoo46.js";import"./GraphicalItemClipPath-q0Itpwcd.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./RechartsHookInspector-C0QywKAE.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
