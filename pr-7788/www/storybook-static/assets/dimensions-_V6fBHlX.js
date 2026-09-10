import{u as n,j as e}from"./index-CEAZ9kmg.js";import{M as o,C as h}from"./blocks-Bwd18d3b.js";import{C as d,W as s}from"./dimensions.stories-BwQE61BV.js";import"./iframe-CCc4Ig9t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./index-BMcDiNhW.js";import"./ChartSizeDimensions-cpfLoX9e.js";import"./zIndexSlice-1P0wH6mw.js";import"./throttle-BYOhzTjU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dz5UNdl9.js";import"./RechartsWrapper-Cz1O2LQ_.js";import"./axisSelectors-DPq5qkhW.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./Page-Cj8EiXz7.js";import"./Line-CXz5YjBC.js";import"./Layer-CI2wc1Xr.js";import"./Curve-BvVtw5_4.js";import"./types-DJtqKg77.js";import"./step-CwrGAB68.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca5Obh5D.js";import"./Label-DTpe6J5w.js";import"./Text-Cj4kK8yu.js";import"./DOMUtils-Df_Ucl3X.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./useAnimationId-ClzD5z7x.js";import"./ActivePoints-DjcQylVy.js";import"./Dot-ATZOOaE7.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getRadiusAndStrokeWidthFromDot-Ce6GbVl8.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";import"./XAxis-B7UFXjXO.js";import"./CartesianAxis-Bp_xQTZ6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BglDyQ9K.js";import"./Legend-C4s_iYBR.js";import"./Symbols-CbvdSNpg.js";import"./symbol-B3VhryUs.js";import"./useElementOffset--AK27c3n.js";import"./uniqBy-D8aeMkbi.js";import"./iteratee-BQkyZMdx.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};
