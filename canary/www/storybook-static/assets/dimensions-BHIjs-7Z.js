import{j as e}from"./jsx-runtime-Dt_k-8Jd.js";import{useMDXComponents as n}from"./index-C4KwUtgz.js";import{M as h,C as o}from"./blocks-BoEDorPv.js";import{C as d,W as s}from"./dimensions.stories-B05zZhRJ.js";import"./iframe-CT4QuQ5L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./arrayEqualityCheck-CUEtHgfA.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DZSwiMb4.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./Line-DZ2dCTzj.js";import"./Layer-BIxjtyeO.js";import"./ReactUtils-BD8G1aYb.js";import"./Label-CFlrJOC9.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./ZIndexLayer-B4whtcRw.js";import"./ActivePoints-5c917mHb.js";import"./Dot-COXd4F6H.js";import"./types-CGMRlxY8.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./useAnimationId-ByA7rgvy.js";import"./getRadiusAndStrokeWidthFromDot-dH9jVCiW.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./Trapezoid-C3eKH3hP.js";import"./Sector-BFKxB58R.js";import"./Symbols-NgG1d1Uj.js";import"./Curve-CwfbqPR9.js";import"./XAxis-DHcCUjsJ.js";import"./CartesianAxis-ByfjT7H_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BZSCjBeJ.js";import"./Legend-BmzI-m1q.js";import"./useElementOffset-B6r2EuKs.js";import"./iteratee-BP4C4rB0.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};
