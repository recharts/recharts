import{u as n,j as e}from"./index-uq5OHjgv.js";import{M as o,C as h}from"./blocks-Dk9nLr3D.js";import{C as d,W as s}from"./dimensions.stories-DSZDbzTz.js";import"./iframe-Bc8uafj_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./index-Dhuj-LWB.js";import"./ChartSizeDimensions-D4GydvOX.js";import"./zIndexSlice-DgIKKnku.js";import"./immer-DhRCiF9y.js";import"./get-CoQ1aHe8.js";import"./resolveDefaultProps-D94aQw_7.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BaFcNv6t.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./renderedTicksSlice-CDLhDidm.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./Page-Cj8EiXz7.js";import"./Line-C5bCj1pP.js";import"./Layer-BOwFFWNG.js";import"./Curve-DiuauwRl.js";import"./types-unK8WfaH.js";import"./step-B3z5Hoe6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CDgcpQiE.js";import"./Label-3HS03WWg.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./ZIndexLayer-BEkWbSjN.js";import"./useAnimationId-CUqgRxQq.js";import"./ActivePoints-Byxcert_.js";import"./Dot-Ch1zQlh_.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./ErrorBarContext-BEm0gOJL.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getRadiusAndStrokeWidthFromDot-DFKmST2Y.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./XAxis-D3U7ZnRc.js";import"./CartesianAxis-DjGZfAuA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-TQ1T3gnX.js";import"./Legend-BXU6Biuu.js";import"./Symbols-CDHLQFdp.js";import"./symbol-DMI8nJp8.js";import"./useElementOffset-IpZ5186H.js";import"./uniqBy-B_P63sZB.js";import"./iteratee-NS3BASsA.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
