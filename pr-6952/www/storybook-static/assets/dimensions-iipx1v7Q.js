import{j as e}from"./jsx-runtime-812x3qrY.js";import{useMDXComponents as n}from"./index-Dk-7Siqm.js";import{M as h,C as o}from"./blocks-Xo8jHJUc.js";import{C as d,W as s}from"./dimensions.stories-DQogDRWW.js";import"./iframe-ildNGUcB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bl4fk5Ry.js";import"./ChartSizeDimensions-DAfFC157.js";import"./arrayEqualityCheck-DoW--ad2.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DO5A4L0f.js";import"./RechartsWrapper-BhDWMvuB.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./zIndexSlice-D5G-T-vj.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./Line-Cn-oM2ey.js";import"./Layer-C1Vpqy4i.js";import"./ReactUtils-DZ7Bf0_2.js";import"./Label-hP_NWlrR.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./ActivePoints-VRWpag3q.js";import"./Dot-BbvpQGB8.js";import"./types-C_F-U0PG.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./useAnimationId-BnV1d9M_.js";import"./getRadiusAndStrokeWidthFromDot-DZOYBeyk.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./Symbols-DUzk_pf6.js";import"./Curve-C50TS3eJ.js";import"./XAxis-BpmpMVxP.js";import"./CartesianAxis-BT55_pa3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CynyduVr.js";import"./Legend-CoVLDyKg.js";import"./useElementOffset-BYF9do47.js";import"./iteratee-Dd1-lgM9.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
