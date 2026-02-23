import{j as e}from"./jsx-runtime-DG2NHuRm.js";import{useMDXComponents as n}from"./index-BQyhtJY4.js";import{M as o,C as h}from"./blocks-Dv8wZEYI.js";import{C as d,W as s}from"./dimensions.stories-CpV3P-sw.js";import"./iframe-DDI_DJJN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iQmKaGYo.js";import"./ChartSizeDimensions-BQ24u2Cw.js";import"./arrayEqualityCheck-hZTzDH-w.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLbNKqYx.js";import"./immer-Brsuo9bJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CSHbYHX_.js";import"./RechartsWrapper-DMJyf-Ro.js";import"./index-Cy1m0pGF.js";import"./hooks-wL8R-wOE.js";import"./axisSelectors-ChmA7UB1.js";import"./d3-scale-C1aLw3GY.js";import"./zIndexSlice-DxTiX0Vg.js";import"./renderedTicksSlice-CdTaSuMU.js";import"./CartesianChart-0fUn6gYr.js";import"./chartDataContext-D_5cMEe0.js";import"./CategoricalChart-lTFMLhnQ.js";import"./Line-30ftzad6.js";import"./Layer-CIeq28iC.js";import"./ReactUtils-BsJAl1au.js";import"./Label-CGfHxLGm.js";import"./Text-lRH21Xfn.js";import"./DOMUtils-CSAlYQMj.js";import"./ZIndexLayer-NEFv0ypW.js";import"./ActivePoints-0YQSYC1d.js";import"./Dot-CPC0L5kt.js";import"./types-3HOHeyG7.js";import"./RegisterGraphicalItemId-CcKibD6X.js";import"./ErrorBarContext-CWlsK-qh.js";import"./GraphicalItemClipPath-BeQVZHHf.js";import"./SetGraphicalItem-D9woa3Pp.js";import"./useAnimationId-CexGYFUY.js";import"./getRadiusAndStrokeWidthFromDot-BkaUjW92.js";import"./ActiveShapeUtils-TXeo_kM0.js";import"./isPlainObject-DQmMsT9g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYHIra0M.js";import"./Trapezoid-CCG-1NIc.js";import"./Sector-BD9d8CEy.js";import"./Symbols-Cb1Mvpcy.js";import"./symbol-BbtwQcdi.js";import"./step-8724oeyl.js";import"./Curve-CV9593Ht.js";import"./XAxis-CyGjCDT7.js";import"./CartesianAxis-FKnuWFmP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-8PQWMae8.js";import"./Legend-cPk-W-Qb.js";import"./useElementOffset-NLLhNf0a.js";import"./uniqBy-B1FZNgBB.js";import"./iteratee-KngSqfTZ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
