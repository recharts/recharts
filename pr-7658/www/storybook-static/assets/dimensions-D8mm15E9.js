import{u as n,j as e}from"./index-B05SWcmK.js";import{M as o,C as h}from"./blocks-7mlVL7E8.js";import{C as d,W as s}from"./dimensions.stories-DWtSsnox.js";import"./iframe-BEU0VEzj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./index-urNlcYtz.js";import"./ChartSizeDimensions-lJ99QV3a.js";import"./zIndexSlice-mhTpFGis.js";import"./throttle-BnTbmX16.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3wYQv28v.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-NpRQQbTs.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./axisSelectors-X6Iztzs2.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./Page-Cj8EiXz7.js";import"./Line-DzyLu5qi.js";import"./Layer-BxzS3V_h.js";import"./Curve-DRodi9QH.js";import"./types-BcpteXUs.js";import"./step-B0HdwPOl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C1OsdHSy.js";import"./Label-ChFEzAZk.js";import"./Text-1VnO-5nk.js";import"./DOMUtils-B3nT0fft.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./useAnimationId-BpSAAbQy.js";import"./ActivePoints-DmPjn1vV.js";import"./Dot-BaUbFdJY.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./ErrorBarContext-OH4Zfmtr.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getRadiusAndStrokeWidthFromDot-U5qUSWt7.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DHuUhI2Z.js";import"./CartesianAxis-I3SN0dPC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bwob8VzU.js";import"./Legend-Bq1E_AiK.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
