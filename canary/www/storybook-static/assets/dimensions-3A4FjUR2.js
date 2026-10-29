import{u as n,j as e}from"./index-cR4KOeKy.js";import{M as o,C as h}from"./blocks-DGnH2WkK.js";import{C as d,W as s}from"./dimensions.stories-DD1O3J57.js";import"./iframe-DlbVoy8b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./index-D-eNMO6C.js";import"./ChartSizeDimensions-DNnP3AEx.js";import"./zIndexSlice-DIPR8J8Q.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXzjMp61.js";import"./throttle-DlhUrerR.js";import"./ComposedChart-kpOOzPnf.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./axisSelectors-C1oz2VfT.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wuSABge9.js";import"./index-CPt_GVUx.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./Page-Cj8EiXz7.js";import"./Line-BDb9qYvA.js";import"./Layer-Cgk1UHKb.js";import"./Curve-CwM7Cya8.js";import"./types-wgD9JhdB.js";import"./step-D9Q180Zj.js";import"./path-DyVhHtw_.js";import"./LabelList-DZdmLQwZ.js";import"./Label-Db_JATF8.js";import"./Text-D-UClZ_j.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./ActivePoints-nWjJ13Ya.js";import"./Dot-C73t_xwp.js";import"./activeStyles-68fYVlFc.js";import"./useAnimationId-69ly1h0S.js";import"./dataEntryStyles-CWf0jd4a.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./ErrorBarContext-DTMhIhTa.js";import"./SetGraphicalItem--R52djyG.js";import"./getRadiusAndStrokeWidthFromDot-BM1c-Ckc.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./XAxis-S-cm4cjH.js";import"./CartesianAxis-xtm5bwXL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BhrY96Pd.js";import"./Legend-CmCZgCji.js";import"./useElementOffset-BikB_Nzb.js";import"./uniqBy-dmJ8LW9D.js";import"./iteratee-ZueROYHY.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
