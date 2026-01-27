import{j as e}from"./jsx-runtime-I9L8lrv5.js";import{useMDXComponents as n}from"./index-08dGANYb.js";import{M as h,C as o}from"./blocks-B7jlDFe9.js";import{C as d,W as s}from"./dimensions.stories-DqMSd9Wz.js";import"./iframe-DwqRYk2I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./arrayEqualityCheck-DgzFlSOI.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-CeV-pGSf.js";import"./RechartsWrapper-C7VpHEZH.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./Line-C1vhcH5u.js";import"./Layer-CKGvS6fh.js";import"./ReactUtils-CSQ_QEna.js";import"./Label-BBrY7asM.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./ZIndexLayer-14WaUFCY.js";import"./ActivePoints-DqfquW36.js";import"./Dot-NTY7DyyV.js";import"./types-DQBQm6yM.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./useAnimationId-BgtwKRIK.js";import"./getRadiusAndStrokeWidthFromDot-JPp-nKPZ.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./Symbols--4uQfBg4.js";import"./Curve-MGg7iv1Z.js";import"./XAxis-Cyh_YOcY.js";import"./CartesianAxis-0yio1lEn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-QYWka3EJ.js";import"./Legend-C5eJuXMe.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
