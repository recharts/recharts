import{u as n,j as e}from"./index-DjC4y3L6.js";import{M as o,C as h}from"./blocks-BTIFgCcc.js";import{C as d,W as s}from"./dimensions.stories-DHhtGZDJ.js";import"./iframe-Bcbj5Yvj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./index-Dr8QNULI.js";import"./ChartSizeDimensions-X7_HkaaU.js";import"./zIndexSlice-BbtTmnct.js";import"./throttle-1wXsTVJX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C9cavZl8.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DVpq_Un2.js";import"./RechartsWrapper-JEGbB27w.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./Page-Cj8EiXz7.js";import"./Line-Ba2WmDpW.js";import"./Layer-DpGUUMWf.js";import"./Curve-DQG70g8F.js";import"./types-CJ1XacmQ.js";import"./step-BVuNFWjf.js";import"./path-DyVhHtw_.js";import"./activeStyles-MDW24FXq.js";import"./Label-K9FSTyve.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./ZIndexLayer-CyylKyYl.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./XAxis-BGoibDnX.js";import"./CartesianAxis-D8X_N5Aa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D0HGn8m-.js";import"./Legend-CZS9R5nb.js";import"./Symbols-Dv0jAL1Q.js";import"./symbol-Cs2ouPLI.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
