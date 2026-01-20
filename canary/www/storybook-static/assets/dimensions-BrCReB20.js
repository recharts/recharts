import{j as e}from"./jsx-runtime-CvDkp79j.js";import{useMDXComponents as n}from"./index-DXrWm-z1.js";import{M as h,C as o}from"./blocks-DEy_ZHxe.js";import{C as d,W as s}from"./dimensions.stories-DOh_iby2.js";import"./iframe-CZOKXyYX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq0EYqss.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./arrayEqualityCheck-ZCpvDDUM.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./PolarUtils-BdcP-kXS.js";import"./ComposedChart-Bhz_MiFn.js";import"./RechartsWrapper-BzS4jEvb.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./zIndexSlice-DkluUigR.js";import"./CartesianChart-CEGcX5i7.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./Line-Dtb8uDPL.js";import"./Layer-ipPtt6GK.js";import"./ReactUtils-CKx1UPE3.js";import"./Label-wuyiSzGf.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./ZIndexLayer-DuvPoAvp.js";import"./ActivePoints-DA6Kv2zk.js";import"./Dot-CpDEwrks.js";import"./types-mDJez9wS.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./ErrorBarContext-CgOU7j9T.js";import"./GraphicalItemClipPath-DG_FLSO_.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./useAnimationId-BrU_ieRo.js";import"./getRadiusAndStrokeWidthFromDot-CQrJkzNb.js";import"./ActiveShapeUtils-BNlU2ssp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8jBBkAoM.js";import"./Trapezoid-Damk21qr.js";import"./Sector-Dsjq5sTO.js";import"./Symbols-DZsrADbK.js";import"./Curve-Cn7M-l6J.js";import"./XAxis-DzfgVxfw.js";import"./CartesianAxis-DWBeqImC.js";import"./YAxis-3HWUkaDa.js";import"./Legend-D1xTuSvo.js";import"./useElementOffset-8Y6iIbxO.js";import"./iteratee-BHKnSY98.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
