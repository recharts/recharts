import{u as n,j as e}from"./index-BXweh6gH.js";import{M as o,C as h}from"./blocks-BkCKpC8H.js";import{C as d,W as s}from"./dimensions.stories-DpI7JlJA.js";import"./iframe-B2Q_Qgm0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./index-BmNUC2xp.js";import"./ChartSizeDimensions-DqH2ko-f.js";import"./zIndexSlice-lJSwut70.js";import"./throttle-Bfct0QsM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-k0KfFloC.js";import"./RechartsWrapper-B1GYxDJl.js";import"./axisSelectors-DGf_3ZFA.js";import"./d3-scale-E67z2Ey2.js";import"./index-t1Y9-LeO.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./Page-Cj8EiXz7.js";import"./Line-Bl5efQSj.js";import"./Layer-BV6rSg6M.js";import"./Curve-wGV3RYR_.js";import"./types-Ck2mmBqf.js";import"./step-BCJ1q1Uw.js";import"./path-DyVhHtw_.js";import"./activeStyles-C4EynwUE.js";import"./Label-BGi8ZrBi.js";import"./Text-0iD6BYPe.js";import"./pageBackground-ufzNbkAg.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./ZIndexLayer-BL2VuU0B.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./ActivePoints-BDe5iXRm.js";import"./Dot-CMzQjqPY.js";import"./ErrorBarContext-v_vPPXxo.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getRadiusAndStrokeWidthFromDot-CP7Jrqg5.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./useEffectiveDataKey-FHRr8rA1.js";import"./XAxis-BDkGAuXm.js";import"./CartesianAxis-C0j9EsZJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BJcew9Oa.js";import"./Legend-DrzyUALJ.js";import"./Symbols-D_rmjP_z.js";import"./symbol-Ce1xWGxl.js";import"./useElementOffset-D4WqGCX1.js";import"./uniqBy-CqxBekE-.js";import"./iteratee-CaP6vtc-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
