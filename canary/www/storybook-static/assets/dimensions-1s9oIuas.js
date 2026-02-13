import{j as e}from"./jsx-runtime-CT_lF2SA.js";import{useMDXComponents as n}from"./index-CVYGi4Lm.js";import{M as h,C as o}from"./blocks-D_XjuBLO.js";import{C as d,W as s}from"./dimensions.stories-BbrQn-Wl.js";import"./iframe-B49GSwh0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./arrayEqualityCheck-DINBFxv3.js";import"./resolveDefaultProps-C-joITAz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DRfqwsU9.js";import"./RechartsWrapper-csJjzcSq.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./zIndexSlice-BRDipK6V.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./Line-Cr1GgxdN.js";import"./Layer-D1N02uqa.js";import"./ReactUtils-yuOGi8sn.js";import"./Label-CpKUDdzk.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./ZIndexLayer-BDRmqb48.js";import"./ActivePoints-DAZjB2zT.js";import"./Dot-Dh4m0OXw.js";import"./types-OGa7TdGT.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./ErrorBarContext-Kb4FINZU.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./useAnimationId-CWbWu1ju.js";import"./getRadiusAndStrokeWidthFromDot-CDrV5QBb.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./Symbols-BhCWiDph.js";import"./Curve-D2h7ncG8.js";import"./XAxis-D-J-5rSI.js";import"./CartesianAxis-hdd-vl6G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis--1-yNCnR.js";import"./Legend-Dvy2hxm-.js";import"./useElementOffset-DzO4T-Oi.js";import"./iteratee-Di8bf76v.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
