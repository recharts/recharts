import{j as e}from"./jsx-runtime-Cueqrgm8.js";import{useMDXComponents as n}from"./index-WaxXs1o9.js";import{M as h,C as o}from"./blocks-CudnpRvr.js";import{C as d,W as s}from"./dimensions.stories-BZVsZ_Rv.js";import"./iframe-B2sVpU8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8c_ign4p.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./arrayEqualityCheck-Dhi79NZV.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./PolarUtils-D7wLniJK.js";import"./ComposedChart-CtbTJa68.js";import"./RechartsWrapper-BO_KERjm.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./zIndexSlice-D-AtcMvw.js";import"./CartesianChart-Cy5Kgrrw.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./Line-CnVEiaWf.js";import"./Layer-CgMiZnew.js";import"./ReactUtils-myx_H7Lt.js";import"./Label-Cini22wZ.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./ZIndexLayer-BRoLt-1O.js";import"./ActivePoints-B9nnYV9I.js";import"./Dot-3WZgPHXQ.js";import"./types-DwL4AKHm.js";import"./RegisterGraphicalItemId-DS_P1DDV.js";import"./ErrorBarContext-DVCgOIGq.js";import"./GraphicalItemClipPath-Dg2YJGXp.js";import"./SetGraphicalItem-BEcH9pqG.js";import"./useAnimationId-Dci0ZhWb.js";import"./getRadiusAndStrokeWidthFromDot-DcCyEWQm.js";import"./ActiveShapeUtils-BmX6o3Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-r91KSjwc.js";import"./Trapezoid-CHmzYexd.js";import"./Sector-DOuizIpa.js";import"./Symbols-D-gYgerz.js";import"./Curve-DIfGyAUS.js";import"./XAxis-tglJjYCd.js";import"./CartesianAxis-BtXVVZhW.js";import"./YAxis-DOY4gwW6.js";import"./Legend-B9gCA0tv.js";import"./useElementOffset-kvSaE0nm.js";import"./iteratee-Cq_sZyYY.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
