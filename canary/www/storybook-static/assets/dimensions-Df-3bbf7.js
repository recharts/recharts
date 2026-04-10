import{j as e}from"./jsx-runtime-BPXK3s0g.js";import{useMDXComponents as n}from"./index-B3E7Io-v.js";import{M as o,C as h}from"./blocks-BVJbsBOA.js";import{C as d,W as s}from"./dimensions.stories-DIpArK0t.js";import"./iframe-DOn8u-oa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./arrayEqualityCheck-DYxn46f5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./immer-Bn8Wu2FH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-t7zVwPF-.js";import"./RechartsWrapper-Beeq_QLd.js";import"./index-TviLRVzQ.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./zIndexSlice-B2AKnG3y.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./Page-Cj8EiXz7.js";import"./Line-Cuvi7l-9.js";import"./Layer-05H6paB_.js";import"./ReactUtils-PhcFEJ80.js";import"./Label-BcScPf1_.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./ZIndexLayer-y8FotD-G.js";import"./ActivePoints-COmAN0pa.js";import"./Dot-CRgfPISn.js";import"./types-CESDZ_aX.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./ErrorBarContext-CXzlZi78.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./useAnimationId-DEVWAil3.js";import"./getRadiusAndStrokeWidthFromDot-Ep1HaBq8.js";import"./ActiveShapeUtils-heWrq4Qu.js";import"./isPlainObject-c8PgY5v_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DPJuAdjj.js";import"./Trapezoid-Bqkv6n3S.js";import"./Sector-BDm--b9P.js";import"./Symbols-nNNN-42G.js";import"./symbol-DVcflbh7.js";import"./step-Cq5Zx23d.js";import"./Curve-woVlpOcO.js";import"./XAxis-CWQtfYm8.js";import"./CartesianAxis-BlpnuS68.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B0Wqs0qU.js";import"./Legend-qa7kbH3a.js";import"./useElementOffset-dL6NMTXG.js";import"./uniqBy-7x81275m.js";import"./iteratee-4veUQO7B.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
