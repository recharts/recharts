import{j as e}from"./jsx-runtime-BuN1Np2I.js";import{useMDXComponents as n}from"./index-BnWhjXWG.js";import{M as o,C as h}from"./blocks-CoWZKhW2.js";import{C as d,W as s}from"./dimensions.stories-xdbNtb5Y.js";import"./iframe-BH41_KsK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dm7aDTFq.js";import"./ChartSizeDimensions-DM4vIE32.js";import"./arrayEqualityCheck-CGbsBh9H.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C5jg0EzG.js";import"./immer-ZwRip_iH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ClapdULO.js";import"./RechartsWrapper-B5rnF5yF.js";import"./index-Bz_RkPth.js";import"./hooks-DSeH88Zv.js";import"./axisSelectors-C71PNMoj.js";import"./d3-scale-DNp6AOXD.js";import"./zIndexSlice-Dbf9wnDO.js";import"./renderedTicksSlice-3bqcLC8e.js";import"./CartesianChart-DMgQ1LDd.js";import"./chartDataContext-DMreHK63.js";import"./CategoricalChart-Cd1ApljN.js";import"./Page-Cj8EiXz7.js";import"./Line-C-svjPgG.js";import"./Layer-C2G5KafR.js";import"./ReactUtils-DkBJREDm.js";import"./Label-CXdyAx7z.js";import"./Text-DDTyrmBt.js";import"./DOMUtils-BSZC47d4.js";import"./ZIndexLayer-CP6TEiwa.js";import"./ActivePoints-C4m1trAF.js";import"./Dot-_SaUOdRl.js";import"./types-BL4s3hIy.js";import"./RegisterGraphicalItemId-r9QXM6NT.js";import"./ErrorBarContext-zSTRxri5.js";import"./GraphicalItemClipPath-Bh82AnDN.js";import"./SetGraphicalItem-DdDIdBuP.js";import"./useAnimationId-BwPLyDxM.js";import"./getRadiusAndStrokeWidthFromDot-av-B5cKk.js";import"./ActiveShapeUtils-mHpAd-Np.js";import"./isPlainObject-BU-7yv7P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B9TxAhtg.js";import"./Trapezoid-uwg0MM0K.js";import"./Sector-CWlkVSPf.js";import"./Symbols-DfJpNQwy.js";import"./symbol-aaNUhI62.js";import"./step-DW6seU4F.js";import"./Curve-CO9gbDjZ.js";import"./XAxis-CohOmQtN.js";import"./CartesianAxis-DLqmQhKV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-qj5w2hU5.js";import"./Legend-DmBcfzVs.js";import"./useElementOffset-Cuf0LXOB.js";import"./uniqBy-6xFv1rvL.js";import"./iteratee-Y_N2yMWH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
