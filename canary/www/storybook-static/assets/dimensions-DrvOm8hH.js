import{j as e}from"./jsx-runtime-BJ6B5s2u.js";import{useMDXComponents as n}from"./index-s2ShXhln.js";import{M as h,C as o}from"./blocks-Bn-ANO_b.js";import{C as d,W as s}from"./dimensions.stories-DhxJvN-p.js";import"./iframe-BrTwOhsr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./arrayEqualityCheck-CfVGBoS6.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Br1-FoJi.js";import"./RechartsWrapper-D38DG274.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./zIndexSlice-q9T-BB65.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./Line-CTSMyiLy.js";import"./Layer-B-9J2nmA.js";import"./ReactUtils-BRgMO5-h.js";import"./Label-Bx9GqcNI.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./ZIndexLayer-vpi4acAX.js";import"./ActivePoints-CUqSm5lk.js";import"./Dot-2FtraOao.js";import"./types-CgBItb-S.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./ErrorBarContext-B6qv5CJK.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./useAnimationId-DrcXJvRo.js";import"./getRadiusAndStrokeWidthFromDot-C2LdcGg9.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./Symbols-L5mWEGXG.js";import"./Curve-CFG-wGoi.js";import"./XAxis-DQVoLVBJ.js";import"./CartesianAxis-BnpVD6GC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DRNSDCDv.js";import"./Legend-T9mJv6Dw.js";import"./useElementOffset-CKja-FAu.js";import"./iteratee-BK7KGKiG.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
