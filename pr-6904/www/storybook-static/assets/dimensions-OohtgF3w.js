import{j as e}from"./jsx-runtime-BUr2w4GQ.js";import{useMDXComponents as n}from"./index-DsTA8bmR.js";import{M as h,C as o}from"./blocks-BXfQXHod.js";import{C as d,W as s}from"./dimensions.stories-etFzF-Zh.js";import"./iframe-BLLNbNku.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./arrayEqualityCheck-Co8h5dnX.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./PolarUtils-DXjI68e5.js";import"./ComposedChart-BPKhM1pc.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./Line-D2kmSwWp.js";import"./Layer-BCxNAEKV.js";import"./ReactUtils-DqoF2LGV.js";import"./Label-BoL4zXeM.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./ZIndexLayer-rdL7qpG4.js";import"./ActivePoints--yuiW4Rq.js";import"./Dot-CQehOVCl.js";import"./types-C2V5y-Kb.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./ErrorBarContext-HC4TQGzt.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./useAnimationId-Brx318jV.js";import"./getRadiusAndStrokeWidthFromDot-Duh5yQ_0.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./Symbols-Uq5NG2Xk.js";import"./Curve-k7SSPeeE.js";import"./XAxis-raVyKb45.js";import"./CartesianAxis-ol8Jf5am.js";import"./YAxis-DzinWbKB.js";import"./Legend-BkqJY-UH.js";import"./useElementOffset-DjqKUW3F.js";import"./iteratee-Cva4A5KP.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};
