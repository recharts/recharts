import{u as n,j as e}from"./index-BxKJknhE.js";import{M as o,C as h}from"./blocks-9wnTwr8Z.js";import{C as d,W as s}from"./dimensions.stories-CHFt7-pI.js";import"./iframe-Csitbru2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./index-3rUoeV7Y.js";import"./ChartSizeDimensions-DEOzwLlb.js";import"./zIndexSlice-BG9qkId4.js";import"./immer-DZIxrqNF.js";import"./get-DUq6txa7.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BUYN4Cux.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./renderedTicksSlice-DArjmdb9.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./Page-Cj8EiXz7.js";import"./Line-Dlr3zu4o.js";import"./Layer-CzMJ0aPe.js";import"./Curve-B3wzhPX7.js";import"./types-CUGjGCsQ.js";import"./step-Cvs1IljU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-nKsPTqFW.js";import"./Label-ipIcHgJV.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./ZIndexLayer-BXMbhl4p.js";import"./useAnimationId-co5Blost.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./XAxis-GSkuRjug.js";import"./CartesianAxis-625Se9fv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-77x_J4Mg.js";import"./Legend-1-fEOdlM.js";import"./Symbols-DTyRS-9_.js";import"./symbol-6fV8HDNc.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};
