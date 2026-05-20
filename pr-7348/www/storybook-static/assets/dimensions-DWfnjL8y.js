import{j as e}from"./jsx-runtime-BmQln70K.js";import{useMDXComponents as n}from"./index-yJzP-914.js";import{M as o,C as h}from"./blocks-BIhp2aJz.js";import{C as d,W as s}from"./dimensions.stories-D0yYLHlp.js";import"./iframe-Cpa_K2wH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./arrayEqualityCheck-B3CGbERi.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./immer-DMfm46iJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Gg-TcJTy.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./Page-DPte-9pC.js";import"./Line-Dn6n2q0g.js";import"./Layer-C28Vj2nU.js";import"./ReactUtils-BowWIwT6.js";import"./Label-9gVLBIOF.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./ZIndexLayer-CVL2PXNl.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./types-BYysGBoP.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./ErrorBarContext-BJDGu-MY.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./useAnimationId-BXAU-yXd.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./ActiveShapeUtils-DZgn0W6W.js";import"./isPlainObject-Cv9egWS8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_TjkgDNn.js";import"./Trapezoid-MfEacaGn.js";import"./Sector-CErlt9yR.js";import"./Symbols-Bzs7g2p8.js";import"./symbol-DqufiAtJ.js";import"./step-csQH98gw.js";import"./Curve-rXHg5I_o.js";import"./XAxis-BzN0sbb6.js";import"./CartesianAxis-BYutAp1h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D01H3xLK.js";import"./Legend-BfSU8Aqx.js";import"./useElementOffset-CxLjeYJj.js";import"./uniqBy-BwhAZYz-.js";import"./iteratee-DoCUAkfC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
