import{u as n,j as e}from"./index-lqhywEPL.js";import{M as o,C as h}from"./blocks-BadAXU5P.js";import{C as d,W as s}from"./dimensions.stories-LWV2_gE5.js";import"./iframe-B-JmM6UU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnGOySnb.js";import"./index-BOPh7oG5.js";import"./index-B935EuoS.js";import"./ChartSizeDimensions-DdthUHb2.js";import"./zIndexSlice-C8zA9EPG.js";import"./throttle-8T2wZGvQ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DLWiqyxh.js";import"./isWellBehavedNumber-DQDu_bHq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CCFLDqwG.js";import"./RechartsWrapper-DfO4pEP4.js";import"./axisSelectors-BOzuD9HL.js";import"./d3-scale-YxBV3HYG.js";import"./index-BvO0zfg2.js";import"./renderedTicksSlice-BZnDG7lD.js";import"./index-D52JV6b6.js";import"./CartesianChart-B7NRlPSh.js";import"./chartDataContext-G_QhrL7C.js";import"./CategoricalChart-B_Dp9jOQ.js";import"./Page-Cj8EiXz7.js";import"./Line-APLpaCe9.js";import"./Layer-05QvI-9e.js";import"./Curve-D2NNcFkX.js";import"./types-cRgwCxfH.js";import"./step-DnNP7AgI.js";import"./path-DyVhHtw_.js";import"./activeStyles-DovphoLv.js";import"./Label-Cf51nyga.js";import"./Text-DlcURdmF.js";import"./pageBackground-ox3rMkA1.js";import"./useId-D9iNydjp.js";import"./useBackwardsCompatibleTheme-VmJV6TRL.js";import"./ZIndexLayer-DqLhyd5r.js";import"./dataEntryStyles-BZpY2uoY.js";import"./useAnimationId-Bhe9ODDX.js";import"./ActivePoints-DJ1-E8SN.js";import"./Dot-9xtzkZIA.js";import"./RegisterGraphicalItemId-DykgIfL1.js";import"./ErrorBarContext-CpFTBBZZ.js";import"./GraphicalItemClipPath-BVkYhuPi.js";import"./SetGraphicalItem-CDXb3rWS.js";import"./getRadiusAndStrokeWidthFromDot-DF_TJdmj.js";import"./ActiveShapeUtils-Lf70CQL3.js";import"./useEffectiveDataKey-BDAANayS.js";import"./XAxis-C4JtUciF.js";import"./CartesianAxis-CM5ea8KA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-y-7tLGKF.js";import"./Legend-9Q_MpkC_.js";import"./Symbols-CpFUVsBd.js";import"./symbol-D-KM-vyQ.js";import"./useElementOffset-7NR9MJAY.js";import"./uniqBy-BsjnheNl.js";import"./iteratee-B6OwKtMw.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function Ce(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{Ce as default};
