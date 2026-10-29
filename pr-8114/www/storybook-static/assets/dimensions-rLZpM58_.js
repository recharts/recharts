import{u as n,j as e}from"./index-GT8cYr7P.js";import{M as o,C as h}from"./blocks-DKZLYkzW.js";import{C as d,W as s}from"./dimensions.stories-bqohJKqK.js";import"./iframe-CCedNpIL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-a9wrUunR.js";import"./index-B1OaBK8_.js";import"./index-CL5Xa_TG.js";import"./ChartSizeDimensions-DLvzxELq.js";import"./zIndexSlice-FaVG8kHH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BU47eI4H.js";import"./throttle-Br1C3UWP.js";import"./ComposedChart-CuixBgtF.js";import"./RechartsWrapper-B3okQ-B8.js";import"./axisSelectors-BoL5XRtd.js";import"./polarAxisSelectors-Bk6LJwmt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-EyFZEVUo.js";import"./index-DKQhzlop.js";import"./renderedTicksSlice-BWK-8Wbg.js";import"./index-D4SSZ3m3.js";import"./CartesianChart-CaGoIdwh.js";import"./ZIndexPortal-Bmj6fCDQ.js";import"./CategoricalChart-C8fCaDAg.js";import"./Page-Cj8EiXz7.js";import"./Line-Nm4xoA8b.js";import"./Layer-Cr1LK46x.js";import"./Curve-CPRSU3Na.js";import"./types-D0KlXew0.js";import"./step-BxzXSqS7.js";import"./path-DyVhHtw_.js";import"./LabelList-cRyR8A9p.js";import"./Label-CBEI3-wb.js";import"./Text-B0ZPk73p.js";import"./pageBackground-pCtx7B-s.js";import"./ZIndexLayer-BPlzci0x.js";import"./ActivePoints-xoEQqRpP.js";import"./Dot-Dkc7CiNw.js";import"./activeStyles-DICcYqor.js";import"./useAnimationId-CcrjU78K.js";import"./dataEntryStyles-B3jzja7w.js";import"./Symbols-B_HwlHbC.js";import"./symbol-CpsCxClc.js";import"./ErrorBarContext-BMxzBjzC.js";import"./SetGraphicalItem-CeKorW8q.js";import"./getRadiusAndStrokeWidthFromDot-B1LY2Lwz.js";import"./ActiveShapeUtils-DzHDFOYU.js";import"./useEffectiveDataKey-Lst-3VK9.js";import"./XAxis-BXe8rtVd.js";import"./CartesianAxis-CVTWbWdI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-C1dIb0Dq.js";import"./Legend-Wj7J5Rcv.js";import"./useElementOffset-Byj33S_L.js";import"./uniqBy-BqJ8xbG-.js";import"./iteratee-gXYAUoI2.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
