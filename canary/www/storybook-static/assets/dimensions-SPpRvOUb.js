import{j as e}from"./jsx-runtime-PLW9HVXO.js";import{useMDXComponents as n}from"./index-DmOZeijR.js";import{M as o,C as h}from"./blocks-C_FyZ2Zj.js";import{C as d,W as s}from"./dimensions.stories-C8h9QP5J.js";import"./iframe-BUUPGxKW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ByfBPDju.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./arrayEqualityCheck-uAaGhnkl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./immer-kqZDXGZE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DSmYFUeE.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./hooks-BNCSk-QW.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./zIndexSlice-DsPDLjCa.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./CartesianChart-npq1asZ9.js";import"./chartDataContext-D2ei2EEV.js";import"./CategoricalChart-BjzN8N8f.js";import"./Line-CtLW08yR.js";import"./Layer-DlNKk7f2.js";import"./ReactUtils-BaDlyhyr.js";import"./Label-C0y-OKmx.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./ZIndexLayer-CiKkYojy.js";import"./ActivePoints-oTNshfX-.js";import"./Dot-3oFAy5A0.js";import"./types-DBwevUA7.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./useAnimationId-CMTrGaHR.js";import"./getRadiusAndStrokeWidthFromDot-CPj_WkC-.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-3zO8wV20.js";import"./Trapezoid-BV5ztp3S.js";import"./Sector-DdslfAV3.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./Curve-C5yOoaqn.js";import"./XAxis-DpsztnP2.js";import"./CartesianAxis-CFdsXoNd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B2sJZ_bt.js";import"./Legend-CgioBktz.js";import"./useElementOffset-DfNe91Mv.js";import"./uniqBy-RZOC8lwP.js";import"./iteratee-D8peaFHS.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
