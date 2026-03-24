import{j as e}from"./jsx-runtime-CWVYJHQM.js";import{useMDXComponents as n}from"./index-B60N2Bi5.js";import{M as o,C as h}from"./blocks-DudSGPJY.js";import{C as d,W as s}from"./dimensions.stories-GSC8e9uW.js";import"./iframe-7k9yEKZX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKACCO4D.js";import"./ChartSizeDimensions-D1SSOw56.js";import"./arrayEqualityCheck-DyKOzX9B.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcSp36mS.js";import"./immer-CHH-Iajc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BPJ8rB-g.js";import"./RechartsWrapper-BvLvkhZj.js";import"./index-DvINa2Wr.js";import"./hooks-D25WTasM.js";import"./axisSelectors-aGv317tx.js";import"./d3-scale-BRwFQSv2.js";import"./zIndexSlice-CzkFlcL3.js";import"./renderedTicksSlice-B6_Lm1vJ.js";import"./CartesianChart-CbJvKkCN.js";import"./chartDataContext-B5LGZgkJ.js";import"./CategoricalChart-2PgGLAlf.js";import"./Line-8V_XcD0K.js";import"./Layer--w1IvBzA.js";import"./ReactUtils-lnChZv_I.js";import"./Label-CVjnPCaB.js";import"./Text-BUDAKONF.js";import"./DOMUtils-DJqsII1h.js";import"./ZIndexLayer-BBlmEaho.js";import"./ActivePoints-FBue9Ogp.js";import"./Dot-D1SVhtLk.js";import"./types-DqFJB-g8.js";import"./RegisterGraphicalItemId-B6g2rW0Q.js";import"./ErrorBarContext-YgH0UMwB.js";import"./GraphicalItemClipPath-wqgrdPJj.js";import"./SetGraphicalItem-DursPdMk.js";import"./useAnimationId-B6Q9Zk2l.js";import"./getRadiusAndStrokeWidthFromDot-eDGGwMEf.js";import"./ActiveShapeUtils-BIc0h3uD.js";import"./isPlainObject-C5PcijRi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSQfZW4V.js";import"./Trapezoid-DiILFpL9.js";import"./Sector-DIls0L6H.js";import"./Symbols-BCtTTPL2.js";import"./symbol-DLFZyuT9.js";import"./step-D_5WqJsr.js";import"./Curve-CJBWJgGH.js";import"./XAxis-BTCs_Vgw.js";import"./CartesianAxis-CWYl_TTU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-fzIEKsic.js";import"./Legend-Wk97ELn5.js";import"./useElementOffset-BoTQFi9G.js";import"./uniqBy-HmCa2I5b.js";import"./iteratee-CJSlBY9s.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
