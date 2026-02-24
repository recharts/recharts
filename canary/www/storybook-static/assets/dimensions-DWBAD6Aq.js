import{j as e}from"./jsx-runtime-CBjQ3zIm.js";import{useMDXComponents as n}from"./index-B2YCt5qC.js";import{M as o,C as h}from"./blocks-DLYWpkmJ.js";import{C as d,W as s}from"./dimensions.stories-DGjACvfo.js";import"./iframe-KW6q1dC8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./arrayEqualityCheck-CsL9oElz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./immer-DJQrWxfT.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart--6sNek95.js";import"./RechartsWrapper-B3hZLvHH.js";import"./index-IRfq0wV0.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./Line-pTub0X7V.js";import"./Layer-6RQ8uR29.js";import"./ReactUtils-_GmE1-On.js";import"./Label-Bmj0n5iK.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./ActivePoints-BZL4jV5j.js";import"./Dot-BDQ-YubX.js";import"./types-Dwy1lCB-.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./ErrorBarContext-DmVYT152.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./useAnimationId-D6KMdx62.js";import"./getRadiusAndStrokeWidthFromDot-Csfskhtu.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./step-B042Wr1e.js";import"./Curve-DF4GvF_O.js";import"./XAxis-CfKcv1L2.js";import"./CartesianAxis-CKh1nWaH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BTdozUYh.js";import"./Legend-Myjf-Y49.js";import"./useElementOffset-BZSwjmr-.js";import"./uniqBy-ZYepOa3_.js";import"./iteratee-C-vE-01O.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
