import{j as e}from"./jsx-runtime-CWSJO-Rc.js";import{useMDXComponents as n}from"./index-De9LWY3D.js";import{M as h,C as o}from"./blocks-DEyjh5WS.js";import{C as d,W as s}from"./dimensions.stories-BRhD4-pu.js";import"./iframe-CsUpRRwn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./arrayEqualityCheck-Df4uzLw-.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./PolarUtils-B4KHlE6s.js";import"./ComposedChart-DOflCuOV.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./zIndexSlice-Cey6hWeC.js";import"./CartesianChart-k_KAObT0.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./Line-DYNNhevV.js";import"./Layer-DS1Wp5Ew.js";import"./ReactUtils-BcCnPuvu.js";import"./Label-B_KIKWwL.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./ZIndexLayer-VR9NNsxL.js";import"./ActivePoints-DQjt83jb.js";import"./Dot-z1jDOX5V.js";import"./types-B0LA1FfJ.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./ErrorBarContext-DPfvolDE.js";import"./GraphicalItemClipPath-CasRTjDB.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./useAnimationId-LktXmMrZ.js";import"./getRadiusAndStrokeWidthFromDot-nlMGx5GO.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./Trapezoid-BXYnhgSX.js";import"./Sector-B6CpJ8fc.js";import"./Symbols-DiPp8IeL.js";import"./Curve-qa4VelFY.js";import"./XAxis-DUx64kuA.js";import"./CartesianAxis-BncnjfCs.js";import"./YAxis-FNiiJ-AQ.js";import"./Legend-BQzNsk6O.js";import"./useElementOffset-nroK-080.js";import"./iteratee-DLO5uZfD.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
