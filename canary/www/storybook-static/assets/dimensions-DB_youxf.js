import{j as e}from"./jsx-runtime-DgsInMeQ.js";import{useMDXComponents as n}from"./index-hZJzoIsj.js";import{M as o,C as h}from"./blocks-DiY-4EEn.js";import{C as d,W as s}from"./dimensions.stories-D8q_WadW.js";import"./iframe-D0SJPJ1y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./arrayEqualityCheck-CYS0izrw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CGWtCm1x.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./Line-BC_Nvy_p.js";import"./Layer-Dax6EhgB.js";import"./ReactUtils-a6BVn4Bt.js";import"./Label-Cf3oENl6.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./ZIndexLayer-DYNk2l8y.js";import"./ActivePoints-DG08NKKZ.js";import"./Dot-B2ZduEOn.js";import"./types-Cyc_Gww5.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./useAnimationId-wUwzbzyQ.js";import"./getRadiusAndStrokeWidthFromDot-DToYTxGi.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./Curve-Cx3Ohe6s.js";import"./XAxis-CwSSbwpc.js";import"./CartesianAxis-D59EO1CG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DF4qEhbE.js";import"./Legend-JnfTeQE1.js";import"./useElementOffset-DSoHOOe_.js";import"./uniqBy-BaRtkJAL.js";import"./iteratee-ssKXkiea.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
