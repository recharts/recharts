import{u as n,j as e}from"./index-DDtbdGw-.js";import{M as o,C as h}from"./blocks-BYRO68AB.js";import{C as d,W as s}from"./dimensions.stories-CJCoALlR.js";import"./iframe-Bqhaiwq8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./index-DxkzSUWz.js";import"./ChartSizeDimensions-COclsgHY.js";import"./zIndexSlice-BJS-a__d.js";import"./throttle-C_LSyirk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-oTFXmOZl.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./Page-Cj8EiXz7.js";import"./Line-Bp-E22-P.js";import"./Layer-Co0F7rtj.js";import"./Curve-DUDGkuFv.js";import"./types-OmV-cVYy.js";import"./step-Yi3ifzmX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZUM4uHMT.js";import"./Label-D7swILSN.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./useAnimationId-D0jk17bx.js";import"./ActivePoints-DZkQMisB.js";import"./Dot-BTqZFgU3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getRadiusAndStrokeWidthFromDot-BRzjy3Uy.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./XAxis-Du5noYHq.js";import"./CartesianAxis-217VZgzf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BtCExx2a.js";import"./Legend-CXGIZ9cu.js";import"./Symbols-BCm7UEXQ.js";import"./symbol-DfC1e8FG.js";import"./useElementOffset-CmWzJYxc.js";import"./uniqBy-yoTZI67c.js";import"./iteratee-CsXi7xCb.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
