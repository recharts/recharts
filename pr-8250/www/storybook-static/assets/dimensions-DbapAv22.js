import{u as n,j as e}from"./index-DE80hClB.js";import{M as o,C as h}from"./blocks-B4aoYoAg.js";import{C as d,W as s}from"./dimensions.stories-Gv7OtHeY.js";import"./iframe-DU9JCgt3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./index-CiCV4MQd.js";import"./ChartSizeDimensions-Da5iB4rG.js";import"./zIndexSlice-CxGcNVtb.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./throttle-BSvWgvBy.js";import"./ComposedChart-CdeuUBYe.js";import"./RechartsWrapper-EGU-JwYV.js";import"./axisSelectors-Ba1wHviL.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D71t0tOP.js";import"./index-BABuRh0J.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./Page-Cj8EiXz7.js";import"./Line--t4nfpf_.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Layer-8TmRCycn.js";import"./Curve-CiFPjJzw.js";import"./types-BRIT5d70.js";import"./step-CSLjLb0b.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BKp-1fzi.js";import"./Label-TtbmFLuu.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./activeStyles-DjdKzu9Y.js";import"./useAnimationId-CMFzH8KV.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./XAxis-aQms9ffh.js";import"./CartesianAxis-CbM1zHQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BhPAk-qT.js";import"./Legend-B5xGGAYm.js";import"./useElementOffset-n2MkMml8.js";import"./uniqBy-y429opov.js";import"./iteratee-Hdf7I3vo.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
