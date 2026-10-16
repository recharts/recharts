import{u as n,j as e}from"./index-DVkIwgKW.js";import{M as o,C as h}from"./blocks-Ol4l3qaj.js";import{C as d,W as s}from"./dimensions.stories-BaXaDB6Q.js";import"./iframe-XShEXmHR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./index-C8Ku-gFK.js";import"./ChartSizeDimensions-W3_0zAiF.js";import"./zIndexSlice-BbKyzabk.js";import"./throttle-DGpDaXVx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DM0s23ft.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Buz-P00K.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./axisSelectors-CSJ2InJO.js";import"./d3-scale-DlV_OlJQ.js";import"./index-B0AN-0kz.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-CNWPVzDl.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./Page-Cj8EiXz7.js";import"./Line-BHkg6SFm.js";import"./Layer-C_-u4_qv.js";import"./Curve-BLSppaDw.js";import"./types-Du-HQFzW.js";import"./step-DYrGddVY.js";import"./path-DyVhHtw_.js";import"./activeStyles-JUu5k5N9.js";import"./Label-PHQocy7u.js";import"./Text-DdUz3atv.js";import"./pageBackground-Caz1wwpV.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./ZIndexLayer-BjS9bgAg.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./ActivePoints-BWEWclRb.js";import"./Dot-CF6MExt8.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getRadiusAndStrokeWidthFromDot-B8bE17TU.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./useEffectiveDataKey-Ca_DBmdg.js";import"./XAxis-DWLQMeD5.js";import"./CartesianAxis-DXjpiMVV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CC_fCC6K.js";import"./Legend-81x18Ee1.js";import"./Symbols-CEnD6S3J.js";import"./symbol-BPoRGGbG.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
