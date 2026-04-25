import{j as e}from"./jsx-runtime-DKuaXz66.js";import{useMDXComponents as n}from"./index-DhPtmOuY.js";import{M as o,C as h}from"./blocks-CS9im9l0.js";import{C as d,W as s}from"./dimensions.stories-wDDUQOr1.js";import"./iframe-C-KAowuO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQFUVKnT.js";import"./ChartSizeDimensions-DTvYXLHc.js";import"./arrayEqualityCheck-yVLbm2Ok.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D05KRY5H.js";import"./immer-lrri1Ibi.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dd-r8GjN.js";import"./RechartsWrapper-DqKSuNH3.js";import"./index-KvyLAFD0.js";import"./hooks-DeKQ2gqZ.js";import"./axisSelectors-CE5Vd0Tc.js";import"./d3-scale-Bopu8Aci.js";import"./zIndexSlice-DrTp_sFl.js";import"./renderedTicksSlice-C1ShKB3N.js";import"./CartesianChart-nT9KcNTp.js";import"./chartDataContext-vxdgRKIh.js";import"./CategoricalChart-Ds0xAivg.js";import"./Page-Cj8EiXz7.js";import"./Line-G6dNKB2b.js";import"./Layer-BbNCaHIe.js";import"./ReactUtils-CCkd_fXV.js";import"./Label-D0CeoZx_.js";import"./Text-Bcc2ZqXe.js";import"./DOMUtils-Cs_o0Y2m.js";import"./ZIndexLayer-D6XED_N0.js";import"./ActivePoints-DwGdY9lY.js";import"./Dot-B1iig8sS.js";import"./types-B6CmVkmP.js";import"./RegisterGraphicalItemId-D73RknhP.js";import"./ErrorBarContext-DL4EJt22.js";import"./GraphicalItemClipPath-d-0sskKm.js";import"./SetGraphicalItem-DNbpLx8W.js";import"./useAnimationId-TM9zYSCO.js";import"./getRadiusAndStrokeWidthFromDot-D7K-VjZE.js";import"./ActiveShapeUtils-Do01q8yT.js";import"./isPlainObject-QngjBi63.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR805uQ0.js";import"./Trapezoid-Db73yEci.js";import"./Sector-WUHOr-1w.js";import"./Symbols-DUxwWGdL.js";import"./symbol-DJcsyqFg.js";import"./step-BtXew3Rl.js";import"./Curve-HzHLtdOZ.js";import"./XAxis-BdDoMKhj.js";import"./CartesianAxis-BZ3398ZK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-WXeKSUTD.js";import"./Legend-T14zhhqr.js";import"./useElementOffset-BnobsK-J.js";import"./uniqBy-CqIaJHYT.js";import"./iteratee-CaXP3rRs.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
