import{u as n,j as e}from"./index-M0rOL-Sn.js";import{M as o,C as h}from"./blocks-CP6plKOc.js";import{C as d,W as s}from"./dimensions.stories-B4wDl3YX.js";import"./iframe-CKDPSKer.js";import"./preload-helper-Dp1pzeXC.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./index-YNG8abLs.js";import"./ChartSizeDimensions-JCaJCWab.js";import"./zIndexSlice-BPEXBnkz.js";import"./throttle-BxISGQ-D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BRk5rLm3.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./Page-Cj8EiXz7.js";import"./Line-CTXdPCxP.js";import"./Layer-B33l4zSF.js";import"./Curve-Blt-RSy4.js";import"./types-CtnAz4fT.js";import"./step-Bgemofkp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DQZ1vYlx.js";import"./Label-dc-yhDIk.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./useAnimationId-BJ5AGKlq.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";import"./XAxis-A_9Io6kM.js";import"./CartesianAxis-CjGSghd8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-aBoPLQiN.js";import"./Legend-Bov7jtG8.js";import"./Symbols-B54QlVgZ.js";import"./symbol-DL-3irLp.js";import"./useElementOffset-D8p3AvLo.js";import"./uniqBy-DYmmQrZx.js";import"./iteratee-DK5B7GVX.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
