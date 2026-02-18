import{j as e}from"./jsx-runtime-3eyxaV2B.js";import{useMDXComponents as n}from"./index-CdcSyJP7.js";import{M as h,C as o}from"./blocks-HYAFDpVe.js";import{C as d,W as s}from"./dimensions.stories-Dcaflw8B.js";import"./iframe-DRECDyJu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./arrayEqualityCheck-CwmcLezE.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CFtzaxo-.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./Line-61OvPZ-Q.js";import"./Layer-BVdUfIl0.js";import"./ReactUtils--6xJa5xj.js";import"./Label-CYBLI-Y2.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./ZIndexLayer-DsAf8BK3.js";import"./ActivePoints-BT3fRugx.js";import"./Dot-B6Z1yhin.js";import"./types-BSPZHGNH.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./useAnimationId-DgWDlavz.js";import"./getRadiusAndStrokeWidthFromDot-Db6__9I1.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./Symbols-4bVcflIB.js";import"./Curve-BflKxEFk.js";import"./XAxis-0kgYDqpD.js";import"./CartesianAxis-BgGI7FTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DS55SlTE.js";import"./Legend-B1J7sLGS.js";import"./useElementOffset-Cf8ftoIX.js";import"./iteratee-BVIXGgQH.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function oe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{oe as default};
