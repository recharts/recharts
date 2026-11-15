import{u as n,j as e}from"./index-BUIEkRbv.js";import{M as o,C as h}from"./blocks-Y-LfmC1o.js";import{C as d,W as s}from"./dimensions.stories-CDvOWt_J.js";import"./iframe-Bs2Fwquo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./index-Czszie77.js";import"./ChartSizeDimensions-CQh755S_.js";import"./zIndexSlice-zNxU83Rq.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./throttle-CeO6b2ZD.js";import"./ComposedChart-BYL_ipm0.js";import"./RechartsWrapper-H7J0pkbh.js";import"./axisSelectors-DqQ1JIAI.js";import"./polarAxisSelectors-C5Qopf47.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjk-fTH.js";import"./index-KgWNcN6T.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./Page-Cj8EiXz7.js";import"./Line-BDg9dyPy.js";import"./Layer-DSICE4z4.js";import"./Curve-FXEPgScl.js";import"./types-BK-Q7FAz.js";import"./step-B-SD4ABD.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BK9Z9etj.js";import"./Label-DziYhFsK.js";import"./Text-ggKHnocX.js";import"./ZIndexLayer-C_DcULPk.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./activeStyles-B-3paNFW.js";import"./useAnimationId-6uZicVw9.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./ErrorBarContext-DQsjNYcx.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./ActiveShapeUtils-B_relbt6.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./XAxis-Da7a1LVz.js";import"./CartesianAxis-DRyjDMvy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BIq5zgoj.js";import"./Legend-BdAsxtxW.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};
