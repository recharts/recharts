import{u as n,j as e}from"./index-CCvBPwLv.js";import{M as o,C as h}from"./blocks-DloQyzdY.js";import{C as d,W as s}from"./dimensions.stories-C4sWDJw7.js";import"./iframe-Dpvc5Yjz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./index-BGJHRM8B.js";import"./ChartSizeDimensions-DlVyS8zT.js";import"./zIndexSlice-Dho3i8T5.js";import"./throttle-ChqzHVQ0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B3mWCRuK.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./axisSelectors-B0MCU6bk.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./Page-Cj8EiXz7.js";import"./Line-D72OFrJ_.js";import"./Layer-DB4rVtgq.js";import"./Curve-D8gKKjbw.js";import"./types-PTwxeL9Y.js";import"./step-CbGZbdjm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dqknvwue.js";import"./Label-DIzmtP1_.js";import"./Text-DV8ChouY.js";import"./DOMUtils-B1JUaPdm.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./ZIndexLayer-BroloYIp.js";import"./useAnimationId-8x9555ZS.js";import"./ActivePoints-_iSEV7nC.js";import"./Dot-BbHheHK4.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./ErrorBarContext-DgnCQmwB.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./getRadiusAndStrokeWidthFromDot-BNtk_UOf.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";import"./XAxis-DH81C7oh.js";import"./CartesianAxis-6_XALvtr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CRJBTUK4.js";import"./Legend-T_pItw78.js";import"./Symbols-BEaJ5bek.js";import"./symbol-CoOSEH1J.js";import"./useElementOffset-DFxcHkws.js";import"./uniqBy-DPOJBwGI.js";import"./iteratee-BEgn-_6q.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
