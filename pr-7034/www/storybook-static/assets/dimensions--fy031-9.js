import{j as e}from"./jsx-runtime-COm2fJr8.js";import{useMDXComponents as n}from"./index-DBg85-IU.js";import{M as o,C as h}from"./blocks-DKT2c1L4.js";import{C as d,W as s}from"./dimensions.stories-D0TtRTxE.js";import"./iframe-DAZKVxz9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./arrayEqualityCheck-dPOQS8pO.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DTJu-yAB.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./Line-CV7E2c22.js";import"./Layer-B5mQaLs_.js";import"./ReactUtils-CccuW9N4.js";import"./Label-DNW4k13o.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./ZIndexLayer-CksZ3gAG.js";import"./ActivePoints-bxmGK7jd.js";import"./Dot-CM5RhIFl.js";import"./types-4_oq0AJp.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./ErrorBarContext-baTIc42o.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./useAnimationId-Bfut_0eb.js";import"./getRadiusAndStrokeWidthFromDot-D5fiNOfX.js";import"./ActiveShapeUtils-CSU1QkFK.js";import"./isPlainObject-BF_n072g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-nMN8f2_i.js";import"./Trapezoid-DUbCLHLc.js";import"./Sector-DBc0T8Rp.js";import"./Symbols-D-cPayMS.js";import"./symbol-BHK6xqri.js";import"./step-DOJR22o0.js";import"./Curve-ZE8xv1Ny.js";import"./XAxis-DrBlWbCQ.js";import"./CartesianAxis-B8h3nSA3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BKsd-W4f.js";import"./Legend-BPG9fpN3.js";import"./useElementOffset-DSukcBOs.js";import"./uniqBy-Djo4Qg9a.js";import"./iteratee-BMo5X6Qr.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
