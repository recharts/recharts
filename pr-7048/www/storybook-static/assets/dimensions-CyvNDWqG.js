import{j as e}from"./jsx-runtime-u7gfZ2kS.js";import{useMDXComponents as n}from"./index-DholKdsQ.js";import{M as o,C as h}from"./blocks-Co0g5-Ma.js";import{C as d,W as s}from"./dimensions.stories-B4HsCHdt.js";import"./iframe-EDkYpgFH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-VaoQyGQZ.js";import"./ChartSizeDimensions-zH_0qASi.js";import"./arrayEqualityCheck-3I37HEG_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CektsYXT.js";import"./immer-OU7Y0bVq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BiuyaRDP.js";import"./RechartsWrapper-D3m4uKer.js";import"./index-g2grDsWN.js";import"./hooks-9dyjFB2O.js";import"./axisSelectors-DuoLroUy.js";import"./d3-scale-Da0yFaRI.js";import"./zIndexSlice-CEaJbv0z.js";import"./renderedTicksSlice-tL_S_nSy.js";import"./CartesianChart-Dj1xYMR5.js";import"./chartDataContext-D4KzV5Tt.js";import"./CategoricalChart-AyWzdtKe.js";import"./Line-DRhsJ9p_.js";import"./Layer-B_dQgSH5.js";import"./ReactUtils-pbZTnHEY.js";import"./Label-tpHL658P.js";import"./Text-_RLDIMGf.js";import"./DOMUtils-BmamCvsY.js";import"./ZIndexLayer-CFOztK9t.js";import"./ActivePoints-qcJtAAIs.js";import"./Dot-Ci-MCQ4Y.js";import"./types-BIaRI4-l.js";import"./RegisterGraphicalItemId-BmJCRqzh.js";import"./ErrorBarContext-BSOP-KRw.js";import"./GraphicalItemClipPath-LiQwpHfd.js";import"./SetGraphicalItem-DkwojxeX.js";import"./useAnimationId-BbddIEaK.js";import"./getRadiusAndStrokeWidthFromDot-DMXaZtjW.js";import"./ActiveShapeUtils-DdBu78Ro.js";import"./isPlainObject-MAh5iL27.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUAMyMnQ.js";import"./Trapezoid-Ce9uM3y7.js";import"./Sector-DxWTUroZ.js";import"./Symbols-Ba1mC9Fj.js";import"./symbol-DtUDp9_D.js";import"./step-CNqQtAg0.js";import"./Curve-CaKiPo4V.js";import"./XAxis-DF72n0MP.js";import"./CartesianAxis-DB9dh0sL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-vzHqkzuu.js";import"./Legend--q2CyHQz.js";import"./useElementOffset-DyJYEhVf.js";import"./uniqBy-DMvZqfZa.js";import"./iteratee-kS0Ltc5a.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
